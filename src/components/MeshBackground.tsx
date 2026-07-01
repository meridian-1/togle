/**
 * Фон уровня «Canvas» из дизайн-системы: глубокая индиго-база с крупными
 * размытыми цветовыми пятнами (mesh-градиент) вместо статичной картинки.
 */
export default function MeshBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-surface-container-lowest">
      <div className="absolute -left-[10%] -top-[15%] h-[55vw] w-[55vw] rounded-full bg-primary/25 blur-[140px]" />
      <div className="absolute right-[-10%] top-[10%] h-[45vw] w-[45vw] rounded-full bg-secondary-container/30 blur-[150px]" />
      <div className="absolute bottom-[-20%] left-[20%] h-[50vw] w-[50vw] rounded-full bg-tertiary/20 blur-[160px]" />
    </div>
  )
}
