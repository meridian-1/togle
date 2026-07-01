import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { AuthState } from '../types/auth'
import {
  fetchCurrentUser,
  loginWithSpotify,
  logout as logoutRequest,
} from '../services/authService'

interface AuthContextValue extends AuthState {
  login: () => Promise<void>
  logout: () => Promise<void>
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  })

  // При загрузке приложения пробуем восстановить сессию.
  useEffect(() => {
    let cancelled = false
    fetchCurrentUser()
      .then((user) => {
        if (!cancelled) {
          setState({
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          })
        }
      })
      .catch(() => {
        if (!cancelled) {
          setState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          })
        }
      })
    return () => {
      cancelled = true
    }
  }, [])

  const login = useCallback(async () => {
    setState((s) => ({ ...s, isLoading: true, error: null }))
    try {
      await loginWithSpotify()
      // Успех приводит к редиректу на Spotify, дальнейший код не выполнится.
    } catch {
      setState((s) => ({
        ...s,
        isLoading: false,
        error: 'Не удалось начать вход через Spotify. Попробуйте позже.',
      }))
    }
  }, [])

  const logout = useCallback(async () => {
    try {
      await logoutRequest()
    } finally {
      setState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      })
    }
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({ ...state, login, logout }),
    [state, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
