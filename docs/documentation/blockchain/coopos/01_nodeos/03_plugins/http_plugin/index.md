## Описание

Плагин `http_plugin` поддерживается и `nodeos`, и `keosd`. На `nodeos` он поднимает HTTP (и при настройке — Unix-socket) endpoint, через который работают API-плагины (`chain_api_plugin`, `net_api_plugin` и др.). Сами методы описаны в разделе **API** документации (см. [обзор RPC](../../05_rpc_apis/index.md)).

## Использование

```console
# config.ini
plugin = eosio::http_plugin
[options]
```
```sh
# command-line
nodeos ... --plugin eosio::http_plugin [options]
 (or)
keosd ... --plugin eosio::http_plugin [options]
```

## Опции

Задаются в командной строке и в `config.ini`:

```console
Параметры конфигурации eosio::http_plugin:
  --unix-socket-path arg                имя файла Unix-socket для HTTP RPC
                                        (относительно data-dir); пусто —
                                        отключить
  --http-server-address arg (=127.0.0.1:8888)
                                        локальный IP и порт для входящих HTTP;
                                        пусто — отключить
  --access-control-allow-origin arg     значение Access-Control-Allow-Origin
                                        в ответах
  --access-control-allow-headers arg    значение Access-Control-Allow-Headers
                                        в ответах
  --access-control-max-age arg          значение Access-Control-Max-Age в
                                        ответах
  --access-control-allow-credentials    возвращать ли Access-Control-Allow-
                                        Credentials: true в ответах
  --max-body-size arg (=2097152)        максимальный размер тела запроса RPC
                                        (байты)
  --http-max-bytes-in-flight-mb arg (=500)
                                        лимит памяти (МиБ) на обработку HTTP-
                                        запросов; -1 без лимита; при превышении
                                        — ответ 429
  --http-max-in-flight-requests arg (=-1)
                                        лимит одновременных HTTP-запросов; -1
                                        без лимита; при превышении — 429
  --http-max-response-time-ms arg (=30) максимальное время обработки запроса
                                        (мс); -1 без лимита
  --verbose-http-errors                 добавлять текст ошибки из лога в HTTP-
                                        ответы
  --http-validate-host arg (=1)         при false любой заголовок Host считается
                                        допустимым
  --http-alias arg                      дополнительные допустимые значения Host;
                                        можно задавать несколько раз; по
                                        умолчанию учитывается http(s)-адрес
                                        сервера
  --http-threads arg (=2)               число рабочих потоков пула HTTP
  --http-keep-alive arg (=1)            при false не держать соединения alive,
                                        даже если клиент просит
```

## Зависимости

Нет
