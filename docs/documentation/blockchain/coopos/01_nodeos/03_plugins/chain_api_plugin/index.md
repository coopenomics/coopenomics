## Описание

Плагин `chain_api_plugin` регистрирует на HTTP-сервере [`http_plugin`](../http_plugin/index.md) набор JSON-RPC методов поверх контроллера цепи из [`chain_plugin`](../chain_plugin/index.md): сведения о цепи и узле, чтение блоков и транзакций, отправка подписанных транзакций, запросы к таблицам состояния и связанные операции.

## Справочник API

Полный перечень методов и параметров: [Chain API](https://docs.coopenomics.world/api/chain).

## Использование

```console
# config.ini
plugin = eosio::chain_api_plugin
```
```sh
# command-line
nodeos ... --plugin eosio::chain_api_plugin
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
# command-line
nodeos ... --plugin eosio::chain_plugin [operations] [options]  \
           --plugin eosio::http_plugin [options]
```
