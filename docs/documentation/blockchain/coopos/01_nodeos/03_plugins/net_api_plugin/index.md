## Описание
Плагин `net_api_plugin` выставляет функции `net_plugin` через RPC API, которое ведёт `http_plugin`. Операторы узла могут управлять P2P-соединениями активного узла.

У `net_api_plugin` четыре конечные точки RPC API:

* connect
* disconnect
* connections
* status

См. [документацию Net API](https://docs.eosnetwork.com/coopos-plugins/latest/net.api/).

!!! warning "Осторожно"
    Плагин открывает управление P2P-соединениями. Не рекомендуется включать его на публично доступном узле — возможна эксплуатация.

## Использование

```console
# config.ini
plugin = eosio::net_api_plugin
```
```sh
# command-line
nodeos ... --plugin eosio::net_api_plugin
```

## Опции

Нет

## Зависимости

* [`net_plugin`](../net_plugin/index.md)
* [`http_plugin`](../http_plugin/index.md)

### Примеры загрузки зависимостей

```console
# config.ini
plugin = eosio::net_plugin
[options]
plugin = eosio::http_plugin
[options]
```
```sh
# command-line
nodeos ... --plugin eosio::net_plugin [options]  \
           --plugin eosio::http_plugin [options]
```
