import { useEffect, useRef } from 'react'

/**
 * useScrollReveal hook
 * Attaches an IntersectionObserver to the returned ref and any child elements
 * with the `.reveal-on-scroll` class. When visible, adds the `.in-view` class and
 * immediately disconnects/unobserves to prevent unnecessary recalculations or replays.
 */
export default function useScrollReveal({ threshold = 0.12, rootMargin = '0px 0px -40px 0px' } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    // If reduced motion is preferred, mark as immediately in-view and skip observer
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (ref.current) {
        ref.current.classList.add('in-view')
        const items = ref.current.querySelectorAll('.reveal-on-scroll')
        items.forEach((item) => item.classList.add('in-view'))
      }
      return
    }

    const container = ref.current
    if (!container) return

    if (!('IntersectionObserver' in window)) {
      container.classList.add('in-view')
      const items = container.querySelectorAll('.reveal-on-scroll')
      items.forEach((item) => item.classList.add('in-view'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    // Observe container if it has reveal styles or if requested
    observer.observe(container)

    // Also observe any discrete child items
    const childItems = container.querySelectorAll('.reveal-on-scroll')
    childItems.forEach((child) => observer.observe(child))

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  return ref
}
