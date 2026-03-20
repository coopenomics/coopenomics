---
content_title: Опции nodeos
---

`nodeos` — приложение командной строки (CLI). Его можно запускать вручную из терминала или скриптом. Поведение в основном задаётся загруженными плагинами и их опциями. У `nodeos` два класса опций: *специфичные для nodeos* и *специфичные для плагинов*.

## Опции nodeos

Они нужны в основном для «хозяйственных» задач: каталог данных блокчейна, имя файла конфигурации `nodeos`, путь к конфигурации логирования и т.д. Ниже — фрагмент вывода `nodeos --help` со специфичными для `nodeos` опциями (опции плагинов для ясности опущены):

```console
Application Config Options:
  --plugin arg                          Plugin(s) to enable, may be specified 
                                        multiple times

Application Command Line Options:
  -h [ --help ]                         Print this help message and exit.
  -v [ --version ]                      Print version information.
  --full-version                        Print full version information.
  --print-default-config                Print default configuration template
  -d [ --data-dir ] arg                 Directory containing program runtime 
                                        data
  --config-dir arg                      Directory containing configuration 
                                        files such as config.ini
  -c [ --config ] arg (=config.ini)     Configuration file name relative to 
                                        config-dir
  -l [ --logconf ] arg (=logging.json)  Logging configuration file name/path 
                                        for library users
```

## Опции плагинов

Они управляют поведением плагинов `nodeos`. У каждой опции плагина уникальное имя, порядок в командной строке или `config.ini` произвольный. При указании опций плагина соответствующие плагины нужно включить через `--plugin`, иначе опции игнорируются.

Подробности по опциям плагинов — в разделе [Плагины](../03_plugins/index.md).
