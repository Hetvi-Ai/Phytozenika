import { useState } from 'react'

const categoryData = [
  {
    id: 'kids',
    label: 'Kids',
    subtitle: 'Junior Immunity & Cognitive Growth',
    tagline: 'Gentle botanical support for childhood immunity, focus, and everyday vitality.',
    image: '/categories/kids.png',
    // gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%)',
      gradient: 'linear-gradient(135deg, #f59e0b 0%)',
    badge: 'Junior Health',
    products: [
      {
        name: 'Wellness™ Advance Wellness Formula',
        tag: 'Daily Wellness',
        score: 'Naturally Balanced',
        actives: 'Botanical wellness blend',
        desc: 'A balanced everyday formula designed to support active, healthy living.',
        image: '/products/wellness-cutout.png',
        price: 'Rs.1,850.00',
      },
      {
        name: 'Immon™ Advance Immunity Formula',
        tag: 'Immune Support',
        score: 'Daily Defense',
        actives: 'Botanical immunity blend',
        desc: 'Daily support for natural resilience and everyday immune wellness.',
        image: '/products/immon-cutout.png',
        price: 'Rs.1,650.00',
      },
      {
        name: 'Cardiovascular™ Support Formula',
        tag: 'Heart Support',
        score: 'Daily Care',
        actives: 'Botanical cardiovascular blend',
        desc: 'Thoughtful support for cardiovascular wellness and active living.',
        image: '/products/Cardiovascular-cutout.png',
        price: 'Rs.2,050.00',
      },
      // {
      //   name: 'NeuroKids™ Memory & Concentration',
      //   tag: 'Nootropic Junior',
      //   score: '50% Bacosides',
      //   actives: 'Brahmi (Bacopa) + Shankhpushpi + Gotu Kola',
      //   desc: 'Nourishes brain neuroplasticity, enhances attention span during study, and encourages calm focus.',
      // },
      // {
      //   name: 'GrowthZen™ Vitality Syrup',
      //   tag: 'Pure & Organic',
      //   score: 'Zero Additives',
      //   actives: 'Organic Giloy + Tulsi + Choline',
      //   desc: 'Supports bone growth, appetite regulation, and natural daily vitality for active kids.',
      // },
    ],
  },
  {
    id: 'women',
    label: 'Women',
    subtitle: "Women's Health & Cellular Radiance",
    tagline: 'Botanical formulations supporting radiance, balance, and daily resilience.',
    // image: '/categories/women.jpg',
    image: '/categories/women.png',
    // gradient: 'linear-gradient(135deg, #ec4899 0%, #f59e0b 50%, #10b981 100%)',
    gradient: 'linear-gradient(135deg, #ec4899 0%)',
    badge: "Women's Wellness",
    products: [
      {
        name: 'Wellness™ Advance Wellness Formula',
        tag: 'Top Rated',
        score: 'Naturally Balanced',
        actives: 'Botanical wellness blend',
        desc: 'A balanced everyday formula for vitality, radiance, and consistent wellness.',
        image: '/products/immon-cutout.png',
        price: 'Rs.1,850.00',
      },
      {
        name: 'Wellness™ Advance Wellness Formula',
        tag: 'Daily Wellness',
        score: 'Naturally Balanced',
        actives: 'Botanical wellness blend',
        desc: 'A balanced everyday formula for vitality and daily care.',
        image: '/products/wellness-cutout.png',
        price: 'Rs.1,850.00',
      },
      {
        name: 'Immon™ Advance Immunity Formula',
        tag: 'Immune Support',
        score: 'Daily Defense',
        actives: 'Botanical immunity blend',
        desc: 'Daily support for natural resilience and immune wellness.',
        image: '/products/immon-cutout.png',
        price: 'Rs.1,650.00',
      },
      // {
      //   name: 'FemmeBalance™ Phytogen',
      //   tag: 'Hormonal Support',
      //   score: 'HPLC Standardized',
      //   actives: 'Shatavari + Dong Quai + Evening Primrose',
      //   desc: 'Targeted neuro-endocrine support designed to balance monthly fluctuations and sustain smooth vital energy.',
      // },
      // {
      //   name: 'CurcuZen™ Active Vitality',
      //   tag: 'Best Seller',
      //   score: '98.4% Bioactive',
      //   actives: '95% Standardized Curcuminoids + Bioperine®',
      //   desc: 'High-potency cellular resilience formula supporting healthy inflammation response and vital energy.',
      // },
    ],
  },
  {
    id: 'men',
    label: 'Men',
    subtitle: "Men's Performance & Adaptogenic Vigor",
    tagline: 'Adaptogenic botanical support for stamina, recovery, and resilient everyday performance.',
    // image: '/categories/men.jpg'
    image: '/categories/men.png',
    // gradient: 'linear-gradient(135deg, #3b82f6 0%, #10b981 50%, #f59e0b 100%)',
    gradient: 'linear-gradient(135deg, #3b82f6 0%)',
    badge: "Men's Health",
    products: [
      {
        name: 'Wellness™ Advance Wellness Formula',
        tag: 'Adaptogenic Support',
        score: 'Naturally Balanced',
        actives: 'Botanical wellness blend',
        desc: 'A balanced everyday formula for energy, strength, and active performance.',
        image: '/products/wellness-cutout.png',
        price: 'Rs.1,850.00',
      },
      {
        name: 'Cardiovascular™ Support Formula',
        tag: 'Heart Support',
        score: 'Daily Care',
        actives: 'Botanical cardiovascular blend',
        desc: 'Thoughtful support for cardiovascular wellness and active living.',
        image: '/products/Cardiovascular-cutout.png',
        price: 'Rs.2,050.00',
      },
      {
        name: 'Immon™ Advance Immunity Formula',
        tag: 'Immune Support',
        score: 'Daily Defense',
        actives: 'Botanical immunity blend',
        desc: 'Daily support for natural resilience and immune wellness.',
        image: '/products/immon-cutout.png',
        price: 'Rs.1,650.00',
      },
      // {
      //   name: 'TestoZen™ Vitality Matrix',
      //   tag: 'High Potency',
      //   score: 'Standardized Extracts',
      //   actives: 'Gokshura + Purified Shilajit + Safed Musli',
      //   desc: 'Supports cellular ATP synthesis, athletic endurance, and peak physical and mental vigor.',
      // },
      // { 
      //   name: 'NeuroZen™ Memory & Focus',
      //   tag: 'Nootropic Blend',
      //   score: '50% Bacosides',
      //   actives: 'Bacopa Monnieri + Shankhpushpi + Gotu Kola',
      //   desc: 'Cognitive enhancement blend for improved mental clarity under pressure and quick memory recall.',
      // },
    ],
  },
  {
    id: 'Senior Citizens',
    label: 'Senior Citizens',
    subtitle: 'Senior Longevity & Mobility Matrix',
    tagline: 'Thoughtful botanical support for mobility, circulation, and healthy aging.',
    // image: '/categories/senior-citizens.jpg',
    image: '/categories/senior-citizens.png',
    // gradient: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 50%, #10b981 100%)',
    gradient: 'linear-gradient(135deg, #98725F)',
    badge: 'Senior Health',
    products: [
      {
        name: 'Cardiovascular™ Support Formula',
        tag: 'Heart & Circulation',
        score: 'Daily Heart Support',
        actives: 'Botanical cardiovascular blend',
        desc: 'Thoughtful daily support for cardiovascular wellness and healthy active living.',
        image: '/products/Cardiovascular-cutout.png',
        price: 'Rs.2,050.00',
      },
      {
        name: 'Wellness™ Advance Wellness Formula',
        tag: 'Daily Wellness',
        score: 'Naturally Balanced',
        actives: 'Botanical wellness blend',
        desc: 'A balanced everyday formula for healthy active living.',
        image: '/products/wellness-cutout.png',
        price: 'Rs.1,850.00',
      },
      {
        name: 'Immon™ Advance Immunity Formula',
        tag: 'Immune Support',
        score: 'Daily Defense',
        actives: 'Botanical immunity blend',
        desc: 'Daily support for natural resilience and immune wellness.',
        image: '/products/immon-cutout.png',
        price: 'Rs.1,650.00',
      },
      // {
      //   name: 'CardioZen™ Heart Resilience',
      //   tag: 'Vascular Care',
      //   score: 'High Bioavailability',
      //   actives: 'Arjuna Phytosome + CoQ10 + Garlic Extract',
      //   desc: 'Promotes arterial elasticity, healthy blood flow dynamics, and optimal myocardial muscular stamina.',
      // },
      // {
      //   name: 'MetaboZen™ Glycemic Balance',
      //   tag: 'Metabolic Support',
      //   score: 'Standardized Gymnemic',
      //   actives: 'Gymnema Sylvestre + Vijaysar + Chromium',
      //   desc: 'Supports balanced insulin sensitivity, healthy glucose metabolism, and natural sustained energy.',
      // },
    ],
  },
  // {
    // id: 'kids',
    // label: 'Kids',
    // subtitle: 'Junior Immunity & Cognitive Growth',
    // tagline: 'Gentle, pure botanical formulations crafted to bolster childhood immune defense, memory recall, and active growth.',
    // image: '/categories/kids.jpg',
    // gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%)',
    // badge: 'Junior Health',
    // products: 
    // [
      // {
      //   name: 'JuniorShield™ Immune Defense',
      //   tag: 'Pediatric Formula',
      //   score: '100% Plant Extracts',
      //   actives: 'Elderberry + Indian Gooseberry (Amla) + Zinc',
      //   desc: 'Fortifies natural innate defense mechanisms, seasonal cold resilience, and healthy digestive flora.',
      // },
      // {
      //   name: 'NeuroKids™ Memory & Concentration',
      //   tag: 'Nootropic Junior',
      //   score: '50% Bacosides',
      //   actives: 'Brahmi (Bacopa) + Shankhpushpi + Gotu Kola',
      //   desc: 'Nourishes brain neuroplasticity, enhances attention span during study, and encourages calm focus.',
      // },
      // {
      //   name: 'GrowthZen™ Vitality Syrup',
      //   tag: 'Pure & Organic',
      //   score: 'Zero Additives',
      //   actives: 'Organic Giloy + Tulsi + Choline',
      //   desc: 'Supports bone growth, appetite regulation, and natural daily vitality for active kids.',
      // },
    // ],
  // },
]

