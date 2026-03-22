# Действия: авторизация, `action_wrapper`, возврат значений

Действие — точка входа в WASM-модуль контракта с типизированной полезной нагрузкой. Полный перечень примитивов авторизации, inline-вызовов и intrinsic-функций приведён в [документации CDT (Doxygen)](/cdt).

## Проверка авторизации

В теле действия нужно явно проверять, **кто** может его вызвать. Типичные примитивы:

| Функция | Поведение |
|---------|-----------|
| `has_auth(name n)` | Возвращает `true`, если текущая транзакция подписана с нужным актёром (любая подходящая permission). |
| `require_auth(name n)` | То же требование, но при несоответствии — стандартная ошибка авторизации (текст сообщения задать нельзя). |
| `require_auth2(capi_name name, capi_name permission)` | Требует конкретную permission (например, только `active`). |
| `check(bool pred, ...)` | Универсальная проверка с **вашим** текстом ошибки. |

### `check` + `has_auth` — с понятным сообщением

```cpp
#include <capi/eosio/action.h>

void hi( name user ) {
   check(has_auth(user), "User is not authorized to perform this action.");
   print( "Hello, ", name{user} );
}
```

### `require_auth` — короче, но без кастомного текста

```cpp
void hi( name user ) {
   require_auth( user );
   print( "Hello, ", name{user} );
}
```

### `require_auth2` — только `active`

```cpp
#include <capi/eosio/action.h>

void hi( name user ) {
   require_auth2(user.value, "active"_n.value);
   print( "Hello, ", name{user} );
}
```

Подключайте нужные заголовки (`<eosio/eosio.hpp>` или C API) в зависимости от стиля проекта.

---

## Шаблон `action_wrapper`

`action_wrapper` упрощает отправку **inline**-действий на тот же или другой контракт: фиксируется имя действия и указатель на метод-обработчик.

### 1. Объявление в классе контракта

```cpp
class [[eosio::contract]] multi_index_example : public contract {
  // ...
  [[eosio::action]] void mod( name user, uint32_t n );
  using mod_action = action_wrapper<"mod"_n, &multi_index_example::mod>;
  // ...
};
```

### 2. Использование из другого модуля

Подключите заголовок с контрактом, создайте обёртку с получателем и permission:

```cpp
#include <multi_index_example.hpp>

multi_index_example::mod_action modaction("multiindexex"_n, {get_self(), "active"_n});
modaction.send("eostutorial"_n, 1);
```

Первый аргумент — аккаунт, куда задеплоен контракт; второй — `{actor, permission}` для подписи inline-действия.

---

## Возврат значений из действий

Если в сети активирована возможность **`ACTION_RETURN_VALUE`**, действие может **вернуть** сериализуемое значение клиенту RPC: примитив, стандартный тип или пользовательская структура.

### Концепция

- В коде используйте обычный **`return`**; среда исполнения сериализует результат и передаёт его в trace.
- Ограничения по размеру связаны с лимитами **CPU и WASM**, а не RAM/NET в прямом смысле.
- В **квитанции** действия попадает **хэш** сериализованного значения; в **trace** — полное значение (если включено логирование / trace API / state history — в соответствующих логах).
- **Inline-действия** выполняются асинхронно относительно родителя: **прочитать return value** из inline на стороне вызывающего действия **нельзя**.

### Пример

```cpp
struct action_response {
   uint16_t id;
   std::pair<int, std::string> status;
};

class [[eosio::contract]] smrtcontract : public contract {
public:
   using contract::contract;

   [[eosio::action]]
   action_response checkwithrv( name nm ) {
      print_f("Name : %\n", nm);
      action_response results;
      results.id = 1;
      if (nm == "hello"_n)
         results.status = {0, "Validation has passed."};
      else
         results.status = {1, "Input param `name` not equal to `hello`."};
      return results;
   }
};
```

После деплоя проверьте вывод клиента (`cleos`, SDK): значение видно в ответе RPC, а не внутри другого контракта через inline.

!!! info "Где подробнее про протокол"
    Детали активации функции протокола и поведение узла согласуйте с администраторами вашей сети COOPOS. В коде CDT возврат связан с intrinsic `set_action_return_value`.

---

## Действия только для чтения

Атрибут `[[eosio::action, eosio::read-only]]` помечает действие как **не изменяющее состояние**. Такое действие:

- не должно писать в таблицы / Key-Value API;
- не должно планировать отложенные транзакции и inline-действия;
- объём возвращаемых данных ограничен (например, лимит по умолчанию на размер return value).

Компилятор обычно **запрещает** нарушения; опция `--warn-action-read-only` заменяет ошибки предупреждениями. См. [Справочник команд](command-reference.md).

---

## См. также

- [Таблицы состояния](tables.md)
- [ABI контракта](abi.md)
- [Документация CDT](/cdt) — нативные тесты, криптографические расширения WASM
