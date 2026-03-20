## Описание

Создаёт пару ключей в кошельке, чтобы не импортировать её вручную, как после `cleos create key`. По умолчанию создаётся ключ типа, «предпочитаемый» кошельком (K1). Можно создать ключ в формате R1.

## Позиционные параметры

`key_type` _TEXT_ — тип ключа: `K1` или `R1`

## Опции

-n,--name TEXT=default Имя кошелька, в котором создаётся ключ

## Использование

```sh
cleos wallet create_key K1
```

## Вывод

```console
Created new private key with a public key of: "EOS67xHKzQArkWZN6rKLCq7NLvaj8kurwxzRxoTVz6cgDJkiWdGug"
```
