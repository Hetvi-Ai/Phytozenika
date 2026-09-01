const philosophyItems = [
  {
    title: 'Tradition',
    description: 'Ayurvedic principles and centuries of botanical knowledge.',
    icon: '🍃',
  },
  {
    title: 'Science',
    description: 'Modern evidence, pharmacognosy, nutrition, and biological understanding.',
    icon: '🧬',
  },
  {
    title: 'Precision',
    description: 'Standardized extracts, purposeful formulations, and responsible dosing.',
    icon: '💊',
  },
]

function WhyChooseUs() {
  return (
    <>
      <section id="why-us" className="why-section">
        <div className="container">
          <div className="section-heading philosophy-heading">
            <p className="section-tag">Our Philosophy</p>
            <h2>Nature has always been complex.</h2>
            <p>We bring three kinds of knowledge together to make wellness more thoughtful.</p>
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

      <section className="concept-section">
        <div className="container">
          <div className="concept-wordmark">
            <div className="concept-wordmark-main">PHYTOZENIKA</div>
            <div className="concept-wordmark-rule" />
            <div className="concept-wordmark-meaning">
              <article>
                <strong>PHYTO</strong>
                <span>Botanical intelligence</span>
              </article>
              <article>
                <strong>ZENIKA</strong>
                <span>Balanced modern formulation</span>
              </article>
            </div>
            <p className="concept-wordmark-caption">
              Rooted in nature. Refined through science. Made for everyday wellness.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs
