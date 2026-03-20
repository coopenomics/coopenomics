
## Обзор

Плагин `resource_monitor_plugin` следит за заполнением дискового пространства на машине, где работает `nodeos`. Каждые `resource-monitor-interval-seconds` секунд измеряется использование файловых систем, к которым относятся `data-dir`, `state-dir`, `blocks-log-dir`, `snapshots-dir`, `state-history-dir` и `trace-dir`. Если на любом из отслеживаемых томов занято на `5%` меньше порога `resource-monitor-space-threshold`, выводится предупреждение с путём и процентом занятости. Если порог превышен и не задан `resource-monitor-not-shutdown-on-threshold-exceeded`, `nodeos` корректно завершается; если флаг задан, `nodeos` периодически печатает предупреждения, пока занятость не опустится ниже порога.

`resource_monitor_plugin` всегда загружен.

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
Config Options for eosio::resource_monitor_plugin:
  --resource-monitor-interval-seconds arg (=2)
                                        Time in seconds between two consecutive
                                        checks of resource usage. Should be
                                        between 1 and 300
  --resource-monitor-space-threshold arg (=90)
                                        Threshold in terms of percentage of
                                        used space vs total space. If used
                                        space is above (threshold - 5%), a
                                        warning is generated.  Unless
                                        resource-monitor-not-shutdown-on-thresh
                                        old-exceeded is enabled, a graceful
                                        shutdown is initiated if used space is
                                        above the threshold. The value should
                                        be between 6 and 99
  --resource-monitor-not-shutdown-on-threshold-exceeded
                                        Used to indicate nodeos will not
                                        shutdown when threshold is exceeded.
  --resource-monitor-warning-interval arg (=30)
                                        Number of resource monitor intervals
                                        between two consecutive warnings when
                                        the threshold is hit. Should be between
                                        1 and 450
```

## Зависимости плагина

* Нет
