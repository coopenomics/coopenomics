---
content_title: Сборка COOPOS из исходников
---

Ранее рекомендованные shell-скрипты для сборки удалены; процесс полностью управляется CMake. Собирающим из исходников нужно самостоятельно установить зависимости. Список зависимостей и рекомендуемая процедура сборки — в файле [`README.md`](https://github.com/coopenomics/coopos/blob/main/README.md). Там же — как эффективно запускать тесты.

### Использование DUNE
Вместо сборки из исходников можно использовать [DUNE](https://github.com/AntelopeIO/DUNE) — удобный старт в Docker на разных платформах.

### Сборка из исходников
COOPOS можно собрать и установить из исходников. Актуальные инструкции — [здесь](https://github.com/coopenomics/coopos/blob/main/README.md#build-and-install-from-source).

#### Сборка «pinned» (фиксированные версии компилятора и Boost)
Инструкции для pinned-сборки перенесены [сюда](https://github.com/coopenomics/coopos/blob/main/README.md#pinned-build). Перед сборкой полезно прочитать [предварительные требования](https://github.com/coopenomics/coopos/blob/main/README.md#prerequisites) и предупреждение о параллельной сборке с флагом `-j` [здесь](https://github.com/coopenomics/coopos/blob/main/README.md#step-3---build).

#### Ручная (не «pinned») сборка
Инструкции для unpinned-сборки — [здесь](https://github.com/coopenomics/coopos/blob/main/README.md#unpinned-build). Также см. [prerequisites](https://github.com/coopenomics/coopos/blob/main/README.md#prerequisites) и предупреждение о `-j` [здесь](https://github.com/coopenomics/coopos/blob/main/README.md#step-3---build).

### Запуск тестов
Описание доступных наборов тестов и способов запуска — [здесь](https://github.com/coopenomics/coopos/blob/main/README.md#test).
