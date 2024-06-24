#!/bin/bash

# Сборка документации
mkdocs build

# Переключаемся в директорию contracts, генерируем документацию и копируем
cd ../contracts || exit
doxygen
mkdir -p ../doctrine/site/contracts
rsync -r docs/html/* ../doctrine/site/contracts

# Переключаемся в директорию cooptypes, генерируем документацию и копируем
cd ../cooptypes || exit
pnpm docs
mkdir -p ../doctrine/site/cooptypes
rsync -r docs/* ../doctrine/site/cooptypes

# Переключаемся в директорию coopback, генерируем документацию и копируем
cd ../coopback || exit
pnpm docs
mkdir -p ../doctrine/site/coopback
rsync -r docs/* ../doctrine/site/coopback

# Возвращаемся в первоначальную директорию и публикуем документацию
cd ../doctrine || exit
pnpm docs-publish

