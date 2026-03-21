## Описание

Плагин `db_size_api_plugin` добавляет один JSON-RPC-метод, который возвращает статистику по встроенной базе состояния цепи (chainbase): суммарный размер, занятое и свободное место, разбивку по индексам. Полезно для мониторинга приближения к лимиту `chain-state-db-size-mb` у [`chain_plugin`](../chain_plugin/index.md).

## Справочник API

[DB Size API](https://docs.coopenomics.world/api/db_size).

## Использование

```console
# config.ini
plugin = eosio::db_size_api_plugin
```
```sh
# command-line
nodeos ... --plugin eosio::db_size_api_plugin
```

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
