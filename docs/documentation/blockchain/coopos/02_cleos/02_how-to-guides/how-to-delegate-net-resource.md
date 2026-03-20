## Обзор

Здесь показано, как делегировать пропускную способность сети (NET) с одного аккаунта на другой через `cleos system delegatebw` — чтобы выделить NET получателю, при необходимости задействовав и CPU в той же команде.

## Перед началом

Убедитесь, что выполнены следующие требования:

* Ознакомьтесь с командой [`cleos system delegatebw`](../03_command-reference/system/system-delegatebw.md) и её параметрами.
* Установлена поддерживаемая версия `cleos`.

!!! note "Примечание"
    `cleos` входит в состав ПО COOPOS. При [установке COOPOS](../../00_install/index.md) устанавливается и `cleos`.

* Развёрнуты и используются эталонные системные контракты из репозитория [`reference-contracts`](https://github.com/Coopenomics/reference-contracts) для управления системными ресурсами.
* Нужны базовые понятия: [аккаунт](../../../accounts.md) и [системные ресурсы NET/CPU](../../../system-resources.md) в COOPOS.

## Шаги

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
