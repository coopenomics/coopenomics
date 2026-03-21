## Описание

Плагин `producer_api_plugin` добавляет JSON-RPC-методы для управления режимом продюсера на лету: пауза/возобновление выпуска блоков, запрос состояния паузы, часть служебных вызовов для снимков и протокольных особенностей узла (набор методов зависит от версии узла). Транспорт — тот же HTTP, что настраивает [`http_plugin`](../http_plugin/index.md).

## Справочник API

[Producer API](https://docs.coopenomics.world/api/producer).

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
