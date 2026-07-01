# Spotystat — Frontend

Фронтенд аналитики Spotify на **React 19 + TypeScript + Vite**, стилизованный
через **Tailwind CSS v4**. Дизайн-система — «Luminous Data» (glassmorphism),
её токены описаны в [`DESIGN.md`](./DESIGN.md).

## Запуск

```bash
bun install      # или npm install
bun run dev      # dev-сервер на http://localhost:5173
bun run build    # прод-сборка (tsc + vite)
bun run lint     # проверка ESLint
```

## Структура

```
src/
├── main.tsx                 # точка входа
├── App.tsx                  # роутинг + AuthProvider
├── index.css                # Tailwind v4 + дизайн-токены (@theme) + стекло
├── lib/
│   └── api.ts               # axios-клиент (baseURL, куки, токен, 401)
├── services/
│   └── authService.ts       # запросы аутентификации к Django
├── context/
│   └── AuthContext.tsx       # глобальное состояние авторизации
├── hooks/
│   ├── useAuth.ts           # доступ к контексту авторизации
│   └── useTilt.ts           # 3D-наклон стеклянной карточки
├── types/
│   └── auth.ts              # типы User / AuthState
└── components/
    ├── LoginPage.tsx        # экран входа (собирает всё вместе)
    ├── AuthCard.tsx         # стеклянная карточка с кнопкой входа
    ├── MeshBackground.tsx   # фоновый mesh-градиент
    ├── Footer.tsx           # футер
    └── Icon.tsx             # обёртка Material Symbols
```

## Связь с Django-бэкендом

Слой API уже подготовлен:

- **`src/lib/api.ts`** — единый axios-клиент. В dev-режиме все запросы идут на
  `/api`, который Vite проксирует на `http://127.0.0.1:8000`
  (см. `vite.config.ts`). Клиент шлёт куки (`withCredentials`), поддерживает
  Django CSRF (`X-CSRFToken`) и автоматически подставляет `Bearer`-токен, если
  он сохранён (для JWT/DRF Token). На ответ `401` токен очищается.
- **`src/services/authService.ts`** — конкретные эндпоинты. Сейчас там
  **предполагаемые** пути, поправьте их под ваши реальные Django-роуты:
  - `GET  /api/auth/spotify/login/` → `{ authorizationUrl }` — шаг 1 OAuth
  - `GET  /api/auth/me/` → текущий пользователь
  - `POST /api/auth/logout/`

### Переменные окружения

Для прод-сборки базовый URL API можно переопределить в `.env`:

```
VITE_API_BASE_URL=https://api.example.com
```

Если переменная не задана — используется относительный `/api`.

## Аутентификация (Spotify OAuth)

Поток задуман так:

1. Пользователь жмёт **Login with Spotify** → `AuthContext.login()`.
2. Фронт спрашивает у Django ссылку авторизации и редиректит на Spotify.
3. Spotify возвращает пользователя на Django-callback, бэкенд ставит сессию
   (или отдаёт токен) и редиректит обратно на фронт.
4. При загрузке приложения `AuthProvider` дёргает `/api/auth/me/` и
   восстанавливает сессию.
