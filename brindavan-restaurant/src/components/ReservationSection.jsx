import { useState } from 'react'
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles
} from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import { TIME_SLOTS, INITIAL_RESERVATION_FORM, generateBookingCode } from '../data/reservationConfig'

export default function ReservationSection({ onBookingSuccess }) {
  const sectionRef = useScrollReveal({ threshold: 0.12 })
  const [formData, setFormData] = useState(INITIAL_RESERVATION_FORM)

  const [submitted, setSubmitted] = useState(false)
  const [bookingCode, setBookingCode] = useState('')

  const timeSlots = TIME_SLOTS

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
    <section ref={sectionRef} id="visit" className="reservation-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper text-center reveal-on-scroll reveal-up">
          <span className="section-eyebrow">
            <Sparkles size={14} className="eyebrow-sparkle" />
            <span>TABLE RESERVATIONS & VISIT</span>
          </span>
          <h2 className="section-headline">Reserve Your Experience</h2>
          <p className="section-subheadline">
            Join us for an unforgettable dining journey steeped in warmth and timeless Indian gastronomy.
          </p>
        </div>

        <div className="reservation-grid">
          {/* Left Column: Visit Information & Hours */}
          <div className="visit-info-column reveal-on-scroll reveal-left">
            <div className="visit-card">
              <h3 className="visit-card-title">Plan Your Visit</h3>
              <p className="visit-card-intro">
                Located in Bengaluru’s lush historic quarter, Brindavan offers complimentary valet parking and tranquil open-air seating.
              </p>

              <div className="visit-details-list">
                {/* Location */}
                <div className="visit-detail-item">
                  <div className="detail-icon-circle">
                    <MapPin size={18} />
                  </div>
                  <div className="detail-meta">
                    <span className="detail-label">Address</span>
                    <p className="detail-val">
                      14 Kensington Park Road, Ulsoor, Bengaluru, Karnataka 560042
                    </p>
                    <span className="detail-note">Valet parking available at the main portico</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="visit-detail-item">
                  <div className="detail-icon-circle">
                    <Clock size={18} />
                  </div>
                  <div className="detail-meta">
                    <span className="detail-label">Dining Hours</span>
                    <p className="detail-val">Lunch: 12:00 PM – 03:30 PM</p>
                    <p className="detail-val">Dinner: 07:00 PM – 11:30 PM</p>
                    <span className="detail-note">Open all seven days of the week</span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="visit-detail-item">
                  <div className="detail-icon-circle">
                    <Phone size={18} />
                  </div>
                  <div className="detail-meta">
                    <span className="detail-label">Direct Reservations</span>
                    <p className="detail-val">
                      <a href="tel:+919876543210">+91 98765 43210</a> /{' '}
                      <a href="tel:+918765432109">+91 87654 32109</a>
                    </p>
                    <span className="detail-note">Concierge desk open from 10:00 AM daily</span>
                  </div>
                </div>

                {/* Email */}
                <div className="visit-detail-item">
                  <div className="detail-icon-circle">
                    <Mail size={18} />
                  </div>
                  <div className="detail-meta">
                    <span className="detail-label">Inquiries & Private Events</span>
                    <p className="detail-val">
                      <a href="mailto:reservations@brindavanrestaurant.in">
                        reservations@brindavanrestaurant.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Reservation Interactive Form */}
          <div className="reservation-form-column reveal-on-scroll reveal-right">
            <div className="reservation-form-card">
              {submitted ? (
                <div className="booking-confirmation-box">
                  <div className="confirmation-icon">
                    <CheckCircle2 size={54} />
                  </div>
                  <span className="confirm-badge">TABLE CONFIRMED</span>
                  <h3 className="confirm-title">We look forward to hosting you.</h3>
                  <p className="confirm-lead">
                    Your reservation for <strong>{formData.guests}</strong> in the{' '}
                    <strong>{formData.area}</strong> has been secured for{' '}
                    <strong>{formData.time}</strong>.
                  </p>

                  <div className="booking-receipt-pill">
                    <span className="receipt-label">Booking Reference</span>
                    <span className="receipt-code">{bookingCode}</span>
                  </div>

                  <p className="confirm-note">
                    Demonstration booking confirmation for {formData.email || formData.phone}. (Simulation Mode: No actual charge or SMS dispatched).
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData(INITIAL_RESERVATION_FORM)
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    Make Another Booking
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="booking-form">
                  <div className="form-head">
                    <h3 className="form-title">Reserve a Table</h3>
                    <span className="form-subtitle">Instant reservation without prepayment</span>
                  </div>

                  {/* Name & Phone */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="res-name">Full Name *</label>
                      <input
                        id="res-name"
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Radhika Sharma"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="res-phone">Phone Number *</label>
                      <input
                        id="res-phone"
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  {/* Email & Guests */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="res-email">Email Address</label>
                      <input
                        id="res-email"
                        type="email"
                        name="email"
                        placeholder="radhika@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="res-guests">Number of Guests *</label>
                      <select
                        id="res-guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="form-control"
                      >
                        <option value="1 Guest">1 Guest (Solo Tasting)</option>
                        <option value="2 Guests">2 Guests (Couple)</option>
                        <option value="4 Guests">4 Guests (Family)</option>
                        <option value="6 Guests">6 Guests (Party)</option>
                        <option value="8+ Guests">8+ Guests (Private Alcove)</option>
                      </select>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="res-date">Date *</label>
                      <input
                        id="res-date"
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="form-control"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="res-time">Preferred Time *</label>
                      <select
                        id="res-time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="form-control"
                      >
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Seating Preference */}
                  <div className="form-group">
                    <label htmlFor="res-area">Dining Preference</label>
                    <select
                      id="res-area"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="Courtyard Garden">Open-Air Courtyard Garden</option>
                      <option value="Jaali Private Chamber">Jaali Carved Stone Chamber</option>
                      <option value="Grand Heritage Hall">Grand Heritage Dining Hall</option>
                      <option value="Chef Tasting Counter">Chef Tasting Counter</option>
                    </select>
                  </div>

                  {/* Dietary / Special Requests */}
                  <div className="form-group">
                    <label htmlFor="res-notes">Dietary Notes / Special Requests</label>
                    <textarea
                      id="res-notes"
                      name="specialNotes"
                      rows={2}
                      placeholder="e.g. Pure Jain preparation, anniversary celebration, high chair needed"
                      value={formData.specialNotes}
                      onChange={handleChange}
                      className="form-control"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block btn-lg">
                    <span>Confirm Table Reservation</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
