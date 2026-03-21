## Описание

Плагин `net_plugin` реализует одноранговый обмен блоками и транзакциями с другими узлами COOPOS/EOSIO: исходящие и входящие соединения, синхронизация цепи, ретрансляция транзакций (если не отключена политикой узла или режимом чтения цепи). Управление соединениями по HTTP — у [`net_api_plugin`](../net_api_plugin/index.md).

## Использование

```console
# config.ini
plugin = eosio::net_plugin
[options]
```
```sh
# command-line
nodeos ... --plugin eosio::net_plugin [options]
```

## Опции

Задаются в командной строке `nodeos` и в `config.ini`:

```console
Параметры конфигурации eosio::net_plugin:
  --p2p-listen-endpoint arg (=0.0.0.0:9876)
                                        host:port для прослушивания входящих
                                        P2P-подключений
  --p2p-server-address arg              внешне видимый host:port узла (для
                                        идентификации); по умолчанию как
                                        p2p-listen-endpoint
  --p2p-peer-address arg                адрес пира для исходящего подключения;
                                        можно задавать несколько раз.
                                        Синтаксис: host:port[:trx|blk]
                                        суффиксы trx/blk — слать только
                                        транзакции или только блоки.
                                        Примеры:
                                            p2p.example.org:9876
                                            p2p.trx.example.org:9876:trx
                                            p2p.blk.example.org:9876:blk

  --p2p-max-nodes-per-host arg (=1)     макс. число клиентов с одного IP
  --p2p-accept-transactions arg (=1)    принимать транзакции по P2P, проверять
                                        и ретранслировать при валидности
  --agent-name arg (=EOS Test Agent)    имя узла для отображения пирам
  --allowed-connection arg (=any)       any | producers | specified | none.
                                        Для specified нужен хотя бы один
                                        peer-key. Варианты producers и
                                        specified можно комбинировать.
  --peer-key arg                        публичный ключ разрешённого пира;
                                        можно несколько раз
  --peer-private-key arg                пара [публичный ключ, приватный WIF];
                                        можно несколько раз
  --max-clients arg (=25)               макс. число входящих клиентов; 0 — без
                                        лимита
  --connection-cleanup-period arg (=30) пауза (сек) перед очисткой «мёртвых»
                                        соединений
  --max-cleanup-time-msec arg (=10)     лимит времени (мс) на одну итерацию
                                        очистки соединений
  --p2p-dedup-cache-expire-time-sec arg (=10)
                                        как долго (сек) хранить id транзакций
                                        для дедупликации
  --net-threads arg (=2)                число рабочих потоков пула net_plugin
  --sync-fetch-span arg (=100)          сколько блоков запрашивать за один раз
                                        у пира при синхронизации
  --use-socket-read-watermark arg (=0)  экспериментальная оптимизация чтения
                                        сокета (watermark)
  --peer-log-format arg (=["${_name}" - ${_cid} ${_ip}:${_port}] )
                                        шаблон строки для логов о пирах;
                                        подстановки ${имя_переменной}.
                                        Переменные:
                                           _name  имя, сообщённое пиром

                                           _cid   внутренний id соединения

                                           _id    id пира (64 hex)

                                           _sid   первые 8 символов _peer.id

                                           _ip    удалённый IP

                                           _port  удалённый порт

                                           _lip   локальный IP к пиру

                                           _lport локальный порт к пиру
  --p2p-keepalive-interval-ms arg (=10000)
                                        интервал keepalive (мс)
```

## Зависимости

Нет
