# Пример конфигурации: production-нода

**Production-нода** (нода делегата / block producer) **подписывает блоки** от имени аккаунта из графика продюсеров. Это самый чувствительный с точки зрения безопасности профиль: компрометация `signature-provider` равна компрометации ключа продюсера.

## Зачем именно так

- **`producer_plugin` обязателен**; **`producer-name`** и **`signature-provider`** — минимальная пара для подписи блоков. На проде обычно используют `KEOSD:` или аппаратный провайдер, а не `KEY:` с приватным ключом в файле.
- **`pause-on-startup = true`** — после рестарта производство не начнётся, пока вы явно не возобновите его (защита от двойного выпуска при ошибках в инфраструктуре). Перед включением убедитесь, что цепочка синхронизирована и график корректен.
- **`enable-stale-production = false`** (по умолчанию) — не выпускать блоки, если цепочка считается устаревшей; снижает риск некорректного поведения при сетевых сбоях.
- **`api-accept-transactions = false`** — публичная «касса» транзакций не на BP; транзакции приходят по P2P от API- и других нод.
- **HTTP на `127.0.0.1`** — если `http_plugin` нужен только для локального `cleos`/мониторинга. Публичный RPC на продюсере обычно не нужен и увеличивает атакуемую поверхность.
- **P2P — узкий круг** — соединения с другими BP и доверенными relay; опции вроде `allowed-connection`, `peer-key` и `p2p-auto-bp-peer` помогают ограничить, кто может подключаться (см. комментарии в `coopos/config.example.ini`).
- **`validation-mode = full`** — полная проверка входящих блоков.
- **`read-mode = head`** — состояние до головы цепочки, что соответствует роли продюсера.

Тюнинг **`cpu-effort-percent`**, **`producer-threads`**, **`chain-threads`** зависит от железа и нагрузки сети; начните с значений из примера и корректируйте по метрикам.

## Фрагмент `config.ini`

```ini
plugin = eosio::chain_plugin
plugin = eosio::net_plugin
plugin = eosio::http_plugin
plugin = eosio::producer_plugin

producer-name = yourproducer
# Пример с keosd; в бою — безопасное хранилище ключей, не файл с KEY:
signature-provider = YOUR_BLOCK_SIGNING_PUBKEY=KEOSD:http://127.0.0.1:8900

pause-on-startup = true
enable-stale-production = false

validation-mode = full
read-mode = head

http-server-address = 127.0.0.1:8888
http-validate-host = true
api-accept-transactions = false

p2p-listen-endpoint = 0.0.0.0:9876
p2p-server-address = YOUR_BP_PUBLIC:9876
p2p-peer-address = peer-bp1.example.com:9876
p2p-peer-address = peer-bp2.example.com:9876

chain-threads = 4
producer-threads = 2
cpu-effort-percent = 80
last-block-cpu-effort-percent = 80
max-transaction-time = 30

keosd-provider-timeout = 5
```

Дополнительно настройте файрвол так, чтобы **P2P-порт** был доступен только нужным пирам, а не всему интернету, если политика сети это допускает.
