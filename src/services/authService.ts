import api from '../lib/api'
import type { User } from '../types/auth'

/**
 * Сервис аутентификации. Здесь собраны все обращения к Django, связанные
 * с логином через Spotify. Имена эндпоинтов — предполагаемые; поправьте их
 * под ваши реальные Django-роуты, когда бэкенд будет готов.
 */

interface SpotifyLoginResponse {
  // URL авторизации Spotify, куда нужно перенаправить пользователя.
  authorizationUrl: string
}

interface CurrentUserResponse {
  id: string
  display_name: string
  email?: string
  avatar_url?: string
}

function mapUser(dto: CurrentUserResponse): User {
  return {
    id: dto.id,
    displayName: dto.display_name,
    email: dto.email,
    avatarUrl: dto.avatar_url,
  }
}

/**
 * Шаг 1 OAuth: спрашиваем у Django ссылку авторизации Spotify
 * и перенаправляем на неё браузер. Если бэкенд ещё не готов, кидаем ошибку.
 */
export async function loginWithSpotify(): Promise<void> {
  const { data } = await api.get<SpotifyLoginResponse>('/auth/spotify/login/')
  window.location.href = data.authorizationUrl
}

/** Получить текущего залогиненного пользователя (по сессии/токену). */
export async function fetchCurrentUser(): Promise<User> {
  const { data } = await api.get<CurrentUserResponse>('/auth/me/')
  return mapUser(data)
}

/** Выйти из аккаунта. */
export async function logout(): Promise<void> {
  await api.post('/auth/logout/')
}
