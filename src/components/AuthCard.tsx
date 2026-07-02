import Icon from './Icon'
import { useAuth } from '../hooks/useAuth'

// Аватары «сообщества». Позже можно заменить на реальные данные с бэкенда.
const AVATARS = [
  'https://i.pravatar.cc/64?img=12',
  'https://i.pravatar.cc/64?img=32',
  'https://i.pravatar.cc/64?img=45',
]

export default function AuthCard() {
  const { login, isLoading, error } = useAuth()

  return (
    <div
      className="polished-glass group w-full max-w-xl rounded-3xl p-8 transition-colors duration-500 hover:bg-white/[0.04] md:p-14"
    >
      <div className="mb-6 flex items-center gap-4">
        <h1 className="font-display-lg text-display-lg-mobile tracking-tighter text-primary md:text-display-lg">
          Spotystat
        </h1>
      </div>

      <p className="mb-10 max-w-md font-headline-md text-headline-md leading-relaxed text-on-surface-variant">
        Experience immersive music analytics. Discover your{' '}
        <span className="font-bold text-secondary">Sonic Identity</span> through
        data-driven mirrors of your Spotify journey.
      </p>

      <button
        type="button"
        onClick={() => void login()}
        disabled={isLoading}
        className="neon-glow-btn group flex w-full items-center justify-center gap-4 rounded-full bg-primary px-8 py-5 font-bold text-on-primary transition-all duration-300 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
      >
        <Icon name="play_circle" filled />
        <span className="font-bold">
          {isLoading ? 'Connecting…' : 'Login with Spotify'}
        </span>
        <Icon
          name="arrow_forward"
          className="transition-transform group-hover:translate-x-1"
        />
      </button>

      {error && (
        <p className="mt-4 text-sm font-medium text-error" role="alert">
          {error}
        </p>
      )}

      <div className="mt-12 flex items-center gap-4">
        <div className="flex -space-x-3">
          {AVATARS.map((src) => (
            <div
              key={src}
              className="h-8 w-8 overflow-hidden rounded-full border-2 border-surface-container-low"
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        <p className="font-label-mono uppercase tracking-wider text-on-surface-variant">
          Joined by 24k+ Enthusiasts
        </p>
      </div>
    </div>
  )
}
