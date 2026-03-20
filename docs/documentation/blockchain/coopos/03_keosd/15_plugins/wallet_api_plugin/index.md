---
content_title: Плагин wallet_api_plugin
---

## Описание

Плагин `wallet_api_plugin` выставляет возможности [`wallet_plugin`](../wallet_plugin/index.md) через RPC API, управляемое [`http_plugin`](../../../01_nodeos/03_plugins/http_plugin/index.md).

!!! warning "Осторожно"
    Плагин открывает доступ к кошелькам. Не рекомендуется запускать его на публично доступном узле. Начиная с 1.2.0, `wallet_api_plugin` доступен только через `keosd`; в `nodeos` больше не поддерживается.

## Использование

```sh
# config.ini
plugin = eosio::wallet_api_plugin

# command-line
keosd ... --plugin eosio::wallet_api_plugin
```

## Опции

Нет

## Зависимости

* [`wallet_plugin`](../wallet_plugin/index.md)
* [`http_plugin`](../../../01_nodeos/03_plugins/http_plugin/index.md)

### Примеры загрузки зависимостей

Следующие плагины подключаются с настройками по умолчанию, если не указаны в командной строке или `config.ini`:

```sh
# config.ini
plugin = eosio::wallet_plugin
[options]
plugin = eosio::http_plugin
[options]

# command-line
keosd ... --plugin eosio::wallet_plugin [options]  \
           --plugin eosio::http_plugin [options]
```
