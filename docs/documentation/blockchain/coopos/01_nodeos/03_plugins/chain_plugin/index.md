## Описание

Плагин `chain_plugin` — ядро узла: приём и проверка блоков, ведение состояния цепи (аккаунты, WASM, таблицы), журнал блоков и файлы состояния в `data-dir`. HTTP-интерфейса у плагина нет; запросы извне выполняют через [`chain_api_plugin`](../chain_api_plugin/index.md) и [`http_plugin`](../http_plugin/index.md).

## Использование

```console
# config.ini
plugin = eosio::chain_plugin
[options]
```
```sh
# command-line
nodeos ... --plugin eosio::chain_plugin [operations] [options]
```

## Операции (только CLI)

Задаются только в командной строке `nodeos`:

```console
Параметры командной строки для eosio::chain_plugin:
  --genesis-json arg                    файл начального состояния (genesis)
  --genesis-timestamp arg               переопределить начальную метку времени
                                        в файле genesis
  --print-genesis-json                  взять genesis из blocks.log, вывести
                                        JSON в консоль и выйти
  --extract-genesis-json arg            записать genesis из blocks.log в файл
                                        и выйти
  --print-build-info                    вывести сведения о сборке (JSON) в
                                        консоль и выйти
  --extract-build-info arg              записать сведения о сборке в файл и
                                        выйти
  --force-all-checks                    не пропускать проверки при реплее
                                        (для недоверенного blocks.log)
  --disable-replay-opts                 отключить оптимизации, заточенные под
                                        реплей
  --replay-blockchain                   очистить состояние и реплеить все
                                        блоки
  --hard-replay-blockchain              очистить состояние, восстановить блоки
                                        из журнала насколько возможно и реплеить
  --delete-all-blocks                   очистить состояние и журнал блоков
  --truncate-at-block arg (=0)          остановить hard replay / восстановление
                                        журнала на этом номере блока (если ≠0)
  --terminate-at-block arg (=0)         завершить nodeos после этого номера
                                        блока (если ≠0)
  --snapshot arg                        файл снимка состояния для старта

```

## Опции

Доступны и в командной строке `nodeos`, и в `config.ini`:

```console
Параметры конфигурации eosio::chain_plugin:
  --blocks-dir arg (="blocks")          каталог журнала блоков (абсолютный
                                        путь или относительно data-dir)
  --state-dir arg (="state")            каталог состояния цепи
  --protocol-features-dir arg (="protocol_features")
                                        каталог protocol_features (относительно
                                        каталога конфигурации приложения)
  --checkpoint arg                      пары [номер_блока,id_блока] как
                                        контрольные точки
  --wasm-runtime runtime (=eos-vm-jit)  среда выполнения WASM: eos-vm-jit или
                                        eos-vm (интерпретатор)

  --profile-account arg                 аккаунт, код которого профилировать
  --abi-serializer-max-time-ms arg (=15)
                                        лимит времени сериализации ABI (мс)
  --chain-state-db-size-mb arg (=1024)  макс. размер базы состояния цепи (МиБ)
  --chain-state-db-guard-size-mb arg (=128)
                                        штатно завершить узел, если свободного
                                        места в chain state DB меньше (МиБ)
  --signature-cpu-billable-pct arg (=50)
                                        какой процент фактической стоимости
                                        восстановления подписи списывать как CPU
                                        (целое, например 50 = 50%)
  --chain-threads arg (=2)              потоки пула контроллера цепи
  --contracts-console                   выводить print контрактов в консоль
  --deep-mind                           подробный лог операций цепи
  --actor-whitelist arg                 аккаунт в белом списке актёров
  --actor-blacklist arg                 аккаунт в чёрном списке актёров
  --contract-whitelist arg              контракт в белом списке
  --contract-blacklist arg              контракт в чёрном списке
  --action-blacklist arg                действие code::action в чёрном списке
  --key-blacklist arg                   публичный ключ, запрещённый в authority
  --sender-bypass-whiteblacklist arg    откладываемые trx от этих аккаунтов без
                                        субъективных проверок white/blacklist
  --read-mode arg (=head)               режим чтения БД: head | irreversible |
                                        speculative.
                                        head — состояние до головы; валидные
                                        входящие trx ретранслируются.
                                        irreversible — до LIB; trx с P2P не
                                        ретранслируются, приём по Chain API
                                        отключён.
                                        speculative — голова плюс часть ещё не
                                        вошедших в блок trx; валидные trx
                                        ретранслируются.
  --api-accept-transactions arg (=1)    принимать и ретранслировать trx по API
                                        при валидности
  --validation-mode arg (=full)         full — полная проверка блоков; light —
                                        полная проверка заголовков, trx внутри
                                        доверенных блоков не перепроверяются

  --disable-ram-billing-notify-checks   отключить субъективный отказ trx при
                                        биллинге RAM другому аккаунту в notify,
                                        когда получатель не код действия
  --maximum-variable-signature-length arg (=16384)
                                        лимит длины (байт) переменных частей
                                        подписи с переменной длиной
  --trusted-producer arg                продюсер: заголовки проверять полностью,
                                        trx в его блоках доверять
  --database-map-mode arg (=mapped)     mapped | mapped_private | heap |
                                        locked — способ отображения БД в память

  --eos-vm-oc-cache-size-mb arg (=1024) размер кэша кода EOS VM OC (МиБ)
  --eos-vm-oc-compile-threads arg (=1)  потоки компиляции для EOS VM OC tier-up
  --eos-vm-oc-enable arg (=auto)        OC tier-up: auto | all | none

  --enable-account-queries arg (=0)     включить поиск аккаунтов по метаданным
  --transaction-retry-max-storage-size-gb arg
                                        лимит памяти (ГиБ) для Transaction
                                        Retry; >0 включает функцию
  --transaction-retry-interval-sec arg (=20)
                                        как часто (сек) повторно слать trx в
                                        сеть, если её нет в блоке; не меньше
                                        чем в 2 раза больше
                                        p2p-dedup-cache-expire-time-sec
  --transaction-retry-max-expiration-sec arg (=120)
                                        макс. срок жизни trx для повторов; должен
                                        быть больше transaction-retry-interval-sec
  --transaction-finality-status-max-storage-size-gb arg
                                        лимит (ГиБ) для Transaction Finality
                                        Status; >0 включает функцию
  --transaction-finality-status-success-duration-sec arg (=180)
                                        сколько (сек) хранить статус успешной trx
  --transaction-finality-status-failure-duration-sec arg (=180)
                                        сколько (сек) хранить статус неуспешной trx
  --integrity-hash-on-start             логировать хэш целостности состояния при
                                        старте
  --integrity-hash-on-stop              то же при остановке
  --block-log-retain-blocks arg         при >0 — подрезать журнал блоков до
                                        указанного числа последних блоков; при 0
                                        — не писать журнал, файл удалить после
                                        старта

```

## Зависимости

Нет
