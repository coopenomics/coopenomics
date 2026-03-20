## Команда
```sh
cleos net disconnect [OPTIONS] host
```

**Где:**
* [OPTIONS] = см. раздел **Опции** (уточняется)

[//]: # ( THIS IS A COMMENT LINK BELOW IS BROKEN )  
[//]: # (in the **Command Usage** command-usage section below.)  

**Примечание:** аргументы и опции в квадратных скобках необязательны.

## Описание
Закрыть существующее подключение к указанному пиру. Оператор узла может выполнить команду без перезапуска `nodeos`.

## Использование команды
Позиционные параметры и опции `cleos net disconnect`:

### Позиционные параметры
* `host` _TEXT_ ОБЯЗАТЕЛЬНО — хост:порт для отключения

### Опции
* `-h,--help` — вывести справку и выйти

## Требования

* Установлена поддерживаемая версия `cleos`.
!!! note "Примечание"
    `cleos` входит в состав COOPOS. [Установка COOPOS](../../../00_install/index.md) ставит `cleos` и `keosd`.
* Доступ к узлу с загруженным [`net_api_plugin`](../../../01_nodeos/03_plugins/net_api_plugin/index.md).

## Примеры

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
