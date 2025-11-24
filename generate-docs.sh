#!/bin/bash

# Базовый путь из .env
source .env
BASE_PATH=$BASE_PATH

# Переходим в директорию docsdocsdocs/coopenomics
cd "$BASE_PATH/docsdocsdocs/coopenomics" || exit

# Создаем символические ссылки на локальные репозитории (аналог клонирования в CI)
ln -sf "$BASE_PATH/monocoop" mono-repo
ln -sf "$BASE_PATH/coopos" coopos-repo

# Устанавливаем Node.js зависимости
pnpm install

# Устанавливаем redocly для генерации API документации
npm install -g @redocly/cli

# Устанавливаем doxygen для генерации contracts документации
# brew install doxygen  # для macOS
# или для Linux: sudo apt-get install doxygen

# Генерируем contracts документацию с Doxygen
cd "$BASE_PATH/monocoop/components/contracts" || exit
doxygen

# Генерируем cooptypes документацию
cd "$BASE_PATH/monocoop/components/cooptypes" || exit
pnpm install
pnpm run build
pnpm run docs

# Генерируем SDK документацию
cd "$BASE_PATH/monocoop/components/sdk" || exit
pnpm install
pnpm run build
pnpm run docs

# Возвращаемся в директорию docsdocsdocs/coopenomics
cd "$BASE_PATH/docsdocsdocs/coopenomics" || exit

# Копируем contracts документацию
mkdir -p docs/contracts
cp -r "$BASE_PATH/monocoop/components/contracts/docs/html/"* docs/contracts/

# Копируем SDK документацию (без typedoc.json)
mkdir -p docs/sdk
rsync -av --exclude='typedoc.json' "$BASE_PATH/monocoop/components/sdk/docs/" docs/sdk/

# Копируем cooptypes документацию
mkdir -p docs/cooptypes
cp -r "$BASE_PATH/monocoop/components/cooptypes/docs/"* docs/cooptypes/

# Генерируем API документацию из coopos
mkdir -p docs/api/chain
cd "$BASE_PATH/coopos/plugins/chain_api_plugin" || exit
redocly build-docs chain.swagger.yaml --output "$BASE_PATH/docsdocsdocs/coopenomics/docs/api/chain/index.html"

mkdir -p "$BASE_PATH/docsdocsdocs/coopenomics/docs/api/db_size"
cd "$BASE_PATH/coopos/plugins/db_size_api_plugin" || exit
redocly build-docs db_size.swagger.yaml --output "$BASE_PATH/docsdocsdocs/coopenomics/docs/api/db_size/index.html"

mkdir -p "$BASE_PATH/docsdocsdocs/coopenomics/docs/api/net"
cd "$BASE_PATH/coopos/plugins/net_api_plugin" || exit
redocly build-docs net.swagger.yaml --output "$BASE_PATH/docsdocsdocs/coopenomics/docs/api/net/index.html"

mkdir -p "$BASE_PATH/docsdocsdocs/coopenomics/docs/api/trace"
cd "$BASE_PATH/coopos/plugins/trace_api_plugin" || exit
redocly build-docs trace_api.swagger.yaml --output "$BASE_PATH/docsdocsdocs/coopenomics/docs/api/trace/index.html"

mkdir -p "$BASE_PATH/docsdocsdocs/coopenomics/docs/api/producer"
cd "$BASE_PATH/coopos/plugins/producer_api_plugin" || exit
redocly build-docs producer.swagger.yaml --output "$BASE_PATH/docsdocsdocs/coopenomics/docs/api/producer/index.html"

# Возвращаемся в директорию docsdocsdocs/coopenomics
cd "$BASE_PATH/docsdocsdocs/coopenomics" || exit

# Собираем документацию с MkDocs
mkdocs build

# Публикуем на GitHub Pages (если нужно)
# npx gh-pages --nojekyll -d site --repo https://x-access-token:${GITHUB_TOKEN}@github.com/coopenomics/coopenomics.git

