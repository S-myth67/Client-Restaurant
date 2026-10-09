import ambienceImg from '../assets/images/ambience_courtyard.jpg'
import { Sparkles, Music, Moon, HeartHandshake } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function AmbienceSection({ onOpenReservation }) {
  const sectionRef = useScrollReveal({ threshold: 0.12 })

  const experiences = [
    {
      icon: <Moon size={20} />,
      title: 'Lantern-Lit Courtyard',
      desc: 'Dine under ancient rain trees and warm Moroccan-Indian brass lanterns as gentle night breezes float through.'
    },
    {
      icon: <Music size={20} />,
      title: 'Acoustic Sitar & Santoor',
      desc: 'Subtle evening ragas performed live by classical maestros, creating a tranquil sanctuary far from the city din.'
    },
    {
      icon: <Sparkles size={20} />,
      title: 'The Jaali Private Chambers',
      desc: 'Intimate hand-carved stone screen dining alcoves accommodating 6 to 18 guests for family celebrations and regal feasts.'
    },
    {
      icon: <HeartHandshake size={20} />,
      title: 'Silver-Glove Hospitality',
      desc: 'Attentive, discreet, and gracious service honoring the ancient Vedic tenet of treating every guest as royalty.'
    }
  ]

  return (
    <section ref={sectionRef} id="ambience" className="ambience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper text-center reveal-on-scroll reveal-up">
          <span className="section-eyebrow">
            <Sparkles size={14} className="eyebrow-sparkle" />
            <span>ATMOSPHERIC IMMERSION</span>
          </span>
          <h2 className="section-headline">A Sanctuary of Warmth & Elegance</h2>
          <p className="section-subheadline">
            Where carved stone screens, soft candlelight, and lush greenery frame your evening.
          </p>
        </div>

        {/* Grand Ambience Banner Showcase */}
        <div className="ambience-feature-frame reveal-on-scroll reveal-scale">
          <div className="ambience-img-wrapper">
            <img
              src={ambienceImg}
              alt="Brindavan luxury fine dining hall with carved jaali screens and candlelit brass dinnerware"
              className="ambience-main-photo"
              loading="lazy"
              width="1200"
              height="480"
            />
            <div className="ambience-photo-gradient-overlay"></div>
          </div>

          <div className="ambience-floating-curtain-card">
            <span className="curtain-badge">COURTYARD & PRIVATE DINING</span>
            <h3 className="curtain-title">Intimate gatherings bathed in timeless amber glow.</h3>
            <p className="curtain-text">
              Every table at Brindavan is thoughtfully positioned to offer privacy, tranquil acoustic comfort, and views of our verdant inner water fountains.
            </p>
            <button onClick={onOpenReservation} className="btn btn-primary btn-sm">
              Book Courtyard Table
            </button>
          </div>
        </div>

        {/* 4 Ambience Pillars */}
        <div className="ambience-features-grid reveal-on-scroll">
          {experiences.map((exp, idx) => (
            <div key={idx} className="ambience-feature-card" style={{ '--ambience-idx': idx }}>
              <div className="feature-icon-wrapper">{exp.icon}</div>
              <h3 className="feature-card-title">{exp.title}</h3>
              <p className="feature-card-desc">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
