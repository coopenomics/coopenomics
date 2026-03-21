#!/usr/bin/env python3
"""Собирает 03_command-reference/**/*.md в один index.md (якоря, внутренние ссылки).

Исходные вложенные каталоги должны существовать (восстановите из git перед повторным запуском).
"""
from __future__ import annotations

import os
import re
from pathlib import Path

BASE = Path(
    "/Users/darksun/dacom-code/foundation/docsdocsdocs/coopenomics/docs/documentation/blockchain/coopos/02_cleos/03_command-reference"
)


def anchor_id(rel: str) -> str:
    rel = rel.replace("\\", "/")
    stem = rel[:-3] if rel.endswith(".md") else rel
    return "cleos-cmd-" + stem.replace("/", "-")


def demote_headings(text: str, levels: int = 1) -> str:
    out: list[str] = []
    fence = False
    heading_re = re.compile(r"^(#+)\s(.*)$")
    for line in text.splitlines():
        stripped = line.lstrip()
        if stripped.startswith("```"):
            fence = not fence
            out.append(line)
            continue
        if not fence:
            m = heading_re.match(line)
            if m and len(m.group(1)) + levels <= 6:
                line = "#" * (len(m.group(1)) + levels) + " " + m.group(2)
        out.append(line)
    return "\n".join(out)


def resolve_link(source_rel: str, target: str) -> str | None:
    """Возвращает путь target относительно BASE с /, если это .md в дереве."""
    if not target.endswith(".md"):
        return None
    if target.startswith(("http://", "https://", "#")):
        return None
    src_dir = os.path.dirname(source_rel.replace("\\", "/"))
    joined = os.path.normpath(os.path.join(src_dir, target)).replace("\\", "/")
    full = BASE / joined
    if full.is_file():
        return joined
    return None


LINK_RE = re.compile(r"\]\(([^)]+)\)")


def rewrite_links(body: str, source_rel: str, id_map: dict[str, str]) -> str:
    def repl(m: re.Match[str]) -> str:
        target = m.group(1).strip()
        if target.startswith(("#", "http://", "https://", "mailto:")):
            return m.group(0)
        path_part, frag = target, ""
        if "#" in target:
            path_part, frag = target.split("#", 1)
            path_part = path_part.strip()
            frag = frag.strip()
        if not path_part.endswith(".md"):
            return m.group(0)
        resolved = resolve_link(source_rel, path_part)
        if resolved and resolved in id_map:
            # фрагмент в исходной ссылке на другой файл отбрасываем — целевой якорь один
            return f"](#{id_map[resolved]})"
        return m.group(0)

    return LINK_RE.sub(repl, body)


GROUPS: list[tuple[str, str, list[str]]] = [
    ("cleos-ref-version", "version", ["version/index.md", "version/client.md"]),
    ("cleos-ref-create", "create", ["create/index.md", "create/key.md", "create/account.md"]),
    (
        "cleos-ref-convert",
        "convert",
        [
            "convert/index.md",
            "convert/pack_transaction.md",
            "convert/unpack_transaction.md",
            "convert/pack_action_data.md",
            "convert/unpack_action_data.md",
        ],
    ),
    (
        "cleos-ref-get",
        "get",
        ["get/index.md"]
        + [f"get/{n}" for n in (
            "info.md",
            "block.md",
            "account.md",
            "code.md",
            "abi.md",
            "table.md",
            "scope.md",
            "currency.md",
            "currency-balance.md",
            "currency-stats.md",
            "accounts.md",
            "servants.md",
            "transaction.md",
            "transaction-status.md",
            "actions.md",
            "schedule.md",
            "transaction_id.md",
        )],
    ),
    (
        "cleos-ref-set",
        "set",
        ["set/index.md"]
        + [f"set/{n}" for n in ("set-code.md", "set-abi.md", "set-contract.md", "set-account.md", "set-action.md")],
    ),
    ("cleos-ref-transfer", "transfer", ["transfer.md"]),
    (
        "cleos-ref-net",
        "net",
        ["net/index.md"] + [f"net/{n}" for n in ("connect.md", "disconnect.md", "status.md", "peers.md")],
    ),
    (
        "cleos-ref-wallet",
        "wallet",
        ["wallet/index.md"]
        + [
            f"wallet/{n}"
            for n in (
                "create.md",
                "create_key.md",
                "open.md",
                "lock.md",
                "lock_all.md",
                "unlock.md",
                "import.md",
                "list.md",
                "keys.md",
                "private_keys.md",
            )
        ],
    ),
    ("cleos-ref-sign", "sign", ["sign.md"]),
    (
        "cleos-ref-push",
        "push",
        ["push/index.md", "push/push-action.md", "push/push-transaction.md", "push/push-transactions.md"],
    ),
    (
        "cleos-ref-multisig",
        "multisig",
        ["multisig/index.md"]
        + [
            f"multisig/{n}"
            for n in (
                "multisig-propose.md",
                "multisig-propose_trx.md",
                "multisig-review.md",
                "multisig-approve.md",
                "multisig-unapprove.md",
                "multisig-invalidate.md",
                "multisig-cancel.md",
                "multisig-exec.md",
            )
        ],
    ),
    ("cleos-ref-system", "system", []),  # заполним ниже
]

