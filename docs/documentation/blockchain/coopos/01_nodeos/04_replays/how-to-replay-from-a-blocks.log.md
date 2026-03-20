---
content_title: Как воспроизвести цепочку из blocks.log
---

Скопируйте нужный `blocks.log` в `data/blocks`, при необходимости сохраните старые файлы, удалите `blocks.index`, `forkdb.dat`, `shared_memory.bin` и `shared_memory.meta`.

Каталог             | Файл          | Действие
----------------------- | ------------------ | ------
data/blocks             | blocks.index       | удалить
data/blocks             | blocks.log         | заменить нужным `blocks.log`
data/blocks/reversible  | forkdb.dat         | удалить
data/blocks/reversible  | shared_memory.bin  | удалить
data/blocks/reversible  | shared_memory.meta | удалить

Каталог блоков задаётся в `config.ini` как `blocks-dir = "blocks"` или опцией `--blocks-dir`.

```sh
nodeos --replay-blockchain \
  --plugin eosio::producer_plugin  \
  --plugin eosio::chain_api_plugin \
  --plugin eosio::http_plugin      \
  >> nodeos.log 2>&1 &
```
