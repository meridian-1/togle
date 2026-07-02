import MeshBackground from './MeshBackground'
import AuthCard from './AuthCard'
import Footer from './Footer'

export default function LoginPage() {
  return (
    <div className="grainy-overlay flex min-h-screen flex-col overflow-x-hidden font-body-base text-on-surface">
      <MeshBackground />

      <main className="relative z-10 flex flex-grow items-center justify-center px-gutter py-16 md:px-container-padding-desktop">
        <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Левая часть: брендинг и вход */}
          <div className="flex flex-col items-start gap-8">
            <AuthCard />
          </div>

          {/* Правая часть: визуальный баланс (декоративное пространство) */}
          <div className="hidden lg:block" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
