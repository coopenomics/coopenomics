## Обзор

Здесь показано, как отдать голос за одного или нескольких производителей блоков через `cleos system voteproducer` в сети с классическим контрактом `eosio.system`.

## Перед началом

* Установлена поддерживаемая версия `cleos`.

* Развёрнуты и используются эталонные системные контракты из репозитория `eosio.contracts` для управления системными ресурсами.

* Полезно знать, кто такие производители блоков и как в вашей сети устроено голосование; общий контекст — в разделах [ноды и делегаты](../../../nodes.md) и [протоколы](../../../protocols.md).

* Разблокируйте кошелёк.

## Шаги

Если вы голосуете за `blockproducer1` и `blockproducer2` с аккаунта `eosiotestts2`, выполните:

```sh
cleos system voteproducer prods eosiotestts2 blockproducer1 blockproducer2
```

Вывод должен быть примерно таким:

```console
executed transaction: 2d8b58f7387aef52a1746d7a22d304bbbe0304481d7751fc4a50b619df62676d  128 bytes  374 us
#         eosio <= eosio::voteproducer          {"voter":"eosiotestts2","proxy":"","producers":["blockproducer1","blockproducer2"]}
```
