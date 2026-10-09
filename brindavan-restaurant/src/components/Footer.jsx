import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

export default function Footer({ onOpenReservation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Top Brand Banner */}
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="footer-logo-sup">EST. 1984 • BENGALURU</span>
              <span className="footer-logo-title">BRINDAVAN</span>
              <span className="footer-logo-sub">FINE INDIAN CUISINE</span>
            </div>
            <p className="footer-brand-desc">
              A tribute to royal Indian gastronomy, slow wood-fired brass cauldrons, hand-pounded mountain spices, and the timeless tradition of Indian hospitality.
            </p>
            <div className="footer-social-row">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Brindavan Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Brindavan Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#hero">The Sanctuary</a>
              </li>
              <li>
                <a href="#dish-showcase">Masterpiece Dishes</a>
              </li>
              <li>
                <a href="#menu">Daily Delights Menu</a>
              </li>
              <li>
                <a href="#story">Four Decades of Heritage</a>
              </li>
              <li>
                <a href="#ambience">Courtyard & Private Alcoves</a>
              </li>
              <li>
                <a href="#visit">Table Reservations</a>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="footer-hours-col">
            <h4 className="footer-heading">Dining Hours</h4>
            <div className="footer-hours-box">
              <div className="hours-row">
                <span className="hours-day">Monday – Sunday</span>
                <span className="hours-time">Lunch: 12:00 PM – 03:30 PM</span>
                <span className="hours-time">Dinner: 07:00 PM – 11:30 PM</span>
              </div>
              <div className="hours-row hours-row-note">
                <span className="hours-subnote">Kitchen orders close at 10:45 PM</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Concierge</h4>
            <div className="footer-contact-details">
              <p className="contact-line">
                <MapPin size={16} className="contact-icon" />
                <span>14 Kensington Park Road, Ulsoor, Bengaluru 560042</span>
              </p>
              <p className="contact-line">
                <Phone size={16} className="contact-icon" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </p>
              <p className="contact-line">
                <Mail size={16} className="contact-icon" />
                <a href="mailto:reservations@brindavanrestaurant.in">
                  reservations@brindavanrestaurant.in
                </a>
              </p>
            </div>
            <button onClick={onOpenReservation} className="btn btn-outline-light btn-block btn-sm">
              Reserve a Table
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Brindavan Restaurant. All rights reserved. Crafted with reverent culinary passion.
          </p>

          <button
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  )
}
