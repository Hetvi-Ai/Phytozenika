import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

function AboutPage() {
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar contactOpen={contactOpen} onContactOpen={setContactOpen} />
      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <h1 className="about-hero-title">About Phytozenika</h1>
            {/* <p className="about-hero-subtitle">
              Regenerating Solutions for Your Changing Needs
            </p> */}
          </div>
        </section>

        {/* Legacy / Heritage Section */}
        <section className="about-section">
          <div className="container">
            <div className="legacy-visual">
              <div className="legacy-icon-box">
                <img
                  className="about-intro-image"
                  src="/about%20us%20-%20hero.png"
                  alt="Botanical ingredients used in Phytozenika wellness research"
                />
                <span className="image-badge">Herbal Wisdom Meets Modern Science</span>
              </div>
              <div className="legacy-content">
                <p className="intro-kicker">OUR PURPOSE</p>
                <h2>Regen Phytozenika</h2>
                <p>
                    Regen Phytozenika is the human healthcare division of Regen Group, carrying forward a family legacy of Vaidyas while combining the timeless wisdom of Ayurveda with modern scientific excellence to deliver innovative, effective, and premium-quality nutraceutical and phytogenic healthcare solutions.
                </p>
                <p>
                    Backed by rich experience in delivering scientific excellence through cutting-edge nutraceutical and phytogenic solutions, we are now committed to delivering the same for human wellness.
                </p>
                <p className="intro-highlight">
                  Wellness is not just the absence of disease. It is the presence of balance, vitality, and energy for healthy living and longevity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ayurvedic Heritage, Scientific Innovation, Human Wellness Grid */}
        <section className="about-section about-mvv-section">
          <div className="container">
            <div className="mvv-grid">
              {/* Ayurvedic Heritage */}
              <div className="mvv-card ayurvedic-card-grid">
                <div className="mvv-icon">🌿</div>
                <h3>Ayurvedic Heritage</h3>
                <p>
                  Inspired by centuries of traditional wisdom and the legacy of vaidyas.
                </p>
              </div>

              {/* Scientific Innovation */}
              <div className="mvv-card scientific-innovation-card-grid">
                <div className="mvv-icon">🔬</div>
                <h3>Scientific Innovation</h3>
                <p>
                  Combining ancient knowledge with modern research and validation.
                </p>
              </div>

              {/* Human Wellness */}
              <div className="mvv-card human-wellness-card-grid">
                <div className="mvv-icon">🧘🏽‍♂️</div>
                <h3>Human Wellness</h3>
                <p>
                    Delivering safe,effective and premium-quality solutions for a healthier tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="about-section about-wisdom-section">
          <div className="container">
            <h2 className="section-title">Our Legacy</h2>
            <div className="wisdom-grid">
              <div className="wisdom-card">
                <div className="wisdom-number">01</div>
                <h4>Generations of Vaidyas</h4>
                <p>A legacy of hundreds of years of healing wisdom.</p>
              </div>
              <div className="wisdom-card">
                <div className="wisdom-number">02</div>
                <h4>Timeless Wisdom of Ayurveda</h4>
                <p>Ancient knowledge for holistic well-being. </p>
              </div>
              <div className="wisdom-card">
                <div className="wisdom-number">03</div>
                <h4>Scientific Innovation</h4>
                <p>Research, validation and modern science.</p>
              </div>
              <div className="wisdom-card">
                <div className="wisdom-number">04</div>
                <h4>Healthier Future</h4>
                <p>Empowering lives for generations to come.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Wellness Path */}
        <section className="about-section about-path-section">
          <div className="container">
            <div className="section-heading about-section-heading">
              <p className="section-tag">Our approach</p>
              <h2>Nature, knowledge, and care in balance.</h2>

              <p>Every Phytozenika solution follows a thoughtful path from botanical wisdom to everyday wellness.</p>
            </div>
            <div className="about-path-grid">
              <div className="about-path-step">
                <span>01</span>
                <div>
                  <h3>Discover</h3>
                  <p>We begin with traditional botanical knowledge and a clear understanding of human needs.</p>
                </div>
              </div>
              <div className="about-path-step">
                <span>02</span>
                <div>
                  <h3>Develop</h3>
                  <p>Modern research and careful formulation turn nature's potential into useful solutions.</p>
                </div>
              </div>
              <div className="about-path-step">
                <span>03</span>
                <div>
                  <h3>Support</h3>
                  <p>We help people build consistent routines for vitality, balance, and long-term health.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer onContactOpen={setContactOpen} />
    </>
  )
}

export default AboutPage
