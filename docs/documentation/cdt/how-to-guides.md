# Практические руководства (CDT)

Пошаговые инструкции по компиляции контрактов, работе с `multi_index` и singleton, проверкам авторизации, обёрткам действий и возврату значений из действий. Код и терминология соответствуют CDT/Antelope; полный справочник API — в [документации CDT (Doxygen)](/cdt).

---

## Компиляция контракта через командную строку

**Назначение:** собрать WASM и ABI одной командой `cdt-cpp`, без CMake.

**Перед началом:** исходники контракта лежат локально, например в `./examples/hello/`.

### Шаги

1. Перейдите в каталог с примером (`./examples/hello/`). Должен быть файл `./src/hello.cpp`.

2. Выполните:

```bash
mkdir build
cd build
cdt-cpp ../src/hello.cpp -o hello.wasm -I ../include/
```

Где:

- `../src/hello.cpp` — входной исходный файл;
- `-o hello.wasm` — имя выходного WASM;
- `-I ../include/` — путь к каталогу заголовков (здесь — относительный).

!!! note "Имя утилиты"
    В документации к CDT используется **`cdt-cpp`** (не `cdt--cpp`).

3. Убедитесь, что появились **`hello.wasm`** и **`hello.abi`**.

---

## Настройка CMake для контрактов

**Назначение:** подготовить `CMakeLists.txt` и макросы CDT для сборки через `cmake` / `make`.

