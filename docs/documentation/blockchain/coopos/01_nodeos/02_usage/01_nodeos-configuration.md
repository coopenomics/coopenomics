---
content_title: Конфигурация nodeos
---

Опции плагинов задаются через аргументы CLI или файл `config.ini`. Опции, специфичные для `nodeos`, — только из командной строки. Полный список опций CLI и `config.ini` даёт `nodeos --help`, как показано выше.

У каждой опции в `config.ini` есть соответствие в CLI, но не наоборот: часть опций CLI в `config.ini` недоступна. Например, большинство опций плагинов, выполняющих действия при старте, в `config.ini` не задаются — в частности `--delete-state-history` у `state_history_plugin`.

Например, `--plugin eosio::chain_api_plugin` эквивалентно строке `plugin = eosio::chain_api_plugin` в `config.ini`.

## Расположение `config.ini`

По умолчанию на Linux `config.ini` находится в:
`~/.local/share/eosio/nodeos/config`

Свой файл конфигурации задаётся опцией `nodeos` `--config path/to/config.ini`.

## Пример nodeos

Типичный запуск производящего узла:

```sh
nodeos \
  -e -p eosio \
  --data-dir /users/mydir/eosio/data     \
  --config-dir /users/mydir/eosio/config \
  --plugin eosio::producer_plugin      \
  --plugin eosio::chain_plugin         \
  --plugin eosio::http_plugin          \
  --plugin eosio::state_history_plugin \
  --contracts-console   \
  --access-control-allow-origin='*' \
  --http-validate-host=false        \
  --verbose-http-errors             \
  --state-history-dir /shpdata \
  --trace-history              \
  --chain-state-history        \
  >> nodeos.log 2>&1 &
```

Команда выше запускает производящий узел:

* включает выпуск блоков (`-e`)
* задаёт имя продюсера `eosio` (`-p`)
* задаёт каталог данных блокчейна (`--data-dir`)
* задаёт каталог `config.ini` (`--config-dir`)
* подключает плагины `producer_plugin`, `chain_plugin`, `http_plugin`, `state_history_plugin` (`--plugin`)
* передаёт опции `chain_plugin` (`--contracts-console`)
* передаёт опции `http_plugin` (`--access-control-allow-origin`, `--http-validate-host`, `--verbose-http-errors`)
* передаёт опции state history (`--state-history-dir`, `--trace-history`, `--chain-state-history`)
* перенаправляет `stdout` и `stderr` в `nodeos.log`
* запускает процесс в фоне (`&`)
