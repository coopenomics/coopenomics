#!/usr/bin/env python3
"""
Починка относительных ссылок после перевешивания корня слоя.

Контент блокчейна лежал в docs/documentation/blockchain/**, а в собранном сайте
поднят на корень слоя (/blockchain/...), чтобы URL не двоился. Ссылки, которые
из-за этого перестали резолвиться, чинятся здесь — и только они: цель каждой
кандидатной замены проверяется по файловой системе, поэтому рабочие ссылки
скрипт не трогает.
"""
import os, re, sys

root = sys.argv[1]
LINK = re.compile(r'(?<!!)\[([^\]]*)\]\(([^)#]+)(#[^)]*)?\)')
fixed = failed = 0

def exists(base, target):
    p = os.path.normpath(os.path.join(base, target))
    return os.path.exists(p)

for dirpath, _, files in os.walk(root):
    for fn in files:
        if not fn.endswith('.md'):
            continue
        path = os.path.join(dirpath, fn)
        text = open(path, encoding='utf-8').read()
        out, changed = [], False
        pos = 0
        for m in LINK.finditer(text):
            label, target, anchor = m.group(1), m.group(2), m.group(3) or ''
            if target.startswith(('http', '/', 'mailto:')) or not target.endswith('.md'):
                continue
            if exists(dirpath, target):
                continue
            # кандидаты: убрать один уровень вверх, убрать префикс папки слоя
            cands = []
            if target.startswith('../'):
                cands.append(target[3:])
            if target.startswith('blockchain/'):
                cands.append(target[len('blockchain/'):])
            cands.append(os.path.basename(target))
            hit = next((c for c in cands if exists(dirpath, c)), None)
            if hit:
                out.append((m.start(), m.end(), f'[{label}]({hit}{anchor})'))
                changed = True
                fixed += 1
            else:
                failed += 1
                print(f"  ⚠ не удалось починить: {os.path.relpath(path, root)} → {target}")
        if changed:
            for start, end, repl in reversed(out):
                text = text[:start] + repl + text[end:]
            open(path, 'w', encoding='utf-8').write(text)

print(f"  ⓘ ссылок починено: {fixed}, осталось битых: {failed}")
