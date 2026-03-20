## Описание
Задать параметры, связанные с разрешениями аккаунта

!!! note "Ввод JSON"
    Команда требует JSON, зависящий от внутренних определений классов. Такой ввод может меняться в будущих версиях ПО COOPOS.

## Позиционные параметры
- `account` _TEXT_ — аккаунт, для которого задаётся или удаляется полномочие разрешения
- `permission` _TEXT_ — имя разрешения, для которого задаётся или удаляется полномочие
- `authority` _TEXT_ — [delete] NULL, [create/update] публичный ключ, JSON-строка или файл с описанием полномочия
- `parent` _TEXT_ — [create] имя родительского разрешения (по умолчанию: `active`)
## Опции

`-h,--help` — вывести справку и выйти

`--add-code` [code] — добавить разрешение `eosio.code` к указанному полномочию

`--remove-code` [code] — убрать разрешение `eosio.code` из указанного полномочия

`-x,--expiration` _TEXT_ — время в секундах до истечения транзакции, по умолчанию 30 с

`-f,--force-unique` — принудительно сделать транзакцию уникальной (дополнительный расход bandwidth, снимается защита от случайной повторной отправки)

`-s,--skip-sign` — использовать ли ключи разблокированного кошелька для подписи транзакции

`-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)

`-r,--ref-block` _TEXT_ — номер блока или id блока для TAPOS (Transaction as Proof-of-Stake)

`-p,--permission`  _TEXT_ — аккаунт и уровень разрешения для авторизации в виде `account@permission` (по умолчанию `account@active`)

`--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU на выполнение транзакции (0 — без ограничения)

`--max-net-usage` _UINT_ — верхний предел бюджета net в байтах (0 — без ограничения)

`--delay-sec` _UINT_ — задержка `delay_sec` в секундах, по умолчанию 0 с

## Команда
Чтобы менять разрешения аккаунта, нужны полномочия на этот аккаунт и на изменяемое разрешение.

Первый пример связывает новый ключ с разрешением `active` аккаунта.

```sh
cleos set account permission test active '{"threshold":1,"keys":[{"key":"EOS8X7Mp7apQWtL6T2sfSZzBcQNUqZB7tARFEm9gA9Tn9nbMdsvBB","weight":1}],"accounts":[{"permission":{"actor":"acc2","permission":"active"},"weight":50}]}' owner
```
Во втором примере то же разрешение меняется: ключ из предыдущего примера убирается, а разрешение `active` аккаунта `test` делегируется другому аккаунту.

```sh
cleos set account permission test active '{"threshold":1,"keys":[],"accounts":[{"permission":{"actor":"acc1","permission":"active"},"weight":50},{"permission":{"actor":"sandwich","permission":"active"},"weight":1}]}' owner
```

Третий пример показывает настройку разрешений для multisig.

```sh
cleos set account permission test active '{"threshold" : 100, "keys" : [{"key":"EOS8X7Mp7apQWtL6T2sfSZzBcQNUqZB7tARFEm9gA9Tn9nbMdsvBB","weight":25}], "accounts" : [{"permission":{"actor":"sandwich","permission":"active"},"weight":75}]}' owner
```
JSON-объект в этой команде состоит из двух типов объектов.

Объект полномочия (authority) …

```json
{
  "threshold"       : 100,    /*целое: суммарный вес подписей, необходимый для авторизации*/
  "keys"            : [],     /*массив отдельных разрешений, заданных публичным ключом EOS*/
  "accounts"        : []      /*массив отдельных разрешений, заданных аккаунтом EOS*/
}
```
…в который входят один или несколько объектов разрешения.

```json
/*Разрешение по ключу*/
{
  "permission" : {
    "key"           : "EOS8X7Mp7apQWtL6T2sfSZzBcQNUqZB7tARFEm9gA9Tn9nbMdsvBB",
    "permission"    : "active"
  },
  weight            : 25      /*вес подписи с этого разрешения*/
}

/*Разрешение по аккаунту*/
{
  "permission" : {
    "account"       : "sandwich",
    "permission"    : "active"
  },
  weight            : 75      /*вес подписи с этого разрешения*/
}
```

## См. также
- Протокольный документ [Accounts and Permissions](/protocol-guides/04_accounts_and_permissions.md).
