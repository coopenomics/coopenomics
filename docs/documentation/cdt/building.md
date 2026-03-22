# Сборка смарт-контрактов

Описаны сценарии сборки из **командной строки** и через **CMake**. Семантика вызовов из тела контракта, intrinsic-функции и состав библиотеки — в [документации CDT (Doxygen)](/cdt).

## Сборка через CLI

### Что нужно заранее

- Исходники контракта в локальной папке (ниже — пример `examples/hello`).

### Шаги

1. Перейдите в каталог с контрактом, где лежит например `src/hello.cpp`.
2. Выполните:

```bash
mkdir build
cd build
cdt-cpp ../src/hello.cpp -o hello.wasm -I ../include/
```

Где:

- `../src/hello.cpp` — входной файл;
- `-o hello.wasm` — имя выходного WASM;
- `-I ../include/` — путь к заголовкам (при необходимости).

3. Убедитесь, что появились **`hello.wasm`** и сгенерированный **`hello.abi`** (если включена генерация ABI, например через `-abigen` или атрибуты в коде — зависит от вашего сценария).

!!! tip "Опечатка в старых гайдах"
    В некоторых инструкциях ошибочно писали `cdt--cpp` — корректная команда **`cdt-cpp`**.

---

## CMake: быстрый старт через `cdt-init`

```bash
cd ~
cdt-init --path=. --project=test_contract
cd test_contract/build
cmake ..
make
ls -al test_contract
```

В каталоге проекта появятся `test_contract.wasm` и `test_contract.abi`, готовые к публикации.

---

## CMake: ручной `CMakeLists.txt`

Минимальный пример.

`CMakeLists.txt`:

```cmake
cmake_minimum_required(VERSION 3.5)
project(test_example VERSION 1.0.0)

find_package(cdt)

add_contract( test test test.cpp )
```

`test.cpp`:

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

### Полезные макросы

| Макрос | Назначение |
|--------|------------|
| `add_contract` | Сборка контракта и генерация ABI. Первый аргумент — имя контракта, второй — имя CMake-таргета, далее — список `.cpp`. |
| `target_ricardian_directory` | Каталог с Ricardian-текстами для конкретного таргета. |
| `add_native_library` / `add_native_executable` | Нативная сборка для юнит-тестов; см. [документацию CDT](/cdt) и примеры в репозитории CDT. |

---

## Сборка примера `hello` через CMake

Если в репозитории примеров уже есть `CMakeLists.txt`:

```bash
cd examples/hello
mkdir build && cd build
cmake ..
make
```

Проверьте наличие `hello.wasm` и `hello.abi`.

---

## Нативная сборка для тестов

Для проверки логики вне WASM укажите **`-fnative`** для `cdt-cpp` / `cdt-cc` либо примените CMake-макросы `add_native_*`. Макросы `EOSIO_TEST_*` и нативный рантайм тестов описаны в [документации CDT](/cdt) и в каталоге примеров CDT.
