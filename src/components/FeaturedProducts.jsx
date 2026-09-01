import { useState } from 'react'

const allProducts = [
  {
    name: 'CurcuZen™ Active Vitality',
    category: 'Wellness',
    concern: 'Immunity',
    tag: 'Best Seller',
    score: '98.4% Bioactive',
    actives: '95% Standardized Curcuminoids + Bioperine®',
    description: 'High-potency cellular resilience formula supporting healthy inflammation response, joint mobility, and vital energy.',
  },
  {
    name: 'AshwaBalance™ Adaptogen',
    category: "Men's Health",
    concern: 'Brain & Sleep',
    tag: 'Clinical Grade',
    score: '5% Withanolides',
    actives: 'KSM-66® Full Spectrum Ashwagandha',
    description: 'Targeted neuro-endocrine support designed to balance cortisol, elevate cognitive focus, and restore deep restorative sleep.',
  },
  {
    name: 'OsteoPhyto™ Joint Matrix',
    category: 'Senior Health',
    concern: 'Bone, Joint & Muscle',
    tag: 'Mobility Complex',
    score: '65% AKBA & Acids',
    actives: 'Boswellia Serrata + Hadjod (Cissus)',
    description: 'Accelerates collagen synthesis, preserves cartilage integrity, and relieves joint stiffness for active longevity.',
  },
  {
    name: 'RadiancePhyto™ Cell Renewal',
    category: "Women's Health",
    concern: 'Skin Care',
    tag: 'Glow Ritual',
    score: 'HPLC Tested',
    actives: 'Kumkumadi Extracts + Glutathione + Rosemary',
    description: 'Dual-action botanical antioxidant defense promoting cellular repair, collagen density, and luminous dermal hydration.',
  },
  {
    name: 'MetaboZen™ Glycemic Balance',
    category: 'Wellness',
    concern: 'Metabolic',
    tag: 'Metabolic Support',
    score: 'Standardized Gymnemic',
    actives: 'Gymnema Sylvestre + Vijaysar + Chromium',
    description: 'Supports balanced insulin sensitivity, healthy glucose metabolism, and natural sustained metabolic energy.',
  },
  {
    name: 'NeuroZen™ Memory & Focus',
    category: 'Sports Nutrition',
    concern: 'Brain & Sleep',
    tag: 'Nootropic Blend',
    score: '50% Bacosides',
    actives: 'Bacopa Monnieri + Shankhpushpi + Gotu Kola',
    description: 'Cognitive enhancement blend for improved synaptic plasticity, mental clarity under pressure, and memory recall.',
  },
]

const categories = [
  'All Categories',
  'Wellness',
  "Women's Health",
  "Men's Health",
  'Senior Health',
  'Sports Nutrition',
]

const concerns = [
  'All Concerns',
  'Immunity',
  'Brain & Sleep',
  'Bone, Joint & Muscle',
  'Skin Care',
  'Metabolic',
  'Cardiovascular',
  'Respiratory',
]

function FeaturedProducts({ onContactOpen = () => {} }) {
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [selectedConcern, setSelectedConcern] = useState('All Concerns')

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch = selectedCategory === 'All Categories' || product.category === selectedCategory
    const concernMatch = selectedConcern === 'All Concerns' || product.concern.includes(selectedConcern)
    return categoryMatch && concernMatch
  })

  return (
    <section id="products" className="products-section" aria-labelledby="products-title">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">Our Products</span>
          <h2 id="products-title">Scientifically Engineered for Everyday Transformation</h2>
          <p>
            Explore our specialized range of phytogenic formulations, manufactured under strict GMP
            guidelines and backed by HPLC standardized extracts.
          </p>
        </div>

        <div className="shop-grid">
          <div className="shop-panel">
            <h3>
              <span aria-hidden="true">🏷️</span> Filter by Category
            </h3>
            <div className="pill-grid">
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  className={`pill-item ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="shop-panel">
            <h3>
              <span aria-hidden="true">🎯</span> Filter by Therapeutic Concern
            </h3>
            <div className="pill-grid">
              {concerns.map((con) => (
                <button
                  type="button"
                  key={con}
                  className={`pill-item ${selectedConcern === con ? 'active' : ''}`}
                  onClick={() => setSelectedConcern(con)}
                >
                  {con}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <article key={product.name} className="product-card">
                <div className="product-top-row">
                  <span className="product-tag">{product.tag}</span>
                  <span className="product-score-badge">{product.score}</span>
                </div>

                <h3>{product.name}</h3>
                <p>{product.description}</p>

                <div className="product-actives-tag">
                  <strong>Key Phyto-Actives:</strong> {product.actives}
                </div>

                <button
                  type="button"
                  className="product-btn"
                  onClick={() => onContactOpen(true)}
                >
                  Inquire Now
                </button>
              </article>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0' }}>
              <p>No formulations found matching the selected filter combination.</p>
              <button
                type="button"
                className="btn-primary-emerald"
                onClick={() => {
                  setSelectedCategory('All Categories')
                  setSelectedConcern('All Concerns')
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
