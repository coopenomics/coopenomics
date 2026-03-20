---
content_title: Настройка производящего узла
---

!!! note "Нужны системные контракты"
    Инструкции предполагают запуск производящего узла в сети с **загруженными системными контрактами**. На чистом dev-узле с нативной функциональностью или без системных контрактов шаги могут не сработать.

Производящий **nodeos** в сети COOPOS подписывает и выпускает блоки; ниже — регистрация аккаунта как продюсера, `producer-name`, `signature-provider`, пиры и подключение `chain_plugin` / `producer_plugin`. Остальные возможности задаются [другими плагинами](../../03_plugins/index.md).

## Перед началом

* [Установка COOPOS](../../../00_install/index.md); в `PATH` — `nodeos`, `cleos`, `keosd`.

[//]: # ( THIS IS A COMMENT LINK BELOW IS BROKEN )  
[//]: # ( If you built COOPOS using shell scripts, make sure to run the  Install Script ../../../00_install/01_build-from-source/01_shell-scripts/03_install-COOPOS-binaries.md )  

* [Опции nodeos](../../02_usage/00_nodeos-options.md) — по необходимости.

## Шаги

1. [Зарегистрировать аккаунт как продюсера](#1-register-your-account-as-a-producer)
2. [Задать имя продюсера](#2-set-producer-name)
3. [Настроить signature-provider продюсера](#3-set-the-producers-signature-provider)
4. [Задать список пиров](#4-define-a-peers-list)
5. [Подключить нужные плагины](#5-load-the-required-plugins)

### 1. Зарегистрировать аккаунт как продюсера {#1-register-your-account-as-a-producer}

Чтобы аккаунт мог быть продюсером, зарегистрируйте его:

```sh
cleos system regproducer accountname1 EOS1234534... http://producer.site Antarctica
```

### 2. Имя продюсера {#2-set-producer-name}

В `config.ini` задайте опцию `producer-name` на ваш аккаунт:

```console
# config.ini:

# ID of producer controlled by this node (e.g. inita; may specify multiple times) (eosio::producer_plugin)
producer-name = youraccount
```

### 3. Signature-provider продюсера {#3-set-the-producers-signature-provider}

Нужен закрытый ключ продюсера; открытый ключ должен входить в authority аккаунта продюсера.

`signature-provider` задаётся кортежем из трёх полей:
* `public-key` — валидный открытый ключ COOPOS в виде строки.
* `provider-spec` — строка вида `<provider-type>:<data>`
* `provider-type` — KEY или KEOSD

#### Через KEY:

```console
# config.ini:

signature-provider = PUBLIC_SIGNING_KEY=KEY:PRIVATE_SIGNING_KEY

//Example
//signature-provider = EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV=KEY:5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3
```

#### Через keosd:
Можно использовать `keosd` вместо явного указания ключей.

```console
# config.ini:

signature-provider = KEOSD:<data>   

//Example
//EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV=KEOSD:https://127.0.0.1:88888
```

### 4. Список пиров {#4-define-a-peers-list}

```console
# config.ini:

# Default p2p port is 9876
p2p-peer-address = 123.255.78.9:9876
```

### 5. Нужные плагины {#5-load-the-required-plugins}

В [config.ini](../index.md) убедитесь, что подключены следующие плагины (или добавьте их):

```console
# config.ini:

plugin = eosio::chain_plugin
plugin = eosio::producer_plugin
```
