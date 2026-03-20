---
content_title: Использование keosd
---

!!! note "Рекомендуемый способ"
    Чаще всего удобнее, чтобы `keosd` запускал автоматически `cleos`. Файлы кошельков создаются в каталоге по умолчанию (`~/eosio-wallet`).

## Ручной запуск keosd

`keosd` можно запустить вручную в терминале:

```sh
keosd
```

По умолчанию `keosd` создаёт папку `~/eosio-wallet` и базовый файл `config.ini`. Расположение конфигурации задаётся аргументом `--config-dir`. В конфигурации задаётся HTTP-endpoint для входящих соединений и прочие параметры CORS.

!!! note "Расположение кошелька"
    Каталог данных кошелька задаётся опцией `--data-dir`.

## Автоблокировка

По умолчанию `keosd` блокирует кошелёк после 15 минут неактивности. В `config.ini` это настраивается секундами в `unlock-timeout`. В исходной документации указано, что значение `0` приводит к тому, что кошелёк всегда остаётся заблокированным; уточните поведение для вашей версии по выводу `keosd --help`.

## Остановка keosd

Надёжный способ — найти процесс `keosd` и отправить ему сигнал SIGTERM.

## Прочие опции

Список опций `keosd` — запуск без аргументов:

```sh
keosd --help
```

```console
Application Options:

Config Options for eosio::http_plugin:
  --unix-socket-path arg (=keosd.sock)  The filename (relative to data-dir) to
                                        create a unix socket for HTTP RPC; set
                                        blank to disable.
  --http-server-address arg             The local IP and port to listen for
                                        incoming http connections; leave blank
                                        to disable.
  --access-control-allow-origin arg     Specify the Access-Control-Allow-Origin
                                        to be returned on each request.
  --access-control-allow-headers arg    Specify the Access-Control-Allow-Header
                                        s to be returned on each request.
  --access-control-max-age arg          Specify the Access-Control-Max-Age to
                                        be returned on each request.
  --access-control-allow-credentials    Specify if Access-Control-Allow-Credent
                                        ials: true should be returned on each
                                        request.
  --max-body-size arg (=1048576)        The maximum body size in bytes allowed
                                        for incoming RPC requests
  --http-max-bytes-in-flight-mb arg (=500)
                                        Maximum size in megabytes http_plugin
                                        should use for processing http
                                        requests. 503 error response when
                                        exceeded.
  --verbose-http-errors                 Append the error log to HTTP responses
  --http-validate-host arg (=1)         If set to false, then any incoming
                                        "Host" header is considered valid
  --http-alias arg                      Additionaly acceptable values for the
                                        "Host" header of incoming HTTP
                                        requests, can be specified multiple
                                        times.  Includes http/s_server_address
                                        by default.
  --http-threads arg (=2)               Number of worker threads in http thread
                                        pool

Config Options for eosio::wallet_plugin:
  --wallet-dir arg (=".")               The path of the wallet files (absolute
                                        path or relative to application data
                                        dir)
  --unlock-timeout arg (=900)           Timeout for unlocked wallet in seconds
                                        (default 900 (15 minutes)). Wallets
                                        will automatically lock after specified
                                        number of seconds of inactivity.
                                        Activity is defined as any wallet
                                        command e.g. list-wallets.

Application Config Options:
  --plugin arg                          Plugin(s) to enable, may be specified
                                        multiple times

Application Command Line Options:
  -h [ --help ]                         Print this help message and exit.
  -v [ --version ]                      Print version information.
  --print-default-config                Print default configuration template
  -d [ --data-dir ] arg                 Directory containing program runtime
                                        data
  --config-dir arg                      Directory containing configuration
                                        files such as config.ini
  -c [ --config ] arg (=config.ini)     Configuration file name relative to
                                        config-dir
  -l [ --logconf ] arg (=logging.json)  Logging configuration file name/path
                                        for library users
```

</think>
Исправляю раздел про `unlock-timeout` в `10_usage.md`: в оригинале указано «always lock» — перевожу буквально.

<｜tool▁calls▁begin｜><｜tool▁call▁begin｜>
StrReplace