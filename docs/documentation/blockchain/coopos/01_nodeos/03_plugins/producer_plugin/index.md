
## Описание

Плагин `producer_plugin` отвечает за планирование и подпись блоков от имени заданных продюсеров (`--producer-name`), поставку ключей подписи (`--signature-provider`) и субъективные лимиты при упаковке транзакций в блок. Без включённого производства узел только синхронизируется; фактический выпуск блоков включают настройкой и расписанием сети.

!!! note
    Для выпуска блоков нужна дополнительная настройка: [Настройка производящего узла](../../02_usage/02_node-setups/00_producing-node.md).

Пауза/возобновление выпуска и связанные вызовы по HTTP — в [`producer_api_plugin`](../producer_api_plugin/index.md) ([справочник API](https://docs.coopenomics.world/api/producer)).

## Использование

```console
# config.ini
plugin = eosio::producer_plugin [options]
```
```sh
# параметры запуска nodeos
nodeos ... --plugin eosio::producer_plugin [options]
```

## Опции

Задаются в командной строке `nodeos` и в `config.ini`:

```console
Параметры конфигурации eosio::producer_plugin:
  -e [ --enable-stale-production ]      выпускать блоки даже если цепь
                                        «устарела» (stale)
  -x [ --pause-on-startup ]             старт с приостановленным производством
  --max-transaction-time arg (=499)     лимит времени выполнения trx в блоке
                                        (мс), может быть ниже on-chain
                                        max_transaction_cpu_usage
  --max-irreversible-block-age arg (=-1)
                                        макс. возраст LIB (сек), при котором
                                        узел ещё производит; отрицательное —
                                        без ограничения
  -p [ --producer-name ] arg            имя продюсера, которым подписывает
                                        узел (можно несколько раз)
  --signature-provider arg (=EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV=KEY:5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3)
                                        пары публичный_ключ=спецификация
                                        провайдера подписи
                                        спецификация: тип:данные
                                        типы: KEY, KEOSD, SE
                                        KEY: приватный ключ в строковом виде
                                        KEOSD: URL keosd, кошельки разблокированы
                                        SE: тип провайдера подписи (см. справку
                                        `nodeos` для вашей сборки)
  --greylist-account arg                аккаунт без расширенных виртуальных
                                        CPU/NET при низкой загрузке сети
  --greylist-limit arg (=1000)          множитель расширения CPU/NET (1–1000);
                                        только субъективно; 1000 — не ограничивать
  --produce-block-offset-ms arg (=450)  резерв времени (мс) в конце слота для
                                        распространения блока к следующему
                                        продюсеру
  --max-block-cpu-usage-threshold-us arg (=5000)
                                        порог заполнения CPU блока (мкс); при
                                        близости к лимиту блок можно отдать
                                        раньше
  --max-block-net-usage-threshold-bytes arg (=1024)
                                        то же для NET (байты)
  --subjective-cpu-leeway-us arg (=31000)
                                        запас (мкс) для trx, стартующих с
                                        нехваткой CPU по квоте
  --subjective-account-max-failures arg (=3)
                                        макс. число субъективных отказов trx
                                        одного аккаунта на блок
  --subjective-account-decay-time-minutes arg (=1440)
                                        через сколько минут «восстановить»
                                        субъективный CPU для аккаунта
  --incoming-transaction-queue-size-mb arg (=1024)
                                        размер очереди входящих trx (МиБ); при
                                        переполнении — субъективный отброс
  --disable-subjective-account-billing arg
                                        аккаунт без субъективного CPU-биллинга
  --disable-subjective-p2p-billing arg (=1)
                                        отключить субъективный CPU-биллинг для
                                        trx с P2P
  --disable-subjective-api-billing arg (=1)
                                        то же для trx, пришедших по API
  --snapshots-dir arg (="snapshots")    каталог снимков состояния (абсолютный
                                        путь или относительно data-dir)
```

## Зависимости

* [`chain_plugin`](../chain_plugin/index.md)

### Примеры загрузки зависимостей

```console
# config.ini
plugin = eosio::chain_plugin [operations] [options]
```
```sh
# command-line
nodeos ... --plugin eosio::chain_plugin [operations] [options]
```

Подробнее о выпуске блоков — в [пояснении по производству блоков](10_block-producing-explained.md).
