import { useEffect, useRef } from 'react'

/**
 * Лёгкий эффект «наклона» стеклянной карточки вслед за курсором.
 * Возвращает ref, который нужно повесить на нужный элемент.
 */
export function useTilt<T extends HTMLElement>(intensity = 30) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const rotateX = (y - rect.height / 2) / intensity
      const rotateY = (rect.width / 2 - x) / intensity
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const reset = () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    }

    window.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', reset)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', reset)
    }
  }, [intensity])

  return ref
}
