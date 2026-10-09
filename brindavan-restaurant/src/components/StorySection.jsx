import spicesImg from '../assets/images/spices_heritage.jpg'
import useScrollReveal from '../hooks/useScrollReveal'

export default function StorySection() {
  const sectionRef = useScrollReveal({ threshold: 0.12 })

  const craftPillars = [
    {
      num: '01',
      title: 'Hand-Pounded Stone Spices',
      desc: 'Whole coriander, stone-flower, green cardamom, and Kashmir saffron crushed fresh every dawn using traditional stone sil-batta.'
    },
    {
      num: '02',
      title: 'Clay & Hand-Cast Brass Vessels',
      desc: 'Our chefs cook exclusively in unglazed clay handis and tin-lined brass lagans to retain essential natural oils and deep flavor notes.'
    },
    {
      num: '03',
      title: 'Sacred Ayurvedic Balance',
      desc: 'Every recipe honors the six rasas (sweet, sour, salty, bitter, pungent, astringent) for a deeply satisfying, gut-nurturing meal.'
    },
    {
      num: '04',
      title: 'Generational Lineage',
      desc: 'Recipes passed down uninterrupted across four generations of royal Khansamas from Rajasthan, Awadh, and Mysore.'
    }
  ]

  return (
    <section ref={sectionRef} id="story" className="story-section">
      <div className="container">
        <div className="story-grid">
          {/* Left Column: Editorial Imagery */}
          <div className="story-visual-column reveal-on-scroll reveal-left">
            <div className="story-image-card">
              <img
                src={spicesImg}
                alt="Artisan stone mortar grinding fresh whole Indian spices"
                className="story-main-img"
                loading="lazy"
                width="600"
                height="450"
              />
              <div className="story-image-overlay-box">
                <span className="overlay-year">FOUR DECADES</span>
                <span className="overlay-tagline">Of Uncompromising Purity & Regal Taste</span>
              </div>
            </div>

            {/* Small Floating Stat Banner */}
            <div className="story-stat-badge">
              <span className="stat-big-number">100%</span>
              <span className="stat-label-text">Zero Preservatives • Pure Cow Ghee</span>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="story-narrative-column">
            <div className="story-header-block reveal-on-scroll reveal-up">
              <span className="story-kicker">OUR CULINARY ROOTS</span>
              <h2 className="story-title">
                Born in 1984. Rooted in royal kitchens.
              </h2>
              <p className="story-lead">
                Brindavan began not simply as a restaurant, but as an impassioned homage to the fading slow-cooking traditions of India’s grandest royal courts.
              </p>
              <p className="story-body">
                In an era dominated by rapid shortcuts and industrialized spices, our kitchen remains a sacred haven of patient fire. We believe that true taste cannot be rushed: lentils require hours of patient wood-ash simmering, grains of basmati must drink floral saffron vapor under clay seal, and spices must yield their volatile essences slowly through stone friction.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="story-pillars-grid reveal-on-scroll">
              {craftPillars.map((pillar, idx) => (
                <div key={pillar.num} className="story-pillar-item" style={{ '--pillar-idx': idx }}>
                  <span className="pillar-num-highlight">{pillar.num}</span>
                  <h3 className="pillar-heading">{pillar.title}</h3>
                  <p className="pillar-description">{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* Closing Founder Quote */}
            <blockquote className="story-quote reveal-on-scroll reveal-up">
              <p>
                “When you feed someone with pure intent and reverence for ancient grain and spice, you do not just nourish the body — you touch their spirit.”
              </p>
              <cite className="story-cite">— Pandit Devendra Sharma, Founder</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
