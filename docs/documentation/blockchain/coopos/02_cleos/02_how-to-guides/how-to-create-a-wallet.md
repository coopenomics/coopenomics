## Обзор

Здесь описано, как создать кошелёк `keosd` через `cleos wallet create` и сохранить пароль в файл — чтобы затем импортировать ключи и подписывать транзакции из CLI.

## Перед началом

Убедитесь, что выполнены следующие требования:

* Ознакомьтесь с командой [`cleos wallet create`](../03_command-reference/wallet/create.md) и её параметрами.
* Ознакомьтесь с остальными командами [`cleos wallet`](../03_command-reference/wallet/index.md).
* Установлена поддерживаемая версия `cleos`.

!!! note "Примечание"
    `cleos` входит в состав ПО COOPOS. При [установке COOPOS](../../00_install/index.md) устанавливается и `cleos`.

* Нужны базовые понятия: [аккаунт](../../../accounts.md), [аккаунты и разрешения](../../../accounts.md) и пара открытого/закрытого ключа в этой модели.

## Шаги

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
