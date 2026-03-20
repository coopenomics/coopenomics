## Описание
Получить код и ABI аккаунта

## Позиционные параметры
- `name` _TEXT_ — аккаунт, чей код нужно получить
## Опции
- `-c,--code` _TEXT_ — файл для сохранения контракта _.wast_
- `-a,--abi` _TEXT_ — файл для сохранения контракта _.abi_
- `--wasm` — сохранить контракт как wasm
## Примеры
Вывести только хэш кода контракта eosio.token 

```sh
cleos get code eosio.token
```
```console
code hash: f675e7aeffbf562c033acfaf33eadff255dacb90d002db51c7ad7cbf057eb791
```

Получить и сохранить ABI контракта eosio.token

```sh
cleos get code eosio.token -a eosio.token.abi
```
```console
code hash: f675e7aeffbf562c033acfaf33eadff255dacb90d002db51c7ad7cbf057eb791
saving abi to eosio.token.abi
```

Получить и сохранить WAST контракта eosio.token

```sh
cleos get code eosio.token -c eosio.token.wast
```
```console
code hash: f675e7aeffbf562c033acfaf33eadff255dacb90d002db51c7ad7cbf057eb791
saving wast to eosio.token.wast
```
