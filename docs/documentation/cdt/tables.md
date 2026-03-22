# Таблицы состояния: `multi_index` и singleton

Табличное хранение — основной механизм персистентного состояния контракта в RAM узла. **`eosio::multi_index`** задаёт множество строк с первичным и до шестнадцати вторичных ключей; **`eosio::singleton`** — ровно одна строка на комбинацию кода, scope и имени таблицы.

Операции низкого уровня (`db_*`, детали индексов) см. в [документации CDT (Doxygen)](/cdt); ниже — практические шаблоны на C++ API.

!!! note "Справка по API в коде"
    Класс `eosio::multi_index` и методы `find`, `emplace`, `modify`, `erase` описаны в заголовках CDT (`<eosio/multi_index.hpp>`). Ниже — сценарии использования, а не полный справочник по каждому шаблонному параметру.

---

## Подготовка: include и пространство имён

```cpp
#include <eosio/eosio.hpp>
using namespace eosio;
```

---

## Структура строки и первичный ключ

Каждая строка таблицы — это `struct` с атрибутом `[[eosio::table]]`. Должен быть метод **`primary_key()`**, возвращающий **`uint64_t`**, уникальный для строки:

```cpp
struct [[eosio::table]] test_table {
   name test_primary;
   uint64_t datum;

   uint64_t primary_key() const { return test_primary.value; }
};
```

Вторичных индексов может быть до **16**; для них допускаются типы `uint64_t`, `uint128_t`, `uint256_t`, `double`, `long double`. Вторичный индекс **не обязан** быть уникальным.

---

## Псевдоним типа и поле класса контракта

Имя таблицы в цепочке — первый шаблонный аргумент `multi_index` (до 12 символов + опциональный 13-й по правилам имён):

```cpp
typedef eosio::multi_index<"testtaba"_n, test_table> test_table_t;
test_table_t testtab;
```

---

## Инициализация в конструкторе контракта

Параметры конструктора `multi_index`: **`code`** (обычно `receiver`) и **`scope`** (часто `receiver.value`):

```cpp
multi_index_example( name receiver, name code, datastream<const char*> ds ) :
   contract(receiver, code, ds),
   testtab(receiver, receiver.value)
{ }
```

Тройка **код + scope + имя таблицы** задаёт «раздел» RAM для строк.

---

## Вторичный индекс

1. Добавьте поле и метод-аксессор, возвращающий ключ индекса:

```cpp
struct [[eosio::table]] test_table {
   name test_primary;
   name secondary;
   uint64_t datum;

   uint64_t primary_key() const { return test_primary.value; }
   uint64_t by_secondary() const { return secondary.value; }
};
```

2. Расширьте объявление `multi_index` через `indexed_by` и `const_mem_fun`:

```cpp
typedef eosio::multi_index<
   "testtaba"_n,
   test_table,
   eosio::indexed_by<"secid"_n, eosio::const_mem_fun<test_table, uint64_t, &test_table::by_secondary>>
> test_table_t;
```

!!! warning "Не добавляйте вторичный индекс к уже заполненной таблице «на лету»"
    Изменение набора индексов у существующей таблицы с данными ведёт к непредсказуемым эффектам. Планируйте схему заранее или используйте стратегии миграции из [Обновление схемы данных](schema-upgrades.md).

---

## Вставка строки (`emplace`)

Типичный шаблон: искать по первичному ключу, и если нет — создать строку. Первый аргумент `emplace` — **плательщик RAM** (`_self` или другой аккаунт по правилам вашей модели).

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
}
```

---

## Изменение строки (`modify`)

```cpp
[[eosio::action]] void multi_index_example::mod( name user, uint32_t value ) {
   auto itr = testtab.find(user.value);
   check( itr != testtab.end(), "user does not exist in table" );

   testtab.modify( itr, _self, [&]( auto& row ) {
      row.datum = value;
   });
}
```

Удобно объявить **`using mod_action = action_wrapper<"mod"_n, &multi_index_example::mod>;`** для отправки inline-действий (см. [Действия и авторизация](actions.md)).

---

## Удаление строки (`erase`)

```cpp
[[eosio::action]] void multi_index_example::del( name user ) {
   auto itr = testtab.find(user.value);
   if ( itr == testtab.end() ) {
      return;
   }
   testtab.erase( itr );
}
```

---

## Поиск и чтение по первичному ключу

```cpp
[[eosio::action]] void multi_index_example::print( name user ) {
   auto itr = testtab.find(user.value);
   check( itr != testtab.end(), "user does not exist in table" );
   eosio::print_f("Test Table : {%, %}\n", itr->test_primary, itr->datum);
}
```

---

## Обход по вторичному индексу

```cpp
[[eosio::action]] void multi_index_example::bysec( name /*secid*/ ) {
   auto idx = testtab.get_index<"secid"_n>();
   for ( auto itr = idx.begin(); itr != idx.end(); ++itr ) {
      eosio::print_f("Test Table : {%, %, %}\n", itr->test_primary, itr->secondary, itr->datum);
   }
}
```

Для выборки по конкретному значению вторичного ключа используйте `idx.find(secondary_value)` аналогично первичному индексу.

---

## Полный минимальный пример (заголовок)

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

   typedef eosio::multi_index<
      "testtaba"_n,
      test_table,
      eosio::indexed_by<"secid"_n, eosio::const_mem_fun<test_table, uint64_t, &test_table::by_secondary>>
   > test_table_t;

   test_table_t testtab;

   [[eosio::action]] void set( name user );
   [[eosio::action]] void print( name user );
   [[eosio::action]] void bysec( name secid );
   [[eosio::action]] void mod( name user, uint32_t value );
   [[eosio::action]] void del( name user );

   using set_action = action_wrapper<"set"_n, &multi_index_example::set>;
   using print_action = action_wrapper<"print"_n, &multi_index_example::print>;
};
```

Рабочие примеры также есть в каталоге `examples/multi_index_example` репозитория CDT.

---

## Singleton

Singleton хранит **одну** строку на заданное имя таблицы — удобно для глобальных настроек.

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

   struct [[eosio::table]] testtable {
      name primary_value;
      uint64_t secondary_value;
      uint64_t primary_key() const { return primary_value.value; }
   } testtablerow;

   using singleton_type = eosio::singleton<"testtable"_n, testtable>;
   singleton_type singleton_instance;

   [[eosio::action]] void set( name user, uint64_t value );
   [[eosio::action]] void get();
};
```

Пример реализации:

```cpp
[[eosio::action]] void singleton_example::set( name user, uint64_t value ) {
   auto entry_stored = singleton_instance.get_or_create(user, testtablerow);
   entry_stored.primary_value = user;
   entry_stored.secondary_value = value;
   singleton_instance.set(entry_stored, user);
}

[[eosio::action]] void singleton_example::get() {
   if (singleton_instance.exists())
      print( "Value: ", singleton_instance.get().secondary_value, "\n");
   else
      print("Singleton is empty\n");
}
```

---

## Дальше

- [Обновление схемы данных](schema-upgrades.md) — безопасное добавление полей.
- [ABI контракта](abi.md) — как таблицы попадают в ABI.
