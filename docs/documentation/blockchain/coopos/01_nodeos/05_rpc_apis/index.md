---
content_title: Удалённые вызовы (RPC API)
link_text: RPC API
---

HTTP JSON-RPC узла `nodeos` обслуживается [`http_plugin`](../03_plugins/http_plugin/index.md) и включаемыми API-плагинами. Перечень методов и схем запросов — в справочниках раздела **API** документации:

* [Chain API](https://docs.coopenomics.world/api/chain)
* [Net API](https://docs.coopenomics.world/api/net)
* [Producer API](https://docs.coopenomics.world/api/producer)
* [Trace API](https://docs.coopenomics.world/api/trace)
* [DB Size API](https://docs.coopenomics.world/api/db_size)

**State History (SHiP)** — отдельный потоковый протокол (WebSocket / Unix-socket), не набор HTTP `/v1/...` как у перечисленных выше. Описание: [State History (SHiP)](../../../state-history-ship.md).

**Test Control API** в оглавлении **API** не выделен; узловой сценарий остановки по блоку описан на странице [test_control_api_plugin](../03_plugins/test_control_api_plugin/index.md).
