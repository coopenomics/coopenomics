
## Описание

Плагин `state_history_plugin` сохраняет исторические данные о состоянии блокчейна. Получает данные от других узлов и кэширует их в файлах. Слушает сокет для подключения приложений и отдаёт данные согласно опциям, заданным при запуске `nodeos`.

## Использование

```console
# config.ini
plugin = eosio::state_history_plugin
[options]
```
```sh
# command-line
nodeos ... --plugin eosio::state_history_plugin [operations] [options]
```

## Операции (только CLI)

Только командная строка `nodeos`:

```console
Command Line Options for eosio::state_history_plugin:

  --delete-state-history                clear state history files
```

## Опции

Командная строка `nodeos` и `config.ini`:

```console
Config Options for eosio::state_history_plugin:
  --state-history-dir arg (="state-history")
                                        the location of the state-history
                                        directory (absolute path or relative to
                                        application data dir)
  --trace-history                       enable trace history
  --chain-state-history                 enable chain state history
  --state-history-endpoint arg (=127.0.0.1:8080)
                                        the endpoint upon which to listen for
                                        incoming connections. Caution: only
                                        expose this port to your internal
                                        network.
  --state-history-unix-socket-path arg  the path (relative to data-dir) to
                                        create a unix socket upon which to
                                        listen for incoming connections.
  --trace-history-debug-mode            enable debug mode for trace history
  --state-history-log-retain-blocks arg if set, periodically prune the state
                                        history files to store only configured
                                        number of most recent blocks
```

## Практические руководства

* [Быстрый старт без старой истории на существующих цепочках](10_how-to-fast-start-without-old-history.md)
* [Реплей или ресинхронизация с полной историей](20_how-to-replay-or-resync-with-full-history.md)
* [Переносимый снимок с полной state history](30_how-to-create-snapshot-with-full-history.md)
* [Восстановление переносимого снимка с полной state history](40_how-to-restore-snapshot-with-full-history.md)
