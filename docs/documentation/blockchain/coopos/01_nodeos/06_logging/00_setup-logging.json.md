---
content_title: Настройка logging.json
---

Файл `logging.json` обычно лежит в каталоге `--config-dir` рядом с `config.ini`. Явный путь задаётся опциями `-l` или `--logconf` при запуске `nodeos`.
 
```sh
nodeos --help
```
```console
...
Application Command Line Options:
...
--config-dir arg                      Directory containing configuration files such as config.ini
-l [ --logconf ] arg (=logging.json)  Logging configuration file name/path for library users
```
