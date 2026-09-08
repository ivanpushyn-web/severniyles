# Северный Лес

Next.js 16 сайт (бани/дома/беседки ручной рубки) со встроенной админкой
[Payload CMS](https://payloadcms.com). Статьи (`/stati`) и товары (`/bany`,
`/doma`, `/besedki`) редактируются через `/admin`, публичные страницы читают
их из Payload на каждом запросе (SSR).

## Стек

- Next.js 16 (App Router, TypeScript, Tailwind v4)
- Payload CMS 3, редактор Lexical
- PostgreSQL (TimeWeb Cloud DB) через `@payloadcms/db-postgres`
- Деплой — TimeWeb Cloud Apps, автодеплой из ветки `main`

## Структура

- `src/app/(frontend)/` — публичный сайт
- `src/app/(payload)/` — админка и API Payload (`/admin`, `/api/*`) — файлы
  сгенерированы Payload, вручную не редактируются
- `src/collections/` — коллекции Payload (`Articles`, `Products`, `Media`, `Users`)
- `src/payload.config.ts` — конфигурация Payload
- `src/lib/content.ts` — доступ к данным для фронтенда (обёртка над Payload Local API)
- `src/migrations/` — SQL-миграции БД (генерируются `payload migrate:create`)
- `src/seed/` — одноразовый посев контента (запускается автоматически при
  первом старте на пустой базе)

## Локальная разработка

1. Скопируйте `.env.example` в `.env` и укажите `DATABASE_URI` (строка
   подключения к Postgres), `PAYLOAD_SECRET` (любая случайная строка) и
   `NEXT_PUBLIC_SERVER_URL`.
2. `npm install`
3. `npm run dev` — в dev-режиме Payload сам синхронизирует схему БД (push).
4. Откройте `http://localhost:3000/admin` — на пустой базе появится форма
   создания первого пользователя.

## Миграции БД

В продакшене схема БД применяется миграциями (`push` в проде отключён).
После изменения полей в `src/collections/*`:

```bash
npm run payload -- migrate:create <имя>
```

Файл миграции попадёт в `src/migrations/`, закоммитьте его — при следующем
деплое TimeWeb он применится автоматически при старте (см. `prodMigrations`
в `src/payload.config.ts`).

## Деплой (TimeWeb Cloud Apps)

- Build command: `npm install && npm run build`
- Run command: `npm start`
- Переменные окружения (заданы в панели TimeWeb Cloud Apps): `PAYLOAD_SECRET`,
  `DATABASE_URI`, `NEXT_PUBLIC_SERVER_URL`.
- Файловая система приложения эфемерна (пересоздаётся при каждом деплое),
  поэтому база данных и загруженные файлы должны жить вне контейнера —
  сейчас это управляемая PostgreSQL база TimeWeb Cloud.
