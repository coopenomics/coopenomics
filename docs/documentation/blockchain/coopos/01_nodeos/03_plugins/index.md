---
content_title: Плагины nodeos
---

## Обзор

Плагины расширяют базовую функциональность `nodeos`. Обязательные включают `chain_plugin`, `net_plugin` и `producer_plugin` — это отражает модульность `nodeos`. Остальные опциональны: удобные функции, но не обязательные для работы узла.

Описание конкретных плагинов — в списке:

* [`chain_api_plugin`](chain_api_plugin/index.md)
* [`chain_plugin`](chain_plugin/index.md)
* [`db_size_api_plugin`](db_size_api_plugin/index.md)
* [`http_plugin`](http_plugin/index.md)
* [`net_api_plugin`](net_api_plugin/index.md)
* [`net_plugin`](net_plugin/index.md)
* [`producer_plugin`](producer_plugin/index.md)
* [`state_history_plugin`](state_history_plugin/index.md)
* [`test_control_api_plugin`](test_control_api_plugin/index.md)
* [`test_control_plugin`](test_control_plugin/index.md)
* [`trace_api_plugin`](trace_api_plugin/index.md)

!!! note "Модульность nodeos"
    Плагины добавляют возможности по шагам. В отличие от динамически подключаемых модулей, плагины `nodeos` собираются на этапе компиляции.
