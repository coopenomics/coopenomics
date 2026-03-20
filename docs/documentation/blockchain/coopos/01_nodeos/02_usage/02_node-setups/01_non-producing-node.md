---
content_title: Настройка непроизводящего узла
---

Непроизводящий **nodeos** в COOPOS только синхронизируется с пирами и не подписывает блоки; RPC, историю состояния и прочее включают [плагины](../../03_plugins/index.md) (кроме `producer_plugin`).

## Перед началом

* [Установка COOPOS](../../../00_install/index.md); в `PATH` — `nodeos`, `cleos`, `keosd`.

[//]: # ( THIS IS A COMMENT NEXT LINK CONTAINS A BROKEN LINK )  
[//]: # (  If you built COOPOS using shell scripts, make sure to run the Install Script ../../../00_install/01_build-from-source/01_shell-scripts/03_install-COOPOS-binaries.md )  

* [Опции nodeos](../../02_usage/00_nodeos-options.md) — по необходимости.

## Шаги

1. [Задать пиров](#1-set-peers)
2. [Включить один или несколько плагинов](#2-enable-one-or-more-available-plugins)

### 1. Пиры {#1-set-peers}

Укажите пиров в `config.ini`, например:

```console
# config.ini:

p2p-peer-address = 106.10.42.238:9876
```

Либо задайте пир при запуске `nodeos`:

```sh
nodeos ... --p2p-peer-address=106.10.42.238:9876
```

### 2. Плагины {#2-enable-one-or-more-available-plugins}

Список — [Плагины nodeos](../../03_plugins/index.md). Например: [`state_history_plugin`](../../03_plugins/state_history_plugin/index.md) для полной истории, [`http_plugin`](../../03_plugins/http_plugin/index.md) для HTTP RPC. У плагинов бывают зависимости — их нужно подключить вместе с ними.
