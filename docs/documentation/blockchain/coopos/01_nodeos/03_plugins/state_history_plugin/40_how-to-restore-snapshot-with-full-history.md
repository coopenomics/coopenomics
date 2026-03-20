---
content_title: Восстановление снимка с полной историей состояния
---

**nodeos** COOPOS поднимается из переносимого снимка вместе с каталогом state history, чтобы снова синхронизироваться с сетью и продолжить отдачу полной истории через [`state_history_plugin`](index.md).

## Перед началом

* [COOPOS](../../../00_install/index.md), [nodeos](../../02_usage/index.md), [state_history_plugin](../../03_plugins/state_history_plugin/index.md).

## Шаги

1. Подготовьте:
   * переносимый снимок (`data/snapshots/snapshot-xxxxxxx.bin`)
   * содержимое `data/state-history`
   * по желанию: `blocks.log`, покрывающий блок снимка; без `data/blocks/reversible`

2. Убедитесь, что нет `data/state`

3. Запустите `nodeos` с `--snapshot` и опциями [`state_history_plugin`](index.md).

4. Не останавливайте `nodeos`, пока не получите хотя бы один блок из сети.

## Замечания

Блоки не идут — `net_api_plugin` и `cleos net disconnect` / `cleos net connect`.

!!! warning "Осторожно с `net_api_plugin`"
    Закройте файрволом доступ к `http-server-address` или укажите `localhost:8888`.
