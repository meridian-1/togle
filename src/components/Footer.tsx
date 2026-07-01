import Icon from './Icon'

const NAV_LINKS = [
  { label: 'About', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Logout', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative z-20 w-full border-t border-white/5 bg-surface-container-lowest/80 px-gutter py-8 backdrop-blur-md md:px-container-padding-desktop">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col gap-1">
          <span className="text-lg font-bold text-on-surface">Spotystat</span>
          <p className="font-label-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
            © 2024 Electric Intelligence Labs
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-on-surface-variant transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="group flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary"
          >
            <Icon name="coffee" className="text-sm" />
            Buy us a coffee
          </a>
        </nav>

        <div className="flex gap-4">
          {['share', 'public'].map((icon) => (
            <a
              key={icon}
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-colors hover:bg-white/10"
            >
              <Icon name={icon} className="text-[18px] text-on-surface" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
