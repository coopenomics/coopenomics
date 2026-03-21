## Описание

Плагин `net_api_plugin` регистрирует на HTTP-сервере [`http_plugin`](../http_plugin/index.md) JSON-RPC-методы для управления P2P-слоем [`net_plugin`](../net_plugin/index.md): подключение и отключение пиров, список соединений, статус сети.

## Справочник API

[Net API](https://docs.coopenomics.world/api/net).

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
