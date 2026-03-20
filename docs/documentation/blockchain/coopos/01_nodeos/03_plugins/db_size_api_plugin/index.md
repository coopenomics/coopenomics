## Описание

Плагин `db_size_api_plugin` возвращает аналитику по блокчейну:

* free_bytes
* used_bytes
* size
* indices

<!--
## Использование

```console
# недоступно
```
-->

## Опции

Нет

## Зависимости

* [`chain_plugin`](../chain_plugin/index.md)
* [`http_plugin`](../http_plugin/index.md)

### Примеры загрузки зависимостей

```console
# config.ini
plugin = eosio::chain_plugin
[options]
plugin = eosio::http_plugin
[options]
```
```sh
# командная строка
nodeos ... --plugin eosio::chain_plugin [operations] [options]  \
           --plugin eosio::http_plugin [options]
```
