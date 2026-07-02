/**
 * Фон уровня «Canvas» из дизайн-системы: кастомное изображение
 * (неоновый водоворот с музыкальными и аналитическими иконками),
 * поверх которого лежит тёмная mesh-градиентная подсветка для
 * сохранения читаемости текста и контраста дизайн-системы.
 */
import heroBackground from '../assets/hero-background.png'

export default function MeshBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-surface-container-lowest">
      <img
        src={heroBackground}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-surface-container-lowest/70" />
      <div className="absolute -left-[10%] -top-[15%] h-[55vw] w-[55vw] rounded-full bg-primary/15 blur-[140px]" />
      <div className="absolute right-[-10%] top-[10%] h-[45vw] w-[45vw] rounded-full bg-secondary-container/20 blur-[150px]" />
      <div className="absolute bottom-[-20%] left-[20%] h-[50vw] w-[50vw] rounded-full bg-tertiary/15 blur-[160px]" />
    </div>
  )
}
