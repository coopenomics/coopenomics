"""Описание страницы для поисковиков (24.11.2026).

Bing Site Scan отметил все 307 страниц docs.blago.coop ошибкой «Meta Description tag missing»:
MkDocs Material ставит <meta name="description"> только из поля description в начале страницы,
а оно почти нигде не заполнено. Хук подставляет описание сам, когда поля нет: берёт первый
абзац текста страницы длиной от 40 знаков и обрезает до 160 знаков по границе слова.
Заполненное вручную поле description остаётся главнее хука.
"""
import html
import re

MIN_LEN = 40
MAX_LEN = 160


def _clean(fragment):
    text = html.unescape(re.sub(r"<[^>]+>", "", fragment))
    return " ".join(text.split())


def on_page_content(content, page, config, files):
    if page.meta.get("description"):
        return content
    text = ""
    for m in re.finditer(r"<p>(.*?)</p>", content, re.S):
        text = _clean(m.group(1))
        if len(text) >= MIN_LEN:
            break
    if len(text) < MIN_LEN:
        # страница без абзаца текста: оглавление раздела, таблица, схема
        text = f"{page.title or ''} — {config.site_name}".strip(" —")
    if len(text) > MAX_LEN:
        text = text[: MAX_LEN - 1].rsplit(" ", 1)[0].rstrip(",;:—–- ") + "…"
    page.meta["description"] = text
    return content
