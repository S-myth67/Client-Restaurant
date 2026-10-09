import { ArrowRight, Sparkles, Clock, Award, ShieldCheck, Heart } from 'lucide-react'

export default function Hero({ onOpenReservation }) {
  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero-section">
      {/* Subtle Ambient Glows */}
      <div className="hero-ambient-glow hero-glow-1" aria-hidden="true"></div>
      <div className="hero-ambient-glow hero-glow-2" aria-hidden="true"></div>

      <div className="container hero-container">
        {/* Editorial Top Eyebrow */}
        <div className="hero-eyebrow-wrapper">
          <span className="hero-pill-badge">
            <Sparkles size={14} className="badge-icon-gold" />
            <span>AUTHENTIC ROYAL INDIAN HERITAGE</span>
          </span>
          <span className="hero-location-text">BENGALURU • KARNATAKA</span>
        </div>

        {/* Large Editorial Headline */}
        <div className="hero-headline-block">
          <h1 className="hero-headline">
            <span className="reveal-mask">
              <span className="reveal-inner">Good food.</span>
            </span>
            <span className="reveal-mask">
              <span className="reveal-inner headline-italic reveal-delay-2">Beautiful moments.</span>
            </span>
          </h1>

          <p className="hero-description">
            Step into a sanctuary of regal Indian culinary heritage. At Brindavan, centuries of royal recipes, slow brass embers, and hand-pounded mountain spices come together in an atmospheric garden courtyard setting.
          </p>
        </div>

        {/* Primary & Secondary Action CTAs */}
        <div className="hero-cta-group">
          <a
            href="#menu"
            onClick={(e) => scrollToSection(e, '#menu')}
            className="btn btn-primary btn-lg"
          >
            <span>Explore the Menu</span>
            <ArrowRight size={18} />
          </a>

          <button
            onClick={onOpenReservation}
            className="btn btn-secondary btn-lg"
          >
            <span>Reserve a Table</span>
          </button>

          <a
            href="#story"
            onClick={(e) => scrollToSection(e, '#story')}
            className="btn btn-ghost"
          >
            <span>Discover Our Story</span>
          </a>
        </div>

        {/* Culinary Heritage Trust Badges */}
        <div className="hero-pillars-bar">
          <div className="pillar-item">
            <div className="pillar-icon-box">
              <ShieldCheck size={20} />
            </div>
            <div className="pillar-meta">
              <span className="pillar-title">Pure Bilona Ghee</span>
              <span className="pillar-desc">Cultured A2 cow milk churned by hand</span>
            </div>
          </div>

          <div className="pillar-item">
            <div className="pillar-icon-box">
              <Clock size={20} />
            </div>
            <div className="pillar-meta">
              <span className="pillar-title">Slow Dum Simmered</span>
              <span className="pillar-desc">Clay sealed over charcoal embers</span>
            </div>
          </div>

          <div className="pillar-item">
            <div className="pillar-icon-box">
              <Award size={20} />
            </div>
            <div className="pillar-meta">
              <span className="pillar-title">Ayurvedic Kansa</span>
              <span className="pillar-desc">Sacred bronze platters balancing doshas</span>
            </div>
          </div>

          <div className="pillar-item">
            <div className="pillar-icon-box">
              <Heart size={20} />
            </div>
            <div className="pillar-meta">
              <span className="pillar-title">Atithi Devo Bhava</span>
              <span className="pillar-desc">Timeless warmth of royal hospitality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
