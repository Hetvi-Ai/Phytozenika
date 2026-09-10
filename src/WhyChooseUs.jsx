const philosophyItems = [
  {
    title: 'Tradition',
    description: 'Ayurvedic wisdom and generations of botanical knowledge guide every formula.',
    icon: '🍃',
  },
  {
    title: 'Science',
    description: "Modern research and biological understanding bring clarity to nature's potential.",
    icon: '🧬',
  },
  {
    title: 'Precision',
    description: 'Purposeful formulations, standardized extracts, and responsible everyday care.',
    icon: '💊',
  },
]

export function PhilosophySection() {
  return (
    <section id="why-us" className="why-section">
      <div className="container">
        <div className="section-heading philosophy-heading">
          <p className="section-tag">Our Philosophy</p>
          <h2>Nature, understood with purpose.</h2>
          <p>We unite heritage, evidence, and precision to create more thoughtful wellness.</p>
        </div>

        <div className="philosophy-path">
          {philosophyItems.map((item, index) => (
            <div key={item.title} className="philosophy-path-item">
              <span className="philosophy-path-number">0{index + 1}</span>
              <div className="philosophy-path-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {index < philosophyItems.length - 1 && <span className="philosophy-path-line" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BrandMeaningSection() {
  return (
    <section className="concept-section" aria-label="Brand Meaning: Phytozenika">
      <div className="container">
        <div className="concept-wordmark">
          <div className="concept-badge-wrap">
            {/* <span className="concept-synergy-badge">Botanical Intelligence meets Modern Science</span> */}
          </div>

          <h3 className="concept-wordmark-main" aria-label="Phytozenika: Phyto and Zenika">
            <span className="part-phyto">PHYTO</span>
            <span className="part-joiner"></span>
            <span className="part-zenika">ZENIKA</span>
          </h3>

          <div className="concept-wordmark-rule" />

          <div className="concept-wordmark-meaning">
            <article className="meaning-card meaning-card-phyto">
              <div className="meaning-header">
                <strong>PHYTO</strong>
              </div>
              <span>Botanical intelligence</span>
            </article>

            <article className="meaning-card meaning-card-zenika">
              <div className="meaning-header">
                <strong>ZENIKA</strong>
              </div>
              <span>Balanced modern formulation</span>
            </article>
          </div>

          <p className="concept-wordmark-caption">
            Rooted in nature. Refined through science. Made for everyday wellness.
          </p>
        </div>
      </div>
    </section>
  )
}

export function BrandMarqueeSection() {
  return (
    <section className="brand-marquee-section" aria-label="Phytozenika wellness qualities">
      <div className="brand-marquee-window">
        <div className="brand-marquee-track">
          <div className="brand-marquee-item">
            <span>Heart</span><i>✦</i><span>Immune</span><i>✦</i><span>Glow</span><i>✦</i><span>Digestion</span><i>✦</i><span>Strength</span><i>✦</i><span>Endurance</span><i>✦</i><span>Fitness</span><i>✦</i><span>Calmness</span><i>✦</i>
          </div>
          <div className="brand-marquee-item" aria-hidden="true">
            <span>Heart</span><i>✦</i><span>Immune</span><i>✦</i><span>Glow</span><i>✦</i><span>Digestion</span><i>✦</i><span>Strength</span><i>✦</i><span>Endurance</span><i>✦</i><span>Fitness</span><i>✦</i><span>Calmness</span><i>✦</i>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <>
      <PhilosophySection />
      <BrandMeaningSection />
    </>
  )
}

export default WhyChooseUs
