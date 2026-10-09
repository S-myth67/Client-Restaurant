import { useState, useEffect } from 'react'
import { Menu, X, Calendar, Phone, MapPin } from 'lucide-react'

export default function Navbar({ onOpenReservation }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Featured Dishes', href: '#dish-showcase' },
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'Ambience', href: '#ambience' },
    { label: 'Visit', href: '#visit' }
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="navbar-brand"
            aria-label="Brindavan Restaurant Home"
          >
            <span className="brand-sup">EST. 1984 • HERITAGE DINING</span>
            <span className="brand-title">BRINDAVAN</span>
            <span className="brand-sub">FINE INDIAN CUISINE</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="navbar-nav desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.label} className="nav-item">
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="nav-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action CTAs */}
          <div className="navbar-actions">
            <a
              href="tel:+919876543210"
              className="navbar-phone-link"
              title="Call Brindavan"
              aria-label="Call restaurant directly"
            >
              <Phone size={16} />
              <span className="phone-number">+91 98765 43210</span>
            </a>

            <button
              onClick={onOpenReservation}
              className="btn btn-primary nav-reserve-btn"
              aria-label="Reserve a table"
            >
              <Calendar size={15} />
              <span>Reserve Table</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-toggle"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`mobile-drawer ${mobileMenuOpen ? 'mobile-drawer-open' : ''}`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="mobile-drawer-content">
            <div className="mobile-drawer-tagline">
              <span className="drawer-badge">REGAL INDIAN HOSPITALITY</span>
              <p>Experience timeless slow-cooked traditions in our garden courtyards.</p>
            </div>

            <nav className="mobile-drawer-nav">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="mobile-nav-link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mobile-drawer-footer">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenReservation()
                }}
                className="btn btn-primary btn-block"
              >
                <Calendar size={18} />
                <span>Reserve a Table</span>
              </button>

              <div className="mobile-quick-contact">
                <div className="quick-item">
                  <Phone size={15} />
                  <span>+91 98765 43210</span>
                </div>
                <div className="quick-item">
                  <MapPin size={15} />
                  <span>14 Kensington Park, Bengaluru</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
