## Команда
```sh
cleos net status [OPTIONS] host
```

**Где:**
* [OPTIONS] = см. раздел **Опции** (уточняется)

[//]: # ( THIS IS A COMMENT LINK BELOW IS BROKEN )  
[//]: # (in the **Command Usage** command-usage section below.)  

* host — хост:порт подключения для запроса статуса

**Примечание:** аргументы и опции в квадратных скобках необязательны.

## Описание
Возвращает статус подключённого пира. Позволяет оператору узла проверить состояние конкретного пира.

## Использование команды
Позиционные параметры и опции `cleos net status`:

### Позиционные параметры
* `host` _TEXT_ ОБЯЗАТЕЛЬНО — хост:порт подключения для запроса статуса

### Опции
* `-h,--help` — вывести справку и выйти

## Требования

* Установлена поддерживаемая версия `cleos`.
!!! note "Примечание"
    `cleos` входит в состав COOPOS. [Установка COOPOS](../../../00_install/index.md) ставит `cleos` и `keosd`.
* Доступ к узлу с загруженным [`net_api_plugin`](../../../01_nodeos/03_plugins/net_api_plugin/index.md).

## Примеры

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
