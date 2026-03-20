# Пример конфигурации: state-нода (история / SHiP)

**State-нода** в прикладном смысле — это узел, на котором включён **`state_history_plugin`**, чтобы **отдавать историю цепи потоком** (блоки, трассировки, дельты таблиц) по протоколу **State History (SHiP)**. Такой узел обычно называют близко к **HISTORY-ноде** в [обзоре ролей узлов](../nodes.md).

## Совмещение с API-нодой

Один и тот же процесс `nodeos` может одновременно:

- обслуживать **Chain API** (`chain_api_plugin` + `http_plugin`);
- вести **журналы SHiP** и слушать **WebSocket** на `state-history-endpoint`.

Это удобно для небольших установок: один хост и для `get_table_rows`, и для индексатора по SHiP. **Обязательным** совмещение не является: для изоляции нагрузки и безопасности часто выделяют **отдельную машину** только под историю (большой диск, ограниченный круг клиентов по сети), а HTTP API держат на других узлах.

## Зачем именно так

- **`state_history_plugin`** — без него нет SHiP-канала, только обычный RPC и при необходимости Trace API с файлов.
- **`trace-history`** и **`chain-state-history`** включают по потребности: для обозревателей и индексаторов чаще нужны **и трассы, и дельты**; только дельты уменьшают объём, если не нужны детальные трассы.
- **`state-history-endpoint`** — слушать на **127.0.0.1** или внутреннем интерфейсе; наружу — только через VPN/SSH-туннель или reverse proxy с ограничением доступа. Поток истории не должен быть публичным без жёсткой политики.
- **`chain_plugin` + `net_plugin`** — узел должен **догонять сеть** и применять блоки, иначе журнал SHiP неполный.
- Размер диска и опции **stride / retain / archive** (`state-history-stride`, `max-retained-history-files`, `state-history-archive-dir` и др.) задают политику хранения; для долгоживущей ноды см. [Параметры](parameters.md).

Индексаторы в экосистеме COOPOS могут использовать **[Реактивный чтец SHiP](../../reactive-ship-reader.md)** как готовый клиент к этому endpoint.

## Фрагмент `config.ini`

```ini
plugin = eosio::chain_plugin
plugin = eosio::net_plugin
plugin = eosio::http_plugin
plugin = eosio::chain_api_plugin
plugin = eosio::state_history_plugin

# Синхронизация с сетью
p2p-listen-endpoint = 0.0.0.0:9876
p2p-peer-address = seed1.example.com:9876
p2p-peer-address = seed2.example.com:9876

validation-mode = full
read-mode = head

# HTTP API — по желанию на этой же ноде; для только-SHIP можно оставить 127.0.0.1
http-server-address = 127.0.0.1:8888
api-accept-transactions = false

# SHiP: только внутренняя сеть
trace-history = true
chain-state-history = true
state-history-endpoint = 127.0.0.1:8080
# state-history-unix-socket-path = ship.sock

state-history-dir = state-history
# state-history-stride = ...
# max-retained-history-files = ...

# Нет producer-name / signature-provider
```

Подробнее по протоколу и эксплуатации: [State History (SHiP)](../state-history-ship.md).
