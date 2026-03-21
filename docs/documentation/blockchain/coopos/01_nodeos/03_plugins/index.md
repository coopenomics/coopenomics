---
content_title: Плагины nodeos
---

## Обзор

Плагины расширяют базовую функциональность `nodeos`. Для синхронизации с сетью обычно задают `chain_plugin` и `net_plugin`. `producer_plugin` нужен узлам, которые [выпускают блоки](../02_usage/02_node-setups/00_producing-node.md); на [непроизводящем узле](../02_usage/02_node-setups/01_non-producing-node.md) его не подключают. `resource_monitor_plugin` в типичной сборке загружается всегда и следит за заполнением диска. Остальные модули включают по задаче (RPC, трассировки, SHiP и т.д.).

Описание плагинов:

* [`chain_plugin`](chain_plugin/index.md)
* [`chain_api_plugin`](chain_api_plugin/index.md)
* [`db_size_api_plugin`](db_size_api_plugin/index.md)
* [`http_plugin`](http_plugin/index.md)
* [`net_plugin`](net_plugin/index.md)
* [`net_api_plugin`](net_api_plugin/index.md)
* [`producer_plugin`](producer_plugin/index.md)
* [`producer_api_plugin`](producer_api_plugin/index.md)
* [`resource_monitor_plugin`](resource_monitor_plugin/index.md)
* [`state_history_plugin`](state_history_plugin/index.md)
* [`trace_api_plugin`](trace_api_plugin/index.md)
* [`test_control_plugin`](test_control_plugin/index.md)
* [`test_control_api_plugin`](test_control_api_plugin/index.md)

!!! note "Модульность nodeos"
    Плагины добавляют возможности по шагам. В отличие от динамически подключаемых модулей, плагины `nodeos` собираются на этапе компиляции.
