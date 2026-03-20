## Описание
Из упакованных данных действия в JSON

## Позиционные параметры
- `account` _TEXT_ — аккаунт, на котором развёрнут контракт
- `name` _TEXT_ — имя вызываемого действия
- `packed_action_data` _TEXT_ — данные действия в виде упакованной hex-строки 
## Опции

- `-h,--help` — вывести справку и выйти

## Использование


```sh
 cleos convert unpack_action_data eosio unlinkauth 000000008090b1ca000000000091b1ca000075982aea3055
```

## Вывод


```json
{
  "account": "test1",
  "code": "test2",
  "type": "eosioeosio"
}
```
