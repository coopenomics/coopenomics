#!/usr/bin/env bash
# ============================================================================
# Сборка объединённого сайта docs.blago.coop.
#
# Контент физически не переносится между репозиториями: скрипт раскладывает
# дерево build/ из двух источников и запускает mkdocs. Ровно этот же порядок
# повторяет CI — там mono уже клонируется рядом как mono-repo/.
#
#   MONO_DIR  — чекаут mono (по умолчанию ./mono-repo)
#   BUILD_DIR — куда собирать дерево (по умолчанию ./build)
#   OUT_DIR   — куда класть готовый сайт (по умолчанию ./site-preview)
# ============================================================================
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
NEWSITE="$ROOT/newsite"
MONO="${MONO_DIR:-$ROOT/mono-repo}"
BUILD="${BUILD_DIR:-$ROOT/build}"
OUT="${OUT_DIR:-$ROOT/site-preview}"
MONODOCS="$MONO/components/docs"

[ -d "$MONODOCS" ] || { echo "ОШИБКА: не найден чекаут mono: $MONODOCS" >&2; exit 1; }

echo "→ чищу $BUILD"
rm -rf "$BUILD"
mkdir -p "$BUILD/docs" "$BUILD/parts/blockchain/docs" "$BUILD/parts/platform/docs" "$BUILD/parts/apps/docs"

# ── корень: конфиг, главная, справочники, стили ────────────────────────────
cp "$NEWSITE/mkdocs.yml" "$BUILD/mkdocs.yml"
cp "$NEWSITE/docs/index.md" "$NEWSITE/docs/reference.md" "$BUILD/docs/"
mkdir -p "$BUILD/docs/css" "$BUILD/docs/js"
cp "$NEWSITE/docs/css/blago.css" "$BUILD/docs/css/"
# собственные ассеты нового сайта (логотипы) кладём ПОСЛЕ слияния чужих,
# чтобы одноимённые файлы старых сайтов их не перекрыли — см. ниже
[ -d "$NEWSITE/overrides" ] && cp -r "$NEWSITE/overrides" "$BUILD/overrides"

# макросы SDK/GraphQL живут в mono и работают на весь сайт
cp "$MONODOCS/main.py" "$BUILD/main.py"

# наследуем прежние стили и счётчик обоих сайтов
cp "$MONODOCS/docs/css/extra.css" "$BUILD/docs/css/extra.css" 2>/dev/null || true
cp "$MONODOCS/docs/js/metrika.js" "$BUILD/docs/js/metrika.js" 2>/dev/null || true

# ── ассеты: общая папка в корне сайта ──────────────────────────────────────
# И mono-доки, и доки экономики адресуют картинки абсолютно (/assets/...),
# поэтому ассеты обязаны лежать в корне — тогда переезд страницы по вкладкам
# ничего не ломает. Пересекающиеся имена в обоих репо побайтно идентичны.
mkdir -p "$BUILD/docs/assets"
cp -rn "$ROOT/docs/assets/." "$BUILD/docs/assets/" 2>/dev/null || true
cp -rn "$MONODOCS/docs/assets/." "$BUILD/docs/assets/" 2>/dev/null || true

# логотипы нового сайта — последними, поверх слитых ассетов
cp -r "$NEWSITE/docs/assets/." "$BUILD/docs/assets/"

# ── справочники: остаются в корне домена, макросы ссылаются на них абсолютно ─
for d in cdt standards sdk graphql contracts cooptypes api; do
  [ -d "$ROOT/docs/$d" ]     && cp -r "$ROOT/docs/$d"     "$BUILD/docs/" || true
  [ -d "$MONODOCS/docs/$d" ] && cp -r "$MONODOCS/docs/$d" "$BUILD/docs/" || true
done


# SDK-справочник и его typedoc.json — из mono. Макросы платформы читают
# docs/sdk/typedoc.json и без него печатают «не найден» вместо сигнатур.
if [ -d "$MONO/components/sdk/docs" ]; then
  rsync -a --delete "$MONO/components/sdk/docs/" "$BUILD/docs/sdk/"
fi
# Схема GraphQL — из controller (её же копирует components/docs/sync-docs.sh).
if [ -d "$MONO/components/controller/docs" ]; then
  rsync -a "$MONO/components/controller/docs/" "$BUILD/docs/graphql/"
fi

# ── слой «Блокчейн» ────────────────────────────────────────────────────────
B="$BUILD/parts/blockchain"
cp "$NEWSITE/parts/blockchain/mkdocs.yml" "$B/mkdocs.yml"
cp "$NEWSITE/parts/blockchain/index.md"   "$B/docs/index.md"
cp -r "$ROOT/docs/documentation/blockchain/." "$B/docs/"
cp -r "$ROOT/docs/documentation/cdt"    "$B/docs/"
cp -r "$ROOT/docs/documentation/fabric" "$B/docs/"
cp "$ROOT/docs/documentation/overview.md" "$B/docs/"
cp "$ROOT/docs/documentation/reactive-ship-reader.md" "$B/docs/"

python3 "$NEWSITE/fix-links.py" "$B/docs"

# ── слой «Платформа» ───────────────────────────────────────────────────────
P="$BUILD/parts/platform"
NEW="$MONODOCS/docs/new"
cp "$NEWSITE/parts/platform/mkdocs.yml" "$P/mkdocs.yml"
cp "$NEWSITE/parts/platform/index.md"   "$P/docs/index.md"
for d in accounts auth blockchain buh chairman connection contracts council \
         factory installation meet navigator participant registration resources signature; do
  [ -d "$NEW/$d" ] && cp -r "$NEW/$d" "$P/docs/" || echo "  ⚠ нет раздела $d"
done

# ── слой «Приложения» ──────────────────────────────────────────────────────
A="$BUILD/parts/apps"
cp "$NEWSITE/parts/apps/mkdocs.yml" "$A/mkdocs.yml"
cp "$NEWSITE/parts/apps/index.md"   "$A/docs/index.md"
for d in marketplace blagorost; do
  [ -d "$NEW/$d" ] && cp -r "$NEW/$d" "$A/docs/" || echo "  ⚠ нет приложения $d"
done


# ── защита от макросов ─────────────────────────────────────────────────────
# Плагин macros рендерит КАЖДУЮ страницу как шаблон Jinja. В доках экономики
# есть страницы с {{ }}, {% %} и якорями {#anchor} в заголовках — для них рендер надо
# выключить, иначе сборка падает на «unexpected char» в чужом синтаксисе.
python3 - "$BUILD/parts/blockchain/docs" <<'PYGUARD'
import os, sys, re
root = sys.argv[1]
patched = 0
for dirpath, _, files in os.walk(root):
    for f in files:
        if not f.endswith('.md'):
            continue
        path = os.path.join(dirpath, f)
        text = open(path, encoding='utf-8').read()
        if not any(t in text for t in ('{{', '{%', '{#')):
            continue
        if text.startswith('---\n'):
            end = text.index('\n---', 4)
            text = text[:end] + '\nrender_macros: false' + text[end:]
        else:
            text = '---\nrender_macros: false\n---\n\n' + text
        open(path, 'w', encoding='utf-8').write(text)
        patched += 1
print(f"  ⓘ рендер макросов выключен на {patched} страницах с Jinja в примерах")
PYGUARD

# ── сборка ─────────────────────────────────────────────────────────────────
echo "→ mkdocs build → $OUT"
cd "$BUILD"
mkdocs build --site-dir "$OUT" "$@"
echo "✓ готово: $OUT"
