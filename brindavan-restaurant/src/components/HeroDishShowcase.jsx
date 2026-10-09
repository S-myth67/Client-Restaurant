import { useState, useEffect } from 'react'
import { heroDishes } from '../data/heroDishesData'
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ExternalLink,
  BookOpen,
  Check,
  Utensils,
  Clock
} from 'lucide-react'

export default function HeroDishShowcase({ onOpenReservation, onSelectDishForModal }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeTab, setActiveTab] = useState('overview') // 'overview' | 'ingredients'
  const [isPlaying, setIsPlaying] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  const currentDish = heroDishes[currentIndex]

  // Auto-advance loop when playing
  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroDishes.length)
        setIsAnimating(false)
      }, 280)
    }, 7000)
    return () => clearInterval(timer)
  }, [isPlaying])

  const changeDish = (newIndex) => {
    if (newIndex === currentIndex) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(newIndex)
      setIsAnimating(false)
    }, 280)
  }

  const handlePrev = () => {
    const prev = currentIndex === 0 ? heroDishes.length - 1 : currentIndex - 1
    changeDish(prev)
  }

  const handleNext = () => {
    const next = (currentIndex + 1) % heroDishes.length
    changeDish(next)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section id="dish-showcase" className="showcase-section">
      {/* Decorative Warm Swirling Arc from Reference 1 */}
      <div className="showcase-ambient-arc" aria-hidden="true"></div>

      <div className="container showcase-container">
        {/* Top Section Header */}
        <div className="showcase-top-meta">
          <span className="showcase-section-tag">MASTERPIECE CULINARY SHOWCASE</span>
          <div className="showcase-counter-badge">
            DISH {currentDish.number} OF {String(heroDishes.length).padStart(2, '0')}
          </div>
        </div>

        {/* Main Stage Grid */}
        <div className="showcase-stage">
          {/* Left / Center: Interactive Overhead Plate & Title */}
          <div className="showcase-visual-column">
            {/* Overhead Dish Plate Wrapper */}
            <div className="showcase-plate-frame">
              {/* Outer Golden Aura Ring */}
              <div className="plate-halo-ring" aria-hidden="true"></div>

              {/* Plate Image */}
              <div
                className={`showcase-plate-wrapper ${
                  isAnimating ? 'plate-fade-out' : 'plate-fade-in'
                }`}
              >
                <img
                  src={currentDish.image}
                  alt={currentDish.fullName}
                  className="showcase-plate-img"
                  loading="eager"
                  width="440"
                  height="440"
                />
              </div>

              {/* Floating Dish Badge */}
              <div className="plate-badge-floating">
                <span className="badge-fl-num">{currentDish.number}</span>
                <span className="badge-fl-text">{currentDish.dietary}</span>
              </div>
            </div>

            {/* Typography block below/beside plate */}
            <div
              className={`showcase-typography ${
                isAnimating ? 'text-fade-out' : 'text-fade-in'
              }`}
            >
              <span className="dish-category-sub">{currentDish.categoryTag}</span>
              <h2 className="dish-hero-title">
                <span className="dish-title-main">{currentDish.titleMain}</span>{' '}
                <span className="dish-title-sec">{currentDish.titleSecondary}</span>
              </h2>

              <p className="dish-story-excerpt">{currentDish.storyExcerpt}</p>

              {/* Action Links from Reference 1 */}
              <div className="dish-action-row">
                <button
                  onClick={() => setActiveTab(activeTab === 'overview' ? 'ingredients' : 'overview')}
                  className="dish-action-pill"
                >
                  <BookOpen size={15} />
                  <span>{activeTab === 'overview' ? 'View ingredients' : 'View overview'}</span>
                </button>

                <button
                  onClick={() => onSelectDishForModal && onSelectDishForModal(currentDish)}
                  className="dish-action-pill dish-action-pill-accent"
                >
                  <ExternalLink size={15} />
                  <span>Explore dish details</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Editorial Card from Reference 1 */}
          <div className="showcase-card-column">
            <div className="editorial-info-card">
              {/* Card Tabs Header */}
              <div className="card-tabs-header">
                <button
                  className={`card-tab-btn ${activeTab === 'overview' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button
                  className={`card-tab-btn ${activeTab === 'ingredients' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('ingredients')}
                >
                  Ingredients
                </button>
              </div>

              {/* Card Body */}
              <div className="card-body-content">
                <div className="card-character-bar">
                  <span className="card-badge-label">{currentDish.badgeText}</span>
                  <div className="card-rating-pill">
                    <span className="star-icon">★</span>
                    <span className="rating-value">{currentDish.rating}</span>
                  </div>
                </div>

                {/* Amber Number Banner */}
                <div className="card-amber-number-banner">
                  <span className="amber-number">{currentDish.number}</span>
                  <span className="amber-stars">★★★★★</span>
                  <span className="amber-time">
                    <Clock size={13} /> {currentDish.preparationTime}
                  </span>
                </div>

                {activeTab === 'overview' ? (
                  <div key="overview" className="tab-pane tab-overview">
                    <h3 className="card-pane-title">{currentDish.headline}</h3>
                    <p className="card-pane-desc">{currentDish.overview}</p>

                    <div className="card-quick-stats">
                      <div className="stat-chip">
                        <span className="stat-label">Price</span>
                        <span className="stat-val">{currentDish.price}</span>
                      </div>
                      <div className="stat-chip">
                        <span className="stat-label">Service</span>
                        <span className="stat-val">Tableside Feast</span>
                      </div>
                      <div className="stat-chip">
                        <span className="stat-label">Craft</span>
                        <span className="stat-val">Slow Fire</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key="ingredients" className="tab-pane tab-ingredients">
                    <h3 className="card-pane-title">Pure Vedic Ingredients</h3>
                    <p className="card-pane-desc">
                      Sourced directly from regenerative heritage farms and prepared with bilona churned A2 cow ghee.
                    </p>

                    <ul className="ingredients-list">
                      {currentDish.ingredients.map((item, idx) => (
                        <li key={idx} className="ingredient-item">
                          <Check size={14} className="check-gold" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Card CTA */}
                <div className="card-footer-action">
                  <button
                    onClick={onOpenReservation}
                    className="btn btn-primary btn-block"
                  >
                    <Utensils size={16} />
                    <span>Reserve Tasting for This Dish</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Thumbnail Carousel from Reference 1 */}
        <div className="showcase-bottom-bar">
          {/* Arrow Left */}
          <button
            onClick={handlePrev}
            className="carousel-arrow-btn"
            aria-label="Previous dish"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Thumbnails Row */}
          <div className="showcase-thumbnails-track">
            {heroDishes.map((dish, idx) => {
              const isActive = idx === currentIndex
              return (
                <button
                  key={dish.id}
                  onClick={() => changeDish(idx)}
                  className={`thumbnail-capsule-item ${
                    isActive ? 'thumbnail-capsule-active' : ''
                  }`}
                  style={{ '--i': idx }}
                  aria-label={`Select ${dish.fullName}`}
                  aria-selected={isActive}
                >
                  <div className="thumbnail-img-box">
                    <img src={dish.image} alt={dish.fullName} width="64" height="64" loading="lazy" />
                  </div>
                  <div className="thumbnail-info">
                    <span className="thumb-dish-name">{dish.fullName}</span>
                    <span className="thumb-dish-meta">{dish.price}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Arrow Right */}
          <button
            onClick={handleNext}
            className="carousel-arrow-btn"
            aria-label="Next dish"
          >
            <ChevronRight size={20} />
          </button>

          {/* Play/Pause & Indicators */}
          <div className="showcase-controls">
            <button
              onClick={togglePlay}
              className="carousel-play-toggle"
              aria-label={isPlaying ? 'Pause auto showcase' : 'Play auto showcase'}
              title={isPlaying ? 'Pause rotation' : 'Start auto-rotation'}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>

            <span className="controls-label">
              {isPlaying ? 'Auto-Advancing' : 'Showcase Paused'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
