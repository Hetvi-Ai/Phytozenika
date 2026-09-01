import { useEffect, useState } from 'react'

const heroSlides = [
  { name: 'Immune', category: 'Daily immune defense', description: 'Botanical support designed to strengthen everyday resilience and seasonal wellness.', tone: 'immune', mark: '01', image: '/products/immon.jpeg'},
  { name: 'Cardiovascular', category: 'Heart and circulation', description: 'Thoughtful daily support for cardiovascular vitality, healthy circulation, and active living.', tone: 'cardiovascular', mark: '02'},
  { name: 'Skin care', category: 'Radiance and renewal', description: 'Plant-powered nourishment created to support healthy, hydrated, naturally radiant skin.', tone: 'skin-care', mark: '03'},
  { name: 'Metabolic', category: 'Metabolic balance', description: 'Targeted botanical care for balanced energy, healthy metabolism, and consistent wellbeing.', tone: 'metabolic', mark: '04'},
  { name: 'Respiratory', category: 'Breath and resilience', description: 'Gentle botanical support for respiratory comfort, clear breathing, and daily resilience.', tone: 'respiratory', mark: '05'},
]

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 4500)

    return () => window.clearTimeout(timer)
  }, [activeSlide])

  return (
    <section id="products" className="hero-section" aria-label="Featured wellness collections">
      <div className="hero-carousel">
        <div className="hero-carousel-window">
          <div
            className="hero-carousel-track"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {heroSlides.map((slide, index) => (
              <div
                className={`hero-slide hero-slide-${slide.tone}`}
                aria-hidden={index !== activeSlide}
                key={slide.name}
              >
                <div className="container hero-slide-content">
                  <div className="hero-copy">
                    <div className="hero-meta-row">
                      <p className="eyebrow">Phytozenika wellness</p>
                      <p className="hero-slide-number">{slide.mark} / 05</p>
                    </div>
                    <h1>{slide.name}</h1>
                    <p className="hero-category">{slide.category}</p>
                    <p className="sublead">{slide.description}</p>
                    <div className="hero-benefits" aria-label="Product qualities">
                      <span>Botanical</span>
                      <span>Science-led</span>
                      <span>Everyday care</span>
                    </div>
                    <div className="cta-row">
                      <a href="#products" className="primary-btn">Explore formula <span aria-hidden="true">→</span></a>
                      <button type="button" className="hero-cart-button">Talk to an expert</button>
                    </div>
                  </div>

                  <div className="hero-product-visual" aria-hidden="true">
                    <div className="hero-product-orbit" />
                    <span className="hero-float-card hero-float-card-top">Standardized extracts</span>
                    <span className="hero-float-card hero-float-card-bottom">Plant-powered care</span>
                    {slide.image ? (
                      <div className="hero-product-image-wrap">
                        <img
                          className="hero-product-image"
                          src={slide.image}
                          alt="Phytozenika Immon immunity supplement bottle"
                        />
                      </div>
                    ) : (
                      <div className={`dummy-product-pack ${slide.tone}`}>
                        <span className="dummy-product-mark">FORMULA {slide.mark}</span>
                        <span className="dummy-product-symbol">✦</span>
                        <span className="dummy-product-brand">PHYTOZENIKA</span>
                        <strong>{slide.name}</strong>
                        <small>{slide.category}</small>
                        <span className="dummy-product-detail">Premium botanical wellness</span>
                        <span className="dummy-product-accent" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-carousel-controls">
          <button
            type="button"
            className="carousel-arrow"
            aria-label="Previous slide"
            onClick={() => setActiveSlide((activeSlide - 1 + heroSlides.length) % heroSlides.length)}
          >
            ←
          </button>
          <div className="carousel-dots">
            {heroSlides.map((slide, index) => (
              <button
                type="button"
                className={`carousel-dot ${index === activeSlide ? 'active' : ''}`}
                aria-label={`Show ${slide.name}`}
                aria-current={index === activeSlide ? 'true' : undefined}
                key={slide.name}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
          <div className="carousel-progress" aria-hidden="true">
            <span key={activeSlide} className="carousel-progress-fill" />
          </div>
          <button
            type="button"
            className="carousel-arrow"
            aria-label="Next slide"
            onClick={() => setActiveSlide((activeSlide + 1) % heroSlides.length)}
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
