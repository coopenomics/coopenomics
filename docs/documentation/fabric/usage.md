# API и использование

## Установка

Фабрика является частью монорепозитория. Установка через pnpm:

```bash
# из корня монорепозитория
pnpm install --filter @coopenomics/factory
```

Для генерации PDF также необходим [WeasyPrint](https://doc.courtbouillon.org/weasyprint/stable/first_steps.html#installation).

### Переменные окружения

| Переменная | Описание |
|-----------|----------|
| `MONGO_URI` | Строка подключения к MongoDB (например, `mongodb://localhost:27017/mydb`) |
| `SOURCE` | Режим загрузки шаблонов: `local` — из файлов, иначе — из блокчейна |
| `SIMPLE_EXPLORER_API` | URL Explorer API для запросов к блокчейну |
| `SKIP_BLOCK_FETCH` | `TRUE` — не запрашивать текущий блок (для тестов) |

---

## Класс `Generator`

Единая точка входа в фабрику. Предоставляет все методы для работы с документами и данными.

```typescript
import { Generator } from '@coopenomics/factory'

const generator = new Generator()
await generator.connect('mongodb://localhost:27017/mycoopdb')

// работа...

await generator.disconnect()
```

---

## Методы

!!! note "Поля Action и публикация в блокчейн"
    В публичные **Meta** попадает только то, что фабрика включает в объект мета-данных после обработки Action. Отдельные поля (например, **`signature`** в заявлении на вступление, `registry_id: 100`) **не публикуются в блокчейн**: это **графическое изображение оттиска** для вставки в PDF; перед сборкой `Meta` оно отделяется и сохраняется в коллекции `signatures` вместе с `username` и `block_num`. Для повторной генерации по сохранённому `block_num` оттиск можно не передавать снова — фабрика прочитает его из хранилища.

### `generate(data, options?)` — генерация документа

Основной метод. Принимает Action (или Meta) и возвращает сгенерированный документ.

```typescript
// Пример: заявление на вступление (100) — signature = изображение оттиска, не SIG_K1_...
const doc = await generator.generate({
  registry_id: 100,
  coopname: 'voskhod',
  username: 'ivan.ivanov',
  signature: 'data:image/png;base64,iVBORw0KGgoAAAANS...', // графический оттиск
})
```

При первой генерации (без `block_num`) фабрика:
1. Получает текущий `block_num`
2. Загружает все данные на этот блок
3. Собирает и возвращает `IGeneratedDocument`

**Опции генерации:**

```typescript
interface IGenerationOptions {
  skip_save?: boolean  // не сохранять в MongoDB (удобно для превью)
}
```

**Результат:**

```typescript
interface IGeneratedDocument {
  html: string           // сгенерированный HTML
  binary: Uint8Array     // PDF-файл
  hash: string           // SHA-256 хэш PDF
  meta: IMetaDocument    // полные мета-данные
  full_title: string     // имя файла для сохранения
}
```

---

### Восстановление документа по `block_num`

Если известны **мета-данные** документа (в т.ч. сохранённые в блокчейне: `registry_id`, `coopname`, `username`, `block_num`, `created_at` и т.д.), можно восстановить тот же PDF.

Для **заявления на вступление** графический **`signature` передавать не обязательно**, если при первой генерации он уже был сохранён в коллекции `signatures` с тем же `username` и подходящим `block_num` — фабрика подтянет оттиск из базы.

```typescript
const doc = await generator.generate({
  registry_id: 100,
  coopname: 'voskhod',
  username: 'ivan.ivanov',
  block_num: 987654,           // блок оригинальной генерации
  created_at: '12.03.2025 14:30',
  // signature можно не указывать — возьмётся из коллекции signatures
})
```

Фабрика загрузит шаблон и данные строго на момент блока 987654. Если оттиск в базе найден и остальной контекст совпадает, результат будет совпадать с оригиналом.

---

### `getDocument(filter)` — получение сохранённого документа

Возвращает ранее сгенерированный документ из MongoDB по фильтру.

```typescript
// по хэшу
const doc = await generator.getDocument({ hash: 'abc123...' })

// по участнику и типу документа
const doc = await generator.getDocument({
  'meta.username': 'ivan.ivanov',
  'meta.registry_id': 100,
})
```

---

### `save(type, data)` — сохранение приватных данных

Сохраняет данные участника или кооператива в MongoDB с автоматической привязкой к текущему `block_num`.

```typescript
// физическое лицо
await generator.save('individual', {
  username: 'ivan.ivanov',
  first_name: 'Иван',
  last_name: 'Иванов',
  middle_name: 'Иванович',
  birthdate: '01.01.1990',
  email: 'ivan@example.com',
  phone: '+79001234567',
  // ...
})

// переменные кооператива
await generator.save('vars', {
  coopname: 'voskhod',
  wallet_agreement: {
    protocol_number: '1',
    protocol_day_month_year: '01.01.2025',
  },
  participant_application: {
    protocol_number: '2',
    protocol_day_month_year: '15.03.2025',
  },
  // ...
})
```

Поддерживаемые типы: `individual` | `entrepreneur` | `organization` | `paymentMethod` | `vars` | `project` | `udata`

---

### `get(type, filter)` — получение данных

Возвращает актуальную запись. Для получения исторической версии добавьте фильтр по `block_num`.

```typescript
// актуальные данные
const user = await generator.get('individual', { username: 'ivan.ivanov' })

// данные на конкретный момент
const user = await generator.get('individual', {
  username: 'ivan.ivanov',
  block_num: { $lte: 987654 },
})
```

---

### `getHistory(type, filter)` — история изменений

Возвращает все версии записи, отсортированные по убыванию `block_num`.

```typescript
const history = await generator.getHistory('individual', {
  username: 'ivan.ivanov',
})
// history[0] — самая новая версия
// history[history.length-1] — самая старая
```

---

### `list(type, filter)` — список с пагинацией

Возвращает список актуальных записей (по одной последней версии на каждый ключевой ключ).

```typescript
const result = await generator.list('individual', {})
// result.results — массив данных
// result.page, result.limit, result.totalPages, result.totalResults
```

---

### `del(type, filter)` — мягкое удаление

Помечает запись как удалённую (`deleted: true`). Исторические версии остаются.

```typescript
await generator.del('individual', { username: 'ivan.ivanov' })
```

---

### `search(query)` — полнотекстовый поиск

Поиск по сохранённым документам.

```typescript
const results = await generator.search('заявление на вступление')
// results: ISearchResult[]
```

---

### `constructCooperative(username, block_num?)` — получение данных кооператива

Возвращает агрегированные данные кооператива на момент блока.

```typescript
const coop = await generator.constructCooperative('voskhod', 987654)
```

---

## Полный пример: генерация заявления на вступление

```typescript
import { Generator } from '@coopenomics/factory'

const generator = new Generator()
await generator.connect(process.env.MONGO_URI)

// 1. Сохраняем данные участника (если ещё нет)
await generator.save('individual', {
  username: 'ivan.ivanov',
  first_name: 'Иван',
  last_name: 'Иванов',
  middle_name: 'Иванович',
  birthdate: '01.01.1990',
  email: 'ivan@voskhod.coop',
  phone: '+79001234567',
  full_address: 'г. Москва, ул. Ленина, д. 1',
  // ...
})

// 2. Генерируем документ (signature — графический оттиск для PDF, не криптоподпись SIG_K1)
const doc = await generator.generate({
  registry_id: 100,          // ParticipantApplication
  coopname: 'voskhod',
  username: 'ivan.ivanov',
  signature: 'data:image/png;base64,...', // изображение подписи; в Meta не попадает, пишется в коллекцию signatures
  skip_save: false,
})

// 3. Используем результат
console.log(doc.hash)          // SHA-256 PDF (для привязки к действию в блокчейне — отдельно от графического оттиска)
console.log(doc.meta.block_num) // блок, к которому привязан документ

// сохраняем PDF
import { writeFileSync } from 'fs'
writeFileSync(doc.full_title, doc.binary)

await generator.disconnect()
```

---

## Пример: получение превью без сохранения

```typescript
const preview = await generator.generate({
  registry_id: 4,    // UserAgreement
  coopname: 'voskhod',
  username: 'ivan.ivanov',
}, { skip_save: true })

// возвращает HTML и PDF, но не сохраняет в MongoDB
```

---

## Запуск тестов

```bash
NODE_ENV=test SOURCE=local SKIP_BLOCK_FETCH=TRUE \
  pnpm --filter @coopenomics/factory run test
```

Тесты требуют запущенного MongoDB и используют таймаут 240 секунд.
