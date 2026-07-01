interface IconProps {
  name: string
  filled?: boolean
  className?: string
}

/** Обёртка над Material Symbols Outlined. */
export default function Icon({ name, filled = false, className = '' }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined select-none ${className}`}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
      aria-hidden="true"
    >
      {name}
    </span>
  )
}
