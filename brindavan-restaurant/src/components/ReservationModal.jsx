import { useState, useEffect, useRef, useCallback } from 'react'
import { X, Calendar, CheckCircle2 } from 'lucide-react'
import { TIME_SLOTS, INITIAL_RESERVATION_FORM, generateBookingCode } from '../data/reservationConfig'

export default function ReservationModal({ isOpen, onClose, onBookingSuccess }) {
  const [formData, setFormData] = useState(INITIAL_RESERVATION_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [bookingCode, setBookingCode] = useState('')
  const modalRef = useRef(null)
  const previousFocusRef = useRef(null)

  const handleDismiss = useCallback(() => {
    setSubmitted(false)
    setBookingCode('')
    setFormData(INITIAL_RESERVATION_FORM)
    onClose()
  }, [onClose])

  // Capture trigger focus when opened; handle body scroll lock & focus trap
  useEffect(() => {
    if (!isOpen) return

    previousFocusRef.current = document.activeElement

    // Save previous overflow style and lock background scroll
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Focus the modal container or the close button
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
        handleDismiss()
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
  }, [isOpen, handleDismiss])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    const code = generateBookingCode()
    setBookingCode(code)
    setSubmitted(true)
    if (onBookingSuccess) {
      onBookingSuccess({ ...formData, bookingCode: code })
    }
  }

  return (
    <div
      className="modal-backdrop"
      onClick={handleDismiss}
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-modal-title"
    >
      <div
        ref={modalRef}
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <button
          onClick={handleDismiss}
          className="modal-close-btn"
          aria-label="Close reservation modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success-pane text-center">
            <div className="success-icon-wrap">
              <CheckCircle2 size={54} />
            </div>
            <span className="confirm-badge">RESERVATION SECURED</span>
            <h3 id="reservation-modal-title" className="modal-title">
              We are honored to welcome you.
            </h3>
            <p className="modal-desc">
              Your table for <strong>{formData.guests}</strong> in our{' '}
              <strong>{formData.area}</strong> has been reserved for{' '}
              <strong>{formData.time}</strong>.
            </p>
            <div className="booking-receipt-pill">
              <span className="receipt-label">Booking Code</span>
              <span className="receipt-code">{bookingCode}</span>
            </div>
            <p className="modal-subnote">
              Demonstration booking confirmation for {formData.phone || formData.email}. No real SMS or charge has occurred.
            </p>
            <button onClick={handleDismiss} className="btn btn-primary btn-block">
              Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="modal-header-meta">
              <span className="modal-eyebrow">BRINDAVAN HOSPITALITY</span>
              <h3 id="reservation-modal-title" className="modal-title">
                Reserve a Table
              </h3>
              <p className="modal-desc">
                Experience authentic royal dining in our candlelit courtyard or carved jaali chambers.
              </p>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label htmlFor="modal-res-name">Full Name *</label>
                <input
                  id="modal-res-name"
                  type="text"
                  required
                  placeholder="e.g. Ananya Rao"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="modal-res-phone">Phone Number *</label>
                <input
                  id="modal-res-phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label htmlFor="modal-res-date">Date *</label>
                <input
                  id="modal-res-date"
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="modal-res-time">Time *</label>
                <select
                  id="modal-res-time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="form-control"
                >
                  {TIME_SLOTS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label htmlFor="modal-res-guests">Guests *</label>
                <select
                  id="modal-res-guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="form-control"
                >
                  <option value="1 Guest">1 Guest</option>
                  <option value="2 Guests">2 Guests</option>
                  <option value="4 Guests">4 Guests</option>
                  <option value="6 Guests">6 Guests</option>
                  <option value="8+ Guests">8+ Guests (Private Alcove)</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="modal-res-area">Seating Preference</label>
                <select
                  id="modal-res-area"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="form-control"
                >
                  <option value="Courtyard Garden">Courtyard Garden</option>
                  <option value="Jaali Private Chamber">Jaali Chamber</option>
                  <option value="Grand Heritage Hall">Heritage Hall</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="modal-res-notes">Special Requests</label>
              <input
                id="modal-res-notes"
                type="text"
                placeholder="e.g. Jain food, birthday celebration"
                value={formData.specialNotes}
                onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block btn-lg">
              <Calendar size={18} />
              <span>Confirm Reservation</span>
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