function TargetedBestSellers({ onContactOpen = () => {} }) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)

  const activeCategory = categoryData[activeCategoryIndex]

  return (
    <section className="best-sellers-section" aria-labelledby="category-circle-heading">
      <div className="container">
        {/* Section Title */}
        <div className="category-circles-header">
          {/* <span className="category-eyebrow">TAILORED WELLNESS</span> */}
          {/* <h2 id="category-circle-heading" className="category-main-heading">Best Sellers</h2> */}
          {/* <span className="category-eyebrow">TAILORED WELLNESS</span> */}
          {/* <h2 id="category-circle-heading" className="category-main-heading">
            Best Sellers for Every Need
          </h2> */}
          {/* <p className="category-lead-text">
            Select a target group to explore specialized phytogenic formulations crafted for specific life stages.
          </p> */}
        </div>

        {/* Circular Avatar Category Selector Row - Matches Reference Screenshot Concept */}
        <div className="category-circles-row" role="tablist" aria-label="Target demographic categories">
          {categoryData.map((cat, index) => {
            const isActive = activeCategoryIndex === index
            return (
              <button
                type="button"
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`category-panel-${cat.id}`}
                className={`category-circle-item ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategoryIndex(index)}
              >
                <div
                  className="category-circle-ring"
                  style={{ background: cat.gradient }}
                >
                  <div className="category-circle-inner">
                    <img
                      src={cat.image}
                      alt={`Phytozenika ${cat.label}`}
                      className="category-circle-img"
                    />
                  </div>
                  {isActive && <span className="category-active-checkmark">✓</span>}
                </div>
                <span className="category-circle-label">{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Best Sellers displayed after the clickable circles */}
        <div
          id={`category-panel-${activeCategory.id}`}
          role="tabpanel"
          className="category-showcase-panel"
        >
          <h2 className="category-main-heading">Best Sellers</h2>

          {/* Product Cards Grid for Selected Category */}
          <div className="category-products-grid">
            {activeCategory.products.map((product) => (
              <article key={product.name} className="category-product-card">
                <div className="category-product-image-wrap">
                  <img src={product.image} alt={product.name} className="category-product-image" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TargetedBestSellers
