
## Описание

Плагин `state_history_plugin` (State History, SHiP) пишет на диск сериализованную историю цепи (при включённых флагах — трассы действий и/или дельты таблиц состояния) и принимает подключения клиентов по отдельному endpoint (TCP или Unix-socket). Протокол потоковый, не совпадает с HTTP JSON-RPC Chain/Trace API. Общее устройство и интеграция: [State History (SHiP)](../../../../state-history-ship.md).

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
Параметры командной строки для eosio::state_history_plugin:

  --delete-state-history                удалить файлы state history
```

## Опции

Командная строка `nodeos` и `config.ini`:

```console
Параметры конфигурации eosio::state_history_plugin:
  --state-history-dir arg (="state-history")
                                        каталог state-history (абсолютный путь
                                        или относительно каталога данных узла)
  --trace-history                       включить запись трасс (trace history)
  --chain-state-history                 включить историю состояния цепи
  --state-history-endpoint arg (=127.0.0.1:8080)
                                        адрес:порт для входящих подключений
                                        клиентов SHiP. Внимание: не открывайте
                                        порт в публичную сеть.
  --state-history-unix-socket-path arg  путь Unix-socket (относительно
                                        data-dir) для входящих подключений
  --trace-history-debug-mode            режим отладки для trace history
  --state-history-log-retain-blocks arg если задано, периодически обрезать
                                        файлы state history, оставляя только
                                        указанное число последних блоков
```

## Практические руководства

* [Быстрый старт без старой истории на существующих цепочках](10_how-to-fast-start-without-old-history.md)
* [Реплей или ресинхронизация с полной историей](20_how-to-replay-or-resync-with-full-history.md)
* [Переносимый снимок с полной state history](30_how-to-create-snapshot-with-full-history.md)
* [Восстановление переносимого снимка с полной state history](40_how-to-restore-snapshot-with-full-history.md)
