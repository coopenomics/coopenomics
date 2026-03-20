## Описание
Из JSON данных действия в упакованный вид

## Позиционные параметры
- `account` _TEXT_ — аккаунт, на котором развёрнут контракт
- `name` _TEXT_ — имя вызываемого действия
- `unpacked_action_data` _TEXT_ — данные действия в JSON

## Опции

- `-h,--help` — вывести справку и выйти

## Использование
```sh
 cleos convert pack_action_data eosio unlinkauth '{"account":"test1", "code":"test2", "type":"eosioeosio"}'
```

## Вывод


```console
000000008090b1ca000000000091b1ca000075982aea3055
```
