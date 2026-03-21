
## Описание

Плагин `test_control_api_plugin` регистрирует на [`http_plugin`](../http_plugin/index.md) HTTP endpoint, который передаёт команду в [`test_control_plugin`](../test_control_plugin/index.md): завершить процесс `nodeos`, когда цепь дойдёт до заданной точки относительно блоков указанного продюсера. Отдельного пункта в оглавлении **API** документации для этого интерфейса нет; формат тела запроса см. ниже.

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

## Пример запроса

```sh
curl http://127.0.0.1:8888/v1/test_control/kill_node_on_producer \
  -X POST -H "Content-Type: application/json" \
  -d '{"producer":"eosio","where_in_sequence":1,"based_on_lib":false}'
```

Поля (см. `kill_node_on_producer_params` в исходниках узла): `producer` — аккаунт продюсера; `where_in_sequence` — номер «слота» этого продюсера в последовательности производства при отсчёте от головы цепи или от LIB (в зависимости от `based_on_lib`); `based_on_lib` — если `true`, условие отслеживается по последнему необратимому блоку, если `false` — по голове цепи.

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
plugin = eosio::test_control_plugin
plugin = eosio::test_control_api_plugin
```
```sh
# command-line
nodeos ... --plugin eosio::chain_plugin [operations] [options] \
           --plugin eosio::http_plugin [options] \
           --plugin eosio::test_control_plugin \
           --plugin eosio::test_control_api_plugin
```
