# Руководство по cleos (how-to)

Ниже собраны пошаговые заметки по **cleos**: подключение к нодам и кошельку, ключи, аккаунты, ресурсы, транзакции и смарт-контракты. Каждый подраздел соответствует бывшей отдельной странице.

**С чего начать в теории:** [концептуальная модель COOPOS](../../../system-model.md) → [аккаунты и разрешения](../../../accounts.md) → [ключи и подписи](../../../keys-signatures.md) → [действия и транзакции](../../../transactions.md). Сетевые уровни (P2P, HTTP API, SHiP): [сетевые слои и интерфейсы](../../../protocols.md).

!!! tip "Ресурсы NET, CPU и RAM в COOPOS"
    Актуальный способ — действие **`eosio.system::powerup`** через `cleos push action` ([раздел ниже](#cleos-howto-powerup)). Разделы про `buyram`, `delegatebw`, `undelegatebw` и стейк оставлены как **legacy** для совместимости со старыми инструкциями и другими сетями EOSIO.

## Оглавление

- [Подключение к сети](#cleos-howto-connect)
- [Кошелёк](#cleos-howto-wallet)
- [Пара ключей](#cleos-howto-keypairs)
- [Список ключей](#cleos-howto-list-keys)
- [Импорт ключа](#cleos-howto-import-key)
- [Создание аккаунта](#cleos-howto-create-account)
- [Данные аккаунта](#cleos-howto-account-info)
- [Мультисиг](#cleos-howto-multisig)
- [Связать разрешение](#cleos-howto-link-perm)
- [Отвязать разрешение](#cleos-howto-unlink-perm)
- [Информация о блоке](#cleos-howto-block)
- [Информация о транзакции](#cleos-howto-tx)
- [Таблицы](#cleos-howto-tables)
- [Отправка транзакции](#cleos-howto-push-tx)
- [Перевод токена](#cleos-howto-transfer)
- [Ресурсы: powerup (актуально)](#cleos-howto-powerup)
- [Покупка RAM](#cleos-howto-ram) (legacy)
- [Делегирование NET](#cleos-howto-delegate-net) (legacy)
- [Делегирование CPU](#cleos-howto-delegate-cpu) (legacy)
- [Снятие делегирования NET](#cleos-howto-undelegate-net) (legacy)
- [Снятие делегирования CPU](#cleos-howto-undelegate-cpu) (legacy)
- [Unstake NET](#cleos-howto-unstake-net) (legacy)
- [Unstake CPU](#cleos-howto-unstake-cpu) (legacy)
- [Стейк ресурса](#cleos-howto-stake) (legacy)
- [Развёртывание контракта](#cleos-howto-deploy)
- [Голосование](#cleos-howto-vote)

---

## Подключение к сети {#cleos-howto-connect}

### Обзор

На этой странице показано, как направить `cleos` на конкретный хост `nodeos` или `keosd`, чтобы выполнить нужную команду против удалённого или нестандартного API. Для этого используются необязательные аргументы `--url` и `--wallet-url` с HTTP-адресом и портом сервиса.

!!! note "Адрес и порт по умолчанию"
    Если необязательные аргументы не заданы (т.е. без `--url` или `--wallet-url`), `cleos` пытается подключиться к локальным `nodeos` или `keosd` на `127.0.0.1` и порту по умолчанию `8888`.

### Перед началом

* Установлена поддерживаемая версия `cleos`.

### Шаги

#### Подключение к nodeos

```sh
cleos -url http://nodeos-host:8888 COMMAND
```

#### Подключение к keosd

```sh
cleos --wallet-url http://keosd-host:8888 COMMAND
```

---

## Кошелёк {#cleos-howto-wallet}

### Обзор

Здесь описано, как создать кошелёк `keosd` через `cleos wallet create` и сохранить пароль в файл — чтобы затем импортировать ключи и подписывать транзакции из CLI.

### Перед началом

Убедитесь, что выполнены следующие требования:

* Ознакомьтесь с командой [`cleos wallet create`](../03_command-reference/index.md#cleos-cmd-wallet-create) и её параметрами.
* Ознакомьтесь с остальными командами [`cleos wallet`](../03_command-reference/index.md#cleos-ref-wallet).
* Установлена поддерживаемая версия `cleos`.

!!! note "Примечание"
    `cleos` входит в состав ПО COOPOS. При [установке COOPOS](../../00_install/index.md) устанавливается и `cleos`.

* Нужны базовые понятия: [аккаунты и разрешения](../../../accounts.md), [ключи и подписи](../../../keys-signatures.md).

### Шаги

Выполните шаг ниже.

Создайте кошелёк по умолчанию или с именем и сохраните пароль кошелька в файл:

```sh
cleos wallet create [-n named_wallet] -f <file_to_save_pwd>
```

Здесь `file_to_save_pwd` — имя файла, в который записывается пароль кошелька, а `named_wallet` — необязательный параметр для имени кошелька.

Ниже приведены примеры.

* Создать кошелёк по умолчанию и сохранить пароль в файл `default_wallet.pwd`:

**Пример вывода**

```sh
cleos wallet create -f default_wallet.pwd
```
```console
Creating wallet: default
Save password to use in the future to unlock this wallet.
Without password imported keys will not be retrievable.
saving password to default_wallet.pwd
```

* Создать именованный кошелёк `my_wallet` и сохранить пароль в файл `my_wallet.pwd`:

**Пример вывода**

```sh
cleos wallet create -n my_wallet -f my_wallet.pwd
```
```console
Creating wallet: my_wallet
Save password to use in the future to unlock this wallet.
Without password imported keys will not be retrievable.
saving password to my_wallet.pwd
```

---

## Пара ключей {#cleos-howto-keypairs}

### Обзор

В этом руководстве описано, как создать пару ключей (открытый и закрытый) для подписи транзакций в блокчейне COOPOS.

### Перед началом

Убедитесь, что выполнены следующие требования:

* Установлена поддерживаемая версия `cleos`.
* Нужны базовые понятия: [ключи и подписи](../../../keys-signatures.md); модель аккаунта — [аккаунты и разрешения](../../../accounts.md).

!!! note "Состав COOPOS"
    Утилита `cleos` входит в пакет COOPOS: при [установке из исходников](../../00_install/index.md) она собирается вместе с `nodeos` и `keosd`.

### Справка по командам

См. справку по использованию `cleos` и опциям:

* команда [`cleos create key`](../03_command-reference/index.md#cleos-cmd-create-key) и её параметры

### Процедура

Ниже показано, как создать пару открытого/закрытого ключа, вывести её в консоль и сохранить в файл:

1. Создайте пару и выведите её в консоль:

```sh
cleos create key --to-console
```

**Где**:

* `--to-console` — опция для вывода пары ключей в консоль

**Пример вывода**

```console
Private key: 5KPzrqNMJdr6AX6abKg*******************************cH
Public key: EOS4wSiQ2jbYGrqiiKCm8oWR88NYoqnmK4nNL1RCtSQeSFkGtqsNc
```

2. Создайте пару и сохраните её в файл:

```sh
cleos create key --file pw.txt
```
**Где**:

* `--file` — опция для сохранения пары ключей в файл
* `FILE_TO_SAVEKEY` — имя файла для сохранения пары ключей

**Пример вывода**

```console
saving keys to pw.txt
```

Чтобы посмотреть сохранённую пару в файле:

```sh
cat pw.txt
```
```console
Private key: 5K7************************************************
Public key: EOS71k3WdpLDeqeyqVRAAxwpz6TqXwDo9Brik5dQhdvvpeTKdNT59
```

### Итог

Следуя этим шагам, вы создаёте пары открытого/закрытого ключа, выводите их в консоль и сохраняете в файл.

---

## Список ключей {#cleos-howto-list-keys}

### Обзор

В этом руководстве описано, как вывести список всех открытых ключей и пар открытый/закрытый в кошельке `keosd` по умолчанию — чтобы проверить, какие ключи доступны для подписи, и при необходимости скопировать открытый ключ. Эти ключи используются для авторизации транзакций в блокчейне COOPOS.

В примере показаны все открытые ключи и пары, хранящиеся в существующем кошельке по умолчанию.

### Перед началом

Убедитесь, что выполнены следующие требования:

* Создайте кошелёк по умолчанию командой `cleos wallet create`. Инструкции — в разделе [Кошелёк](#cleos-howto-wallet).
* Создайте пару ключей (см. [Пара ключей](#cleos-howto-keypairs)) и при необходимости импортируйте закрытый ключ в кошелёк.
* Ознакомьтесь с командами [`cleos wallet`](../03_command-reference/index.md#cleos-ref-wallet).
* Установлена поддерживаемая версия `cleos`.
!!! note "Примечание"
    `cleos` входит в состав ПО COOPOS. При [установке COOPOS](../../00_install/index.md) устанавливается и `cleos`.
* Нужны базовые понятия: [ключи и подписи](../../../keys-signatures.md) в модели COOPOS.

### Справка по командам

См. справку по использованию `cleos` и опциям:

* команда [`cleos wallet keys`](../03_command-reference/index.md#cleos-cmd-wallet-keys) и её параметры
* команда [`cleos wallet private_keys`](../03_command-reference/index.md#cleos-cmd-wallet-private_keys) и её параметры

### Процедура

Ниже показано, как вывести все открытые ключи и пары открытый/закрытый в кошельке `keosd` по умолчанию:

1. Откройте кошелёк по умолчанию:
```sh
cleos wallet open
```
```console
Opened: default
```

2. Разблокируйте кошелёк по умолчанию. Будет запрошен пароль:
```sh
cleos wallet unlock
```
```console
password:
```

3. Введите пароль, заданный при создании кошелька по умолчанию:
```sh
***
```
Если пароль верный, кошелёк разблокируется:
```console
Unlocked: default
```

4. Выведите все открытые ключи в кошельке по умолчанию:
```sh
cleos wallet keys
```
**Пример вывода**
```console
[
  "EOS5VCUBtxS83ZKqVcWtDBF4473P9HyrvnCM9NBc4Upk1C387qmF3"
]
```

5. Выведите все пары открытый/закрытый в кошельке по умолчанию. Будет запрошен пароль:
```sh
cleos wallet private_keys
```
```console
password:
```

6. Введите пароль, заданный при создании кошелька по умолчанию:
```sh
***
```
**Пример вывода**  
Если пароль верный, выводятся пары открытый/закрытый:
```console
password: [[
    "EOS5VCUBt****************************************F3",
    "5JnuuGM1S****************************************4D"
  ]
]
```

!!! warning "Внимание"
    Никогда не раскрывайте закрытые ключи в продуктивной среде.

!!! note "Примечание"
    Если команды ничего не выводят, убедитесь, что вы создали пары ключей и импортировали закрытые ключи в кошелёк.

### Итог

Следуя этим шагам, вы получаете список всех открытых ключей и пар открытый/закрытый в кошельке `keosd` по умолчанию.

### Устранение неполадок

При выполнении `cleos wallet open` / `cleos wallet unlock` может появиться такая ошибка CLI:

```sh
cleos wallet open
```
```console
No wallet service listening on ***. Cannot automatically start keosd because keosd was not found.
Failed to connect to keosd at unix:///Users/xxx.xxx/eosio-wallet/keosd.sock; is keosd running?
```

Чтобы устранить ошибку, убедитесь, что на машине запущена утилита `keosd`:
```sh
keosd
```

---

## Импорт ключа {#cleos-howto-import-key}

### Обзор

В этом руководстве описано, как импортировать закрытый ключ в кошелёк `keosd` по умолчанию, чтобы `cleos` мог подписывать транзакции от имени соответствующего аккаунта в блокчейне COOPOS.

### Перед началом

Убедитесь, что выполнены следующие требования:

* Создайте кошелёк по умолчанию командой `cleos wallet create`. Инструкции — в разделе [Кошелёк](#cleos-howto-wallet).
* Откройте и разблокируйте созданный кошелёк.
* Ознакомьтесь с командой [`cleos wallet import`](../03_command-reference/index.md#cleos-cmd-wallet-import).
* Установлена поддерживаемая версия `cleos`.
* Нужны базовые понятия: [ключи и подписи](../../../keys-signatures.md) в модели COOPOS.

!!! note "Состав COOPOS"
    `cleos` входит в пакет COOPOS; при [установке из исходников](../../00_install/index.md) ставится вместе с `nodeos` и `keosd`.

### Справка по командам

См. справку по использованию `cleos` и опциям:

* [cleos wallet import](../03_command-reference/index.md#cleos-cmd-wallet-import) — команда и параметры

### Процедура

Ниже показано, как импортировать закрытый ключ в существующий кошелёк `keosd` по умолчанию:

1. Выполните команду импорта закрытого ключа в кошелёк по умолчанию. Будет запрошен закрытый ключ:
```sh
cleos wallet import
```
```console
private key:
```

2. Введите закрытый ключ и нажмите Enter.
```sh
***
```

**Пример вывода**

Команда подтверждает успешный импорт, выводя соответствующий открытый ключ:
```console
imported private key for: EOS8FBXJUfbANf3xeDWPoJxnip3Ych9HjzLBr1VaXRQFdkVAxwLE7
```

### Итог

Следуя этим шагам, вы импортируете закрытый ключ в кошелёк по умолчанию.

---

## Создание аккаунта {#cleos-howto-create-account}

### Обзор

В этом руководстве описано, как создать новый аккаунт блокчейна COOPOS с помощью CLI `cleos`. Аккаунты нужны для развёртывания смарт-контрактов и других операций в блокчейне. Создайте один или несколько аккаунтов при настройке среды разработки.

В примере создаётся аккаунт **bob**, авторизованный системным аккаунтом по умолчанию **eosio**, через `cleos`.

### Перед началом

Убедитесь, что выполнены следующие требования:

* Установлена поддерживаемая версия `cleos`.
* Изучите раздел [аккаунты и разрешения](../../../accounts.md) и [ключи и подписи](../../../keys-signatures.md).
* Нужны базовые понятия: связка публичного ключа с `owner`/`active` на аккаунте — в тех же разделах.
* Создайте пары открытого/закрытого ключа для разрешений `owner` и `active` аккаунта.

!!! note "Состав COOPOS"
    `cleos` входит в пакет COOPOS; при [установке из исходников](../../00_install/index.md) ставится вместе с `nodeos` и `keosd`.

### Справка по командам

См. справку по использованию `cleos` и опциям:

* команда [`cleos create account`](../03_command-reference/index.md#cleos-cmd-create-account) и её параметры

### Процедура

Ниже показано, как создать аккаунт **bob**, авторизованный системным аккаунтом **eosio**.

1. Выполните команду для создания аккаунта **bob**:

```sh
cleos create account eosio bob EOS87TQktA5RVse2EguhztfQVEh6XXxBmgkU8b4Y5YnGvtYAoLGNN
```
**Где**:

* `eosio` — системный аккаунт, авторизующий создание нового аккаунта
* `bob` — имя нового аккаунта в соответствии с [правилами имён и разрешений](../../../accounts.md)
* `EOS87TQ...AoLGNN` — открытый ключ владельца или уровень разрешения для нового аккаунта (**обязательно**)

!!! note "Кто может создать аккаунт"
    Нужен уже существующий аккаунт-создатель с правом вызвать `newaccount`. В чистой тестовой сети для этого обычно используют системный аккаунт **eosio**. В продуктовой сети COOPOS создание новых аккаунтов идёт по правилам регистратора — см. [ресурсы и регистрация](../../../system-resources.md).

**Пример вывода**

```console
executed transaction: 4d65a274de9f809f9926b74c3c54aadc0947020bcfb6dd96043d1bcd9c46604c  200 bytes  166 us
#         eosio <= eosio::newaccount            {"creator":"eosio","name":"bob","owner":{"threshold":1,"keys":[{"key":"EOS87TQktA5RVse2EguhztfQVEh6X...
warning: transaction executed locally, but may not be confirmed by the network yet         ]
```

#### Итог

Следуя этим шагам, вы создаёте новый аккаунт COOPOS в своей среде.

---

## Данные аккаунта {#cleos-howto-account-info}

### Обзор

В этом руководстве описано, как запросить информацию об аккаунте COOPOS через `cleos get account` — квоты RAM, полосы NET/CPU и дерево разрешений. В примере запрашиваются данные аккаунта `eosio`.

### Перед началом

* Установлена поддерживаемая версия `cleos`.

!!! note "Примечание"
    Утилита cleos входит в состав ПО COOPOS. При [установке COOPOS](../../00_install/index.md) устанавливается и cleos.

* Полезно заранее прочитать [аккаунты и разрешения](../../../accounts.md) и [ключи и подписи](../../../keys-signatures.md).

### Справка по командам

См. справку по использованию cleos и опциям:

* команда [`cleos get account`](../03_command-reference/index.md#cleos-cmd-get-account) и её параметры

### Процедура

Ниже показано, как запросить информацию об аккаунте `eosio`:

1. Выполните команду:

```sh
cleos get account eosio
```
**Где**:

* `eosio` — имя системного аккаунта по умолчанию в блокчейне COOPOS.

**Пример вывода**

```console
created: 2018-06-01T12:00:00.000
privileged: true
permissions:
     owner     1:    1 EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
        active     1:    1 EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
memory:
     quota:       unlimited  used:     3.004 KiB

net bandwidth:
     used:               unlimited
     available:          unlimited
     limit:              unlimited

cpu bandwidth:
     used:               unlimited
     available:          unlimited
     limit:              unlimited
```

!!! note "Поля аккаунта"
    В зависимости от сети COOPOS набор полей аккаунта может отличаться — это определяется развёрнутым системным контрактом.

---

## Мультисиг {#cleos-howto-multisig}

### Обзор

На этой странице показан пример настройки разрешения `active` аккаунта так, чтобы для действий требовались подписи нескольких аккаунтов (порог и веса в `authority`). Это основа для мультиподписи при работе через `cleos`.

### Перед началом

* У вас есть аккаунт.

* Выделено достаточно ресурсов для выполнения транзакции.

* Установлена поддерживаемая версия `cleos`.

* Нужны базовые понятия: [аккаунты и разрешения](../../../accounts.md), [ключи и подписи](../../../keys-signatures.md), [транзакции](../../../transactions.md).

### Шаги

```sh
cleos set account permission multisig active '{\"threshold\" : 1, \"accounts\" :[{\"permission\":{\"actor\":\"eosio\",\"permission\":\"active\"},\"weight\":1},{\"permission\":{\"actor\":\"customera\",\"permission\":\"active\"},\"weight\":1}]}' owner -p multisig@owner
```

---

## Связать разрешение {#cleos-howto-link-perm}

### Обзор

Здесь показано, как привязать отдельное разрешение к конкретному действию (action) контракта через `cleos set action permission` — чтобы для вызова, например, `transfer` использовался не `active`, а специальное минимально необходимое разрешение.

### Перед началом

* Установлена поддерживаемая версия `cleos`.

* Нужны базовые понятия: [аккаунты и разрешения](../../../accounts.md), [ключи и подписи](../../../keys-signatures.md), действие (action) и транзакция — [транзакции](../../../transactions.md).

### Шаги

Свяжите уровень разрешения `permlvl` с действием `transfer` контракта `hodlcontract`:

```sh
cleos set action permission alice hodlcontract transfer permlvl
```

---

## Отвязать разрешение {#cleos-howto-unlink-perm}

### Обзор

Здесь показано, как убрать привязку разрешения к действию контракта (`cleos set action permission` с `NULL`), вернув для этого действия поведение по умолчанию.

### Перед началом

* Установлена поддерживаемая версия `cleos`.

* Нужны базовые понятия: [аккаунты и разрешения](../../../accounts.md), [ключи и подписи](../../../keys-signatures.md), [транзакции](../../../transactions.md).

### Шаги

Удалите связанный уровень разрешения у действия `transfer` контракта `hodlcontract`:

```sh
cleos set action permission alice hodlcontract transfer NULL
```

---

## Информация о блоке {#cleos-howto-block}

### Обзор

Здесь показано, как запросить у API `nodeos` полные данные блока по номеру или по идентификатору — чтобы проверить время, подпись производителя, состав транзакций и связь с предыдущим блоком при отладке или мониторинге сети.

### Перед началом

Убедитесь, что выполнены следующие требования:

* Ознакомьтесь с командой [`cleos get block`](../03_command-reference/index.md#cleos-cmd-get-block) и её параметрами.
* Установлена поддерживаемая версия `cleos`.

!!! note "Примечание"
    `cleos` входит в состав ПО COOPOS. При [установке COOPOS](../../00_install/index.md) устанавливается и `cleos`.

* Полезно знать, как [блоки формируются и распространяются по сети](../../../nodes.md), и общие идеи [протокола консенсуса](../../../protocols.md) в COOPOS.

### Шаги

Выполните шаг ниже.

Получите полную информацию о блоке:

```sh
cleos get block <block_number_or_id>
```

Здесь `block_number_or_id` — номер блока или идентификатор блока.

Ниже приведены примеры.

* Запросить в тестовой сети полную информацию о блоке с номером `48351112` или с ID `02e1c7888a92206573ae38d00e09366c7ba7bc54cd8b7996506f7d2a619c43ba`:

**Пример вывода**

```sh
cleos -u https://choiceofyourprovider get block 48351112
```
См. раздел [среда разработки и тестовые сети](../../01_nodeos/02_usage/03_development-environment/index.md)

```json
{
  "timestamp": "2021-01-28T17:58:59.500",
  "producer": "inith",
  "confirmed": 0,
  "previous": "02e1c78787ff4d4ce6124831b936bb4ef6015e470868a535f1c6e04f3afed8a1",
  "transaction_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
  "action_mroot": "1bf9d17b5a951cbb6d0a8324e4039744db4137df498abd53046ea26fa74d73c9",
  "schedule_version": 1,
  "new_producers": null,
  "producer_signature": "SIG_K1_JxFfxGA1wZx9LCVjbrBb5nxTuJai7RUSiwRXyY866fYvZZyRtdmQFn9KJCqVHFAiYEsJpDb6dhTmHNDwipJm4rDiyhEmGa",
  "transactions": [],
  "id": "02e1c7888a92206573ae38d00e09366c7ba7bc54cd8b7996506f7d2a619c43ba",
  "block_num": 48351112,
  "ref_block_prefix": 3493375603
}
```

* Запросить в тестовой сети полную информацию о блоке с ID `02e1c7888a92206573ae38d00e09366c7ba7bc54cd8b7996506f7d2a619c43ba`:

**Пример вывода**

```sh
cleos -u https://choiceofyourprovider get block 02e1c7888a92206573ae38d00e09366c7ba7bc54cd8b7996506f7d2a619c43ba
```
```json
{
  "timestamp": "2021-01-28T17:58:59.500",
  "producer": "inith",
  "confirmed": 0,
  "previous": "02e1c78787ff4d4ce6124831b936bb4ef6015e470868a535f1c6e04f3afed8a1",
  "transaction_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
  "action_mroot": "1bf9d17b5a951cbb6d0a8324e4039744db4137df498abd53046ea26fa74d73c9",
  "schedule_version": 1,
  "new_producers": null,
  "producer_signature": "SIG_K1_JxFfxGA1wZx9LCVjbrBb5nxTuJai7RUSiwRXyY866fYvZZyRtdmQFn9KJCqVHFAiYEsJpDb6dhTmHNDwipJm4rDiyhEmGa",
  "transactions": [],
  "id": "02e1c7888a92206573ae38d00e09366c7ba7bc54cd8b7996506f7d2a619c43ba",
  "block_num": 48351112,
  "ref_block_prefix": 3493375603
}
```

---

## Информация о транзакции {#cleos-howto-tx}

### Обзор

В этом руководстве описано, как получить по ID полные данные транзакции в COOPOS — например, чтобы разобрать действия, подписи и след в блоке после отладки или инцидента.

В примере запрашиваются данные транзакции, связанной с созданием аккаунта **bob**.

### Перед началом

Убедитесь, что выполнены следующие требования:
* Установлена поддерживаемая версия `cleos`.
!!! note "Примечание"
    `cleos` входит в состав ПО COOPOS. При [установке COOPOS](../../00_install/index.md) устанавливается и `cleos`.
* Полезно заранее знать, [как устроены транзакции](../../../transactions.md) в блокчейне COOPOS.

### Справка по командам

См. справку по использованию `cleos` и опциям:

* команда [`cleos get transaction`](../03_command-reference/index.md#cleos-cmd-get-transaction) и её параметры

### Процедура

Ниже показано, как получить информацию о транзакции, связанной с созданием аккаунта **bob**.

1. Запросите транзакцию по ID:
```sh
cleos get transaction 870a6b6e3882061ff0f64016e1eedfdd9439e2499bf978c3fb29fcedadada9b1
```
* Здесь `870a6b6e38...dada9b1` — идентификатор транзакции создания аккаунта **bob**.

**Пример вывода**

Команда `cleos` возвращает подробные данные транзакции:

```json
{
  "id": "870a6b6e3882061ff0f64016e1eedfdd9439e2499bf978c3fb29fcedadada9b1",
  "trx": {
    "receipt": {
      "status": "executed",
      "cpu_usage_us": 3493,
      "net_usage_words": 25,
      "trx": [
        1,{
          "signatures": [
            "SIG_K1_KYEvKx3nC81H6brKXHNjhrw32rNtTC2dP6nYFjZvj1N3k7KSU4CXBTJyiXd38ANu2ZPTUf66qUghUp5Jarkhiqdx3D8pwf"
          ],
          "compression": "none",
          "packed_context_free_data": "",
          "packed_trx": "0c252e60fe001fe2acca00000000010000000000ea305500409e9a2264b89a010000000000ea305500000000a8ed3232660000000000ea30550000000000000e3d01000000010002dfcee032f2e84bfc8ecc5c10fffb870ec1c690c1f3fdae3d8b7d65690b6455560100000001000000010002dfcee032f2e84bfc8ecc5c10fffb870ec1c690c1f3fdae3d8b7d65690b6455560100000000"
        }
      ]
    },
    "trx": {
      "expiration": "2021-02-18T08:27:56",
      "ref_block_num": 254,
      "ref_block_prefix": 3400327711,
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
          "data": {
            "creator": "eosio",
            "name": "bob",
            "owner": {
              "threshold": 1,
              "keys": [{
                  "key": "EOS6b4ENeXffuKGmsk3xCk3kbFM5M8dcANrUa9Mj9RzKLNhPKhzyj",
                  "weight": 1
                }
              ],
              "accounts": [],
              "waits": []
            },
            "active": {
              "threshold": 1,
              "keys": [{
                  "key": "EOS6b4ENeXffuKGmsk3xCk3kbFM5M8dcANrUa9Mj9RzKLNhPKhzyj",
                  "weight": 1
                }
              ],
              "accounts": [],
              "waits": []
            }
          },
          "hex_data": "0000000000ea30550000000000000e3d01000000010002dfcee032f2e84bfc8ecc5c10fffb870ec1c690c1f3fdae3d8b7d65690b6455560100000001000000010002dfcee032f2e84bfc8ecc5c10fffb870ec1c690c1f3fdae3d8b7d65690b64555601000000"
        }
      ],
      "transaction_extensions": [],
      "signatures": [
        "SIG_K1_KYEvKx3nC81H6brKXHNjhrw32rNtTC2dP6nYFjZvj1N3k7KSU4CXBTJyiXd38ANu2ZPTUf66qUghUp5Jarkhiqdx3D8pwf"
      ],
      "context_free_data": []
    }
  },
  "block_time": "2021-02-18T08:27:27.000",
  "block_num": 256,
  "last_irreversible_block": 305,
  "traces": [{
      "action_ordinal": 1,
      "creator_action_ordinal": 0,
      "closest_unnotified_ancestor_action_ordinal": 0,
      "receipt": {
        "receiver": "eosio",
        "act_digest": "2640ce4d4a789393dec3b7938cea2f78c5669498d0d22adeab9204c489c2cfd6",
        "global_sequence": 256,
        "recv_sequence": 256,
        "auth_sequence": [[
            "eosio",
            256
          ]
        ],
        "code_sequence": 0,
        "abi_sequence": 0
      },
      "receiver": "eosio",
      "act": {
        "account": "eosio",
        "name": "newaccount",
        "authorization": [{
            "actor": "eosio",
            "permission": "active"
          }
        ],
        "data": {
          "creator": "eosio",
          "name": "bob",
          "owner": {
            "threshold": 1,
            "keys": [{
                "key": "EOS6b4ENeXffuKGmsk3xCk3kbFM5M8dcANrUa9Mj9RzKLNhPKhzyj",
                "weight": 1
              }
            ],
            "accounts": [],
            "waits": []
          },
          "active": {
            "threshold": 1,
            "keys": [{
                "key": "EOS6b4ENeXffuKGmsk3xCk3kbFM5M8dcANrUa9Mj9RzKLNhPKhzyj",
                "weight": 1
              }
            ],
            "accounts": [],
            "waits": []
          }
        },
        "hex_data": "0000000000ea30550000000000000e3d01000000010002dfcee032f2e84bfc8ecc5c10fffb870ec1c690c1f3fdae3d8b7d65690b6455560100000001000000010002dfcee032f2e84bfc8ecc5c10fffb870ec1c690c1f3fdae3d8b7d65690b64555601000000"
      },
      "context_free": false,
      "elapsed": 1565,
      "console": "",
      "trx_id": "870a6b6e3882061ff0f64016e1eedfdd9439e2499bf978c3fb29fcedadada9b1",
      "block_num": 256,
      "block_time": "2021-02-18T08:27:27.000",
      "producer_block_id": null,
      "account_ram_deltas": [{
          "account": "bob",
          "delta": 2724
        }
      ],
      "except": null,
      "error_code": null
    }
  ]
}
```

!!! note
    Для запроса информации о транзакции нужен экземпляр `nodeos` с включёнными [плагином history](../../01_nodeos/03_plugins/history_plugin/index.md) и [плагином history API](../../01_nodeos/03_plugins/history_api_plugin/index.md).

### Итог

Следуя этим шагам, вы получаете информацию о транзакции по её идентификатору.

### Устранение неполадок

Если в `nodeos` в файле **config.ini** не включены [плагин history](../../01_nodeos/03_plugins/history_plugin/index.md) и [плагин history API](../../01_nodeos/03_plugins/history_api_plugin/index.md), команда `cleos get transaction` с ID завершится ошибкой, например:

```sh
cleos get transaction 509eee3aa8988d533a336fec7a4c8b067ae3205cd97e2d27b3e9a2da61ef460c
```
```console
Error 3110003: Missing History API Plugin
Ensure that you have eosio::history_api_plugin added to your node's configuration!
Error Details:
History API plugin is not enabled
```

Чтобы устранить ошибку, включите [плагин history](../../01_nodeos/03_plugins/history_plugin/index.md) и [плагин history API](../../01_nodeos/03_plugins/history_api_plugin/index.md), затем выполните команду снова.

---

## Таблицы {#cleos-howto-tables}

### Обзор

Здесь показана команда `cleos get table` для чтения строк таблицы состояния смарт-контракта по аккаунту контракта, scope и имени таблицы — удобно для отладки и инспекции данных на цепи.

### Перед началом

* Установлена поддерживаемая версия `cleos`.

* Нужны базовые понятия: [аккаунт контракта](../../../accounts.md), таблицы и scope — [состояние и хранение данных](../../../state.md).

### Шаги

```sh
cleos get table ACCOUNT SCOPE TABLE
```

---

## Отправка транзакции {#cleos-howto-push-tx}

### Обзор

На этой странице описано, как отправить (push) готовую транзакцию в сеть через `cleos push transaction`: вы формируете JSON транзакции и передаёте его файлом или строкой. Это нужно, когда транзакция уже собрана и её остаётся только подписать и доставить в `nodeos`.

### Перед началом

* Установлена поддерживаемая версия `cleos`.
* Нужны базовые понятия: [что такое транзакция](../../../transactions.md) и как собрать корректный JSON транзакции (поля `expiration`, `ref_block_*`, `actions` и т.д.).

### Шаги

* Создайте JSON-фрагмент с валидной транзакцией, например:

```JSON
{
  "expiration": "2019-08-01T07:15:49",
  "ref_block_num": 34881,
  "ref_block_prefix": 2972818865,
  "max_net_usage_words": 0,
  "max_cpu_usage_ms": 0,
  "delay_sec": 0,
  "context_free_actions": [],
  "actions": [{
      "account": "eosio.token",
      "name": "transfer",
      "authorization": [{
          "actor": "han",
          "permission": "active"
        }
      ],
      "data": "000000000000a6690000000000ea305501000000000000000453595300000000016d"
    }
  ],
  "transaction_extensions": [],
  "context_free_data": []
}
```

* Можно также использовать для поля `data` читаемый JSON.

!!! note "Читаемый JSON в `data`"
    Если в `data` задан читаемый JSON, `cleos` запрашивает нужные ABI через API `nodeos`; это создаёт дополнительную нагрузку на `nodeos`.

```JSON
{
  "expiration": "2019-08-01T07:15:49",
  "ref_block_num": 34881,
  "ref_block_prefix": 2972818865,
  "max_net_usage_words": 0,
  "max_cpu_usage_ms": 0,
  "delay_sec": 0,
  "context_free_actions": [],
  "actions": [{
      "account": "eosio.token",
      "name": "transfer",
      "authorization": [{
          "actor": "han",
          "permission": "active"
        }
      ],
      "data": {
        "from": "han",
        "to": "eosio",
        "quantity": "0.0001 SYS",
        "memo": "m"
      }
    }
  ],
  "transaction_extensions": [],
  "context_free_data": []
}
```

* Выполните команду:

```sh
cleos push transaction TRX_FILE.json
```

* Отправить транзакцию из JSON:

```sh
cleos push transaction JSON
```

---

## Перевод токена {#cleos-howto-transfer}

### Обзор

Здесь показано, как выполнить перевод основного токена сети через контракт `eosio.token` командой `cleos transfer` — типовая операция между аккаунтами при подключении к рабочей ноде.

### Перед началом

* Установлена поддерживаемая версия `cleos`.

* Вы переводите токен, созданный контрактом eosio.token, и контракт eosio.token развёрнут в сети, к которой вы подключены.

* Нужны базовые понятия: [транзакции](../../../transactions.md). Имейте в виду: переводы токенов на цепи необратимы.

### Шаги

Чтобы перевести `0.0001 SYS` на аккаунт `bob` с аккаунта `alice`, выполните:

```sh
cleos transfer alice bob "0.0001 SYS" "Hodl!" -p alice@active
```

---

## Ресурсы: powerup (актуально) {#cleos-howto-powerup}

В сети COOPOS ресурсы NET, CPU и RAM выдаются действием контракта **`eosio.system`** — **`powerup`**. Отдельной подкоманды `cleos system powerup` в справке может не быть; действие отправляют через **`cleos push action`**.

### Сигнатура действия

| Поле | Тип | Смысл |
|------|-----|--------|
| `payer` | имя | Кто платит токенами |
| `receiver` | имя | Кому начисляются ресурсы |
| `days` | `uint32` | Срок аренды в днях — совпадает с `powerup_days` в состоянии рынка |
| `payment` | актив | Сумма в основном токене сети |
| `transfer` | `bool` | Режим передачи ресурсов (для `registrator` / `eosio.system` при регистрации и др.) |

Подробнее: [Ресурсы сети, регистрация и контракты](../../../system-resources.md).

### Примеры `cleos push action`

```bash
cleos -u https://ВАША_НОДА push action eosio.system powerup \
  '["ПЛАТЕЛЬЩИК", "ПОЛУЧАТЕЛЬ", ДНИ, "1.0000 SYS", false]' -p ПЛАТЕЛЬЩИК@active
```

Обработка очереди истёкших аренд:

```bash
cleos -u https://ВАША_НОДА push action eosio.system powerupexec \
  '["ВЫЗЫВАЮЩИЙ", 100]' -p ВЫЗЫВАЮЩИЙ@active
```

### См. также

- Справка по подкомандам `cleos system`: [system](../03_command-reference/index.md#cleos-ref-system) (в т.ч. `buyram`, `delegatebw`, `rex` — описание интерфейса; фактическое поведение сети задаёт контракт `eosio.system`).

---

## Покупка RAM {#cleos-howto-ram}

!!! warning "Устарело (deprecated) для COOPOS"
    В сети COOPOS квоты RAM вместе с NET/CPU выдаются через **`powerup`** ([актуальные примеры](#cleos-howto-powerup)). Команда `cleos system buyram` относится к **старой модели** и приведена ниже только для справки и для других развёртываний EOSIO.

### Обзор

Здесь показано, как купить RAM на аккаунт через `cleos system buyram` — чтобы хватило квоты на развёртывание контракта, таблицы состояния и рост данных на цепи.

### Перед началом

* У вас есть аккаунт.

* Развёрнуты и используются эталонные системные контракты из репозитория `eosio.contracts` для управления системными ресурсами.

* На аккаунте достаточно токенов.

* Установлена поддерживаемая версия `cleos`.

* Разблокируйте кошелёк.

### Шаги

Купить RAM на сумму 0.1 SYS для аккаунта `alice`:

```sh
cleos system buyram alice alice "0.1 SYS" -p alice@active
```

---

## Делегирование NET {#cleos-howto-delegate-net}

!!! warning "Устарело (deprecated) для COOPOS"
    Для NET (и CPU) в COOPOS используется **`eosio.system::powerup`** ([раздел выше](#cleos-howto-powerup)). `cleos system delegatebw` — **legacy**-модель стейка/делегирования.

### Обзор

Здесь показано, как делегировать пропускную способность сети (NET) с одного аккаунта на другой через `cleos system delegatebw` — чтобы выделить NET получателю, при необходимости задействовав и CPU в той же команде.

### Перед началом

Убедитесь, что выполнены следующие требования:

* Ознакомьтесь с командой [`cleos system delegatebw`](../03_command-reference/index.md#cleos-cmd-system-system-delegatebw) и её параметрами.
* Установлена поддерживаемая версия `cleos`.

!!! note "Примечание"
    `cleos` входит в состав ПО COOPOS. При [установке COOPOS](../../00_install/index.md) устанавливается и `cleos`.

* Развёрнуты и используются эталонные системные контракты из репозитория [`reference-contracts`](https://github.com/Coopenomics/reference-contracts) для управления системными ресурсами.
* Нужны базовые понятия: [аккаунт](../../../accounts.md) и [системные ресурсы NET/CPU](../../../system-resources.md) в COOPOS.

### Шаги

Выполните шаг ниже.

Делегируйте пропускную способность сети (NET) с исходного аккаунта на аккаунт-получатель:

```sh
cleos system delegatebw <from> <receiver> <stake_net_quantity> <stake_cpu_quantity>
```

Здесь `from` — аккаунт, с которого делегируется пропускная способность, `receiver` — аккаунт-получатель, а `stake_net_quantity` и/или `stake_cpu_quantity` — объём токенов в стейке для NET и/или CPU соответственно.

Ниже приведены примеры.

* Делегировать 0.01 SYS на пропускную способность сети (NET) от `bob` к `alice`:

**Пример вывода**

```sh
cleos system delegatebw bob alice "0.01 SYS" "0 SYS"
```
```json
executed transaction: 5487afafd67bf459a20fcc2dbc5d0c2f0d1f10e33123eaaa07088046fd18e3ae  192 bytes  503 us
#         eosio <= eosio::delegatebw            {"from":"bob","receiver":"alice","stake_net_quantity":"0.0100 SYS","stake_cpu_quantity":"0.0000 SYS"...
#   eosio.token <= eosio.token::transfer        {"from":"bob","to":"eosio.stake","quantity":"0.0010 SYS","memo":"stake bandwidth"}
#  bob <= eosio.token::transfer        {"from":"bob","to":"eosio.stake","quantity":"0.0010 SYS","memo":"stake bandwidth"}
#   eosio.stake <= eosio.token::transfer        {"from":"bob","to":"eosio.stake","quantity":"0.0010 SYS","memo":"stake bandwidth"}
```

---

## Делегирование CPU {#cleos-howto-delegate-cpu}

### Обзор

Здесь показано, как делегировать пропускную способность CPU с одного аккаунта на другой через `cleos system delegatebw` — чтобы выделить CPU получателю (при необходимости в той же транзакции можно указать и NET).

### Перед началом

Убедитесь, что выполнены следующие требования:

* Ознакомьтесь с командой [`cleos system delegatebw`](../03_command-reference/index.md#cleos-cmd-system-system-delegatebw) и её параметрами.
* Установлена поддерживаемая версия `cleos`.

!!! note "Примечание"
    `cleos` входит в состав ПО COOPOS. При [установке COOPOS](../../00_install/index.md) устанавливается и `cleos`.

* Развёрнуты и используются эталонные системные контракты из репозитория [`reference-contracts`](https://github.com/Coopenomics/reference-contracts) для управления системными ресурсами.
* Нужны базовые понятия: [аккаунт](../../../accounts.md) и [системные ресурсы NET/CPU](../../../system-resources.md) в COOPOS.

### Шаги

Выполните шаг ниже.

Делегируйте пропускную способность CPU с исходного аккаунта на аккаунт-получатель:

```sh
cleos system delegatebw <from> <receiver> <stake_net_quantity> <stake_cpu_quantity>
```

Здесь `from` — аккаунт, с которого делегируется пропускная способность, `receiver` — аккаунт-получатель, а `stake_net_quantity` и/или `stake_cpu_quantity` — объём токенов в стейке для NET и/или CPU соответственно.

Ниже приведены примеры.

* Делегировать 0.01 SYS на пропускную способность CPU от `bob` к `alice`:

**Пример вывода**

```sh
cleos system delegatebw bob alice "0 SYS" "0.01 SYS"
```
```json
executed transaction: 5487afafd67bf459a20fcc2dbc5d0c2f0d1f10e33123eaaa07088046fd18e3ae  192 bytes  503 us
#         eosio <= eosio::delegatebw            {"from":"bob","receiver":"alice","stake_net_quantity":"0.0000 SYS","stake_cpu_quantity":"0.0100 SYS"...
#   eosio.token <= eosio.token::transfer        {"from":"bob","to":"eosio.stake","quantity":"0.0010 SYS","memo":"stake bandwidth"}
#  bob <= eosio.token::transfer        {"from":"bob","to":"eosio.stake","quantity":"0.0010 SYS","memo":"stake bandwidth"}
#   eosio.stake <= eosio.token::transfer        {"from":"bob","to":"eosio.stake","quantity":"0.0010 SYS","memo":"stake bandwidth"}
```

---

## Снятие делегирования NET {#cleos-howto-undelegate-net}

!!! warning "Устарело (deprecated) для COOPOS"
    Снятие стейка через `undelegatebw` относится к **legacy**-модели. В COOPOS ресурсы NET/CPU задаются **`powerup`** ([актуально](#cleos-howto-powerup)).

### Обзор

Здесь показано, как снять делегирование NET с аккаунта получателя обратно на аккаунт, который изначально делегировал ресурс (`cleos system undelegatebw`). Снять делегирование может только исходный делегатор.

### Перед началом

* Установлена поддерживаемая версия `cleos`.

* Развёрнуты и используются эталонные системные контракты из репозитория `eosio.contracts` для управления системными ресурсами.

* Нужны базовые понятия: [аккаунт](../../../accounts.md) и [системные ресурсы NET/CPU](../../../system-resources.md).

### Шаги

Снять делегирование 0.01 SYS пропускной способности сети с аккаунта `alice` обратно на аккаунт `bob`:

```sh
cleos system undelegatebw bob alice "0 SYS" "0.01 SYS"
```

Вывод должен быть примерно таким:

```console
executed transaction: e7e7edb6c5556de933f9d663fea8b4a9cd56ece6ff2cebf056ddd0835efa6606  184 bytes  452 us
#         eosio <= eosio::undelegatebw          {"from":"alice","receiver":"bob","unstake_net_quantity":"0.01 EOS","unstake_cpu_qu...
warning: transaction executed locally, but may not be confirmed by the network yet         ]
```

---

## Снятие делегирования CPU {#cleos-howto-undelegate-cpu}

### Обзор

Здесь показано, как снять делегирование CPU с аккаунта получателя обратно на аккаунт-делегатор (`cleos system undelegatebw`). Снять делегирование может только тот аккаунт, который изначально делегировал ресурс.

### Перед началом

* Установлена поддерживаемая версия `cleos`.

* Развёрнуты и используются эталонные системные контракты из репозитория `eosio.contracts` для управления системными ресурсами.

* Нужны базовые понятия: [аккаунт](../../../accounts.md) и [системные ресурсы NET/CPU](../../../system-resources.md).

### Шаги

Снять делегирование 0.01 SYS пропускной способности CPU с аккаунта `alice` обратно на аккаунт `bob`:

```sh
cleos system undelegatebw bob alice "0 SYS" "0.01 SYS"
```

Вывод должен быть примерно таким:

```console
executed transaction: e7e7edb6c5556de933f9d663fea8b4a9cd56ece6ff2cebf056ddd0835efa6606  184 bytes  452 us
#         eosio <= eosio::undelegatebw          {"from":"alice","receiver":"bob","unstake_net_quantity":"0.0000 EOS","unstake_cpu_qu...
warning: transaction executed locally, but may not be confirmed by the network yet         ]
```

---

## Unstake NET {#cleos-howto-unstake-net}

!!! warning "Устарело (deprecated) для COOPOS"
    Используйте **`powerup`** ([актуально](#cleos-howto-powerup)). Раздел ниже — **legacy**.

### Обзор

Здесь показано, как вывести стейк NET со своего аккаунта через `cleos system undelegatebw`. Снять делегирование может только тот аккаунт, который изначально делегировал ресурс.

### Перед началом

* Установлена поддерживаемая версия `cleos`.

* Развёрнуты и используются эталонные системные контракты из репозитория `eosio.contracts` для управления системными ресурсами.

* Нужны базовые понятия: [аккаунт](../../../accounts.md) и [системные ресурсы NET/CPU](../../../system-resources.md).

### Шаги

Вывести стейк 0.01 SYS пропускной способности сети с аккаунта `alice`:

```sh
cleos system undelegatebw alice alice "0 SYS" "0.01 SYS"
```

Вывод должен быть примерно таким:

```console
executed transaction: e7e7edb6c5556de933f9d663fea8b4a9cd56ece6ff2cebf056ddd0835efa6606  184 bytes  452 us
#         eosio <= eosio::undelegatebw          {"from":"alice","receiver":"alice","unstake_net_quantity":"0.01 EOS","unstake_cpu_qu...
warning: transaction executed locally, but may not be confirmed by the network yet         ]
```

---

## Unstake CPU {#cleos-howto-unstake-cpu}

!!! warning "Устарело (deprecated) для COOPOS"
    Используйте **`powerup`** ([актуально](#cleos-howto-powerup)). Раздел ниже — **legacy**.

### Обзор

Здесь показано, как вывести стейк CPU со своего аккаунта через `cleos system undelegatebw`. Снять делегирование может только тот аккаунт, который изначально делегировал ресурс.

### Перед началом

* Установлена поддерживаемая версия `cleos`.

* Развёрнуты и используются эталонные системные контракты из репозитория `eosio.contracts` для управления системными ресурсами.

* Нужны базовые понятия: [аккаунт](../../../accounts.md) и [системные ресурсы NET/CPU](../../../system-resources.md).

### Шаги

Вывести стейк 0.01 SYS пропускной способности CPU с аккаунта `alice`:

```sh
cleos system undelegatebw alice alice "0.01 SYS" "0 SYS"
```

Вывод должен быть примерно таким:

```console
executed transaction: e7e7edb6c5556de933f9d663fea8b4a9cd56ece6ff2cebf056ddd0835efa6606  184 bytes  452 us
#         eosio <= eosio::undelegatebw          {"from":"alice","receiver":"alice","unstake_net_quantity":"0.0000 EOS","unstake_cpu_qu...
warning: transaction executed locally, but may not be confirmed by the network yet         ]
```

---

## Стейк ресурса {#cleos-howto-stake}

!!! warning "Устарело (deprecated) для COOPOS"
    Для своего аккаунта в COOPOS ресурсы выдаются через **`powerup`** ([раздел выше](#cleos-howto-powerup)). `delegatebw` на себя — **legacy**.

### Обзор

Здесь приведены примеры, как застейкать NET и/или CPU на свой же аккаунт через `cleos system delegatebw` — чтобы увеличить доступные ресурсы для транзакций и хранения состояния контрактов.

### Перед началом

* Установлена поддерживаемая версия `cleos`.

* Развёрнуты и используются эталонные системные контракты из репозитория `eosio.contracts` для управления системными ресурсами.

* Нужны базовые понятия: [аккаунт](../../../accounts.md) и [системные ресурсы NET/CPU](../../../system-resources.md).

### Шаги

Застейкать 0.01 SYS пропускной способности CPU для `alice`:

```sh
cleos system delegatebw alice alice "0 SYS" "0.01 SYS"
```

Застейкать 0.01 SYS пропускной способности сети (NET) для `alice`:

```sh
cleos system delegatebw alice alice "0.01 SYS" "0 SYS"
```

---

## Развёртывание контракта {#cleos-howto-deploy}

### Обзор

На этой странице описано, как развернуть WASM и ABI смарт-контракта на аккаунте в сети COOPOS командой `cleos set contract` — обычный шаг после сборки контракта в среде разработки.

### Перед началом

* Установлена поддерживаемая версия `cleos`.

* Разблокируйте кошелёк, в котором есть закрытый ключ аккаунта контракта.

### Шаги

Выполните:

```sh
cleos set contract contract_account contract_folder [wasm-file] [abi-file]
```

Подставьте вместо `contract_folder` путь к каталогу с контрактом.

!!! note "Имя контракта по умолчанию"
    По умолчанию `cleos` считает именем контракта последний сегмент пути в `contract_folder` и ожидает файлы `.wasm` и `.abi` с таким именем. Это можно переопределить необязательными параметрами `wasm-file` и `abi-file`.

---

## Голосование {#cleos-howto-vote}

### Обзор

Здесь показано, как отдать голос за одного или нескольких производителей блоков через `cleos system voteproducer` в сети с классическим контрактом `eosio.system`.

### Перед началом

* Установлена поддерживаемая версия `cleos`.

* Развёрнуты и используются эталонные системные контракты из репозитория `eosio.contracts` для управления системными ресурсами.

* Полезно знать, кто такие производители блоков и как в вашей сети устроено голосование; общий контекст — в разделах [ноды и делегаты](../../../nodes.md) и [протоколы](../../../protocols.md).

* Разблокируйте кошелёк.

### Шаги

Если вы голосуете за `blockproducer1` и `blockproducer2` с аккаунта `eosiotestts2`, выполните:

```sh
cleos system voteproducer prods eosiotestts2 blockproducer1 blockproducer2
```

Вывод должен быть примерно таким:

```console
executed transaction: 2d8b58f7387aef52a1746d7a22d304bbbe0304481d7751fc4a50b619df62676d  128 bytes  374 us
#         eosio <= eosio::voteproducer          {"voter":"eosiotestts2","proxy":"","producers":["blockproducer1","blockproducer2"]}
```
