---
content_title: Настройка logging.json
---

Файл `logging.json` обычно лежит в каталоге `--config-dir` рядом с `config.ini`. Явный путь задаётся опциями `-l` или `--logconf` при запуске `nodeos`.
 
```sh
nodeos --help
```
```console
...
Параметры командной строки приложения:
...
--config-dir arg                      каталог с config.ini и др.
-l [ --logconf ] arg (=logging.json)  файл настроек логирования (имя или путь)
```
