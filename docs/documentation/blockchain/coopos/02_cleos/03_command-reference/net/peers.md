## Команда
```sh
cleos net peers [OPTIONS]
```

**Где:**
* [OPTIONS] = см. раздел **Опции** (уточняется)

[//]: # (in the **Command Usage** command-usage section below.)  

**Примечание:** аргументы и опции в квадратных скобках необязательны.

## Описание
Возвращает список со статусом всех peer-подключений. Позволяет оператору узла проверить состояние подключений.

## Использование команды
Позиционные параметры и опции `cleos net peers`:

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
