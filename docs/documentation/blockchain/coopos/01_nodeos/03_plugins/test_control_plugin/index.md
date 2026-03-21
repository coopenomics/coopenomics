
## Описание

Плагин `test_control_plugin` слушает внутренние команды остановки узла по условию на цепи: при достижении заданного места в последовательности блоков выбранного продюсера `nodeos` завершается штатно. Ориентир — **голова цепи** или **последний необратимый блок (LIB)** в зависимости от параметров запроса. Назначение — автоматизированные тесты и детерминированные сценарии реплея; на публичных узлах не используют.

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
