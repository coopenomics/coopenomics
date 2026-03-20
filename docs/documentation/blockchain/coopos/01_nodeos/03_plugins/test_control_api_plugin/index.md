
## Описание

Плагин `test_control_api_plugin` отправляет управляющее сообщение в [test_control_plugin](../test_control_plugin/index.md), чтобы завершить экземпляр `nodeos` на заданном блоке. Для тестирования.

## Использование

```console
# config.ini
plugin = eosio::test_control_api_plugin
```
```sh
# command-line
nodeos ... --plugin eosio::test_control_api_plugin
```

## Опции

Нет

## Пример использования

```sh
curl %s/v1/test_control/kill_node_on_producer -d '{ \"producer\":\"%s\", \"where_in_sequence\":%d, \"based_on_lib\":\"%s\" }' -X POST -H \"Content-Type: application/json\"" %
```

## Зависимости

* [`test_control_plugin`](../test_control_plugin/index.md)
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
# command-line
nodeos ... --plugin eosio::chain_plugin [operations] [options]  \
           --plugin eosio::http_plugin [options]
```
