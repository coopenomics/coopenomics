---
content_title: Логирование nodeos
---

Логирование `nodeos` задаётся файлом `logging.json`. Опции CLI при запуске `nodeos` позволяют [настроить `logging.json`](00_setup-logging.json.md). В конфигурации задаются [аппендеры](#appenders), привязка к [логгерам](#loggers) и [уровни логирования](01_logging-levels.md).

## Аппендеры {#appenders}

Встроенная библиотека логирования COOPOS поддерживает два типа аппендеров:

- [Консоль](#console)
- [GELF](#gelf) (Graylog Extended Log Format)

### Консоль {#console}

Вывод сообщений на экран. Параметры:

- `name` — произвольное имя для ссылок из логгеров
- `type` — `"console"`
- `stream` — `"std_out"` или `"std_err"`
- `level_colors` — сопоставление уровня логирования цвету
  - level — см. [уровни логирования](01_logging-levels.md)
  - color — одно из: `"red"`, `"green"`, `"brown"`, `"blue"`, `"magenta"`, `"cyan"`, `"white"`, `"console_default"`
- `enabled` — включить/выключить аппендер

Пример:

```json
{
    "name": "consoleout",
    "type": "console",
    "args": {
    "stream": "std_out",

    "level_colors": [{
        "level": "debug",
        "color": "green"
        },{
        "level": "warn",
        "color": "brown"
        },{
        "level": "error",
        "color": "red"
        }
    ]
    },
    "enabled": true
}
```

### GELF {#gelf}

Отправка сообщений в Graylog — платформу сбора, индексации и анализа логов. Параметры:

 - `name` — произвольное имя для ссылок из логгеров
 - `type` — `"gelf"`
 - `endpoint` — IP-адрес и порт
 - `host` — имя хоста в Graylog, идентификатор источника
 - `enabled` — включить/выключить аппендер

Пример:

```json
{
    "name": "net",
    "type": "gelf",
    "args": {
        "endpoint": "104.198.210.18:12202”,
        "host": <YOURNAMEHERE IN QUOTES>
    },
    "enabled": true
}
```

## Логгеры {#loggers}

Поддерживаются такие логгеры:

- `default` — логгер по умолчанию, всегда включён
- `net_plugin_impl` — подробный лог сетевого плагина
- `http_plugin` — подробный лог HTTP-плагина
- `producer_plugin` — подробный лог плагина продюсера
- `transaction_tracing` — подробный лог вердиктов ретрансляторов в P2P
- `transaction_failure_tracing` — подробный лог неуспешных вердиктов в P2P
- `trace_api` — подробный лог плагина trace_api

Параметры:

 - `name` — должно совпадать с одним из имён выше
 - `level` — см. уровни ниже
 - `enabled` — включить/выключить логгер
 - `additivity` — `true` или `false`
 - `appenders` — список имён аппендеров из конфигурации аппендеров

Пример:

```json
{
    "name": "net_plugin_impl",
    "level": "debug",
    "enabled": true,
    "additivity": false,
    "appenders": [
        "net"
    ]
}
```

!!! note
    Если `logging.json` нет, у всех логгеров по умолчанию уровень `info`. В `logging.json` каждый логгер настраивается отдельно.
