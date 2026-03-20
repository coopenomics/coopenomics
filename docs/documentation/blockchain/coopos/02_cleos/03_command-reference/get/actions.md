## Описание
Получить действия, где заданный аккаунт указан в авторизации или как получатель

## Позиционные параметры
- `account_name` _TEXT_ — аккаунт для запроса (обязательно)
- `pos` _INT_ — порядковый номер действия для этого аккаунта, -1 — последнее (необязательно)
- `offset` _INT_ — диапазон действий: при положительном offset — [pos, pos + offset], при отрицательном — [pos - offset, pos]

## Опции

- `-j,--json` — полный JSON
- `--full` — не обрезать вывод действия
- `--pretty` — форматировать полный JSON действия
- `--console` — вывести консольный вывод, сгенерированный действием

## Примеры
Список действий для eosio.token

```sh
cleos get actions eosio.token
```
```console
#  seq  when                              contract::action => receiver      trx id...   args
================================================================================================================
#  976   2018-06-01T19:54:05.000     eosio.token::transfer => eosio.token   1d1fe154... {"from":"userae","to":"useraa","quantity":"0.000...
#  977   2018-06-01T19:54:05.000     eosio.token::transfer => eosio.token   a0c9e5bc... {"from":"userab","to":"useraa","quantity":"0.000...
#  978   2018-06-01T19:54:05.000     eosio.token::transfer => eosio.token   3749d0d1... {"from":"userab","to":"userah","quantity":"0.000...
#  979   2018-06-01T19:54:05.000     eosio.token::transfer => eosio.token   dda205b0... {"from":"userai","to":"useraj","quantity":"0.000...
#  980   2018-06-01T19:54:05.000     eosio.token::transfer => eosio.token   14089e9b... {"from":"userab","to":"userae","quantity":"0.000...
#  981   2018-06-01T19:54:05.000     eosio.token::transfer => eosio.token   6882cefc... {"from":"useraj","to":"userab","quantity":"0.000...
...
```