**Перед началом:** установлен [CMake](https://cmake.org/install/).

### Вариант A: генерация через `cdt-init`

Шаблон проекта, `.hpp`/`.cpp` и файлы CMake создаёт `cdt-init`:

```bash
cd ~
cdt-init --path=. --project=test_contract
cd test_contract
cd build
cmake ..
make
ls -al test_contract
```

В `~/test_contract/test_contract` появятся `test_contract.abi` и `test_contract.wasm`, готовые к деплою.

### Вариант B: ручной `CMakeLists.txt`

1. Минимальный `CMakeLists.txt`:

```cmake
cmake_minimum_required(VERSION 3.5)
project(test_example VERSION 1.0.0)

find_package(cdt)

add_contract( test test test.cpp )
```

2. Пример `test.cpp`:

```cpp
#include <eosio/eosio.hpp>
using namespace eosio;

class [[eosio::contract]] test : public eosio::contract {
public:
   using contract::contract;

   [[eosio::action]] void testact( name test ) {
   }
};
```

3. Полезные макросы CDT:

- **`add_contract`** — сборка контракта и генерация ABI: имя контракта, имя цели CMake, затем список `.cpp`.
- **`target_ricardian_directory`** — каталог с Ricardian-контрактами для цели.
- **`add_native_library`** / **`add_native_executable`** — нативная сборка для тестов (аналоги `add_library` / `add_executable`).

---

## Сборка контракта через CMake

**Назначение:** собрать пример с уже готовым `CMakeLists.txt` (например `hello`).

**Перед началом:** исходники в `./examples/hello/`.

### Шаги

1. Откройте `./examples/hello/`, убедитесь в наличии `./src/hello.cpp`.

2. Выполните:

```bash
mkdir build
cd build
cmake ..
make
```

3. Проверьте наличие **`hello.wasm`** и **`hello.abi`**.

Подробнее о макросах и типовых сценариях — в разделе [Сборка контрактов](building.md).

---

## Проверка авторизации в действии

**Назначение:** ограничить вызов действия (пример — `hi`) нужными подписями.

**Перед началом:** в контракте объявлено и реализовано действие `hi` с параметром `user` типа `name`.

**Справка по API:** `has_auth`, `require_auth`, `require_auth2`, `check` — см. [Действия и авторизация](actions.md) и заголовки CDT.

Есть три типичных способа проверить, что действие подписано нужным аккаунтом.

### 1. `check` + `has_auth` — со своим текстом ошибки

Требует, чтобы транзакция была подписана аккаунтом `user` (любая подходящая permission: `owner`, `active`, `code` и т.д.).

```cpp
#include <capi/eosio/action.h>

void hi( name user ) {
   check(has_auth(user), "Пользователь не авторизован для этого действия.");
   print( "Hello, ", name{user} );
}
```

### 2. `require_auth` — короче, сообщение стандартное

То же по смыслу (любая permission аккаунта `user`), но текст ошибки задать нельзя.

```cpp
void hi( name user ) {
   require_auth( user );
   print( "Hello, ", name{user} );
}
```

### 3. `require_auth2` — только конкретная permission

Например, только **`active`**: при подписи другой permission выполнение остановится.

```cpp
#include <capi/eosio/action.h>

void hi( name user ) {
   require_auth2(user.value, "active"_n.value);
   print( "Hello, ", name{user} );
}
```

---

## Singleton: определение и использование

**Назначение:** хранить одно значение (или одну структуру) на комбинацию кода, scope и имени таблицы.

**Справка:** класс `eosio::singleton` — в [документации CDT](/cdt).

### Шаги

1. Подключите заголовки:

```cpp
#include <eosio/eosio.hpp>
#include <eosio/singleton.hpp>
using namespace eosio;
```

2. Структура строки таблицы под singleton:

```cpp
struct [[eosio::table]] testtable {
   name primary_value;
   uint64_t secondary_value;
};
```

3. Псевдоним типа (имя `"testtable"` — в рамках правил имён аккаунтов Antelope, до 12 символов):

```cpp
using singleton_type = eosio::singleton<"testtable"_n, testtable>;
```

4. Поле класса контракта:

```cpp
singleton_type singleton_instance;
```

5. Инициализация в конструкторе контракта (`receiver`, `code` → обычно `receiver` и `receiver.value` для доступа к нужной партиции RAM):

```cpp
singleton_example( name receiver, name code, datastream<const char*> ds ) :
   contract(receiver, code, ds),
   singleton_instance(receiver, receiver.value)
   { }
```

### Пример класса и действий

**singleton_example.hpp**

```cpp
#include <eosio/eosio.hpp>
#include <eosio/singleton.hpp>
using namespace eosio;

class [[eosio::contract]] singleton_example : public contract {
   public:
      using contract::contract;
      singleton_example( name receiver, name code, datastream<const char*> ds ) :
         contract(receiver, code, ds),
         singleton_instance(receiver, receiver.value)
         {}

      [[eosio::action]]
      void set( name user, uint64_t value );
      [[eosio::action]]
      void get( );

      struct [[eosio::table]] testtable {
         name primary_value;
         uint64_t secondary_value;
         uint64_t primary_key() const { return primary_value.value; }
      } testtablerow;

      using singleton_type = eosio::singleton<"testtable"_n, testtable>;
      singleton_type singleton_instance;

      using set_action = action_wrapper<"set"_n, &singleton_example::set>;
      using get_action = action_wrapper<"get"_n, &singleton_example::get>;
};
```

**singleton_example.cpp**

```cpp
#include <singleton_example.hpp>

[[eosio::action]] void singleton_example::set( name user, uint64_t value ) {
   auto entry_stored = singleton_instance.get_or_create(user, testtablerow);
   entry_stored.primary_value = user;
   entry_stored.secondary_value = value;
   singleton_instance.set(entry_stored, user);
}

[[eosio::action]] void singleton_example::get( ) {
   if (singleton_instance.exists())
      eosio::print(
         "Value stored for: ", 
         name{singleton_instance.get().primary_value.value},
         " is ",
         singleton_instance.get().secondary_value,
         "\n");
   else
      eosio::print("Singleton is empty\n");
}
```

Полный пример в репозитории CDT: [examples](https://github.com/coopenomics/cdt/tree/main/examples) (в т.ч. рядом с `multi_index_example`).

---

## Таблица `multi_index`: структура, первичный ключ и экземпляр

**Назначение:** объявить строки таблицы, первичный индекс (`uint64_t`, уникальный, метод **`primary_key()`**), тип `multi_index` и поле в классе контракта с инициализацией в конструкторе.

**Справка:** `eosio::multi_index` — [документация CDT](/cdt). Обзор концепций — [Таблицы состояния](tables.md).

### 1. Подготовка

```cpp
#include <eosio/eosio.hpp>
using namespace eosio;
```

### 2. Структура строки

Каждое поле — колонка. Первичный ключ должен однозначно идентифировать строку. Пример: поле `test_primary` типа `name`:

```cpp
struct [[eosio::table]] test_table {
   name test_primary;
   uint64_t datum;
   uint64_t primary_key() const { return test_primary.value; }
};
```

Тип возвращаемого значения **`primary_key()`** — **`uint64_t`**, имя метода должно быть именно **`primary_key`**, иначе `cdt-cpp` сообщит, что не найден первичный ключ.

!!! note "Вторичные индексы"
    До **16** вторичных индексов; типы ключей: `uint64_t`, `uint128_t`, `uint256_t`, `double`, `long double`. Вторичный ключ **не обязан** быть уникальным.

### 3. Псевдоним и поле таблицы

Имя таблицы в цепочке — первый шаблонный аргумент (строка до 12 символов по правилам имён):

```cpp
typedef eosio::multi_index<"testtaba"_n, test_table> test_table_t;
test_table_t testtab;
```

### 4. Инициализация в конструкторе

```cpp
multi_index_example( name receiver, name code, datastream<const char*> ds ) :
   contract(receiver, code, ds),
   testtab(receiver, receiver.value)
   { }
```

Пара `code` / `scope` вместе с именем таблицы задаёт партицию RAM для этой таблицы.

### Полный заголовок примера

**multi_index_example.hpp**

```cpp
#include <eosio/eosio.hpp>
using namespace eosio;

class [[eosio::contract]] multi_index_example : public contract {
   public:
      using contract::contract;

      multi_index_example( name receiver, name code, datastream<const char*> ds ) :
         contract(receiver, code, ds),
         testtab(receiver, receiver.value)
         { }

      struct [[eosio::table]] test_table {
        name test_primary;
        uint64_t datum;
        uint64_t primary_key() const { return test_primary.value; }
      };

      typedef eosio::multi_index<"testtaba"_n, test_table> test_table_t;
      test_table_t testtab;

      [[eosio::action]] void set( name user );
      [[eosio::action]] void print( name user );

      using set_action = action_wrapper<"set"_n, &multi_index_example::set>;
      using print_action = action_wrapper<"print"_n, &multi_index_example::print>;
};
```

Репозиторий с полным примером: [multi_index_example](https://github.com/coopenomics/cdt/blob/main/examples/multi_index_example).

---

## Вторичный индекс

**Назначение:** искать и обходить строки по дополнительному ключу.

**Перед началом:** уже есть таблица с первичным ключом и псевдоним `test_table_t` (см. предыдущий раздел).

### 1. Новое поле в структуре

```cpp
struct [[eosio::table]] test_table {
   name test_primary;
   name secondary;
   uint64_t datum;
   uint64_t primary_key() const { return test_primary.value; }
};
```

### 2. Метод доступа к ключу вторичного индекса

```cpp
   uint64_t by_secondary() const { return secondary.value; }
```

### 3. Объявление индекса в `multi_index`

Имя индекса, например `"secid"_n`, и `eosio::const_mem_fun` на геттер:

```cpp
typedef eosio::multi_index<"testtaba"_n, test_table,
   eosio::indexed_by<"secid"_n,
      eosio::const_mem_fun<test_table, uint64_t, &test_table::by_secondary>>> test_table_t;
```

### Пример контракта с вторичным индексом

```cpp
#include <eosio/eosio.hpp>
using namespace eosio;

class [[eosio::contract]] multi_index_example : public contract {
    public:
        using contract::contract;

        multi_index_example( name receiver, name code, datastream<const char*> ds ) :
          contract(receiver, code, ds),
          testtab(receiver, receiver.value)
          { }

        struct [[eosio::table]] test_table {
          name test_primary;
          name secondary;
          uint64_t datum;
          uint64_t primary_key() const { return test_primary.value; }
          uint64_t by_secondary() const { return secondary.value; }
        };

        typedef eosio::multi_index<"testtaba"_n, test_table,
           eosio::indexed_by<"secid"_n,
              eosio::const_mem_fun<test_table, uint64_t, &test_table::by_secondary>>> test_table_t;

        test_table_t testtab;

        [[eosio::action]] void set( name user );
        [[eosio::action]] void print( name user );

        using set_action = action_wrapper<"set"_n, &multi_index_example::set>;
        using print_action = action_wrapper<"print"_n, &multi_index_example::print>;
};
```

!!! warning "Не добавлять вторичный индекс к уже существующей таблице в продакшене"
    Поведение может быть непредсказуемым. Планируйте схему заранее; см. [Обновление схемы данных](schema-upgrades.md) и [Рекомендации](best-practices.md).

---

## Вставка строки (`emplace`)

**Перед началом:** экземпляр `testtab` создан, как в примерах выше. Ниже — вариант со **вторичным** полем `secondary` (нужен вторичный индекс в типе таблицы).

Проверка существования по первичному ключу и вставка:

```cpp
[[eosio::action]] void multi_index_example::set( name user ) {
  auto itr = testtab.find(user.value);

  if ( itr == testtab.end() ) {
    testtab.emplace( _self, [&]( auto& u ) {
      u.test_primary = user;
      u.secondary = "second"_n;
      u.datum = 0;
    });
  }
  else {
    printf("User already exists.");
  }
}
```

---

## Поиск и вывод по первичному ключу

Объявление действия:

```cpp
[[eosio::action]] void print( name user );
using print_action = action_wrapper<"print"_n, &multi_index_example::print>;
```

Реализация:

```cpp
[[eosio::action]] void multi_index_example::print( name user ) {
  auto itr = testtab.find(user.value);
  check( itr != testtab.end(), "user does not exist in table" );
  eosio::print_f("Test Table : {%, %}\n", itr->test_primary, itr->datum);
}
```

**multi_index_example.cpp** (фрагмент вместе с `set` без вторичного поля — адаптируйте структуру под ваш контракт):

```cpp
#include <multi_index_example.hpp>

[[eosio::action]] void multi_index_example::set( name user ) {
  auto itr = testtab.find(user.value);
  if ( itr == testtab.end() ) {
    testtab.emplace( _self, [&]( auto& u ) {
      u.test_primary = user;
      u.secondary = "second"_n;
      u.datum = 0;
    });
  }
}

[[eosio::action]] void multi_index_example::print( name user ) {
  auto itr = testtab.find(user.value);
  check( itr != testtab.end(), "user does not exist in table" );
  eosio::print_f("Test Table : {%, %}\n", itr->test_primary, itr->datum);
}
```

---

## Изменение строки (`modify`)

Действие `mod` обновляет поле `datum` для строки с ключом `user`:

```cpp
[[eosio::action]] void mod( name user, uint32_t value );
using mod_action = action_wrapper<"mod"_n, &multi_index_example::mod>;
```

```cpp
[[eosio::action]] void multi_index_example::mod( name user, uint32_t value ) {
  auto itr = testtab.find(user.value);
  check( itr != testtab.end(), "user does not exist in table" );

  testtab.modify( itr, _self, [&]( auto& row ) {
    row.datum = value;
  });
}
```

---

## Удаление строки (`erase`)

```cpp
[[eosio::action]] void multi_index_example::del( name user ) {
  auto itr = testtab.find(user.value);
  if ( itr == testtab.end() ) {
    printf("User does not exist in table, nothing to delete");
    return;
  }
  testtab.erase( itr );
}
```

Проверка после удаления:

```cpp
auto itr = testtab.find(user.value);
if ( itr == testtab.end() ) {
  printf("User was deleted successfully.");
} else {
  printf("User was NOT deleted!");
}
```

---

## Обход таблицы по вторичному индексу

**Перед началом:** определён вторичный индекс `"secid"_n`, см. раздел выше.

Действие:

```cpp
[[eosio::action]] void bysec( name secid );
using bysec_action = action_wrapper<"bysec"_n, &multi_index_example::bysec>;
```

Реализация — получить индекс через `get_index` и пройти в цикле:

```cpp
[[eosio::action]] void multi_index_example::bysec( name secid ) {
  auto idx = testtab.get_index<"secid"_n>();
  for ( auto itr = idx.begin(); itr != idx.end(); itr++ ) {
    eosio::print_f("Test Table : {%, %, %}\n", itr->test_primary, itr->secondary, itr->datum);
  }
}
```

Заголовок класса с `bysec` и полным `typedef` для таблицы — см. пример в разделе «Вторичный индекс»; полный `.cpp` совпадает с примером из репозитория [multi_index_example](https://github.com/coopenomics/cdt/blob/main/examples/multi_index_example).

---

## Обёртки действий (`action_wrapper`)

**Назначение:** типобезопасно слать действие текущего или другого контракта без ручной сборки `action`.

**Справка:** `eosio::action_wrapper` — в [документации CDT](/cdt) и в [Действия и авторизация](actions.md).

**Перед началом:** в контракте объявлено действие, например `mod(name user, uint32_t n)`.

### 1. Объявление обёртки в классе контракта

```cpp
using mod_action = action_wrapper<"mod"_n, &multi_index_example::mod>;
```

### 2. Использование из кода, где известен получатель контракта

Подключите заголовок с классом контракта:

```cpp
#include <multi_index_example.hpp>
```

Создайте обёртку (пример: контракт задеплоен на аккаунт `multiindexex`, подпись от `get_self()` с permission `active`):

```cpp
multi_index_example::mod_action modaction("multiindexex"_n, {get_self(), "active"_n});
modaction.send("eostutorial"_n, 1);
```

Аргументы `send` — в том же порядке, что у действия `mod`.

---

## Возврат значения из действия

**Назначение:** вернуть из действия структуру или примитив; клиенты увидят значение в ответе RPC / трейсе.

Используйте обычный **`return`**; при необходимости CDT вызовет intrinsic для записи возвращаемого значения.

**Перед началом:** контракт собирается без ошибок; есть действие (пример — `checkwithrv`), возвращающее тип `action_response`.

```cpp
struct action_response
{
  uint16_t id;
  std::pair<int, std::string> status;
};

class [[eosio::contract]] smrtcontract : public contract {
  public:
     using contract::contract;

     [[eosio::action]]
     action_response checkwithrv( name nm );
};
```

Реализация:

```cpp
[[eosio::action]]
action_response smrtcontract::checkwithrv( name nm ) {
  print_f("Name : %\n", nm);

  action_response results;
  results.id = 1;
  if (nm == "hello"_n) {
     results.status = {0, "Validation has passed."};
  }
  else {
     results.status = {1, "Input param `name` not equal to `hello`."};
  }

  return results;
}
```

Полный пример: [hello в репозитории CDT](https://github.com/coopenomics/cdt/blob/main/examples/hello).

!!! note "Где доступно возвращаемое значение"
    Значение видно клиентам, вызывающим действие через **RPC API**. У **inline**-действий возврат недоступен в том же смысле, так как они не выполняются синхронно с ожиданием результата на стороне вызывающего контракта.

---

## Куда смотреть дальше

- [Таблицы состояния](tables.md) — обзор `multi_index` и singleton.
- [Действия и авторизация](actions.md) — таблица примитивов и паттерны.
- [ABI контракта](abi.md), [Обновление схемы данных](schema-upgrades.md), [Отладка и неполадки](debug-and-troubleshooting.md).
