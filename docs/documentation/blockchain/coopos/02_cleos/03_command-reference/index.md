# Справка по командам cleos

Ниже собрана документация по подкомандам `cleos`: одна страница вместо разрозненных файлов. Внутренние ссылки ведут на якоря этой страницы.

## Оглавление

- [`version`](#cleos-ref-version)
- [`create`](#cleos-ref-create)
- [`convert`](#cleos-ref-convert)
- [`get`](#cleos-ref-get)
- [`set`](#cleos-ref-set)
- [`transfer`](#cleos-ref-transfer)
- [`net`](#cleos-ref-net)
- [`wallet`](#cleos-ref-wallet)
- [`sign`](#cleos-ref-sign)
- [`push`](#cleos-ref-push)
- [`multisig`](#cleos-ref-multisig)
- [`system`](#cleos-ref-system)

---

## cleos version {#cleos-ref-version}

### Описание

Получить сведения о версии

### Команда

```sh
cleos version
```

### Подкоманды
[client](#cleos-cmd-version-client) — версия клиента

```sh
cleos version client
```

### Вывод


```console
Build version: 7f854a61
```

---

### `client` {#cleos-cmd-version-client}

#### Описание

Получить сведения о версии клиента

#### Позиционные параметры
нет
#### Использование

```sh
cleos version client
```

---

## cleos create {#cleos-ref-create}

### Описание
Создать различные сущности вне и в блокчейне

### Подкоманды
- [key](#cleos-cmd-create-key) — создать новую пару ключей и вывести публичный и приватный ключ
- [account](#cleos-cmd-create-account) — создать новый аккаунт в блокчейне

```console
Create various items, on and off the blockchain
Usage: cleos create SUBCOMMAND

Subcommands:
  key                         Create a new keypair and print the public and private keys
  account                     Create a new account on the blockchain
```

---

### `key` {#cleos-cmd-create-key}

#### Описание

Создаёт новую пару ключей и выводит публичный и приватный ключ

#### Использование

```console
Usage: cleos create key [OPTIONS]

Options:
  -h,--help                   Print this help message and exit
  --r1                        Generate a key using the R1 curve (iPhone), instead of the K1 curve (Bitcoin)
  -f,--file TEXT              Name of file to write private/public key output to. (Must be set, unless "--to-console" is passed
  --to-console                Print private/public keys to console.
```

#### Команда

```sh
cleos create key -f passwd
```

#### Вывод

```console
Private key: 5KCkcSxYKZfh5Cr8CCunS2PiUKzNZLhtfBjudaUnad3PDargFQo
Public key: EOS5uHeBsURAT6bBXNtvwKtWaiDSDJSdSmc96rHVws5M1qqVCkAm6
```

---

### `account` {#cleos-cmd-create-account}

#### Описание
Создать новый аккаунт в блокчейне (предполагается, что системный контракт не ограничивает использование RAM)

#### Использование

```console
Usage: cleos create account [OPTIONS] creator name OwnerKey [ActiveKey]

Positionals:
  creator TEXT                The name of the account creating the new account (required)
  name TEXT                   The name of the new account (required)
  OwnerKey TEXT               The owner public key or permission level for the new account (required)
  ActiveKey TEXT              The active public key or permission level for the new account

Options:
  -h,--help                   Print this help message and exit
  -x,--expiration             set the time in seconds before a transaction expires, defaults to 30s
  -f,--force-unique           force the transaction to be unique. this will consume extra bandwidth and remove any protections against accidently issuing the same transaction multiple times
  -s,--skip-sign              Specify if unlocked wallet keys should be used to sign transaction
  -j,--json                   print result as json
  --json-file TEXT            save result in json format into a file
  -d,--dont-broadcast         don't broadcast transaction to the network (just print to stdout)
  --return-packed             used in conjunction with --dont-broadcast to get the packed transaction
  -r,--ref-block TEXT         set the reference block num or block id used for TAPOS (Transaction as Proof-of-Stake)
  --use-old-rpc               use old RPC push_transaction, rather than new RPC send_transaction
  -p,--permission TEXT ...    An account and permission level to authorize, as in 'account@permission' (defaults to 'creator@active')
  --max-cpu-usage-ms UINT     set an upper limit on the milliseconds of cpu usage budget, for the execution of the transaction (defaults to 0 which means no limit)
  --max-net-usage UINT        set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit)
  --delay-sec UINT            set the delay_sec seconds, defaults to 0s
```

#### Команда
Для создания аккаунта нужна пара ключей COOPOS. Ключи COOPOS можно сгенерировать командой `cleos create key`.

```sh
cleos create account inita tester EOS4toFS3YXEQCkuuw1aqDLrtHim86Gz9u3hBdcBw5KNPZcursVHq EOS7d9A3uLe6As66jzN8j44TXJUqJSK3bFjjEEqR4oTvNAB3iM9SA
```

#### Вывод

```json
{
  "transaction_id": "6acd2ece68c4b86c1fa209c3989235063384020781f2c67bbb80bc8d540ca120",
  "processed": {
    "refBlockNum": "25217",
    "refBlockPrefix": "2095475630",
    "expiration": "2017-07-25T17:54:55",
    "scope": [
      "eos",
      "inita"
    ],
    "signatures": [],
    "messages": [{
        "code": "eos",
        "type": "newaccount",
        "authorization": [{
            "account": "inita",
            "permission": "active"
          }
        ],
        "data": "c9251a0000000000b44c5a2400000000010000000102bcca6347d828d4e1868b7dfa91692a16d5b20d0ee3d16a7ca2ddcc7f6dd03344010000010000000102bcca6347d828d4e1868b7dfa91692a16d5b20d0ee3d16a7ca2ddcc7f6dd03344010000010000000001c9251a000000000061d0640b000000000100010000000000000008454f5300000000"
      }
    ],
    "output": [{
        "notify": [],
        "sync_transactions": [],
        "async_transactions": []
      }
    ]
  }
}
```

---

## cleos convert {#cleos-ref-convert}

### Описание
Упаковка и распаковка транзакций

### Подкоманды
- [pack_transaction](#cleos-cmd-convert-pack_transaction) — из обычного подписанного JSON в упакованный вид
- [unpack_transaction](#cleos-cmd-convert-unpack_transaction) — из упакованного в обычный подписанный JSON
- [pack_action_data](#cleos-cmd-convert-pack_action_data) — из JSON данных действия в упакованный вид
- [unpack_action_data](#cleos-cmd-convert-unpack_action_data) — из упакованных данных действия в JSON

---

### `pack transaction` {#cleos-cmd-convert-pack_transaction}

#### Описание

Из обычного подписанного JSON в упакованный вид

#### Позиционные параметры

- `transaction` _TEXT_ — обычная подписанная транзакция в JSON (строка)

#### Опции

- `-h,--help` — вывести справку и выйти
- `--pack-action-data` — упаковать все данные действий внутри транзакции (требуется обращение к `nodeos`)

#### Использование


```sh
cleos convert pack_transaction '{
  "expiration": "2018-08-02T20:24:36",
  "ref_block_num": 14207,
  "ref_block_prefix": 1438248607,
  "max_net_usage_words": 0,
  "max_cpu_usage_ms": 0,
  "delay_sec": 0,
  "context_free_actions": [],
  "actions": [{
      "account": "eosio",
      "name": "newaccount",
      "authorization": [{
          "actor": "eosio",
          "permission": "active"
        }
      ],
      "data": "0000000000ea305500a6823403ea30550100000001000240cc0bf90a5656c8bb81f0eb86f49f89613c5cd988c018715d4646c6bd0ad3d8010000000100000001000240cc0bf90a5656c8bb81f0eb86f49f89613c5cd988c018715d4646c6bd0ad3d801000000"
    }
  ],
  "transaction_extensions": []
}'
```

#### Вывод

```json
{
  "signatures": [],
  "compression": "none",
  "packed_context_free_data": "",
  "packed_trx": "8468635b7f379feeb95500000000010000000000ea305500409e9a2264b89a010000000000ea305500000000a8ed3232660000000000ea305500a6823403ea30550100000001000240cc0bf90a5656c8bb81f0eb86f49f89613c5cd988c018715d4646c6bd0ad3d8010000000100000001000240cc0bf90a5656c8bb81f0eb86f49f89613c5cd988c018715d4646c6bd0ad3d80100000000"
}
```

---

### `unpack transaction` {#cleos-cmd-convert-unpack_transaction}

#### Описание

Из упакованного вида в обычный подписанный JSON

#### Позиционные параметры

- `transaction` _TEXT_ — JSON упакованной транзакции (строка с полями `packed_trx` и при необходимости `compression`)

#### Опции

- `-h,--help` — вывести справку и выйти
- `--unpack-action-data` — распаковать все данные действий внутри транзакции (требуется обращение к `nodeos`)

#### Использование

```sh
cleos convert unpack_transaction '{
  "signatures": [
    "SIG_K1_KmRbWahefwxs6uyCGNR6wNRjw7cntEeFQhNCbyg8S92Kbp7zdSSVGTD2QS7pNVWgcU126zpxaBp9CwUxFpRwSnfkjd46bS"
  ],
  "compression": "none",
  "packed_context_free_data": "",
  "packed_trx": "8468635b7f379feeb95500000000010000000000ea305500409e9a2264b89a010000000000ea305500000000a8ed3232660000000000ea305500a6823403ea30550100000001000240cc0bf90a5656c8bb81f0eb86f49f89613c5cd988c018715d4646c6bd0ad3d8010000000100000001000240cc0bf90a5656c8bb81f0eb86f49f89613c5cd988c018715d4646c6bd0ad3d80100000000"
}'
```

#### Вывод


```json
{
  "expiration": "2018-08-02T20:24:36",
  "ref_block_num": 14207,
  "ref_block_prefix": 1438248607,
  "max_net_usage_words": 0,
  "max_cpu_usage_ms": 0,
  "delay_sec": 0,
  "context_free_actions": [],
  "actions": [{
      "account": "eosio",
      "name": "newaccount",
      "authorization": [{
          "actor": "eosio",
          "permission": "active"
        }
      ],
      "data": "0000000000ea305500a6823403ea30550100000001000240cc0bf90a5656c8bb81f0eb86f49f89613c5cd988c018715d4646c6bd0ad3d8010000000100000001000240cc0bf90a5656c8bb81f0eb86f49f89613c5cd988c018715d4646c6bd0ad3d801000000"
    }
  ],
  "transaction_extensions": [],
  "signatures": [
    "SIG_K1_KmRbWahefwxs6uyCGNR6wNRjw7cntEeFQhNCbyg8S92Kbp7zdSSVGTD2QS7pNVWgcU126zpxaBp9CwUxFpRwSnfkjd46bS"
  ],
  "context_free_data": []
}

```

---

### `pack action data` {#cleos-cmd-convert-pack_action_data}

#### Описание
Из JSON данных действия в упакованный вид

#### Позиционные параметры
- `account` _TEXT_ — аккаунт, на котором развёрнут контракт
- `name` _TEXT_ — имя вызываемого действия
- `unpacked_action_data` _TEXT_ — данные действия в JSON

#### Опции

- `-h,--help` — вывести справку и выйти

#### Использование
```sh
 cleos convert pack_action_data eosio unlinkauth '{"account":"test1", "code":"test2", "type":"eosioeosio"}'
```

#### Вывод


```console
000000008090b1ca000000000091b1ca000075982aea3055
```

---

### `unpack action data` {#cleos-cmd-convert-unpack_action_data}

#### Описание
Из упакованных данных действия в JSON

#### Позиционные параметры
- `account` _TEXT_ — аккаунт, на котором развёрнут контракт
- `name` _TEXT_ — имя вызываемого действия
- `packed_action_data` _TEXT_ — данные действия в виде упакованной hex-строки 
#### Опции

- `-h,--help` — вывести справку и выйти

#### Использование


```sh
 cleos convert unpack_action_data eosio unlinkauth 000000008090b1ca000000000091b1ca000075982aea3055
```

#### Вывод


```json
{
  "account": "test1",
  "code": "test2",
  "type": "eosioeosio"
}
```

---

## cleos get {#cleos-ref-get}

### Описание

Получить различные данные и сведения из блокчейна

### Подкоманды
- [info](#cleos-cmd-get-info) — текущая информация о блокчейне
- [block](#cleos-cmd-get-block) — полный блок из блокчейна
- [account](#cleos-cmd-get-account) — аккаунт из блокчейна
- [code](#cleos-cmd-get-code) — код и ABI аккаунта
- [abi](#cleos-cmd-get-abi) — ABI аккаунта
- [table](#cleos-cmd-get-table) — содержимое таблицы БД
- [scope](#cleos-cmd-get-scope) — список scope и таблиц контракта
- [currency](#cleos-cmd-get-currency) — сведения о стандартных валютах
- [accounts](#cleos-cmd-get-accounts) — аккаунты, связанные с публичным ключом
- [servants](#cleos-cmd-get-servants) — аккаунты-подчинённые (servants) для заданного аккаунта
- [transaction](#cleos-cmd-get-transaction) — транзакция из блокчейна
- [actions](#cleos-cmd-get-actions) — действия, где в авторизации или у получателя указан заданный аккаунт
- [schedule](#cleos-cmd-get-schedule) — расписание продюсеров
- [transaction_id](#cleos-cmd-get-transaction_id) — id транзакции по объекту транзакции

---

### `info` {#cleos-cmd-get-info}

#### Описание

Получить текущую информацию о блокчейне

#### Позиционные параметры
Параметры не принимаются. 
#### Опции
- `-h`, `--help` — вывести справку и выйти
#### Пример


```sh
cleos get info
```

Команда возвращает текущее состояние блокчейна. 

```json
{
  "server_version": "7451e092",
  "head_block_num": 6980,
  "last_irreversible_block_num": 6963,
  "head_block_id": "00001b4490e32b84861230871bb1c25fb8ee777153f4f82c5f3e4ca2b9877712",
  "head_block_time": "2017-12-07T09:18:48",
  "head_block_producer": "initp",
  "recent_slots": "1111111111111111111111111111111111111111111111111111111111111111",
  "participation_rate": "1.00000000000000000"
}
```

---

### `block` {#cleos-cmd-get-block}

#### Описание
Получить полный блок из блокчейна

#### Позиционные параметры
- `block` _TEXT_ — номер **или** id блока
#### Опции
- `--header-state` — состояние заголовка блока из fork database
- `--info` — краткая информация о блоке только по номеру
#### Пример

##### Полный блок:

```sh
cleos get block 1
```
или
```sh
cleos get block 0000000130d70e94e0022fd2fa035cabb9e542c34ea27f572ac90b5a7aa3d891
```

Вывод — объект блока, похожий на следующий:

```json
{
  "timestamp": "2018-03-02T12:00:00.000",
  "producer": "",
  "confirmed": 1,
  "previous": "0000000000000000000000000000000000000000000000000000000000000000",
  "transaction_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
  "action_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
  "schedule_version": 0,
  "new_producers": null,
  "header_extensions": [],
  "producer_signature": "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne",
  "transactions": [],
  "block_extensions": [],
  "id": "0000000130d70e94e0022fd2fa035cabb9e542c34ea27f572ac90b5a7aa3d891",
  "block_num": 1,
  "ref_block_prefix": 3526296288
}
```

##### Информация о блоке:

```sh
cleos get block --info 1
```

Вывод — объект block info, похожий на следующий:

```json
{
  "block_num": 1,
  "ref_block_num": 1,
  "id": "0000000130d70e94e0022fd2fa035cabb9e542c34ea27f572ac90b5a7aa3d891",
  "timestamp": "2018-03-02T12:00:00.000",
  "producer": "",
  "confirmed": 1,
  "previous": "0000000000000000000000000000000000000000000000000000000000000000",
  "transaction_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
  "action_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
  "schedule_version": 0,
  "producer_signature": "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne",
  "ref_block_prefix": 3526296288
}
```

#### Примечания
Объект block info фиксированного размера и не содержит полей: new_producers, header_extensions, transactions, block_extensions.

---

### `account` {#cleos-cmd-get-account}

#### Описание
Получить аккаунт из блокчейна

#### Позиционные параметры
- `name` _TEXT_ — имя запрашиваемого аккаунта
- `core-symbol` _TEXT_ — ожидаемый базовый символ сети

#### Опции
- `-j,--json` — вывод в формате JSON

#### Примеры

##### Форматированные данные для пользователя **eosio**

```sh
cleos get account eosio
```
```console
privileged: true
permissions:
     owner     1:    1 EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
        active     1:    1 EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
memory:
     quota:        -1 bytes  used:      1.22 Mb   

net bandwidth: (averaged over 3 days)
     used:                -1 bytes
     available:           -1 bytes
     limit:               -1 bytes

cpu bandwidth: (averaged over 3 days)
     used:                -1 us
     available:           -1 us   
     limit:               -1 us   

producers:     <not voted>
```
##### JSON для пользователя **eosio**

```sh
cleos get account eosio --json
```
```json
{
  "account_name": "eosio",
  "privileged": true,
  "last_code_update": "2018-05-23T18:00:25.500",
  "created": "2018-03-02T12:00:00.000",
  "ram_quota": -1,
  "net_weight": -1,
  "cpu_weight": -1,
  "net_limit": {
    "used": -1,
    "available": -1,
    "max": -1
  },
  "cpu_limit": {
    "used": -1,
    "available": -1,
    "max": -1
  },
  "ram_usage": 1279625,
  "permissions": [{
      "perm_name": "active",
      "parent": "owner",
      "required_auth": {
        "threshold": 1,
        "keys": [{
            "key": "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
            "weight": 1
          }
        ],
        "accounts": [],
        "waits": []
      }
    },{
      "perm_name": "owner",
      "parent": "",
      "required_auth": {
        "threshold": 1,
        "keys": [{
            "key": "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
            "weight": 1
          }
        ],
        "accounts": [],
        "waits": []
      }
    }
  ],
  "total_resources": null,
  "delegated_bandwidth": null,
  "voter_info": {
    "owner": "eosio",
    "proxy": "",
    "producers": [],
    "staked": 0,
    "last_vote_weight": "0.00000000000000000",
    "proxied_vote_weight": "0.00000000000000000",
    "is_proxy": 0,
    "deferred_trx_id": 0,
    "last_unstake_time": "1970-01-01T00:00:00",
    "unstaking": "0.0000 SYS"
  }
}
```

#### См. также
- Протокольный документ [Accounts and Permissions](/protocol-guides/04_accounts_and_permissions.md).

---

### `code` {#cleos-cmd-get-code}

#### Описание
Получить код и ABI аккаунта

#### Позиционные параметры
- `name` _TEXT_ — аккаунт, чей код нужно получить
#### Опции
- `-c,--code` _TEXT_ — файл для сохранения контракта _.wast_
- `-a,--abi` _TEXT_ — файл для сохранения контракта _.abi_
- `--wasm` — сохранить контракт как wasm
#### Примеры
Вывести только хэш кода контракта eosio.token 

```sh
cleos get code eosio.token
```
```console
code hash: f675e7aeffbf562c033acfaf33eadff255dacb90d002db51c7ad7cbf057eb791
```

Получить и сохранить ABI контракта eosio.token

```sh
cleos get code eosio.token -a eosio.token.abi
```
```console
code hash: f675e7aeffbf562c033acfaf33eadff255dacb90d002db51c7ad7cbf057eb791
saving abi to eosio.token.abi
```

Получить и сохранить WAST контракта eosio.token

```sh
cleos get code eosio.token -c eosio.token.wast
```
```console
code hash: f675e7aeffbf562c033acfaf33eadff255dacb90d002db51c7ad7cbf057eb791
saving wast to eosio.token.wast
```

---

### `abi` {#cleos-cmd-get-abi}

#### Описание
Получить ABI аккаунта

#### Позиционные параметры
- `name` _TEXT_ — аккаунт, чей ABI нужно получить

#### Опции
- `-f,--file` _TEXT_ — файл для сохранения `.abi` вместо вывода в консоль

#### Примеры
Получить и сохранить ABI контракта eosio.token

```sh
cleos get abi eosio.token -f eosio.token.abi
```
```console
saving abi to eosio.token.abi
```

---

### `table` {#cleos-cmd-get-table}

#### Описание

Получить содержимое таблицы базы данных

#### Позиционные параметры
`account` _TEXT_ — аккаунт, на котором развёрнут смарт-контракт, владеющий таблицей

`scope` _TEXT_ — scope внутри контракта, в котором находится таблица

`table` _TEXT_ — имя таблицы по ABI контракта

#### Опции
`-l,--limit` _UINT_ — максимальное число возвращаемых строк

`-k,--key` _TEXT_ — (устарело) имя ключа для индексации по ABI, по умолчанию первичный ключ

`-L,--lower` _TEXT_ — JSON нижней границы ключа, по умолчанию первая запись

`-U,--upper` _TEXT_ — JSON верхней границы ключа, по умолчанию последняя запись

`--index` _TEXT_ — номер индекса: `1` — primary (первый), `2` — вторичный (в порядке multi_index), `3` — третий и т.д. Можно указать номер или имя индекса, например `secondary` или `2`

`--key-type` _TEXT_ — тип ключа для `--index`; для primary только `i64`. Остальные поддерживают `i64`, `i128`, `i256`, `float64`, `float128`, `ripemd160`, `sha256`. Специальный тип `name` — имя аккаунта

`--encode-type` _TEXT_ — кодировка для `--key_type`: `dec` для десятичного представления (`i[64|128|256]`, `float[64|128]`); `hex` для шестнадцатеричного (`i256`, `ripemd160`, `sha256`)

`-b,--binary` _UINT_ — вернуть значение в BINARY без интерпретации ABI как JSON

`-r,--reverse` — обход в обратном порядке

`--show-payer` — показать плательщика RAM

#### Пример
Данные таблицы `accounts` контракта eosio.token для пользователя eosio,

```sh
cleos get table eosio.token eosio accounts
```
```json
{
  "rows": [{
      "balance": "999999920.0000 SYS"
    }
  ],
  "more": false
}
```

---

### `scope` {#cleos-cmd-get-scope}

#### Описание
Получить список scope и таблиц, принадлежащих контракту

#### Позиционные параметры
- `contract` _TEXT_ — владелец таблицы

#### Опции
- `-t,--table` _TEXT_ — фильтр по имени таблицы
- `-l,--limit` _UINT_ — максимальное число возвращаемых строк
- `-L,--lower` _TEXT_ — нижняя граница scope
- `-U,--upper` _TEXT_ — верхняя граница scope
- `-r,--reverse` — обход в обратном порядке

---

### `currency` {#cleos-cmd-get-currency}

#### Описание

Подкоманды для работы со стандартными валютами

#### Подкоманды
[currency balance](#cleos-cmd-get-currency-balance) — баланс аккаунта для заданной валюты

[currency stats](#cleos-cmd-get-currency-stats) — статистика для заданной валюты

---

### `currency-balance` {#cleos-cmd-get-currency-balance}

#### Описание

Получить баланс аккаунта для заданной валюты

#### Позиционные параметры
`contract` _TEXT_ — контракт, управляющий валютой

`account` _TEXT_ — аккаунт, по которому запрашиваются балансы

`symbol` _TEXT_ — символ валюты, если контракт обслуживает несколько валют

#### Опции
У этой подкоманды нет опций

#### Пример
Баланс eosio у контракта eosio.token для символа SYS. 

```sh
cleos get currency balance eosio.token eosio SYS
```
```console
999999920.0000 SYS
```

---

### `currency-stats` {#cleos-cmd-get-currency-stats}

#### Описание
Получить статистику для заданной валюты

#### Позиционные параметры
`contract` _TEXT_ — контракт, управляющий валютой

`symbol` _TEXT_ — символ валюты, если контракт обслуживает несколько валют
#### Опции
У этой подкоманды нет опций
#### Пример
Статистика токена SYS контракта eosio.token. 

```sh
cleos get currency stats eosio.token SYS
```
```json
{
  "SYS": {
    "supply": "1000000000.0000 SYS",
    "max_supply": "10000000000.0000 SYS",
    "issuer": "eosio"
  }
}
```

---

### `accounts` {#cleos-cmd-get-accounts}

#### Описание
Получить все аккаунты, связанные с указанным публичным ключом

!!! note
    Команда не возвращает привилегированные аккаунты.

#### Позиционные параметры
`public_key` _TEXT_ — публичный ключ для поиска аккаунтов
#### Опции
- `-j,--json` — вывод в формате JSON
#### Пример


```sh
cleos get accounts EOS8mUftJXepGzdQ2TaCduNuSPAfXJHf22uex4u41ab1EVv9EAhWt
{
  "account_names": [
    "testaccount"
  ]
}
```

---

### `servants` {#cleos-cmd-get-servants}

#### Описание
Получить аккаунты-подчинённые (controlled) для заданного аккаунта 

#### Сведения

**Команда**

```sh
cleos get servants
```
**Вывод**

```console
Usage: cleos get servants account

Positionals:
  account TEXT                The name of the controlling account
```

#### Команда

```sh
cleos get servants inita
```

#### Вывод

```json
{
  "controlled_accounts": [
    "tester"
  ]
}
```

---

### `transaction` {#cleos-cmd-get-transaction}

#### Описание
Получить транзакцию из блокчейна

#### Позиционные параметры
`id` _TEXT_ — id запрашиваемой транзакции

#### Опции
`-b,--block-hint` UINT — номер блока, в котором транзакция может находиться

**Команда**

```sh
cleos get transaction
```
**Вывод**

#### Пример

```sh
cleos get transaction eb4b94b72718a369af09eb2e7885b3f494dd1d8a20278a6634611d5edd76b703
```
```json
{
  "transaction_id": "eb4b94b72718a369af09eb2e7885b3f494dd1d8a20278a6634611d5edd76b703",
  "processed": {
    "refBlockNum": 2206,
    "refBlockPrefix": 221394282,
    "expiration": "2017-09-05T08:03:58",
    "scope": [
      "inita",
      "tester"
    ],
    "signatures": [
      "1f22e64240e1e479eee6ccbbd79a29f1a6eb6020384b4cca1a958e7c708d3e562009ae6e60afac96f9a3b89d729a50cd5a7b5a7a647540ba1678831bf970e83312"
    ],
    "messages": [{
        "code": "eos",
        "type": "transfer",
        "authorization": [{
            "account": "inita",
            "permission": "active"
          }
        ],
        "data": {
          "from": "inita",
          "to": "tester",
          "amount": 1000,
          "memo": ""
        },
        "hex_data": "000000008040934b00000000c84267a1e80300000000000000"
      }
    ],
    "output": [{
        "notify": [{
            "name": "tester",
            "output": {
              "notify": [],
              "sync_transactions": [],
              "async_transactions": []
            }
          },{
            "name": "inita",
            "output": {
              "notify": [],
              "sync_transactions": [],
              "async_transactions": []
            }
          }
        ],
        "sync_transactions": [],
        "async_transactions": []
      }
    ]
  }
}
```

!!! note "Важно"
    Указанный id транзакции может отсутствовать в вашей цепочке

---

### `transaction-status` {#cleos-cmd-get-transaction-status}

#### Описание

Текущее состояние цепочки и при наличии — информация о статусе транзакции по её id.

Для работы запроса должна быть включена функция статуса финальности транзакций: в плагине chain у `nodeos` задать опцию `--transaction-finality-status-max-storage-size-gb \<size\>`.

#### Позиционные параметры

- `id` _TEXT_ — id транзакции для запроса статуса (обязательно)

#### Опции
- `-h`, `--help` — вывести справку и выйти
#### Пример


```sh
cleos get transaction-status 6438df82216dfaf46978f703fb818b49110dbfc5d9b521b5d08c342277438b29
```

Команда возвращает состояние цепочки и при наличии — статус транзакции.

```json
{
    "state": "IN_BLOCK",
    "block_number": 90,
    "block_id": "0000005accfd59ba80a05380f60d51687406337b2aedd28b7daa33fdb8c16b5a",
    "block_timestamp": "2022-04-27T16:11:26.500",
    "expiration": "2022-04-27T16:11:56.000",
    "head_number": 186,
    "head_id": "000000bab27da51f76f483bb629b532510c22e2eb1acc632f5b37b421adecf63",
    "head_timestamp": "2022-04-27T16:12:14.500",
    "irreversible_number": 25,
    "irreversible_id": "0000001922118216bc16bf2c60d950598d80af3beca820eab751f7beecdb29e4",
    "irreversible_timestamp": "2022-04-27T16:10:54.000",
    "earliest_tracked_block_id": "000000129cee97f3e27312f0184d52d006a470f0e620553dfb4c5b4f3c856ab2",
    "earliest_tracked_block_number": 18
}
```

---

### `actions` {#cleos-cmd-get-actions}

#### Описание
Получить действия, где заданный аккаунт указан в авторизации или как получатель

#### Позиционные параметры
- `account_name` _TEXT_ — аккаунт для запроса (обязательно)
- `pos` _INT_ — порядковый номер действия для этого аккаунта, -1 — последнее (необязательно)
- `offset` _INT_ — диапазон действий: при положительном offset — [pos, pos + offset], при отрицательном — [pos - offset, pos]

#### Опции

- `-j,--json` — полный JSON
- `--full` — не обрезать вывод действия
- `--pretty` — форматировать полный JSON действия
- `--console` — вывести консольный вывод, сгенерированный действием

#### Примеры
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

---

### `schedule` {#cleos-cmd-get-schedule}

#### Описание

Получить расписание продюсеров


#### Опции
- `-h`, `--help` — вывести справку и выйти

- `-j`, `--json` — вывод в формате JSON


#### Пример

```sh
cleos get schedule
```

Команда возвращает текущее расписание продюсеров. 

```console
active schedule version 0
    Producer      Producer key
    ============= ==================
    eosio         EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV

pending schedule empty

proposed schedule empty
```

---

### `transaction id` {#cleos-cmd-get-transaction_id}

#### Описание
Получить id транзакции по объекту транзакции

#### Позиционные параметры

- `transaction` _TEXT_ — JSON-строка или файл с транзакцией, для которой нужен id (обязательно)

#### Опции

  `-h,--help` — вывести справку и выйти

---

## cleos set {#cleos-ref-set}

### Описание
Задать или обновить состояние блокчейна.
### Команды

Задать или обновить состояние блокчейна

```console
Usage: cleos set [OPTIONS] SUBCOMMAND

Options:
  -h,--help                   Print this help message and exit
```

### Подкоманды

- [code](#cleos-cmd-set-set-code) — создать или обновить код на аккаунте
- [abi](#cleos-cmd-set-set-abi) — создать или обновить ABI на аккаунте
- [contract](#cleos-cmd-set-set-contract) — создать или обновить контракт на аккаунте
- [account](#cleos-cmd-set-set-account) — задать или обновить состояние аккаунта
- [action](#cleos-cmd-set-set-action) — задать или обновить состояние действия

---

### `set-code` {#cleos-cmd-set-set-code}

#### Описание
Задать или обновить код аккаунта в блокчейне.

#### Позиционные параметры

* `account` _TEXT_ — аккаунт, для которого задаётся код (обязательно)
* `code-file` _TEXT_ — полный путь к файлу контракта WAST или WASM (обязательно)

#### Опции

`-h,--help` — вывести справку и выйти
`-a,--abi` _TEXT_ — ABI контракта

`-c,--clear` — удалить контракт с аккаунта

`--suppress-duplicate-check` — не проверять дубликаты

`-x,--expiration` _TEXT_ — время в секундах до истечения транзакции, по умолчанию 30 с

`-f,--force-unique` — принудительно сделать транзакцию уникальной (дополнительный расход bandwidth, снимается защита от случайной повторной отправки)

`-s,--skip-sign` — использовать ли ключи разблокированного кошелька для подписи транзакции

`-j,--json` — вывести результат в JSON

`-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)

`--return-packed` — вместе с `--dont-broadcast` получить упакованную транзакцию

`-r,--ref-block` _TEXT_ — номер блока или id блока для TAPOS (Transaction as Proof-of-Stake)

`-p,--permission`  _Type:Text_ — аккаунт и уровень разрешения для авторизации в виде `account@permission` (по умолчанию `account@active`)

* `-r,--ref-block` _TEXT_ — номер блока или id блока для TAPOS (Transaction as Proof-of-Stake)
* `-p,--permission`  _TEXT_ — аккаунт и уровень разрешения для авторизации в виде `account@permission` (по умолчанию `account@active`)
* `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU на выполнение транзакции (0 — без ограничения)
* `--max-net-usage` _UINT_ — верхний предел бюджета net в байтах (0 — без ограничения)
* `--delay-sec` _UINT_ — задержка `delay_sec` в секундах, по умолчанию 0 с

```sh
cleos set code someaccount1 ./path/to/wasm
```

---

### `set-abi` {#cleos-cmd-set-set-abi}

#### Описание
Создать или обновить ABI на аккаунте

#### Позиционные параметры
* `account` _TEXT_ — аккаунт, для которого задаётся код (обязательно)
* `abi-file` _TEXT_ — полный путь к файлу контракта WAST или WASM (обязательно)

#### Опции
* `-h,--help` — вывести справку и выйти
* `-a,--abi' _TEXT_ — ABI контракта
* `-x,--expiration _TEXT_ — время в секундах до истечения транзакции, по умолчанию 30 с
* `-f,--force-unique` — принудительно сделать транзакцию уникальной (дополнительный расход bandwidth, снимается защита от случайной повторной отправки)
* `-s,--skip-sign` — использовать ли ключи разблокированного кошелька для подписи транзакции
* `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
* `-r,--ref-block` _TEXT_ — номер блока или id блока для TAPOS (Transaction as Proof-of-Stake)
* `-p,--permission`  _TEXT_ — аккаунт и уровень разрешения для авторизации в виде `account@permission` (по умолчанию `account@active`)
* `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU на выполнение транзакции (0 — без ограничения)
* `--max-net-usage` _UINT_ — верхний предел бюджета net в байтах (0 — без ограничения)
* `--delay-sec` _UINT_ — задержка `delay_sec` в секундах, по умолчанию 0 с
#### Использование

```sh
cleos set abi someaccount1 ./path/to/abi.abi
```

---

### `set-contract` {#cleos-cmd-set-set-contract}

#### Описание
Создать или обновить контракт на аккаунте.
#### Позиционные параметры
 `account` _TEXT_ — аккаунт, для которого публикуется контракт
  `wast-file`  _TEXT_ — файл с контрактом WAST или WASM
  `abi-file`  _TEXT_ — ABI контракта
#### Опции

`-h,--help` — вывести справку и выйти

`-a,--abi` _TEXT_ — ABI контракта

`-c,--clear` — удалить контракт с аккаунта

`--suppress-duplicate-check` — не проверять дубликаты

`-x,--expiration` _TEXT_ — время в секундах до истечения транзакции, по умолчанию 30 с

`-f,--force-unique` — принудительно сделать транзакцию уникальной (дополнительный расход bandwidth, снимается защита от случайной повторной отправки)

`-s,--skip-sign` — использовать ли ключи разблокированного кошелька для подписи транзакции

`-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)

`--return-packed` — вместе с `--dont-broadcast` получить упакованную транзакцию

`-r,--ref-block` _TEXT_ — номер блока или id блока для TAPOS (Transaction as Proof-of-Stake)

`-p,--permission`  _TEXT_ — аккаунт и уровень разрешения для авторизации в виде `account@permission` (по умолчанию `account@active`)

`--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU на выполнение транзакции (0 — без ограничения)

`--max-net-usage` _UINT_ — верхний предел бюджета net в байтах (0 — без ограничения)

`--delay-sec` _UINT_ — задержка `delay_sec` в секундах, по умолчанию 0 с

#### Пример
Развёртывание стандартного контракта валюты.

```sh
cleos set contract currency ../../../contracts/currency/currency.wast ../../../contracts/currency/currency.abi
```
Вывод может быть примерно таким:

```console
Reading WAST...
Assembling WASM...
Publishing contract...
```
```json
{
  "transaction_id": "9990306e13f630a9c5436a5a0b6fb8fe2c7f3da2f342b4898a39c4a2c17dcdb3",
  "processed": {
    "refBlockNum": 1208,
    "refBlockPrefix": 3058534156,
    "expiration": "2017-08-24T18:29:52",
    "scope": [
      "currency",
      "eos"
    ],
    "signatures": [],
    "messages": [{
        "code": "eos",
        "type": "setcode",
        "authorization": [{
            "account": "currency",
            "permission": "active"
          }
        ],
        "data": "00000079b822651d0000e8150061736d0100000001390a60017e0060037e7e7f017f60047e7e7f7f017f60017f0060057e7e7e7f7f017f60027f7f0060027f7f017f60027e7f0060000060027e7e00029d010a03656e7606617373657274000503656e76086c6f61645f693634000403656e76067072696e7469000003656e76067072696e746e000003656e76067072696e7473000303656e760b726561644d657373616765000603656e760a72656d6f76655f693634000103656e760b7265717569726541757468000003656e760d726571756972654e6f74696365000003656e760973746f72655f6936340002030706000007030809040401700000050301000107cc0107066d656d6f72790200205f5a4e33656f733133726571756972654e6f74696365454e535f344e616d6545000a1e5f5a4e33656f7331317265717569726541757468454e535f344e616d6545000b345f5a4e3863757272656e6379313273746f72654163636f756e74454e33656f73344e616d6545524b4e535f374163636f756e7445000c355f5a4e3863757272656e637932336170706c795f63757272656e63795f7472616e7366657245524b4e535f385472616e7366657245000d04696e6974000e056170706c79000f0a9d0d060600200010080b0600200010070b3400024020012903084200510d0020004280808080a8d7bee3082001411010091a0f0b20004280808080a8d7bee308200110061a0b8a0604017e027f047e017f4100410028020441206b2208360204200029030821052000290300210720002903102104411010042004100241c000100442808080c887d7c8b21d100341d00010042007100341e000100420051003200029030021052000290308100820051008200029030010072000290300210142002105423b210441f00021034200210603400240024002400240024020054206560d0020032c00002202419f7f6a41ff017141194b0d01200241a0016a21020c020b420021072005420b580d020c030b200241ea016a41002002414f6a41ff01714105491b21020b2002ad42388642388721070b2007421f83200442ffffffff0f838621070b200341016a2103200542017c2105200720068421062004427b7c2204427a520d000b420021052008420037031820082006370310200142808080c887d7c8b21d4280808080a8d7bee308200841106a411010011a200041086a2903002101423b210441f00021034200210603400240024002400240024020054206560d0020032c00002202419f7f6a41ff017141194b0d01200241a0016a21020c020b420021072005420b580d020c030b200241ea016a41002002414f6a41ff01714105491b21020b2002ad42388642388721070b2007421f83200442ffffffff0f838621070b200341016a2103200542017c2105200720068421062004427b7c2204427a520d000b2008200637030020084200370308200142808080c887d7c8b21d4280808080a8d7bee3082008411010011a200841186a2203290300200041106a22022903005a418001100020032003290300200229030022057d370300200520082903087c20055a41b00110002008200829030820022903007c370308200029030021050240024020032903004200510d0020054280808080a8d7bee308200841106a411010091a0c010b20054280808080a8d7bee308200841106a10061a0b200041086a290300210502400240200841086a2903004200510d0020054280808080a8d7bee3082008411010091a0c010b20054280808080a8d7bee308200810061a0b4100200841206a3602040b980303027f057e017f4100410028020441106b220736020442002103423b210241e00121014200210403400240024002400240024020034207560d0020012c00002200419f7f6a41ff017141194b0d01200041a0016a21000c020b420021052003420b580d020c030b200041ea016a41002000414f6a41ff01714105491b21000b2000ad42388642388721050b2005421f83200242ffffffff0f838621050b200141016a2101200342017c2103200520048421042002427b7c2202427a520d000b42002103423b210241f00021014200210603400240024002400240024020034206560d0020012c00002200419f7f6a41ff017141194b0d01200041a0016a21000c020b420021052003420b580d020c030b200041ea016a41002000414f6a41ff01714105491b21000b2000ad42388642388721050b2005421f83200242ffffffff0f838621050b200141016a2101200342017c2103200520068421062002427b7c2202427a520d000b2007428094ebdc033703082007200637030020044280808080a8d7bee3082007411010091a4100200741106a3602040bb10303027f047e017f4100410028020441206b220836020442002105423b210441e00121034200210603400240024002400240024020054207560d0020032c00002202419f7f6a41ff017141194b0d01200241a0016a21020c020b420021072005420b580d020c030b200241ea016a41002002414f6a41ff01714105491b21020b2002ad42388642388721070b2007421f83200442ffffffff0f838621070b200341016a2103200542017c2105200720068421062004427b7c2204427a520d000b024020062000520d0042002105423b210441f00121034200210603400240024002400240024020054207560d0020032c00002202419f7f6a41ff017141194b0d01200241a0016a21020c020b420021072005420b580d020c030b200241ea016a41002002414f6a41ff01714105491b21020b2002ad42388642388721070b200341016a2103200542017c2105200720068421062004427b7c2204427a520d000b20062001520d00200842003703102008420037030820084200370318200841086a4118100541174b4180021000200841086a100d0b4100200841206a3602040b0bff010b0041040b04200500000041100b2254686973206170706561727320746f2062652061207472616e73666572206f6620000041c0000b0220000041d0000b072066726f6d20000041e0000b0520746f20000041f0000b086163636f756e7400004180010b2c696e746567657220756e646572666c6f77207375627472616374696e6720746f6b656e2062616c616e6365000041b0010b26696e7465676572206f766572666c6f7720616464696e6720746f6b656e2062616c616e6365000041e0010b0963757272656e6379000041f0010b097472616e7366657200004180020b1e6d6573736167652073686f72746572207468616e2065787065637465640000fd02046e616d651006617373657274020000086c6f61645f693634050000000000067072696e74690100067072696e746e0100067072696e747301000b726561644d6573736167650200000a72656d6f76655f693634030000000b726571756972654175746801000d726571756972654e6f7469636501000973746f72655f6936340400000000205f5a4e33656f733133726571756972654e6f74696365454e535f344e616d65450101301e5f5a4e33656f7331317265717569726541757468454e535f344e616d6545010130345f5a4e3863757272656e6379313273746f72654163636f756e74454e33656f73344e616d6545524b4e535f374163636f756e74450201300131355f5a4e3863757272656e637932336170706c795f63757272656e63795f7472616e7366657245524b4e535f385472616e73666572450901300131013201330134013501360137013804696e69740801300131013201330134013501360137056170706c7909013001310132013301340135013601370138010b4163636f756e744e616d65044e616d6502087472616e7366657200030466726f6d0b4163636f756e744e616d6502746f0b4163636f756e744e616d65087175616e746974790655496e743634076163636f756e740002036b65790655496e7436340762616c616e63650655496e74363401000000b298e982a4087472616e736665720100000080bafac608076163636f756e74"
      }
    ],
    "output": [{
        "notify": [],
        "sync_transactions": [],
        "async_transactions": []
      }
    ]
  }
}
```

---

### `set-account` {#cleos-cmd-set-set-account}

#### Описание
Задать параметры, связанные с разрешениями аккаунта

!!! note "Ввод JSON"
    Команда требует JSON, зависящий от внутренних определений классов. Такой ввод может меняться в будущих версиях ПО COOPOS.

#### Позиционные параметры
- `account` _TEXT_ — аккаунт, для которого задаётся или удаляется полномочие разрешения
- `permission` _TEXT_ — имя разрешения, для которого задаётся или удаляется полномочие
- `authority` _TEXT_ — [delete] NULL, [create/update] публичный ключ, JSON-строка или файл с описанием полномочия
- `parent` _TEXT_ — [create] имя родительского разрешения (по умолчанию: `active`)
#### Опции

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

#### Команда
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

#### См. также
- Протокольный документ [Accounts and Permissions](/protocol-guides/04_accounts_and_permissions.md).

---

### `set-action` {#cleos-cmd-set-set-action}

#### Описание
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

#### Позиционные параметры

`account` TEXT — аккаунт, для которого задаётся или удаляется полномочие разрешения (обязательно)

`code` _Text_ — аккаунт, которому принадлежит код действия

`type` _Type_ — тип действия

`requirement` _Type_ — имя разрешения, требуемого для выполнения данного действия

#### Опции
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

#### Использование

```sh
# Связать действие `voteproducer` с разрешением `voting`
cleos set action permission sandwichfarm eosio.system voteproducer voting -p sandwichfarm@voting

# Теперь транзакцию можно выполнить с ранее заданными разрешениями.
cleos system voteproducer approve sandwichfarm someproducer -p sandwichfarm@voting
```

#### См. также
- Протокольный документ [Accounts and Permissions](/protocol-guides/04_accounts_and_permissions.md).

---

## cleos transfer {#cleos-ref-transfer}

### `transfer` {#cleos-cmd-transfer}

#### Описание
Перевести токены с одного аккаунта на другой

#### Позиционные параметры
- `sender` _TEXT_ — аккаунт-отправитель
- `recipient` _TEXT_ — аккаунт-получатель
- `amount` _UINT_ — сумма EOS для перевода
- `memo` _TEXT_ — memo для перевода

#### Опции
- `-c,--contract` _TEXT_ — контракт, управляющий токеном
- `--pay-ram-to-open` — оплатить RAM за открытие строки баланса получателя
- `-x,--expiration` — время в секундах до истечения транзакции, по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной (дополнительный расход bandwidth, снимается защита от случайной повторной отправки той же транзакции)
- `-s,--skip-sign` — не использовать ключи разблокированного кошелька для подписи
- `-j,--json` — вывести результат в JSON
- `--json-file` _TEXT_ — сохранить результат в JSON в файл
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `--return-packed` — вместе с `--dont-broadcast` вернуть упакованную транзакцию
- `-r,--ref-block` _TEXT_ — номер блока или id блока для TAPOS (Transaction as Proof-of-Stake)
- `--use-old-rpc` — использовать старый RPC `push_transaction` вместо нового `send_transaction`
- `-p,--permission` _TEXT_ ... — аккаунт и уровень разрешения для авторизации в виде `account@permission` (по умолчанию `sender@active`)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU на выполнение транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета net в байтах (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка `delay_sec` в секундах, по умолчанию 0

#### Пример
Перевести 1000 SYS с **inita** на **tester**

```sh
cleos transfer inita tester 1000
```
Ответ может выглядеть примерно так:

```json
{
  "transaction_id": "eb4b94b72718a369af09eb2e7885b3f494dd1d8a20278a6634611d5edd76b703",
  "processed": {
    "refBlockNum": 2206,
    "refBlockPrefix": 221394282,
    "expiration": "2017-09-05T08:03:58",
    "scope": [
      "inita",
      "tester"
    ],
    "signatures": [
      "1f22e64240e1e479eee6ccbbd79a29f1a6eb6020384b4cca1a958e7c708d3e562009ae6e60afac96f9a3b89d729a50cd5a7b5a7a647540ba1678831bf970e83312"
    ],
    "messages": [{
        "code": "eos",
        "type": "transfer",
        "authorization": [{
            "account": "inita",
            "permission": "active"
          }
        ],
        "data": {
          "from": "inita",
          "to": "tester",
          "amount": 1000,
          "memo": ""
        },
        "hex_data": "000000008040934b00000000c84267a1e80300000000000000"
      }
    ],
    "output": [{
        "notify": [{
            "name": "tester",
            "output": { ... }
          },{
            "name": "inita",
            "output": { ... }
          }
        ],
        "sync_transactions": [],
        "async_transactions": []
      }
    ]
  }
}
```

---

## cleos net {#cleos-ref-net}

### Описание
Работа с локальными p2p-подключениями.

### Команда

```console
Usage: cleos net SUBCOMMAND
```

### Подкоманды

 - [cleos net connect](#cleos-cmd-net-connect) — установить новое подключение к пиру

 - [cleos net disconnect](#cleos-cmd-net-disconnect) — закрыть существующее подключение

 - [cleos net status](#cleos-cmd-net-status) — статус существующего подключения

 - [cleos net peers](#cleos-cmd-net-peers) — статус всех пиров

---

### `connect` {#cleos-cmd-net-connect}

#### Команда
```sh
cleos net connect [OPTIONS] host
```

**Где:**
* [OPTIONS] = см. раздел **Опции** (уточняется)

[//]: # ( THIS IS A COMMENT LINK BELOW IS BROKEN )  
[//]: # (in the **Command Usage** command-usage section below.)  

* host — хост:порт для подключения

**Примечание:** аргументы и опции в квадратных скобках необязательны.

#### Описание
Установить новое подключение к указанному пиру. Оператор узла может выполнить команду без перезапуска `nodeos`.

#### Использование команды
Позиционные параметры и опции `cleos net connect`:

##### Позиционные параметры
* `host` _TEXT_ ОБЯЗАТЕЛЬНО — хост:порт для подключения

##### Опции
* `-h,--help` — вывести справку и выйти

#### Требования

* Установлена поддерживаемая версия `cleos`.
!!! note "Примечание"
    `cleos` входит в состав COOPOS. [Установка COOPOS](../../00_install/index.md) ставит `cleos` и `keosd`.
* Доступ к узлу с загруженным [`net_api_plugin`](../../01_nodeos/03_plugins/net_api_plugin/index.md).

#### Примеры

* Узел по умолчанию (`http://127.0.0.1:8888`) подключается к пиру `localhost:9002`:
```sh
cleos net connect localhost:9002
```
**Вывод:**
```console
"added connection"
```

* Узел `http://127.0.0.1:8001` подключается к пиру `localhost:9002`:
```sh
cleos -u http://127.0.0.1:8001 net connect localhost:9002
```
**Вывод:**
```console
"added connection"
```

**Примечание:** при повторном выполнении `cleos` ожидаемо выводит:  
```console
"already connected"
```

---

### `disconnect` {#cleos-cmd-net-disconnect}

#### Команда
```sh
cleos net disconnect [OPTIONS] host
```

**Где:**
* [OPTIONS] = см. раздел **Опции** (уточняется)

[//]: # ( THIS IS A COMMENT LINK BELOW IS BROKEN )  
[//]: # (in the **Command Usage** command-usage section below.)  

**Примечание:** аргументы и опции в квадратных скобках необязательны.

#### Описание
Закрыть существующее подключение к указанному пиру. Оператор узла может выполнить команду без перезапуска `nodeos`.

#### Использование команды
Позиционные параметры и опции `cleos net disconnect`:

##### Позиционные параметры
* `host` _TEXT_ ОБЯЗАТЕЛЬНО — хост:порт для отключения

##### Опции
* `-h,--help` — вывести справку и выйти

#### Требования

* Установлена поддерживаемая версия `cleos`.
!!! note "Примечание"
    `cleos` входит в состав COOPOS. [Установка COOPOS](../../00_install/index.md) ставит `cleos` и `keosd`.
* Доступ к узлу с загруженным [`net_api_plugin`](../../01_nodeos/03_plugins/net_api_plugin/index.md).

#### Примеры

* Узел по умолчанию отключается от пира `localhost:9002`:
```sh
cleos net disconnect localhost:9002
```
**Вывод:**
```console
"connection removed"
```

* Узел `http://127.0.0.1:8001` отключается от пира `localhost:9002`:
```sh
cleos -u http://127.0.0.1:8001 net disconnect localhost:9002
```
**Вывод:**
```console
"connection removed"
```

**Примечание:** при повторном выполнении `cleos` ожидаемо выводит:  
```console
"no known connection for host"
```

---

### `status` {#cleos-cmd-net-status}

#### Команда
```sh
cleos net status [OPTIONS] host
```

**Где:**
* [OPTIONS] = см. раздел **Опции** (уточняется)

[//]: # ( THIS IS A COMMENT LINK BELOW IS BROKEN )  
[//]: # (in the **Command Usage** command-usage section below.)  

* host — хост:порт подключения для запроса статуса

**Примечание:** аргументы и опции в квадратных скобках необязательны.

#### Описание
Возвращает статус подключённого пира. Позволяет оператору узла проверить состояние конкретного пира.

#### Использование команды
Позиционные параметры и опции `cleos net status`:

##### Позиционные параметры
* `host` _TEXT_ ОБЯЗАТЕЛЬНО — хост:порт подключения для запроса статуса

##### Опции
* `-h,--help` — вывести справку и выйти

#### Требования

* Установлена поддерживаемая версия `cleos`.
!!! note "Примечание"
    `cleos` входит в состав COOPOS. [Установка COOPOS](../../00_install/index.md) ставит `cleos` и `keosd`.
* Доступ к узлу с загруженным [`net_api_plugin`](../../01_nodeos/03_plugins/net_api_plugin/index.md).

#### Примеры

* Статус пира `localhost:9001` для узла `http://127.0.0.1:8002`:

```sh
cleos -u http://127.0.0.1:8002 net status localhost:9001
```
**Вывод:**
```json
{
  "peer": "localhost:9001",
  "connecting": false,
  "syncing": false,
  "last_handshake": {
    "network_version": 1210,
    "chain_id": "60fb0eb4742886af8a0e147f4af6fd363e8e8d8f18bdf73a10ee0134fec1c551",
    "node_id": "7432b032b50a5a3b04a220c48d75f12e5a089405dfee578c3e5b4cf46865e86e",
    "key": "EOS1111111111111111111111111111111114T1Anm",
    "time": "1620935866018960000",
    "token": "0000000000000000000000000000000000000000000000000000000000000000",
    "sig": "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne",
    "p2p_address": "127.0.0.1:9001 - 7432b03",
    "last_irreversible_block_num": 184,
    "last_irreversible_block_id": "000000b899bd9462ac4697b5d265e47ef5d88d5a66a24a1c2d37de7974fe32f5",
    "head_num": 185,
    "head_id": "000000b9f79e2394a48738fb3c8c87dac944094648c23818427e1d44375b6034",
    "os": "osx",
    "agent": "EOS Test Agent",
    "generation": 1
  }
}
```

**Примечание:** поле `last_handshake` содержит состояние цепочки указанного пира на момент последнего handshake с узлом. Подробнее — [Handshake Message](/protocol-guides/03_network_peer_protocol.md#421-handshake-message) в документе *Network Peer Protocol*.

---

### `peers` {#cleos-cmd-net-peers}

#### Команда
```sh
cleos net peers [OPTIONS]
```

**Где:**
* [OPTIONS] = см. раздел **Опции** (уточняется)

[//]: # (in the **Command Usage** command-usage section below.)  

**Примечание:** аргументы и опции в квадратных скобках необязательны.

#### Описание
Возвращает список со статусом всех peer-подключений. Позволяет оператору узла проверить состояние подключений.

#### Использование команды
Позиционные параметры и опции `cleos net peers`:

##### Позиционные параметры
* `host` _TEXT_ ОБЯЗАТЕЛЬНО — хост:порт для отключения

##### Опции
* `-h,--help` — вывести справку и выйти

#### Требования

* Установлена поддерживаемая версия `cleos`.
!!! note "Примечание"
    `cleos` входит в состав COOPOS. [Установка COOPOS](../../00_install/index.md) ставит `cleos` и `keosd`.
* Доступ к узлу с загруженным [`net_api_plugin`](../../01_nodeos/03_plugins/net_api_plugin/index.md).

#### Примеры

* Статус всех пиров для узла `http://127.0.0.1:8001`:

```sh
cleos -u http://127.0.0.1:8001 net peers
```
**Вывод:**
```json
[{
    "peer": "",
    "connecting": false,
    "syncing": false,
    "last_handshake": {
      "network_version": 1210,
      "chain_id": "60fb0eb4742886af8a0e147f4af6fd363e8e8d8f18bdf73a10ee0134fec1c551",
      "node_id": "58ed23173cd4ed89ae90c2e65f5c29bb51e233e78d730d72220b6d84543bfc08",
      "key": "EOS1111111111111111111111111111111114T1Anm",
      "time": "1621013128445696000",
      "token": "0000000000000000000000000000000000000000000000000000000000000000",
      "sig": "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne",
      "p2p_address": "127.0.0.1:9005 - 58ed231",
      "last_irreversible_block_num": 127,
      "last_irreversible_block_id": "0000007f97323fae098048ae41f22a99238afc5db56cad17f50304919d21e1c2",
      "head_num": 128,
      "head_id": "0000008072eb0fc043770e44a5db5dedfbd86db9aa5c41b28618f1b9343c2d22",
      "os": "osx",
      "agent": "EOS Test Agent",
      "generation": 4
    }
  },{
    "peer": "",
    "connecting": false,
    "syncing": false,
    "last_handshake": {
      "network_version": 1210,
      "chain_id": "60fb0eb4742886af8a0e147f4af6fd363e8e8d8f18bdf73a10ee0134fec1c551",
      "node_id": "2101bd8d770e8eabb3e69cb981db4350b494a04cd5b7a7cea0cd3070aa722306",
      "key": "EOS1111111111111111111111111111111114T1Anm",
      "time": "1621013129884873000",
      "token": "0000000000000000000000000000000000000000000000000000000000000000",
      "sig": "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne",
      "p2p_address": "127.0.0.1:9017 - 2101bd8",
      "last_irreversible_block_num": 129,
      "last_irreversible_block_id": "0000008117074454dbaa7e8662c6f3d6918e776cc063c45f52b37bdc945ddc5d",
      "head_num": 130,
      "head_id": "0000008248cc3498b4bbf14a183711d9a73a36517a8069367a343bd4060fed14",
      "os": "osx",
      "agent": "EOS Test Agent",
      "generation": 3
    }
  },{

  ...

  },{
    "peer": "",
    "connecting": false,
    "syncing": false,
    "last_handshake": {
      "network_version": 1210,
      "chain_id": "60fb0eb4742886af8a0e147f4af6fd363e8e8d8f18bdf73a10ee0134fec1c551",
      "node_id": "d9eb85085d09581521d0ec53b87a9657d0176c74fdf8657c56b09a91b3821c6f",
      "key": "EOS1111111111111111111111111111111114T1Anm",
      "time": "1621013127894327000",
      "token": "0000000000000000000000000000000000000000000000000000000000000000",
      "sig": "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne",
      "p2p_address": "127.0.0.1:9002 - d9eb850",
      "last_irreversible_block_num": 125,
      "last_irreversible_block_id": "0000007d9a3b9cf6a61776ba1bbce226754aefcad664338d2acb5be34cc53a5b",
      "head_num": 126,
      "head_id": "0000007eccafd4f32a437b5fd8b111b326e2da8d0bcb832036984841b81ab64e",
      "os": "osx",
      "agent": "EOS Test Agent",
      "generation": 4
    }
  }
]
```

**Примечание:** поле `last_handshake` содержит состояние цепочки пира на момент последнего handshake с узлом. Подробнее — [Handshake Message](/protocol-guides/03_network_peer_protocol.md#421-handshake-message) в документе *Network Peer Protocol*.

---

## cleos wallet {#cleos-ref-wallet}

### Описание
Подкоманды для работы с локальным кошельком.

### Подкоманды

- [create](#cleos-cmd-wallet-create) — создать новый локальный кошелёк
- [create_key](#cleos-cmd-wallet-create_key) — создать пару ключей в кошельке
- [open](#cleos-cmd-wallet-open) — открыть существующий кошелёк
- [lock](#cleos-cmd-wallet-lock) — заблокировать кошелёк
- [lock_all](#cleos-cmd-wallet-lock_all) — заблокировать все разблокированные кошельки
- [unlock](#cleos-cmd-wallet-unlock) — разблокировать кошелёк
- [import](#cleos-cmd-wallet-import) — импортировать приватный ключ в кошелёк
- [list](#cleos-cmd-wallet-list) — список открытых кошельков, * = разблокирован
- [keys](#cleos-cmd-wallet-keys) — список приватных ключей из всех разблокированных кошельков в формате WIF
- [private_keys](#cleos-cmd-wallet-private_keys) — список публичных ключей из всех разблокированных кошельков

---

### `create` {#cleos-cmd-wallet-create}

#### Описание

Создаёт кошелёк с указанным именем. Если имя не задано, используется `default`

#### Позиционные параметры
Нет
#### Опции
- `-n, --name` _TEXT_ — имя нового кошелька
- `-f, --file` _TEXT_ — файл для записи пароля кошелька (обязателен, если не передан `--to-console`)
- `--to-console` — вывести пароль в консоль

---

### `create key` {#cleos-cmd-wallet-create_key}

#### Описание

Создаёт пару ключей в кошельке, чтобы не импортировать её вручную, как после `cleos create key`. По умолчанию создаётся ключ типа, «предпочитаемый» кошельком (K1). Можно создать ключ в формате R1.

#### Позиционные параметры

`key_type` _TEXT_ — тип ключа: `K1` или `R1`

#### Опции

-n,--name TEXT=default Имя кошелька, в котором создаётся ключ

#### Использование

```sh
cleos wallet create_key K1
```

#### Вывод

```console
Created new private key with a public key of: "EOS67xHKzQArkWZN6rKLCq7NLvaj8kurwxzRxoTVz6cgDJkiWdGug"
```

---

### `open` {#cleos-cmd-wallet-open}

#### Описание

Открывает существующий кошелёк

#### Позиционные параметры
Нет
#### Опции
- `-n, --name` _TEXT_ — имя кошелька для открытия
#### Использование


```sh
cleos wallet open
```
или
```sh
cleos wallet open -n second-wallet
```

#### Вывод


```console
Opened: default
```

---

### `lock` {#cleos-cmd-wallet-lock}

#### Описание

Блокирует кошелёк

#### Позиционные параметры
Нет

#### Опции
- `-n, --name` _TEXT_ — имя кошелька для блокировки
#### Использование


```sh
cleos wallet lock
```
или
```sh
cleos wallet lock -n second-wallet
```

#### Вывод

```console
Locked: 'default'
```

---

### `lock all` {#cleos-cmd-wallet-lock_all}

#### Описание
Блокирует все разблокированные кошельки


#### Позиционные параметры
Нет
#### Опции
Нет
#### Использование


```sh
cleos wallet lock_all
```

#### Вывод


```console
Locked All Wallets
```

---

### `unlock` {#cleos-cmd-wallet-unlock}

#### Описание
Разблокирует кошелёк

#### Позиционные параметры
Нет
#### Опции
- `-n, --name` _TEXT_ — имя кошелька
- `--password` _TEXT_ — пароль, выданный при создании кошелька
#### Использование
Укажите пароль, полученный при создании кошелька.

```sh
cleos wallet unlock -n second-wallet --password PW5Ji6JUrLjhKAVn68nmacLxwhvtqUAV18J7iycZppsPKeoGGgBEw
```

#### Вывод


```console
Unlocked: 'second-wallet'
```

---

### `import` {#cleos-cmd-wallet-import}

#### Описание
Импортировать приватный ключ в кошелёк

#### Позиционные параметры
Нет

#### Опции
- `-n, --name` _TEXT_ — кошелёк, в который импортируется ключ
- `--private-key` _TEXT_ — приватный ключ в формате WIF

---

### `list` {#cleos-cmd-wallet-list}

#### Описание

Список открытых кошельков; * означает разблокирован

#### Позиционные параметры
Нет

#### Опции
Нет

#### Использование


```sh
cleos wallet list
```

#### Вывод


```console
Wallets:
[
  "default *",
  "second-wallet *"
]
```

или если кошельков нет:

```console
Wallets:
[
]
```

---

### `keys` {#cleos-cmd-wallet-keys}

#### Описание

Список публичных ключей из всех разблокированных кошельков; эти ключи могут использоваться для подписи транзакций.

#### Позиционные параметры
Нет.
#### Опции
Нет.
#### Использование


```sh
cleos wallet keys
```

#### Вывод


```console
[[
    "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
    "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"
  ]
]
```

---

### `private keys` {#cleos-cmd-wallet-private_keys}

#### Описание 

Можно запросить пары публичный/приватный ключ кошелька. Кошелёк должен быть разблокирован; пароль нужно ввести снова.

#### Позиционные параметры
Нет

#### Опции
`-n,--name` _TEXT_ — имя кошелька для списка ключей, иначе используется default

`--password` _TEXT_ — пароль, выданный при `wallet create`

#### Использование


```javascript
cleos wallet private_keys
```

---

## cleos sign {#cleos-ref-sign}

### `sign` {#cleos-cmd-sign}

#### Описание
Подписать транзакцию

#### Использование
```sh
cleos sign [OPTIONS] transaction
```

#### Позиционные параметры
- `transaction` _TEXT_ — JSON-строка или имя файла с описанием транзакции для подписи

#### Опции
- `-k,--private-key` _TEXT_ — приватный ключ для подписи транзакции
- `--public-key` _TEXT_ — попросить `keosd` подписать соответствующим приватным ключом для указанного публичного ключа
- `-c,--chain-id` _TEXT_ — идентификатор сети (chain id) для подписи
- `-p,--push-transaction` — после подписи отправить транзакцию в сеть

---

## cleos push {#cleos-ref-push}

### Описание
Отправить произвольные транзакции в блокчейн.

### Команды

[push action](#cleos-cmd-push-push-action) — транзакция с одним действием

[push transaction](#cleos-cmd-push-push-transaction) — произвольная JSON-транзакция

[push transactions](#cleos-cmd-push-push-transactions) — массив произвольных JSON-транзакций

---

### `push-action` {#cleos-cmd-push-push-action}

#### Описание
Отправить транзакцию с одним действием

#### Позиционные параметры
  `contract` _Type: Text_ — аккаунт с контрактом для выполнения
 
  `action` _Type: Text_ — действие контракта
 
  `data` _Type: Text_ — аргументы контракта

**Вывод**

#### Опции

` -h,--help` — вывести справку и выйти

`-x,--expiration` — время в секундах до истечения транзакции, по умолчанию 30 с

`-f,--force-unique` — принудительно сделать транзакцию уникальной (дополнительный расход bandwidth, снимается защита от случайной повторной отправки)

` -s,--skip-sign` — использовать ли ключи разблокированного кошелька для подписи транзакции

`-j,--json` — вывести результат в JSON

`-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)

`--return-packed` — вместе с `--dont-broadcast` получить упакованную транзакцию

`-r,--ref-block` — номер блока или id блока для TAPOS (Transaction as Proof-of-Stake)

`--use-old-rpc` — использовать старый RPC `push_transaction` вместо нового `send_transaction`

`--use-old-send-rpc` — использовать старый RPC `send_transaction` вместо нового `/v1/chain/send_transaction2`

`-p,--permission` _Type: Text_ — аккаунт и уровень разрешения в виде `account@permission`

`--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU (0 — без ограничения)

`--max-net-usage` _UINT_ — верхний предел бюджета net в байтах (0 — без ограничения)

`--delay-sec` _UINT_ — задержка `delay_sec` в секундах, по умолчанию 0

`-t,--return-failure-trace` — при ошибке транзакции вернуть частичные трассы

`--retry-irreversible` — просить узел повторять до необратимости или истечения (блокирующий вызов)

`--retry-num-blocks` — просить узел повторять до попадания в блок заданной высоты (блокирующий вызов)

---

### `push-transaction` {#cleos-cmd-push-push-transaction}

#### Описание

Отправить произвольную JSON-транзакцию

#### Позиционные параметры
- `transaction` (text) JSON транзакции для отправки или имя JSON-файла с транзакцией

#### Опции
Отдельных опций у команды нет (см. ниже стандартные флаги cleos).

` -h,--help` — вывести справку и выйти
 
`-x,--expiration` — время в секундах до истечения транзакции, по умолчанию 30 с
 
`-f,--force-unique` — принудительно сделать транзакцию уникальной (дополнительный расход bandwidth, снимается защита от случайной повторной отправки)

` -s,--skip-sign` — использовать ли ключи разблокированного кошелька для подписи транзакции

`-j,--json` — вывести результат в JSON

`-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)

`--return-packed` — вместе с `--dont-broadcast` получить упакованную транзакцию

`-r,--ref-block` — номер блока или id блока для TAPOS (Transaction as Proof-of-Stake)

`--use-old-rpc` — использовать старый RPC `push_transaction` вместо нового `send_transaction`

`--use-old-send-rpc` — использовать старый RPC `send_transaction` вместо нового `/v1/chain/send_transaction2`

`-p,--permission` _Type: Text_ — аккаунт и уровень разрешения в виде `account@permission`

`--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU (0 — без ограничения)

`--max-net-usage` _UINT_ — верхний предел бюджета net в байтах (0 — без ограничения)

`--delay-sec` _UINT_ — задержка `delay_sec` в секундах, по умолчанию 0

`-t,--return-failure-trace` — при ошибке транзакции вернуть частичные трассы

`--retry-irreversible` — просить узел повторять до необратимости или истечения (блокирующий вызов)

`--retry-num-blocks` — просить узел повторять до попадания в блок заданной высоты (блокирующий вызов)

`-o,--read-only` — указать транзакцию как только для чтения

#### Пример


```sh
cleos push transaction {}
```

---

### `push-transactions` {#cleos-cmd-push-push-transactions}

#### Описание
Отправить массив произвольных JSON-транзакций

#### Позиционные аргументы
Отправляет массив произвольных JSON-транзакций.
#### Опции
Отдельных опций нет
#### Примеры

---

## cleos multisig {#cleos-ref-multisig}

### Описание
Команды контракта multisig

### Подкоманды
- [multisig propose](#cleos-cmd-multisig-multisig-propose) — предложить транзакцию
- [multisig review](#cleos-cmd-multisig-multisig-review) — просмотреть транзакцию
- [multisig approve](#cleos-cmd-multisig-multisig-approve) — одобрить предложенную транзакцию
- [multisig unapprove](#cleos-cmd-multisig-multisig-unapprove) — снять одобрение с предложенной транзакции

- [multisig invalidate](#cleos-cmd-multisig-multisig-invalidate) — аннулировать все одобрения multisig аккаунта
- [multisig cancel](#cleos-cmd-multisig-multisig-cancel) — отменить предложенную транзакцию
- [multisig exec](#cleos-cmd-multisig-multisig-exec) — выполнить предложенную транзакцию

---

### `multisig-propose` {#cleos-cmd-multisig-multisig-propose}

#### Описание
Предложить действие (action)

#### Позиционные аргументы
`proposal_name` _TEXT_ — имя предложения (строка)
`requested_permissions` _TEXT_  — JSON-строка или файл с запрашиваемыми разрешениями
`trx_permissions` _TEXT_ — JSON-строка или файл с разрешениями транзакции
`contract` _TEXT_ — контракт, которому должна быть доставлена отложенная транзакция
`action` _TEXT_ — действие отложенной транзакции
`data` _TEXT_ — JSON-строка или файл с данными предлагаемого действия
`proposer` _TEXT_ — аккаунт, предлагающий транзакцию
`proposal_expiration` _UINT_ — срок действия предложения в часах
#### Опции
- `-h,--help` — вывести справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции, по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной (дополнительный расход bandwidth, снимается защита от случайной повторной отправки)
- `-s,--skip-sign` — использовать ли ключи разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер блока или id блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission`  _TEXT_ — аккаунт и уровень разрешения в виде `account@permission` (по умолчанию `account@active`)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета net в байтах (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка `delay_sec` в секундах, по умолчанию 0

---

### `multisig-propose trx` {#cleos-cmd-multisig-multisig-propose_trx}

#### Описание
Предложить транзакцию

#### Позиционные аргументы

`proposal_name` _TEXT_ — имя предложения (строка)
`requested_permissions` _TEXT_  — JSON-строка или файл с запрашиваемыми разрешениями
`trx_permissions` _TEXT_ — JSON-строка или файл с разрешениями транзакции
`contract` _TEXT_ — контракт, которому должна быть доставлена отложенная транзакция
`action` _TEXT_ — действие отложенной транзакции
`data` _TEXT_ — JSON-строка или файл с данными предлагаемого действия
`proposer` _TEXT_ — аккаунт, предлагающий транзакцию
`proposal_expiration` _UINT_ — срок действия предложения в часах

#### Опции

- `-h,--help` — вывести справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции, по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной (дополнительный расход bandwidth, снимается защита от случайной повторной отправки)
- `-s,--skip-sign` — использовать ли ключи разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер блока или id блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission`  _TEXT_ — аккаунт и уровень разрешения в виде `account@permission` (по умолчанию `account@active`)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета net в байтах (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка `delay_sec` в секундах, по умолчанию 0

---

### `multisig-review` {#cleos-cmd-multisig-multisig-review}

#### Описание
Просмотреть транзакцию

#### Позиционные аргументы
- `proposer` _TEXT_ — имя предлагающего (строка)
- `proposal_name` _TEXT_ — имя предложения (строка)
#### Опции
- `-h,--help` — вывести справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции, по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной (дополнительный расход bandwidth, снимается защита от случайной повторной отправки)
- `-s,--skip-sign` — использовать ли ключи разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер блока или id блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission`  _TEXT_ — аккаунт и уровень разрешения в виде `account@permission` (по умолчанию `account@active`)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета net в байтах (0 — без ограничения)
#### Примеры

---

### `multisig-approve` {#cleos-cmd-multisig-multisig-approve}

#### Описание
Одобрить предложенную транзакцию

#### Позиционные аргументы
- `proposer` _TEXT_ — имя предлагающего (строка)
- `proposal_name` _TEXT_ — имя предложения (строка)
- `permissions` _TEXT_ — JSON-строка или файл с разрешениями одобрения
- `proposal_hash` _TEXT_ — хэш предложенной транзакции (например id транзакции) как необязательное условие одобрения

#### Опции

- `-h,--help` — вывести справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции, по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной (дополнительный расход bandwidth, снимается защита от случайной повторной отправки)
- `-s,--skip-sign` — использовать ли ключи разблокированного кошелька для подписи транзакции
- `-j,--json` — вывести результат в JSON
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `--return-packed` — вместе с `--dont-broadcast` получить упакованную транзакцию
- `-r,--ref-block` _TEXT_ — номер блока или id блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission`  _TEXT_ — аккаунт и уровень разрешения в виде `account@permission` (по умолчанию `account@active`)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета net в байтах (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка `delay_sec` в секундах, по умолчанию 0

---

### `multisig-unapprove` {#cleos-cmd-multisig-multisig-unapprove}

#### Описание
Снять одобрение с предложенной транзакции

---
#### Позиционные аргументы
- `proposer` _TEXT_ — имя предлагающего (строка)
- `proposal_name` _TEXT_ — имя предложения (строка)
- `permissions` _TEXT_ — JSON-строка или файл с разрешениями одобрения
#### Опции
- `-h,--help` — вывести справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции, по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной (дополнительный расход bandwidth, снимается защита от случайной повторной отправки)
- `-s,--skip-sign` — использовать ли ключи разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `--return-packed` — вместе с `--dont-broadcast` получить упакованную транзакцию
- `-r,--ref-block` _TEXT_ — номер блока или id блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission`  _TEXT_ — аккаунт и уровень разрешения в виде `account@permission` (по умолчанию `account@active`)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета net в байтах (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка `delay_sec` в секундах, по умолчанию 0

---

### `multisig-invalidate` {#cleos-cmd-multisig-multisig-invalidate}

#### Описание
Аннулировать все одобрения multisig для аккаунта

#### Позиционные параметры:
  invalidator TEXT            имя аннулирующего (строка) (обязательно)

#### Опции:
 - `-h,--help` — вывести справку и выйти
 - `-x,--expiration` — время в секундах до истечения транзакции, по умолчанию 30 с
-  `-f,--force-unique` — принудительно сделать транзакцию уникальной (дополнительный расход bandwidth, снимается защита от случайной повторной отправки)
 - `-s,--skip-sign` — использовать ли ключи разблокированного кошелька для подписи транзакции
 - `-j,--json` — вывести результат в JSON
 - `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
-  `--return-packed` — вместе с `--dont-broadcast` получить упакованную транзакцию
 - `-r,--ref-block` TEXT — номер блока или id блока для TAPOS (Transaction as Proof-of-Stake)
 - `-p,--permission` TEXT ... — аккаунт и уровень разрешения в виде `account@permission` (по умолчанию `invalidator@active`)
 - `--max-cpu-usage-ms` UINT — верхний предел миллисекунд бюджета CPU (0 — без ограничения)
 - `--max-net-usage` UINT — верхний предел бюджета net в байтах (0 — без ограничения)
 - `--delay-sec` UINT — задержка `delay_sec` в секундах, по умолчанию 0

---

### `multisig-cancel` {#cleos-cmd-multisig-multisig-cancel}

#### Описание
Отменить предложенную транзакцию

#### Позиционные аргументы
- `proposer` _TEXT_ — имя предлагающего (строка)
- `proposal_name` _TEXT_ — имя предложения (строка)
- `canceler` _TEXT_ — имя отменяющего (строка)
#### Опции
- `-h,--help` — вывести справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции, по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной (дополнительный расход bandwidth, снимается защита от случайной повторной отправки)
- `-s,--skip-sign` — использовать ли ключи разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер блока или id блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission`  _TEXT_ — аккаунт и уровень разрешения в виде `account@permission` (по умолчанию `account@active`)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета net в байтах (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка `delay_sec` в секундах, по умолчанию 0

---

### `multisig-exec` {#cleos-cmd-multisig-multisig-exec}

#### Описание

Выполнить предложенную транзакцию

#### Позиционные аргументы
- `proposer` _TEXT_ — имя предлагающего (строка)
- `proposal_name` _TEXT_ — имя предложения (строка)
- `executer` _TEXT_ — аккаунт, оплачивающий выполнение (строка)
#### Опции
- `-h,--help` — вывести справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции, по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной (дополнительный расход bandwidth, снимается защита от случайной повторной отправки)
- `-s,--skip-sign` — использовать ли ключи разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер блока или id блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission`  _TEXT_ — аккаунт и уровень разрешения в виде `account@permission` (по умолчанию `account@active`)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета net в байтах (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка `delay_sec` в секундах, по умолчанию 0

---

## cleos system {#cleos-ref-system}

### Описание

Отправить действие контракта eosio.system в блокчейн.

### Подкоманды

- [system newaccount](#cleos-cmd-system-system-newaccount) — создать новую учётную запись в блокчейне с начальными ресурсами
- [system regproducer](#cleos-cmd-system-system-regproducer) — зарегистрировать нового продюсера
- [system unregprod](#cleos-cmd-system-system-unregprod) — снять регистрацию существующего продюсера
- [system voteproducer](#cleos-cmd-system-system-voteproducer) — голосовать за продюсера
- [system listproducers](#cleos-cmd-system-system-listproducers) — список продюсеров
- [system delegatebw](#cleos-cmd-system-system-delegatebw) — делегировать пропускную способность
- [system undelegatebw](#cleos-cmd-system-system-undelegatebw) — отменить делегирование пропускной способности
- [system listbw](#cleos-cmd-system-system-listbw) — список делегированной пропускной способности
- [system bidname](#cleos-cmd-system-system-bidname) — торги за имена
- [system bidnameinfo](#cleos-cmd-system-system-bidnameinfo) — сведения о торгах за имя
- [system buyram](#cleos-cmd-system-system-buyram) — купить RAM
- [system sellram](#cleos-cmd-system-system-sellram) — продать RAM
- [system claimrewards](#cleos-cmd-system-system-claimrewards) — получить награды продюсера
- [system regproxy](#cleos-cmd-system-system-regproxy) — зарегистрировать учётную запись как прокси (для голосования)
- [system unregproxy](#cleos-cmd-system-system-unregproxy) — снять регистрацию учётной записи как прокси (для голосования)
- [system canceldelay](#cleos-cmd-system-system-canceldelay) — отменить отложенную транзакцию
- [system rex](#cleos-cmd-system-system-rex) — действия, связанные с REX (биржа ресурсов)

---

### `system-newaccount` {#cleos-cmd-system-system-newaccount}

#### Описание

Создать учётную запись, купить RAM и застейкать пропускную способность для неё.

#### Позиционные аргументы

- `creator` _TEXT_ — имя учётной записи, создающей новую
- `name` _TEXT_ — имя новой учётной записи
- `OwnerKey` _TEXT_ — публичный ключ owner для новой учётной записи
- `ActiveKey` _TEXT_ — публичный ключ active для новой учётной записи

#### Опции

- `-h,--help` — показать справку и выйти
- `--stake-net` _TEXT_ — сумма EOS, делегируемая на сетевую пропускную способность
- `--stake-cpu` _TEXT_ — сумма EOS, делегируемая на CPU
- `--buy-ram-bytes` _UINT_ — объём RAM в байтах для покупки новой учётной записи в кибибайтах (KiB); по умолчанию 8 KiB
- `--buy-ram-EOS` _TEXT_ — сумма EOS на покупку RAM для новой учётной записи
- `--transfer` — передать получателю право голоса и право анстейкать EOS
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры

---

### `system-regproducer` {#cleos-cmd-system-system-regproducer}

---
title: "system regproducer"
excerpt: "Зарегистрировать нового продюсера"
---
#### Позиционные аргументы

- `account` _TEXT_ — учётная запись для регистрации в качестве продюсера
- `producer_key` _TEXT_ — публичный ключ продюсера
- `url` _TEXT_ — URL с информацией о продюсере
- `location` _UINT_ — относительное местоположение для планирования ближайших соседей

#### Опции

- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры

---

### `system-unregprod` {#cleos-cmd-system-system-unregprod}

#### Позиционные аргументы

`account` _TEXT_ — учётная запись для снятия регистрации продюсера

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры

---

### `system-voteproducer` {#cleos-cmd-system-system-voteproducer}

#### Подкоманды

- [voteproducer proxy](#cleos-cmd-system-system-voteproducer-proxy) — голосовать стейком через прокси
- [voteproducer prods](#cleos-cmd-system-system-voteproducer-prods) — голосовать за одного или нескольких продюсеров
- [voteproducer approve](#cleos-cmd-system-system-voteproducer-approve) — добавить одного продюсера в список голосования
- [voteproducer unapprove](#cleos-cmd-system-system-voteproducer-unapprove) — убрать одного продюсера из списка голосования

---

### `system-voteproducer-proxy` {#cleos-cmd-system-system-voteproducer-proxy}

#### Позиционные аргументы

- `voter` _TEXT_ — учётная запись голосующего
- `proxy` _TEXT_ — учётная запись прокси

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры

---

### `system-voteproducer-prods` {#cleos-cmd-system-system-voteproducer-prods}

#### Позиционные аргументы

- `voter` _TEXT_ — учётная запись голосующего
- `producers` _TEXT ..._ — учётные записи продюсеров, за которых голосуют. Все аргументы с этой позиции и далее считаются списком продюсеров.

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры

---

### `system-voteproducer-approve` {#cleos-cmd-system-system-voteproducer-approve}

#### Позиционные аргументы

  - `voter` _TEXT_ — учётная запись голосующего
  - `producer` _TEXT_ — учётная запись продюсера, за которого голосуют

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры

---

### `system-voteproducer-unapprove` {#cleos-cmd-system-system-voteproducer-unapprove}

#### Позиционные аргументы

- `voter` _TEXT_ — учётная запись голосующего
- `producer` _TEXT_ — учётная запись продюсера, удаляемого из списка голосования

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры

---

### `system-listproducers` {#cleos-cmd-system-system-listproducers}

#### Описание

Список продюсеров.

#### Позиционные аргументы

#### Опции

`-h,--help` — показать справку и выйти  
`-j,--json` — вывод в формате JSON  
`-l,--limit` _UINT_ — максимальное число возвращаемых строк  
`-L,--lower` _TEXT_ — нижняя граница ключа; по умолчанию первая

---

### `system-delegatebw` {#cleos-cmd-system-system-delegatebw}

---
title: "system delegatebw"
excerpt: "Делегировать пропускную способность"
---
#### Позиционные аргументы

- `from` _TEXT_ — учётная запись, с которой делегируется пропускная способность
- `receiver` _TEXT_ — учётная запись, которой делегируется пропускная способность
- `stake_net_quantity` _TEXT_ — сумма EOS, делегируемая на сетевую пропускную способность
- `stake_cpu_quantity` _TEXT_ — сумма EOS, делегируемая на CPU

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры

---

### `system-undelegatebw` {#cleos-cmd-system-system-undelegatebw}

#### Позиционные аргументы

- `from` _TEXT_ — учётная запись, отменяющая делегирование пропускной способности
- `receiver` _TEXT_ — учётная запись, у которой отменяется делегирование
- `unstake_net_quantity` _TEXT_ — сумма EOS для снятия делегирования с сетевой пропускной способности
- `unstake_cpu_quantity` _TEXT_ — сумма EOS для снятия делегирования с CPU

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры

---

### `system-listbw` {#cleos-cmd-system-system-listbw}

#### Описание

Список делегированной пропускной способности.

#### Позиционные аргументы

- `account` _TEXT_ — учётная запись с делегированной пропускной способностью

#### Опции

`-j,--json` — вывод в формате JSON  
`-h,--help` — показать справку и выйти

#### Примеры

---

### `system-bidname` {#cleos-cmd-system-system-bidname}

#### Описание

Сделать ставку на «премиальные» имена пользователей (имена учётных записей короче 12 символов).

#### Позиционные аргументы

* `bidder` _TEXT_ — учётная запись, делающая ставку (обязательно)
* `newname` _TEXT_ — имя, на которое делается ставка (обязательно)
* `bid` _TEXT_ — сумма в базовом символе сети для ставки (обязательно)

#### Опции

* `-h,--help` — показать справку и выйти
* `-x,--expiration` — время в секундах до истечения транзакции; по умолчанию 30 с
* `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
* `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
* `-j,--json` — вывести результат в формате JSON
* `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
* `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
* `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission»
* `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
* `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с

#### Использование


```sh
cleos system bidname accountname1 bob "10 SYS"
```

---

### `system-bidnameinfo` {#cleos-cmd-system-system-bidnameinfo}

#### Описание

Возвращает данные об имени и статусе торгов за него.

#### Позиционные аргументы

* `name` _TEXT_ — имя для запроса

#### Опции

* `-h,--help` — показать справку и выйти
* `-j,--json` — вывести результат в формате JSON

#### Использование

```sh
cleos system bidnameinfo bob
```

---

### `system-buyram` {#cleos-cmd-system-system-buyram}

#### Описание

Купить RAM.

#### Позиционные аргументы

- `payer` _TEXT_ — учётная запись, оплачивающая RAM
- `receiver` _TEXT_ — учётная запись, получающая купленную RAM
- `amount` _TEXT_ — сумма EOS за покупку RAM

#### Опции

- `-h,--help` — показать справку и выйти
- `-k,--kbytes` — покупка RAM в кибибайтах (KiB)
- `-b,--bytes` — покупка RAM в байтах
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-j,--json` — вывести результат в формате JSON
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с

---

### `system-sellram` {#cleos-cmd-system-system-sellram}

#### Описание

Продать RAM.

#### Позиционные аргументы

- `account` _TEXT_ — учётная запись, получающая EOS за проданную RAM
- `bytes` _UINT_ — число байт RAM для продажи

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры

---

### `system-claimrewards` {#cleos-cmd-system-system-claimrewards}

#### Описание

Получить награды продюсера.

#### Позиционные аргументы

- `owner` _TEXT_ — учётная запись, для которой забираются награды

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры

---

### `system-regproxy` {#cleos-cmd-system-system-regproxy}

---
title: "system regproxy"
excerpt: "Зарегистрировать учётную запись как прокси (для голосования)"
---
#### Позиционные аргументы

`proxy` _TEXT_ — учётная запись прокси для регистрации

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры

---

### `system-unregproxy` {#cleos-cmd-system-system-unregproxy}

#### Позиционные аргументы

- `proxy` _TEXT_ — учётная запись прокси для снятия регистрации

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры

---

### `system-canceldelay` {#cleos-cmd-system-system-canceldelay}

#### Описание

Отменить отложенную транзакцию.

#### Позиционные аргументы

- `canceling_account` _TEXT_ — учётная запись из авторизации исходной отложенной транзакции
- `canceling_permission` _TEXT_ — разрешение из авторизации исходной отложенной транзакции
- `trx_id` _TEXT_ — идентификатор исходной отложенной транзакции

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

---

### `system-rex` {#cleos-cmd-system-system-rex}

#### Описание

Действия, связанные с REX (биржа ресурсов).

#### Подкоманды

- [deposit](#cleos-cmd-system-system-rex-deposit) — внести в REX-фонд владельца, переводом с ликвидного баланса токенов
- [withdraw](#cleos-cmd-system-system-rex-withdraw) — вывести из REX-фонда владельца на ликвидный баланс токенов
- [buyrex](#cleos-cmd-system-system-rex-buyrex) — купить REX за токены из REX-фонда владельца
- [lendrex](#cleos-cmd-system-system-rex-lendrex) — внести токены в REX-фонд и купить на них REX
- [unstaketorex](#cleos-cmd-system-system-rex-unstaketorex) — купить REX за застейканные токены
- [sellrex](#cleos-cmd-system-system-rex-sellrex) — продать токены REX
- [cancelrexorder](#cleos-cmd-system-system-rex-cancelrexorder) — отменить отложенный ордер на продажу REX, если он есть
- [mvtosavings](#cleos-cmd-system-system-rex-mvtosavings) — переместить токены REX в сберегательный бакет
- [mvfromsavings](#cleos-cmd-system-system-rex-mvfromsavings) — переместить токены REX из сберегательного бакета
- [rentcpu](#cleos-cmd-system-system-rex-rentcpu) — арендовать CPU на 30 дней
- [rentnet](#cleos-cmd-system-system-rex-rentnet) — арендовать сетевую пропускную способность на 30 дней
- [fundcpuloan](#cleos-cmd-system-system-rex-fundcpuloan) — пополнить фонд CPU-кредита
- [fundnetloan](#cleos-cmd-system-system-rex-fundnetloan) — пополнить фонд сетевого кредита
- [defundcpuloan](#cleos-cmd-system-system-rex-defundcpuloan) — вывести из фонда CPU-кредита
- [defundnetloan](#cleos-cmd-system-system-rex-defundnetloan) — вывести из фонда сетевого кредита
- [consolidate](#cleos-cmd-system-system-rex-consolidate) — объединить бакеты погашения REX в один со сроком погашения 4 дня
- [updaterex](#cleos-cmd-system-system-rex-updaterex) — обновить стейк голоса владельца REX и вес голоса
- [rexexec](#cleos-cmd-system-system-rex-rexexec) — выполнить обслуживание REX: обработать истёкшие кредиты и неисполненные ордера на продажу
- [closerex](#cleos-cmd-system-system-rex-closerex) — удалить неиспользуемые записи пользовательских таблиц, связанных с REX

---

### `system-rex-deposit` {#cleos-cmd-system-system-rex-deposit}

---
title: "system rex deposit"
excerpt: "Внести в REX-фонд владельца переводом с ликвидного баланса токенов"
---
#### Позиционные аргументы

- `owner` _TEXT_ — учётная запись владельца REX-фонда (обязательно)
- `amount` _TEXT_ — сумма пополнения REX-фонда (обязательно)

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-j,--json` — вывести результат в формате JSON
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)

#### Примеры


```sh
cleos system rex deposit accountname1 "1 SYS"
```

---

### `system-rex-withdraw` {#cleos-cmd-system-system-rex-withdraw}

#### Описание

Вывести из REX-фонда на ликвидный баланс токенов.

#### Позиционные аргументы

- `owner` _TEXT_ — учётная запись владельца REX-фонда (обязательно)
- `amount` _TEXT_ — сумма вывода из REX-фонда (обязательно)

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры


```sh
cleos system rex withdraw accountname1 "1 SYS"
```

---

### `system-rex-buyrex` {#cleos-cmd-system-system-rex-buyrex}

---
title: "system rex buyrex"
excerpt: "Купить REX за токены из REX-фонда владельца"
---
#### Позиционные аргументы

- `from` _TEXT_ — учётная запись, покупающая REX (обязательно)
- `amount` _TEXT_ — сумма, списываемая из REX-фонда на покупку REX (обязательно)

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры


```sh
cleos system rex buyrex accountname1 "1 REX"
```

---

### `system-rex-lendrex` {#cleos-cmd-system-system-rex-lendrex}

---
title: "system rex lendrex"
excerpt: "Внести токены в REX-фонд и купить на них REX"
---
#### Позиционные аргументы

- `from` _TEXT_ — учётная запись, покупающая REX (обязательно)
- `amount` _TEXT_ — сумма токенов для внесения в REX-фонд и покупки REX (обязательно)

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры


```sh
cleos system rex lendrex accountname1 "1 REX"
```

---

### `system-rex-unstaketorex` {#cleos-cmd-system-system-rex-unstaketorex}

#### Описание

Купить REX, сняв стейк с CPU и NET.

#### Позиционные аргументы

- `from` _TEXT_ — учётная запись, покупающая REX (обязательно)
- `receiver` _TEXT_ — учётная запись, на которую застейканы токены (обязательно)
- `from_cpu` _TEXT_ — сумма для анстейка с CPU и направления на покупку REX (обязательно)
- `from_net` _TEXT_ — сумма для анстейка с NET и направления на покупку REX (обязательно)

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры


```sh
cleos system rex unstaketorex accountname1 accountname2 "1 EOS" 0
```

---

### `system-rex-sellrex` {#cleos-cmd-system-system-rex-sellrex}

#### Описание

Продать токены REX.

#### Позиционные аргументы

- `from` _TEXT_ — учётная запись, продающая REX (обязательно)
- `rex` _TEXT_ — объём продаваемых REX (обязательно)

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)

#### Примеры


```sh
cleos system rex sellrex accountname1 "1 REX"
```

---

### `system-rex-cancelrexorder` {#cleos-cmd-system-system-rex-cancelrexorder}

---
title: "system rex cancelrexorder"
excerpt: "Отменить отложенный ордер на продажу REX, если он есть"
---
#### Позиционные аргументы

- `owner` _TEXT_ — учётная запись владельца ордера на продажу (обязательно)

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры


```sh
cleos system rex cancelrexorder accountname1
```

---

### `system-rex-mvtosavings` {#cleos-cmd-system-system-rex-mvtosavings}

---
title: "system rex mvtosavings"
excerpt: "Переместить токены REX в сберегательный бакет"
---
#### Позиционные аргументы

- `owner` _TEXT_ — учётная запись владельца REX-фонда (обязательно)
- `rex` _TEXT_ — объём REX для перемещения в сберегательный бакет (обязательно)

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON


#### Примеры


```sh
cleos system rex mvtosavings accountname1 "1 REX"
```

---

### `system-rex-mvfromsavings` {#cleos-cmd-system-system-rex-mvfromsavings}

---
title: "system rex mvfromsavings"
excerpt: "Переместить токены REX из сберегательного бакета"
---
#### Позиционные аргументы

- `owner` _TEXT_ — учётная запись владельца REX-фонда (обязательно)
- `rex` _TEXT_ — объём REX для вывода из сберегательного бакета (обязательно)

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры


```sh
cleos system rex mvfromsavings accountname1 "1 REX"
```

---

### `system-rex-rentcpu` {#cleos-cmd-system-system-rex-rentcpu}

#### Описание

Арендовать CPU на 30 дней.

#### Позиционные аргументы

- `from` _TEXT_ — учётная запись, оплачивающая аренду (обязательно)
- `receiver` _TEXT_ — учётная запись, на которую застейкована арендованная CPU (обязательно)
- `loan_payment` _TEXT_ — комиссия по кредиту; по ней рассчитывается объём арендованной пропускной способности (обязательно)
- `loan_fund` _TEXT_ — фонд кредита для автоматического продления; может быть 0 токенов (обязательно)

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры


```sh
cleos system rex rentcpu accountname1 accountname2 "1 EOS" 0
```

---

### `system-rex-rentnet` {#cleos-cmd-system-system-rex-rentnet}

#### Описание

Арендовать сетевую пропускную способность на 30 дней.

#### Позиционные аргументы

- `from` _TEXT_ — учётная запись, оплачивающая аренду (обязательно)
- `receiver` _TEXT_ — учётная запись, на которую застейкована арендованная NET (обязательно)
- `loan_payment` _TEXT_ — комиссия по кредиту; по ней рассчитывается объём арендованной пропускной способности (обязательно)
- `loan_fund` _TEXT_ — фонд кредита для автоматического продления; может быть 0 токенов (обязательно)

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры


```sh
cleos system rex rentnet accountname1 accountname2 "1 EOS" 0
```

---

### `system-rex-fundcpuloan` {#cleos-cmd-system-system-rex-fundcpuloan}

---
title: "system rex fundcpuloan"
excerpt: "Пополнить фонд CPU-кредита"
---
#### Позиционные аргументы

- `from` _TEXT_ — владелец кредита (обязательно)
- `loan_num` _TEXT_ — идентификатор кредита (обязательно)
- `payment` _TEXT_ — сумма пополнения (обязательно)

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-j,--json` — вывести результат в формате JSON
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с

#### Примеры

```sh
cleos system rex fundcpuloan accountname1 abc123 "1 EOS"
```

---

### `system-rex-fundnetloan` {#cleos-cmd-system-system-rex-fundnetloan}

---
title: "system rex fundnetloan"
excerpt: "Пополнить фонд сетевого кредита"
---
#### Позиционные аргументы

- `from` _TEXT_ — владелец кредита (обязательно)
- `loan_num` _TEXT_ — идентификатор кредита (обязательно)
- `payment` _TEXT_ — сумма пополнения (обязательно)

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-j,--json` — вывести результат в формате JSON
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с

#### Примеры


```sh
cleos system rex fundnetloan accountname1 abc123 "1 EOS"
```

---

### `system-rex-defundcpuloan` {#cleos-cmd-system-system-rex-defundcpuloan}

---
title: "system rex defundcpuloan"
excerpt: "Вывести из фонда CPU-кредита"
---
#### Позиционные аргументы

- `from` _TEXT_ — владелец кредита (обязательно)
- `loan_num` _TEXT_ — идентификатор кредита (обязательно)
- `payment` _TEXT_ — сумма к выводу (обязательно)

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры

```sh
cleos system rex defundcpuloan accountname1 abc123 "1 EOS"
```

---

### `system-rex-defundnetloan` {#cleos-cmd-system-system-rex-defundnetloan}

#### Описание

Вывести из фонда сетевого кредита.

#### Позиционные аргументы

- `from` _TEXT_ — владелец кредита (обязательно)
- `loan_num` _TEXT_ — идентификатор кредита (обязательно)
- `payment` _TEXT_ — сумма к выводу (обязательно)

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-j,--json` — вывести результат в формате JSON
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с

#### Примеры



```sh
cleos system rex defundnetloan accountname1 abc123 "1 EOS"
```

---

### `system-rex-consolidate` {#cleos-cmd-system-system-rex-consolidate}

---
title: "system rex consolidate"
excerpt: "Объединить бакеты погашения REX в один со сроком погашения 4 дня"
---
#### Позиционные аргументы

- `owner` _TEXT_ — учётная запись владельца REX-фонда (обязательно)

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры


```sh
cleos system rex consolidate accountname1
```

---

### `system-rex-updaterex` {#cleos-cmd-system-system-rex-updaterex}

#### Описание

Обновить стейк голоса владельца REX и вес голоса.

#### Позиционные аргументы

- `owner` _TEXT_ — учётная запись владельца REX-фонда (обязательно)

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры


```sh
cleos system rex updaterex accountname1
```

---

### `system-rex-rexexec` {#cleos-cmd-system-system-rex-rexexec}

#### Описание

Выполнить обслуживание REX: обработать истёкшие кредиты и неисполненные ордера на продажу.

#### Позиционные аргументы

- `user` _TEXT_ — учётная запись, выполняющая действие (обязательно)
- `max` _TEXT_ — максимальное число обрабатываемых CPU-кредитов, сетевых кредитов и ордеров на продажу (обязательно)

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры


```sh
cleos system rex rexexec accountname1 10
```

---

### `system-rex-closerex` {#cleos-cmd-system-system-rex-closerex}

---
title: "system rex closerex"
excerpt: "Удалить неиспользуемые записи пользовательских таблиц, связанных с REX"
---
#### Позиционные аргументы

- `owner` _TEXT_ — учётная запись владельца REX-фонда (обязательно)

#### Опции

- `-h,--help` — показать справку и выйти
- `-x,--expiration` _TEXT_ — время в секундах до истечения транзакции; по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной; увеличивает расход пропускной способности и снимает защиту от случайной повторной отправки той же транзакции
- `-s,--skip-sign` — указывает, использовать ли ключи из разблокированного кошелька для подписи транзакции
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `-r,--ref-block` _TEXT_ — номер или идентификатор опорного блока для TAPOS (Transaction as Proof-of-Stake)
- `-p,--permission` _TEXT_ — учётная запись и уровень разрешения для авторизации, в формате «account@permission» (по умолчанию «account@active»)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU при выполнении транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета сети в байтах для транзакции (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка delay_sec в секундах; по умолчанию 0 с
- `-j,--json` — вывести результат в формате JSON

#### Примеры


```sh
cleos system rex closerex accountname1
```

---
