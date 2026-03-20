## Обзор

В этом руководстве описано, как запросить информацию об аккаунте COOPOS через `cleos get account` — квоты RAM, полосы NET/CPU и дерево разрешений. В примере запрашиваются данные аккаунта `eosio`.

## Перед началом

* Установлена поддерживаемая версия `cleos`.

!!! note "Примечание"
    Утилита cleos входит в состав ПО COOPOS. При [установке COOPOS](../../00_install/index.md) устанавливается и cleos.

* Полезно заранее прочитать раздел [Аккаунты и разрешения](../../../accounts.md) в документации по блокчейну.

## Справка по командам

См. справку по использованию cleos и опциям:

* команда [`cleos get account`](../03_command-reference/get/account.md) и её параметры

## Процедура

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
