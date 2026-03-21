---
content_title: Утилита leap-util
link_text: leap-util
---

Консольные задачи для **журнала блоков**, **снимков** и **каталога state** без запущенного `nodeos`. Имя бинарника в сборке — `leap-util`. Полный список опций: `leap-util --help` и `leap-util <команда> --help`.

## version

```text
leap-util version client
leap-util version full
```

| Команда | Описание |
|--------|----------|
| `version client` | Краткая версия клиента |
| `version full` | Полная строка версии |

## block-log

Общий каталог данных блоков (часто `blocks` рядом с `nodeos`):

```text
leap-util block-log [--blocks-dir <путь>] <подкоманда> …
```

| Подкоманда | Назначение |
|------------|------------|
| `print-log` | Вывести `blocks.log` в JSON (`-o` — в файл; `-f`/`-l` — диапазон; `--no-pretty-print`, `--as-json-array`) |
| `make-index` | Построить `blocks.index` по `blocks.log` |
| `trim-blocklog` | Обрезать журнал и индекс (`--first`, `--last` — границы диапазона) |
| `extract-blocks` | Вынести диапазон блоков в `--output-dir` |
| `split-blocks` | Разбить журнал по `--stride` в `--output-dir` |
| `merge-blocks` | Собрать куски `blocks-…` из `--blocks-dir` в `--output-dir` |
| `smoke-test` | Проверить согласованность `blocks.log` и индекса |
| `vacuum` | Уплотнить усечённый журнал в обычный |
| `genesis` | Вытащить genesis из журнала в JSON (`-o` — в файл) |

## snapshot

```text
leap-util snapshot to-json -i <файл-снимка> [-o <json>] [--chain-id …] [--db-size МиБ]
```

Конвертация бинарного снимка в JSON. Без `-o` часто получается `<файл>.json`.

## chain-state

```text
leap-util chain-state [--state-dir <путь>] build-info (-o <файл> | -p)
leap-util chain-state [--state-dir <путь>] last-shutdown-state
```

| Подкоманда | Описание |
|------------|----------|
| `build-info` | JSON со сведениями о сборке chainbase: в файл (`-o`) или в консоль (`-p`) |
| `last-shutdown-state` | Проверка, было ли последнее завершение узла «чистым» по `shared_memory.bin` |
