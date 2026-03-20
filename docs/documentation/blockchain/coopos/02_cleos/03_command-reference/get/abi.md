## Описание
Получить ABI аккаунта

## Позиционные параметры
- `name` _TEXT_ — аккаунт, чей ABI нужно получить

## Опции
- `-f,--file` _TEXT_ — файл для сохранения `.abi` вместо вывода в консоль

## Примеры
Получить и сохранить ABI контракта eosio.token

```sh
cleos get abi eosio.token -f eosio.token.abi
```
```console
saving abi to eosio.token.abi
```
