---
content_title: Создание снимка с полной историей состояния
---

На узле **nodeos** COOPOS, где уже крутится полная state history с генезиса, снимается переносимый snapshot и копируются согласованные файлы `data/state-history` (и при необходимости `blocks.log`) для переноса или бэкапа.

## Перед началом

* [COOPOS](../../../00_install/index.md), [nodeos](../../02_usage/index.md), [state_history_plugin](../../03_plugins/state_history_plugin/index.md).

## Шаги

1. Включите `producer_api_plugin` на узле с полной state history.

!!! warning "Осторожно с `producer_api_plugin`"
    Закройте файрволом доступ к `http-server-address` или укажите `localhost:8888`.

2. Создайте переносимый снимок:
```sh
curl http://127.0.0.1:8888/v1/producer/create_snapshot | json_pp
```

3. Дождитесь нескольких блоков после завершения снимка: в файлах state history должно быть минимум на один блок больше, чем в переносимом снимке, а в `blocks.log` — блок после того, как он стал необратимым.

!!! note "Примечание"
    Если блок из снимка вытеснен форком, снимок недействителен — повторите процедуру.

4. Остановите `nodeos`.

5. Сохраните копии:
   * нового переносимого снимка (`data/snapshots/snapshot-xxxxxxx.bin`)
   * содержимого `data/state-history`:
     * `chain_state_history.log`
     * `trace_history.log`
     * `chain_state_history.index` — по желанию; без него восстановление дольше
     * `trace_history.index` — по желанию; без него восстановление дольше
   * по желанию: `data/blocks` без `data/blocks/reversible`
