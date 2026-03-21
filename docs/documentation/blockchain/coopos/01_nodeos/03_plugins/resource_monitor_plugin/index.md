
## Обзор

Плагин `resource_monitor_plugin` следит за заполнением дискового пространства на машине, где работает `nodeos`. Каждые `resource-monitor-interval-seconds` секунд измеряется использование файловых систем, к которым относятся `data-dir`, `state-dir`, `blocks-log-dir`, `snapshots-dir`, `state-history-dir` и `trace-dir`. Если на любом из отслеживаемых томов занято на `5%` меньше порога `resource-monitor-space-threshold`, выводится предупреждение с путём и процентом занятости. Если порог превышен и не задан `resource-monitor-not-shutdown-on-threshold-exceeded`, `nodeos` корректно завершается; если флаг задан, `nodeos` периодически печатает предупреждения, пока занятость не опустится ниже порога.

`resource_monitor_plugin` всегда загружен.

Детальную занятость базы состояния цепи (chain state) по API смотрите в [`db_size_api_plugin`](../db_size_api_plugin/index.md) — это дополняет, а не заменяет контроль свободного места на томах.

## Использование

```console
# config.ini
plugin = eosio::resource_monitor_plugin
[options]
```
```sh
# command-line
nodeos ... --plugin eosio::resource_monitor_plugin [options]
```

## Параметры конфигурации

Задаются в командной строке `nodeos` и в `config.ini`:

```console
Параметры конфигурации eosio::resource_monitor_plugin:
  --resource-monitor-interval-seconds arg (=2)
                                        интервал между проверками диска (сек);
                                        допустимо от 1 до 300
  --resource-monitor-space-threshold arg (=90)
                                        порог заполнения тома (% занятого от
                                        общего объёма). При занятости выше
                                        (порог − 5%) — предупреждение. Если не
                                        указан флаг not-shutdown-on-threshold-
                                        exceeded, при превышении порога узел
                                        завершается штатно. Значение от 6 до 99
  --resource-monitor-not-shutdown-on-threshold-exceeded
                                        при превышении порога не завершать
                                        nodeos, только предупреждать
  --resource-monitor-warning-interval arg (=30)
                                        через сколько интервалов монитора
                                        повторять предупреждение при превышении
                                        порога; от 1 до 450
```

## Зависимости плагина

* Нет
