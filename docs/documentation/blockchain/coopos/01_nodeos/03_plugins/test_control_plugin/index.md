
## Описание

Плагин `test_control_plugin` инициирует корректное завершение при достижении заданного блока в последовательности блоков конкретного продюсера. Можно завершаться по **head block** или по **последнему необратимому блоку**.

Предназначен для тестов, чтобы точно зафиксировать момент остановки экземпляра `nodeos`.

## Использование

```console
# config.ini
plugin = eosio::test_control_plugin
```
```sh
# command-line
nodeos ... --plugin eosio::test_control_plugin
```

## Опции

Нет

## Зависимости

* [`chain_plugin`](../chain_plugin/index.md)

### Примеры загрузки зависимостей

```console
# config.ini
plugin = eosio::chain_plugin
[options]
```
```sh
# command-line
nodeos ... --plugin eosio::chain_plugin [operations] [options]
```
