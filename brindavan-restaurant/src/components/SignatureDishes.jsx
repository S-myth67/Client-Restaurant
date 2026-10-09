import { useState } from 'react'
import { menuCategories, menuDishes } from '../data/menuData'
import { Star, Plus, Sparkles } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function SignatureDishes({ onSelectDishForModal }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const sectionRef = useScrollReveal({ threshold: 0.1 })

  const filteredDishes =
    activeCategory === 'all'
      ? menuDishes
      : menuDishes.filter((dish) => dish.category === activeCategory)

  return (
    <section ref={sectionRef} id="menu" className="signature-menu-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper text-center reveal-on-scroll reveal-up">
          <span className="section-eyebrow">
            <Sparkles size={14} className="eyebrow-sparkle" />
            <span>DAILY DELIGHTS & SIGNATURE CRAFT</span>
          </span>
          <h2 className="section-headline">Daily Delights</h2>
          <p className="section-subheadline">Familiar, flavorful, forever</p>
        </div>

        {/* Category Pill Filters */}
        <div className="menu-filter-bar reveal-on-scroll reveal-up" role="tablist" aria-label="Menu Categories">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`menu-filter-pill ${
                activeCategory === cat.id ? 'filter-pill-active' : ''
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dishes Grid - Overlapping Floating Plates from Reference 2 */}
        <div className="signature-cards-grid reveal-on-scroll">
          {filteredDishes.map((dish, idx) => (
            <article
              key={dish.id}
              className="delight-card"
              style={{ '--card-idx': idx % 6 }}
              onClick={() => onSelectDishForModal && onSelectDishForModal(dish)}
            >
              {/* Overlapping Floating Circular Food Plate */}
              <div className="delight-plate-container">
                <div className="delight-plate-circle">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="delight-plate-img"
                    loading="lazy"
                    width="140"
                    height="140"
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="delight-card-body">
                {/* Category/Tag */}
                <div className="delight-card-tag-row">
                  <span className="delight-card-tag">{dish.tag}</span>
                  <span className="delight-badge-subtle">{dish.badge}</span>
                </div>

                {/* Dish Name */}
                <h3 className="delight-dish-name">{dish.name}</h3>

                {/* Short Poetic Description */}
                <p className="delight-dish-desc">{dish.description}</p>

                {/* Footer with Price, Rating and Action */}
                <div className="delight-card-footer">
                  <div className="delight-price-box">
                    <span className="delight-price-val">{dish.priceFormatted}</span>
                  </div>

                  <div className="delight-rating-badge">
                    <Star size={13} className="star-icon-filled" />
                    <span>{dish.rating}</span>
                  </div>

                  <button
                    className="delight-expand-btn"
                    title={`View details for ${dish.name}`}
                    aria-label={`View details for ${dish.name}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      onSelectDishForModal && onSelectDishForModal(dish)
                    }}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Dietary Guarantee Note */}
        <div className="menu-guarantee-strip">
          <span className="strip-dot"></span>
          <p>
            All curries are prepared using traditional copper and stone vessels. No artificial food coloring, preservatives, or palm oil is ever used in our kitchen.
          </p>
        </div>
      </div>
    </section>
  )
}
