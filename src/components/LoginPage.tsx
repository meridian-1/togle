function LoginPage() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logo}>🎧</div>
        <h1 style={styles.title}>Spotistat</h1>
        <p style={styles.subtitle}>Узнай свою музыку по-новому</p>

        <button style={styles.spotifyButton}>
          <svg
            style={styles.spotifyIcon}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
          Войти через Spotify
        </button>

        <p style={styles.info}>
          Подключи Spotify и смотри свою статистику: любимые треки, артисты,
          жанры и не только
        </p>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background:
      'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    padding: '20px',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '48px',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  },
  logo: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  title: {
    color: '#fff',
    fontSize: '32px',
    fontWeight: 700,
    margin: '0 0 8px',
    letterSpacing: '-0.5px',
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '16px',
    margin: '0 0 32px',
  },
  spotifyButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    background: '#1DB954',
    color: '#fff',
    border: 'none',
    borderRadius: '50px',
    padding: '14px 32px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  spotifyIcon: {
    width: '24px',
    height: '24px',
  },
  info: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: '13px',
    marginTop: '24px',
    lineHeight: '1.5',
  },
}

export default LoginPage
