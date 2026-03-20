## Обзор

На этой странице показан пример настройки разрешения `active` аккаунта так, чтобы для действий требовались подписи нескольких аккаунтов (порог и веса в `authority`). Это основа для мультиподписи при работе через `cleos`.

## Перед началом

* У вас есть аккаунт.

* Выделено достаточно ресурсов для выполнения транзакции.

* Установлена поддерживаемая версия `cleos`.

* Нужны базовые понятия: [аккаунт и разрешения](../../../accounts.md) и [транзакции](../../../transactions.md).


## Шаги

```sh
cleos set account permission multisig active '{\"threshold\" : 1, \"accounts\" :[{\"permission\":{\"actor\":\"eosio\",\"permission\":\"active\"},\"weight\":1},{\"permission\":{\"actor\":\"customera\",\"permission\":\"active\"},\"weight\":1}]}' owner -p multisig@owner"
```
