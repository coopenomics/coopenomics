# Ресурсы COOPOS: действие `powerup` и CLI

В сети COOPOS ресурсы NET, CPU и RAM выдаются действием контракта **`eosio.system`** — **`powerup`**. Отдельной подкоманды `cleos system powerup` в справке может не быть; действие отправляют через **`cleos push action`**.

## Сигнатура действия

| Поле | Тип | Смысл |
|------|-----|--------|
| `payer` | имя | Кто платит токенами |
| `receiver` | имя | Кому начисляются ресурсы |
| `days` | `uint32` | Срок аренды в днях — совпадает с `powerup_days` в состоянии рынка |
| `payment` | актив | Сумма в основном токене сети |
| `transfer` | `bool` | Режим передачи ресурсов (для `registrator` / `eosio.system` при регистрации и др.) |

Подробнее: [Ресурсы сети, регистрация и контракты](../system-resources.md).

## Примеры `cleos push action`

```bash
cleos -u https://ВАША_НОДА push action eosio.system powerup \
  '["ПЛАТЕЛЬЩИК", "ПОЛУЧАТЕЛЬ", ДНИ, "1.0000 SYS", false]' -p ПЛАТЕЛЬЩИК@active
```

Обработка очереди истёкших аренд:

```bash
cleos -u https://ВАША_НОДА push action eosio.system powerupexec \
  '["ВЫЗЫВАЮЩИЙ", 100]' -p ВЫЗЫВАЮЩИЙ@active
```

## См. также

- Справка по подкомандам `cleos system`: [system](02_cleos/03_command-reference/system/index.md) (в т.ч. `buyram`, `delegatebw`, `rex` — описание интерфейса; фактическое поведение сети задаёт контракт `eosio.system`).
