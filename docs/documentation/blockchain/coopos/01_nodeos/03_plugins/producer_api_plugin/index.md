## Описание

Плагин `producer_api_plugin` выставляет ряд конечных точек [`producer_plugin`](../producer_plugin/index.md) через RPC API под управлением [`http_plugin`](../http_plugin/index.md).

## Использование

```console
# config.ini
plugin = eosio::producer_api_plugin
```
```sh
# параметры запуска nodeos
nodeos ... --plugin eosio::producer_api_plugin
```

## Опции

Нет

## Зависимости

* [`producer_plugin`](../producer_plugin/index.md)
* [`chain_plugin`](../chain_plugin/index.md)
* [`http_plugin`](../http_plugin/index.md)

### Примеры загрузки зависимостей

```console
# config.ini
plugin = eosio::producer_plugin
[options]
plugin = eosio::chain_plugin
[options]
plugin = eosio::http_plugin
[options]
```
```sh
# command-line
nodeos ... --plugin eosio::producer_plugin [options]  \
           --plugin eosio::chain_plugin [operations] [options]  \
           --plugin eosio::http_plugin [options]
```
