import { useEffect, useRef } from 'react'
import { X, Star, Check, Utensils } from 'lucide-react'

export default function DishDetailModal({ dish, onClose, onReserveForDish }) {
  const modalRef = useRef(null)
  const previousFocusRef = useRef(null)

  useEffect(() => {
    if (!dish) return

    previousFocusRef.current = document.activeElement

    // Save previous overflow style and lock background scroll
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Focus close button or container
    const timer = setTimeout(() => {
      const closeBtn = modalRef.current?.querySelector('.modal-close-btn')
      if (closeBtn) {
        closeBtn.focus()
      } else if (modalRef.current) {
        modalRef.current.focus()
      }
    }, 50)

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableSelectors =
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        const focusableElements = modalRef.current.querySelectorAll(focusableSelectors)
        if (focusableElements.length === 0) return

        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === firstElement || document.activeElement === modalRef.current) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow

      // Restore focus to trigger element
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus()
      }
    }
  }, [dish, onClose])

  if (!dish) return null

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-title"
    >
      <div
        ref={modalRef}
        className="modal-container dish-modal-container"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close dish modal"
        >
          <X size={20} />
        </button>

        <div className="dish-modal-grid">
          {/* Dish Image Frame */}
          <div className="dish-modal-image-col">
            <div className="dish-modal-plate-wrap">
              <img
                src={dish.image}
                alt={dish.name || dish.fullName}
                className="dish-modal-plate-img"
                width="240"
                height="240"
              />
            </div>
            <div className="dish-modal-rating-badge">
              <Star size={16} className="star-icon-filled" />
              <span>{dish.rating || '4.9'} / 5.0</span>
            </div>
          </div>

          {/* Dish Details */}
          <div className="dish-modal-content-col">
            <div className="dish-modal-meta">
              <span className="dish-modal-badge">{dish.badge || 'Chef Selection'}</span>
              <span className="dish-modal-tag">{dish.tag || dish.categoryTag || 'Signature'}</span>
            </div>

            <h3 id="dish-modal-title" className="dish-modal-title">
              {dish.name || dish.fullName}
            </h3>

            <div className="dish-modal-price-bar">
              <span className="dish-modal-price">{dish.priceFormatted || dish.price}</span>
              <span className="dish-modal-dietary">
                {Array.isArray(dish.dietary) ? dish.dietary.join(' • ') : dish.dietary}
              </span>
            </div>

            <p className="dish-modal-description">
              {dish.longDescription || dish.overview || dish.description}
            </p>

            {dish.ingredients && (
              <div className="dish-modal-ingredients-section">
                <h4 className="ingredients-heading">Key Ingredients & Spices</h4>
                <div className="ingredients-tags-wrap">
                  {dish.ingredients.map((item, idx) => (
                    <span key={idx} className="ingredient-tag">
                      <Check size={12} className="tag-check-icon" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="dish-modal-actions">
              <button
                onClick={() => {
                  onClose()
                  if (onReserveForDish) onReserveForDish(dish)
                }}
                className="btn btn-primary btn-block btn-lg"
              >
                <Utensils size={18} />
                <span>Reserve a Table to Taste</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
