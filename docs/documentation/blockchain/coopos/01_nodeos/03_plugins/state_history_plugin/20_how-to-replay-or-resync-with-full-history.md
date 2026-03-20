---
content_title: Реплей или ресинхронизация с полной историей
---

Полная история состояния на **nodeos** COOPOS: реплей или догонка с [`state_history_plugin`](index.md) от `blocks.log` или `--genesis-json`, чтобы с нуля записывалась вся цепочка в state history.

## Перед началом

* [COOPOS](../../../00_install/index.md), [nodeos](../../02_usage/index.md), [state_history_plugin](../../03_plugins/state_history_plugin/index.md).

## Шаги

1. Получите `blocks.log` и положите в `data/blocks`, либо возьмите файл генезиса и укажите `--genesis-json`

2. Убедитесь, что нет `data/state`, либо используйте `--replay-blockchain`

3. Запустите `nodeos` с опциями из [`state_history_plugin`](index.md)
