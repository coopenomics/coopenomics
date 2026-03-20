## Описание
Получить все аккаунты, связанные с указанным публичным ключом

!!! note
    Команда не возвращает привилегированные аккаунты.

## Позиционные параметры
`public_key` _TEXT_ — публичный ключ для поиска аккаунтов
## Опции
- `-j,--json` — вывод в формате JSON
## Пример


```sh
cleos get accounts EOS8mUftJXepGzdQ2TaCduNuSPAfXJHf22uex4u41ab1EVv9EAhWt
{
  "account_names": [
    "testaccount"
  ]
}
```
