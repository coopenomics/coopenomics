## Обзор

Здесь показано, как снять делегирование CPU с аккаунта получателя обратно на аккаунт-делегатор (`cleos system undelegatebw`). Снять делегирование может только тот аккаунт, который изначально делегировал ресурс.

## Перед началом

* Установлена поддерживаемая версия `cleos`.

* Развёрнуты и используются эталонные системные контракты из репозитория `eosio.contracts` для управления системными ресурсами.

* Нужны базовые понятия: [аккаунт](../../../accounts.md) и [системные ресурсы NET/CPU](../../../system-resources.md).

## Шаги

Снять делегирование 0.01 SYS пропускной способности CPU с аккаунта `alice` обратно на аккаунт `bob`:

```sh
cleos system undelegatebw bob alice "0 SYS" "0.01 SYS"
```

Вывод должен быть примерно таким:

```console
executed transaction: e7e7edb6c5556de933f9d663fea8b4a9cd56ece6ff2cebf056ddd0835efa6606  184 bytes  452 us
#         eosio <= eosio::undelegatebw          {"from":"alice","receiver":"bob","unstake_net_quantity":"0.0000 EOS","unstake_cpu_qu...
warning: transaction executed locally, but may not be confirmed by the network yet         ]
```
