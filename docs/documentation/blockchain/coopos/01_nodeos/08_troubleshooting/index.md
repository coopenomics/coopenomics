---
content_title: Устранение неполадок nodeos
---

### «Database dirty flag set (likely due to unclean shutdown): replay required»

`nodeos` нужно останавливать корректно: отправьте `SIGTERM`, `SIGQUIT` или `SIGINT` и дождитесь завершения. Иначе возможна эта ошибка. Тогда остаётся реплей: запуск `nodeos` с `--replay-blockchain`.

### Ошибка «Memory does not match data» при перезапуске

При сообщении вроде `St9exception: content of memory does not match data expected by executable` попробуйте запустить `nodeos` с одной из опций (полный список — `nodeos --help`):

```
Command Line Options for eosio::chain_plugin:
    --force-all-checks                    do not skip any checks that can be
                                          skipped while replaying irreversible
                                          blocks
    --replay-blockchain                   clear chain state database and replay
                                          all blocks
    --hard-replay-blockchain              clear chain state database, recover as
                                          many blocks as possible from the block
                                          log, and then replay those blocks
    --delete-all-blocks                   clear chain state database and block
                                          log
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
