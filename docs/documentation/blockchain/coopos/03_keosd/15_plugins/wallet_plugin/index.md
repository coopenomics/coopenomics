---
content_title: Плагин wallet_plugin (keosd / nodeos)
---

## Описание

Плагин `wallet_plugin` добавляет доступ к функциям кошелька на узле.

!!! warning "Осторожно"
    Плагин не рассчитан на загрузку на публично доступном узле без дополнительных мер безопасности. Особенно это касается `wallet_api_plugin`, который ни при каких обстоятельствах не следует включать на публично доступном узле.

## Использование

```sh
# config.ini
plugin = eosio::wallet_plugin

# command-line
nodeos ... --plugin eosio::wallet_plugin
```

## Опции

Нет

## Зависимости

* `http_plugin`

[//]: # ( THIS IS A COMMENT LINK BELOW IS BROKEN )  
[//]: # ( `http_plugin` ../http_plugin.md )  

### Примеры загрузки зависимостей

```sh
# config.ini
plugin = eosio::wallet_plugin
[options]
plugin = eosio::http_plugin
[options]

# command-line
nodeos ... --plugin eosio::wallet_plugin [options]  \
           --plugin eosio::http_plugin [options]
```
