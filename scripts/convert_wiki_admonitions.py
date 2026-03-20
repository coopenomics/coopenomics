#!/usr/bin/env python3
"""Заменяет блоки [[info|...]] / [[caution|...]] на admonitions pymdownx для MkDocs."""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "docs" / "documentation" / "blockchain" / "coopos"

HEADER_RE = re.compile(
    r"^\[\[(?P<kind>info|caution)(?:\s*\|\s*(?P<title>[^\]]*))?\]\]\s*$"
)
BODY_RE = re.compile(r"^\|\s?(.*)$")


def convert_file(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines(keepends=True)
    out: list[str] = []
    i = 0
    changed = False

    while i < len(lines):
        raw = lines[i]
        line = raw.rstrip("\n\r")
        m = HEADER_RE.match(line)
        if not m:
            out.append(raw)
            i += 1
            continue

        kind = m.group("kind")
        title = (m.group("title") or "").strip()
        bodies: list[str] = []
        i += 1
        while i < len(lines):
            raw2 = lines[i]
            line2 = raw2.rstrip("\n\r")
            bm = BODY_RE.match(line2)
            if bm:
                bodies.append(bm.group(1))
                i += 1
                continue
            break

        admon = "note" if kind == "info" else "warning"
        if title:
            block = [f"!!! {admon} \"{title}\"\n"]
        else:
            block = [f"!!! {admon}\n"]

        for b in bodies:
            block.append(f"    {b}\n")
        if not bodies:
            block.append("    \n")

        out.extend(block)
        changed = True

    if changed:
        path.write_text("".join(out), encoding="utf-8")
    return changed


def main() -> int:
    root = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT
    n = 0
    for p in sorted(root.rglob("*.md")):
        if convert_file(p):
            print(p)
            n += 1
    print(f"updated {n} files", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
