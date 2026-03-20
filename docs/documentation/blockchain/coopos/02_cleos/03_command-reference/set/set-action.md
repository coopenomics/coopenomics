## Описание
Задать или обновить состояние действия в блокчейне.

**Команда**

```sh
cleos set action
```
**Вывод**

```console
Usage: cleos set action [OPTIONS] SUBCOMMAND

Options:
  -h,--help                   Print this help message and exit

Subcommands:
  permission                  set parmaters dealing with account permissions
```
**Команда**

```sh
cleos set action permission
```

## Позиционные параметры

`account` TEXT — аккаунт, для которого задаётся или удаляется полномочие разрешения (обязательно)

`code` _Text_ — аккаунт, которому принадлежит код действия

`type` _Type_ — тип действия

`requirement` _Type_ — имя разрешения, требуемого для выполнения данного действия

## Опции
`-h,--help` — вывести справку и выйти

`-x,--expiration` _Type:Text_ — время в секундах до истечения транзакции, по умолчанию 30 с

`-f,--force-unique` — принудительно сделать транзакцию уникальной (дополнительный расход bandwidth, снимается защита от случайной повторной отправки)

`-s,--skip-sign` — использовать ли ключи разблокированного кошелька для подписи транзакции

`-j,--json` — вывести результат в JSON

`-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)

`--return-packed` — вместе с `--dont-broadcast` получить упакованную транзакцию

`-r,--ref-block` _TEXT_ — номер блока или id блока для TAPOS (Transaction as Proof-of-Stake)

`-p,--permission`  _Type:Text_ — аккаунт и уровень разрешения для авторизации в виде `account@permission` (по умолчанию `account@active`)

`--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU на выполнение транзакции (0 — без ограничения)

`--max-net-usage` _UINT_ — верхний предел бюджета net в байтах (0 — без ограничения)

`--delay-sec` _UINT_ — задержка `delay_sec` в секундах, по умолчанию 0 с

## Использование

```sh
# Связать действие `voteproducer` с разрешением `voting`
cleos set action permission sandwichfarm eosio.system voteproducer voting -p sandwichfarm@voting

# Теперь транзакцию можно выполнить с ранее заданными разрешениями.
cleos system voteproducer approve sandwichfarm someproducer -p sandwichfarm@voting
```

## См. также
- Протокольный документ [Accounts and Permissions](/protocol-guides/04_accounts_and_permissions.md).
