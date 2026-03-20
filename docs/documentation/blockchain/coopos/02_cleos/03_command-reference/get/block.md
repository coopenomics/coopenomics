## Описание
Получить полный блок из блокчейна

## Позиционные параметры
- `block` _TEXT_ — номер **или** id блока
## Опции
- `--header-state` — состояние заголовка блока из fork database
- `--info` — краткая информация о блоке только по номеру
## Пример

### Полный блок:

```sh
cleos get block 1
```
или
```sh
cleos get block 0000000130d70e94e0022fd2fa035cabb9e542c34ea27f572ac90b5a7aa3d891
```

Вывод — объект блока, похожий на следующий:

```json
{
  "timestamp": "2018-03-02T12:00:00.000",
  "producer": "",
  "confirmed": 1,
  "previous": "0000000000000000000000000000000000000000000000000000000000000000",
  "transaction_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
  "action_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
  "schedule_version": 0,
  "new_producers": null,
  "header_extensions": [],
  "producer_signature": "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne",
  "transactions": [],
  "block_extensions": [],
  "id": "0000000130d70e94e0022fd2fa035cabb9e542c34ea27f572ac90b5a7aa3d891",
  "block_num": 1,
  "ref_block_prefix": 3526296288
}
```

### Информация о блоке:

```sh
cleos get block --info 1
```

Вывод — объект block info, похожий на следующий:

```json
{
  "block_num": 1,
  "ref_block_num": 1,
  "id": "0000000130d70e94e0022fd2fa035cabb9e542c34ea27f572ac90b5a7aa3d891",
  "timestamp": "2018-03-02T12:00:00.000",
  "producer": "",
  "confirmed": 1,
  "previous": "0000000000000000000000000000000000000000000000000000000000000000",
  "transaction_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
  "action_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
  "schedule_version": 0,
  "producer_signature": "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne",
  "ref_block_prefix": 3526296288
}
```

## Примечания
Объект block info фиксированного размера и не содержит полей: new_producers, header_extensions, transactions, block_extensions.
