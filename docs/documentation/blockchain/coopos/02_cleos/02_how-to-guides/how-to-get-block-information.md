## Обзор

Здесь показано, как запросить у API `nodeos` полные данные блока по номеру или по идентификатору — чтобы проверить время, подпись производителя, состав транзакций и связь с предыдущим блоком при отладке или мониторинге сети.

## Перед началом

Убедитесь, что выполнены следующие требования:

* Ознакомьтесь с командой [`cleos get block`](../03_command-reference/get/block.md) и её параметрами.
* Установлена поддерживаемая версия `cleos`.

!!! note "Примечание"
    `cleos` входит в состав ПО COOPOS. При [установке COOPOS](../../00_install/index.md) устанавливается и `cleos`.

* Полезно знать, как [блоки формируются и распространяются по сети](../../../nodes.md), и общие идеи [протокола консенсуса](../../../protocols.md) в COOPOS.

## Шаги

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
