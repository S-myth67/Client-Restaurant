import pakorasImg from '../assets/images/dish_mirchi_pakoras.jpg'
import { Calendar, UtensilsCrossed, Sparkles, Truck, Users } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function EditorialHighlight({ onOpenReservation }) {
  const sectionRef = useScrollReveal({ threshold: 0.12 })

  const services = [
    {
      icon: <Calendar size={18} />,
      title: 'Online Booking',
      desc: 'Instant confirmation for courtyard and private booths'
    },
    {
      icon: <UtensilsCrossed size={18} />,
      title: 'Royal Catering',
      desc: 'Curated royal banquet feasts for intimate gatherings'
    },
    {
      icon: <Users size={18} />,
      title: 'Private Chambers',
      desc: 'Exclusive jaali-screened dining for celebrations'
    },
    {
      icon: <Truck size={18} />,
      title: 'Artisan Delivery',
      desc: 'Eco-packaged clay handi deliveries to your doorstep'
    }
  ]

  return (
    <section ref={sectionRef} className="editorial-highlight-section">
      <div className="container">
        {/* Editorial Food Showcase Grid */}
        <div className="editorial-highlight-grid">
          {/* Left: Asymmetric Ceramic Platter */}
          <div className="editorial-image-frame reveal-on-scroll reveal-left">
            <div className="platter-glow-ring" aria-hidden="true"></div>
            <div className="platter-container">
              <img
                src={pakorasImg}
                alt="Golden crispy Jodhpur Mirchi Pakoras served with fresh chutneys"
                className="platter-food-img"
                loading="lazy"
                width="600"
                height="480"
              />
            </div>
            <div className="platter-badge">
              <span className="badge-highlight-number">100%</span>
              <span className="badge-highlight-text">Fresh Cold-Pressed Groundnut Oil</span>
            </div>
          </div>

          {/* Right: Rich Editorial Storytelling Copy */}
          <div className="editorial-content-block reveal-on-scroll reveal-right">
            <div className="editorial-prehead">
              <Sparkles size={14} className="sparkle-gold" />
              <span>THE ART OF JODHPUR STREET LUXURY</span>
            </div>

            <h2 className="editorial-heading">
              Golden-fried and bursting with centuries of flavour.
            </h2>

            <p className="editorial-lead-paragraph">
              Golden-fried and bursting with flavor, our Mirchi Pakoras are a fiery treat for spice lovers. Each bite delivers the perfect blend of crispy batter, fresh green chilies, and aromatic spices — a snack that's bold, crunchy, and utterly irresistible.
            </p>

            <p className="editorial-secondary-paragraph">
              Stuffed with slow-roasted cumin potato mash and flash-crisped in cold-pressed oil, every platter comes paired with slow-simmered date-tamarind saunth and chilled wild-mint coriander chutney.
            </p>

            <div className="editorial-quote-author">
              <div className="author-line"></div>
              <div className="author-details">
                <span className="author-name">Chef Maharaj Raghuvir Singh</span>
                <span className="author-role">Master of Royal Marwar Kitchens</span>
              </div>
            </div>
          </div>
        </div>

        {/* Our Services / Hospitality Highlights Bar from Reference 2 */}
        <div className="services-showcase-bar reveal-on-scroll reveal-up">
          <div className="services-title-meta">
            <span className="services-subtag">HOSPITALITY SUITE</span>
            <h3 className="services-heading">Our Services</h3>
          </div>

          <div className="services-pills-row">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="service-capsule-card"
                style={{ '--service-idx': idx }}
                onClick={item.title.includes('Booking') ? onOpenReservation : undefined}
                role={item.title.includes('Booking') ? 'button' : undefined}
                tabIndex={item.title.includes('Booking') ? 0 : undefined}
              >
                <div className="service-icon-box">{item.icon}</div>
                <div className="service-text-box">
                  <span className="service-name">{item.title}</span>
                  <span className="service-desc">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
