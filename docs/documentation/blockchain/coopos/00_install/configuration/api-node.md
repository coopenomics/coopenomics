# Пример конфигурации: API-нода

**API-нода** обслуживает приложения: запросы к состоянию цепочки (`chain_api_plugin`), при необходимости сеть (`net_api_plugin`), иногда трассировку и историю состояния. Она **не подписывает блоки**, но часто принимает транзакции от клиентов и передаёт их в сеть.

## Зачем именно так

- **`chain_api_plugin` + `http_plugin`** — основа публичного или внутреннего RPC. Количество **`http-threads`** и размер **`chain-state-db-size-mb`** увеличивают по фактической нагрузке (число одновременных запросов, тяжёлые таблицы).
- **`api-accept-transactions = true`** — если узел должен принимать `push_transaction` / аналоги; если API только для чтения, можно выставить `false` и разгрузить узел.
- **`read-mode`**:
  - **`head`** — данные до последнего полученного блока; удобно для «свежих» ответов.
  - **`irreversible`** — только до последнего необратимого блока; строже согласованность, но в режиме `irreversible` транзакции из P2P не ретранслируются и поведение API для пуша может отличаться (см. комментарии в `config.example.ini` к `read-mode`).
- **`validation-mode = full`** — стандарт для узла, который следует за сетью.
- **P2P** — достаточно пиров для синхронизации; не обязательно держать сотни соединений, как на seed.
- **`net_api_plugin`** — включайте осознанно: он раскрывает информацию о P2P и часто **не выставляют публично**. Для внутренней диагностики — за VPN/firewall.
- **Защита HTTP**: `http-validate-host`, лимиты `http-max-in-flight-requests`, `http-max-bytes-in-flight-mb`, `max-body-size`, reverse proxy с rate limit и TLS на границе.

Опционально подключайте **`trace_api_plugin`** и **`state_history_plugin`**, если приложениям нужны трассировки действий или поток истории состояния (см. [State History (SHiP)](../../../state-history-ship.md)). **State-роль** (поставка истории по WebSocket) может жить **на этом же узле** или на отдельной [state-ноде](state-node.md) — совмещение с API удобно для малых контуров, разделение — для нагрузки и безопасности.

## Фрагмент `config.ini`

```ini
plugin = eosio::chain_plugin
plugin = eosio::net_plugin
plugin = eosio::http_plugin
plugin = eosio::chain_api_plugin
# Только защищённая внутренняя сеть:
# plugin = eosio::net_api_plugin

http-server-address = 0.0.0.0:8888
http-threads = 16
http-validate-host = true
http-max-in-flight-requests = 500
http-max-bytes-in-flight-mb = 256
max-body-size = 1048576

chain-threads = 8
chain-state-db-size-mb = 16384
chain-state-db-guard-size-mb = 256

validation-mode = full
read-mode = head
api-accept-transactions = true

p2p-listen-endpoint = 0.0.0.0:9876
p2p-peer-address = seed1.example.com:9876
p2p-peer-address = seed2.example.com:9876
max-clients = 50
net-threads = 4

# Нет producer-name / signature-provider
```

Для пользовательских доменов укажите **`access-control-allow-origin`** и связанные CORS-директивы только если это требуется браузерным клиентам; не используйте `*` на публичных эндпоинтах с чувствительными данными без понимания рисков.
