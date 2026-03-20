## Обзор

На этой странице описано, как отправить (push) готовую транзакцию в сеть через `cleos push transaction`: вы формируете JSON транзакции и передаёте его файлом или строкой. Это нужно, когда транзакция уже собрана и её остаётся только подписать и доставить в `nodeos`.

## Перед началом

* Установлена поддерживаемая версия `cleos`.
* Нужны базовые понятия: [что такое транзакция](../../../transactions.md) и как собрать корректный JSON транзакции (поля `expiration`, `ref_block_*`, `actions` и т.д.).

## Шаги

* Создайте JSON-фрагмент с валидной транзакцией, например:

```JSON
{
  "expiration": "2019-08-01T07:15:49",
  "ref_block_num": 34881,
  "ref_block_prefix": 2972818865,
  "max_net_usage_words": 0,
  "max_cpu_usage_ms": 0,
  "delay_sec": 0,
  "context_free_actions": [],
  "actions": [{
      "account": "eosio.token",
      "name": "transfer",
      "authorization": [{
          "actor": "han",
          "permission": "active"
        }
      ],
      "data": "000000000000a6690000000000ea305501000000000000000453595300000000016d"
    }
  ],
  "transaction_extensions": [],
  "context_free_data": []
}
```

* Можно также использовать для поля `data` читаемый JSON.

!!! note "Читаемый JSON в `data`"
    Если в `data` задан читаемый JSON, `cleos` запрашивает нужные ABI через API `nodeos`; это создаёт дополнительную нагрузку на `nodeos`.

```JSON
{
  "expiration": "2019-08-01T07:15:49",
  "ref_block_num": 34881,
  "ref_block_prefix": 2972818865,
  "max_net_usage_words": 0,
  "max_cpu_usage_ms": 0,
  "delay_sec": 0,
  "context_free_actions": [],
  "actions": [{
      "account": "eosio.token",
      "name": "transfer",
      "authorization": [{
          "actor": "han",
          "permission": "active"
        }
      ],
      "data": {
        "from": "han",
        "to": "eosio",
        "quantity": "0.0001 SYS",
        "memo": "m"
      }
    }
  ],
  "transaction_extensions": [],
  "context_free_data": []
}
```

* Выполните команду:

```sh
cleos push transaction TRX_FILE.json
```

* Отправить транзакцию из JSON:

```sh
cleos push transaction JSON
```

<!---
Link to Push Action API
-->
