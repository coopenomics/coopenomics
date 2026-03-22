# Шаблоны документов

## Концепция шаблона

Каждый юридический документ в кооперативе описывается шаблоном. Шаблон хранится в блокчейне (таблица `drafts` контракта `draft`) и содержит:

- **Идентификатор** (`registry_id`) — уникальный номер в реестре
- **Модель данных** (`model`) — JSON Schema, описывающая структуру данных, необходимых для генерации
- **Контекст** (`context`) — тело шаблона в формате Nunjucks
- **Переводы** (`translations`) — словари переменных по языкам
- **Заголовок** (`title`) и описание (`description`)

---

## Структура одного шаблона

Каждый документ в коде фабрики представлен двумя файлами:

- `Templates/N.DocName.ts` — статическое описание: `registry_id`, JSON Schema, context, translations
- `Actions/N.DocName.ts` — логика генерации: какие данные загружать, как комбинировать, что валидировать

### Пример структуры модуля шаблона

```typescript
// Templates/4.UserAgreement.ts (упрощённо)

export const registry_id = 4

export interface Model {
  meta: IMetaDocument
  coop: CooperativeData
  vars: IVars
  user: { full_name: string }
}

export type Action = IGenerate  // registry_id + coopname + username + block_num?

export const Template: ITemplate<Model> = {
  title: 'Пользовательское соглашение',
  description: '...',
  model: { /* JSON Schema */ },
  context: `<html>{{ meta.title }}... {{ user.full_name }}...</html>`,
  translations: {
    ru: { /* ключ: перевод */ },
  },
}
```

### Пример логики Action

```typescript
// Actions/4.UserAgreement.ts (упрощённо)

export class Factory extends DocFactory<UserAgreement.Action> {
  async generateDocument(data, options?) {
    // 1. Загружаем шаблон (local или блокчейн)
    const template = await this.getTemplate(...)

    // 2. Генерируем мета-данные (включая block_num)
    const meta = await this.getMeta({ title: template.title, ...data })

    // 3. Загружаем данные на moment block_num
    const coop = await this.getCooperative(data.coopname, meta.block_num)
    const vars = await this.getVars(data.coopname, meta.block_num)
    const user = await this.getUser(data.username, meta.block_num)

    // 4. Комбинируем и валидируем
    const combinedData = { meta, coop, vars, user: { full_name: ... } }
    await this.validate(combinedData, template.model)

    // 5. Рендерим PDF
    return this.generatePDF('', template.context, combinedData, translation, meta, options?.skip_save)
  }
}
```

---

## Переменные в шаблоне (Nunjucks)

Шаблон имеет доступ ко всем полям объекта `combinedData`. Синтаксис — стандартный Nunjucks:

```html
<!-- Подстановка переменной -->
{{ meta.created_at }}
{{ user.full_name }}
{{ coop.short_name }}

<!-- Условие -->
{% if individual %}
  {{ individual.birthdate }}
{% endif %}

<!-- Цикл -->
{% for question in questions %}
  {{ question.number }}. {{ question.title }}
{% endfor %}

<!-- Перевод (кастомный тег) -->
{% trans 'key.for.translation' %}
```

Все HTML-сущности автоматически декодируются перед рендерингом (для случаев, когда данные пришли экранированными).

Полный список `registry_id` с ссылками на файлы шаблонов в репозитории — в разделе [Реестр документов](registry.md).

---

## Расширение реестра

Для добавления нового типа документа необходимо:

1. Создать `Templates/N.NewDocument.ts` с описанием модели, context, translations
2. Создать `Actions/N.NewDocument.ts` с классом `Factory extends DocFactory`
3. Зарегистрировать в `Templates/registry.ts`
4. Добавить в `Actions/index.ts`
5. Зарегистрировать в `index.ts` в объекте `factories`

Шаблоны документов в части содержания и оформления стандартизированы — это гарантирует правовую консистентность документооборота кооператива.
