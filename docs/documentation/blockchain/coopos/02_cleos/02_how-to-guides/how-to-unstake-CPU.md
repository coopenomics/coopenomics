## Обзор

Здесь показано, как вывести стейк CPU со своего аккаунта через `cleos system undelegatebw`. Снять делегирование может только тот аккаунт, который изначально делегировал ресурс.

## Перед началом

* Установлена поддерживаемая версия `cleos`.

* Развёрнуты и используются эталонные системные контракты из репозитория `eosio.contracts` для управления системными ресурсами.

* Нужны базовые понятия: [аккаунт](../../../accounts.md) и [системные ресурсы NET/CPU](../../../system-resources.md).

## Шаги

Вывести стейк 0.01 SYS пропускной способности CPU с аккаунта `alice`:

```sh
cleos system undelegatebw alice alice "0.01 SYS" "0 SYS"
```

Вывод должен быть примерно таким:

```console
executed transaction: e7e7edb6c5556de933f9d663fea8b4a9cd56ece6ff2cebf056ddd0835efa6606  184 bytes  452 us
#         eosio <= eosio::undelegatebw          {"from":"alice","receiver":"alice","unstake_net_quantity":"0.0000 EOS","unstake_cpu_qu...
warning: transaction executed locally, but may not be confirmed by the network yet         ]
```
