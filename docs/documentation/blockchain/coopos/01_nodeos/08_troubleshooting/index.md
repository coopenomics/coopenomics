---
content_title: Устранение неполадок nodeos
---

### «Database dirty flag set (likely due to unclean shutdown): replay required»

`nodeos` нужно останавливать корректно: отправьте `SIGTERM`, `SIGQUIT` или `SIGINT` и дождитесь завершения. Иначе возможна эта ошибка. Тогда остаётся реплей: запуск `nodeos` с `--replay-blockchain`.

### Ошибка «Memory does not match data» при перезапуске

При сообщении вроде `St9exception: content of memory does not match data expected by executable` попробуйте запустить `nodeos` с одной из опций (полный список — `nodeos --help`):

```
Параметры командной строки для eosio::chain_plugin:
    --force-all-checks                    не пропускать проверки, которые при
                                          реплее необратимых блоков можно было
                                          бы пропустить
    --replay-blockchain                   очистить состояние цепи и реплеить
                                          все блоки
    --hard-replay-blockchain              очистить состояние, восстановить
                                          блоки из журнала и реплеить
    --delete-all-blocks                   очистить состояние и журнал блоков
```

### Ошибка «Could not grow database file to requested size.»

Запустите `nodeos` с `--shared-memory-size-mb 1024`. Файл shared memory ~1 ГБ позволяет порядка полумиллиона транзакций.

### Какая версия COOPOS запущена / к какой версии подключаюсь?

При настройках по умолчанию `cleos get info` покажет поле `server_version`. Если `nodeos` не на дефолтном URL, укажите адрес:

```sh
cleos --url http://localhost:8888 get info
```

Только строка версии:

```sh
cleos --url http://localhost:8888 get info | grep server_version
```

### Ошибка 3070000: WASM Exception

При развёртывании `eosio.bios` или `eosio.system` для загрузки цепочки на базе COOPOS и ошибке вроде `Publishing contract... Error 3070000: WASM Exception Error Details: env.set_proposed_producers_ex unresolveable` нужно сначала активировать протокольную функцию `PREACTIVATE_FEATURE`.