# system files list same as in build_file_list system part
_SYSTEM_FILES = ["system/index.md"] + [
    f"system/{n}"
    for n in (
        "system-newaccount.md",
        "system-regproducer.md",
        "system-unregprod.md",
        "system-voteproducer.md",
        "system-voteproducer-proxy.md",
        "system-voteproducer-prods.md",
        "system-voteproducer-approve.md",
        "system-voteproducer-unapprove.md",
        "system-listproducers.md",
        "system-delegatebw.md",
        "system-undelegatebw.md",
        "system-listbw.md",
        "system-bidname.md",
        "system-bidnameinfo.md",
        "system-buyram.md",
        "system-sellram.md",
        "system-claimrewards.md",
        "system-regproxy.md",
        "system-unregproxy.md",
        "system-canceldelay.md",
        "system-rex.md",
        "system-rex-deposit.md",
        "system-rex-withdraw.md",
        "system-rex-buyrex.md",
        "system-rex-lendrex.md",
        "system-rex-unstaketorex.md",
        "system-rex-sellrex.md",
        "system-rex-cancelrexorder.md",
        "system-rex-mvtosavings.md",
        "system-rex-mvfromsavings.md",
        "system-rex-rentcpu.md",
        "system-rex-rentnet.md",
        "system-rex-fundcpuloan.md",
        "system-rex-fundnetloan.md",
        "system-rex-defundcpuloan.md",
        "system-rex-defundnetloan.md",
        "system-rex-consolidate.md",
        "system-rex-updaterex.md",
        "system-rex-rexexec.md",
        "system-rex-closerex.md",
    )
]
GROUPS[-1] = ("cleos-ref-system", "system", _SYSTEM_FILES)


def main() -> None:
    all_files = [f for _, _, fl in GROUPS for f in fl]
    id_map = {rel: anchor_id(rel) for rel in all_files}

    lines: list[str] = [
        "# Справка по командам cleos",
        "",
        "Ниже собрана документация по подкомандам `cleos`: одна страница вместо разрозненных файлов. Внутренние ссылки ведут на якоря этой страницы.",
        "",
        "## Оглавление",
        "",
    ]
    titles = {
        "version": "[`version`](#cleos-ref-version)",
        "create": "[`create`](#cleos-ref-create)",
        "convert": "[`convert`](#cleos-ref-convert)",
        "get": "[`get`](#cleos-ref-get)",
        "set": "[`set`](#cleos-ref-set)",
        "transfer": "[`transfer`](#cleos-ref-transfer)",
        "net": "[`net`](#cleos-ref-net)",
        "wallet": "[`wallet`](#cleos-ref-wallet)",
        "sign": "[`sign`](#cleos-ref-sign)",
        "push": "[`push`](#cleos-ref-push)",
        "multisig": "[`multisig`](#cleos-ref-multisig)",
        "system": "[`system`](#cleos-ref-system)",
    }
    for _, key, _ in GROUPS:
        lines.append(f"- {titles[key]}")
    lines.extend(["", "---", ""])

    for group_anchor, group_key, file_list in GROUPS:
        group_title = {
            "version": "cleos version",
            "create": "cleos create",
            "convert": "cleos convert",
            "get": "cleos get",
            "set": "cleos set",
            "transfer": "cleos transfer",
            "net": "cleos net",
            "wallet": "cleos wallet",
            "sign": "cleos sign",
            "push": "cleos push",
            "multisig": "cleos multisig",
            "system": "cleos system",
        }[group_key]
        lines.append(f"## {group_title} {{#{group_anchor}}}")
        lines.append("")

        for rel in file_list:
            path = BASE / rel
            raw = path.read_text(encoding="utf-8")
            raw = rewrite_links(raw, rel, id_map)
            aid = id_map[rel]
            if rel.endswith("/index.md"):
                body = demote_headings(raw, 1)
                lines.append(body.strip())
            else:
                body = demote_headings(raw, 2)
                short = rel.split("/")[-1].replace(".md", "").replace("_", " ")
                lines.append(f"### `{short}` {{#{aid}}}")
                lines.append("")
                lines.append(body.strip())
            lines.extend(["", "---", ""])

    # убрать последний ---
    while lines and lines[-1] == "---":
        lines.pop()
    while lines and lines[-1] == "":
        lines.pop()

    text = "\n".join(lines) + "\n"
    # было написано из подкаталогов (get/* …): ../../../ указывало на coopos; корень 03_command-reference — на уровень выше
    text = text.replace("](../../../00_install/", "](../../00_install/")
    text = text.replace("](../../../01_nodeos/", "](../../01_nodeos/")
    out = BASE / "index.md"
    out.write_text(text, encoding="utf-8")
    print("Wrote", out)


if __name__ == "__main__":
    main()
