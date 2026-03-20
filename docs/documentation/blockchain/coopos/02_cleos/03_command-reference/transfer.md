## Описание
Перевести токены с одного аккаунта на другой

## Позиционные параметры
- `sender` _TEXT_ — аккаунт-отправитель
- `recipient` _TEXT_ — аккаунт-получатель
- `amount` _UINT_ — сумма EOS для перевода
- `memo` _TEXT_ — memo для перевода

## Опции
- `-c,--contract` _TEXT_ — контракт, управляющий токеном
- `--pay-ram-to-open` — оплатить RAM за открытие строки баланса получателя
- `-x,--expiration` — время в секундах до истечения транзакции, по умолчанию 30 с
- `-f,--force-unique` — принудительно сделать транзакцию уникальной (дополнительный расход bandwidth, снимается защита от случайной повторной отправки той же транзакции)
- `-s,--skip-sign` — не использовать ключи разблокированного кошелька для подписи
- `-j,--json` — вывести результат в JSON
- `--json-file` _TEXT_ — сохранить результат в JSON в файл
- `-d,--dont-broadcast` — не транслировать транзакцию в сеть (только вывести в stdout)
- `--return-packed` — вместе с `--dont-broadcast` вернуть упакованную транзакцию
- `-r,--ref-block` _TEXT_ — номер блока или id блока для TAPOS (Transaction as Proof-of-Stake)
- `--use-old-rpc` — использовать старый RPC `push_transaction` вместо нового `send_transaction`
- `-p,--permission` _TEXT_ ... — аккаунт и уровень разрешения для авторизации в виде `account@permission` (по умолчанию `sender@active`)
- `--max-cpu-usage-ms` _UINT_ — верхний предел миллисекунд бюджета CPU на выполнение транзакции (0 — без ограничения)
- `--max-net-usage` _UINT_ — верхний предел бюджета net в байтах (0 — без ограничения)
- `--delay-sec` _UINT_ — задержка `delay_sec` в секундах, по умолчанию 0

## Пример
Перевести 1000 SYS с **inita** на **tester**

```sh
cleos transfer inita tester 1000
```
Ответ может выглядеть примерно так:

```json
{
  "transaction_id": "eb4b94b72718a369af09eb2e7885b3f494dd1d8a20278a6634611d5edd76b703",
  "processed": {
    "refBlockNum": 2206,
    "refBlockPrefix": 221394282,
    "expiration": "2017-09-05T08:03:58",
    "scope": [
      "inita",
      "tester"
    ],
    "signatures": [
      "1f22e64240e1e479eee6ccbbd79a29f1a6eb6020384b4cca1a958e7c708d3e562009ae6e60afac96f9a3b89d729a50cd5a7b5a7a647540ba1678831bf970e83312"
    ],
    "messages": [{
        "code": "eos",
        "type": "transfer",
        "authorization": [{
            "account": "inita",
            "permission": "active"
          }
        ],
        "data": {
          "from": "inita",
          "to": "tester",
          "amount": 1000,
          "memo": ""
        },
        "hex_data": "000000008040934b00000000c84267a1e80300000000000000"
      }
    ],
    "output": [{
        "notify": [{
            "name": "tester",
            "output": { ... }
          },{
            "name": "inita",
            "output": { ... }
          }
        ],
        "sync_transactions": [],
        "async_transactions": []
      }
    ]
  }
}
```
