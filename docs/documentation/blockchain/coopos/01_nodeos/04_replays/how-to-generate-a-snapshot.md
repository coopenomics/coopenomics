---
content_title: Как создать снимок
---

У запущенного **nodeos** COOPOS снимок создаётся вызовом `create_snapshot` у `producer_api_plugin`. Файл попадает в `data/snapshots` относительно `--data-dir`; имя обычно вида `snapshot-<head_block_id_in_hex>.bin`.

!!! note "Каталог снимков"
    Каталог данных задаёт `-d` / `--data-dir`; внутри него — `data/snapshots`.

Если `nodeos` слушает локально, запрос на создание снимка:

```sh
curl -X POST http://127.0.0.1:8888/v1/producer/create_snapshot
```

!!! note "Журнал блоков отдельно"
    Готовый `blocks.log` иногда берут у сторонних поставщиков — для реплея или догонки без полной синхронизации.
