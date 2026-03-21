---
content_title: Конфигурация nodeos
---

Опции плагинов задаются аргументами CLI или файлом `config.ini`. Опции только для приложения `nodeos` — из командной строки. Полный перечень даёт `nodeos --help` (см. [Опции командной строки](00_nodeos-options.md)).

У каждой опции в `config.ini` обычно есть эквивалент в CLI, но не наоборот: часть опций (одноразовые действия при старте) в `config.ini` не задаётся — например `--delete-state-history` у `state_history_plugin`. Строка `plugin = eosio::chain_api_plugin` в `config.ini` соответствует `--plugin eosio::chain_api_plugin` в CLI.

## Связь с остальной документацией

* **[Справочник параметров (config.ini)](../../00_install/configuration/parameters.md)** — подробные описания отдельных директив (та же страница, что в разделе **Конфигурация** при установке).
* **[Конфигурация: обзор и роли узла](../../00_install/configuration/index.md)** — seed, production, API, state, light: зачем узел в сети и какие плагины типичны.
* **[Режим producing / non-producing](02_node-setups/index.md)** — выпускает ли **этот** экземпляр `nodeos` блоки; ортогонально роли «API-нода», «seed» и т.д.
* **[Плагины nodeos](../03_plugins/index.md)** — опции по каждому плагину и зависимости между ними.

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
