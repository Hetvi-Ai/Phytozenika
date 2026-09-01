import { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = [
  'Wellness',
  "Women's Health",
  "Men's Health",
  'Kids Nutrition',
  'Senior Health',
  'Sports Nutrition',
]

const concerns = [
  'Skin Care',
  'Immunity',
  'Metabolic',
  'Bone,Joint & Muscle',
  'Brain & Sleep',
  'Kidney & Urinary',
  'Cardiovascular',
  'Respiratory',
]

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="contact-modal" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close contact form">
          ×
        </button>

        <div className="modal-header">
          <h3 id="modal-title">Get in touch with us</h3>
        </div>

        <form
          className="contact-form modal-form"
          action="https://formsubmit.co/hello@phytozenika.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="form-row">
            <label>
              <span>Full Name *</span>
              <input type="text" name="fullName" placeholder="Full Name" required />
            </label>

            <label>
              <span>Your Email *</span>
              <input type="email" name="email" placeholder="Email" required />
            </label>
          </div>

          <div className="form-row">
            <label>
              <span>Query Type *</span>
              <select name="queryType" defaultValue="" required>
                <option value="" disabled>
                  —Please choose an option—
                </option>
                <option value="Product Inquiry">Product Inquiry</option>
                <option value="Support">Support</option>
                <option value="Feedback">Feedback</option>
                <option value="Partnership">Partnership</option>
              </select>
            </label>

            <label>
              <span>Mobile Number *</span>
              <input type="tel" name="mobile" placeholder="Mobile Number" required />
            </label>
          </div>

          <div className="form-row">
            <label>
              <span>City *</span>
              <input type="text" name="city" placeholder="City" required />
            </label>

            <label>
              <span>District *</span>
              <input type="text" name="district" placeholder="District" required />
            </label>
          </div>

          <div className="form-row">
            <label>
              <span>State *</span>
              <input type="text" name="state" placeholder="State" required />
            </label>

            <label>
              <span>Country *</span>
              <select name="country" defaultValue="" required>
                <option value="" disabled>
                  —Please choose an option—
                </option>
                <option value="India">India</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>

          <div className="form-row">
            <label>
              <span>Profession *</span>
              <select name="profession" defaultValue="" required>
                <option value="" disabled>
                  Select Profession
                </option>
                <option value="Doctor">Doctor</option>
                <option value="Business Owner">Business Owner</option>
                <option value="Student">Student</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label>
              <span>Purpose *</span>
              <input type="text" name="purpose" placeholder="Purpose" required />
            </label>
          </div>

          <label className="full-width">
            <span>Additional Information</span>
            <textarea name="message" rows="5" placeholder="Additional Information"></textarea>
          </label>

          <div className="contact-details-inline">
            <div>
              <span className="detail-label">Phone:</span>
              <span>+91 98240 00210</span>
            </div>
            <div>
              <span className="detail-label">Address:</span>
              <span>
                3rd Floor, 301 D/E, Ananta Trendz, Near Narayan Garden Society,
                Gotri-Vuda Road, Gotri, Vadodara-390021, Gujarat (India)
              </span>
            </div>
          </div>

          <button type="submit" className="submit-button">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  )
}

function Navbar({ contactOpen = false, onContactOpen = () => {} }) {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <>
      <header className="topbar">
        <div className="container nav-wrap">
          <Link to="/" className="brand-block" aria-label="REGEN PHYTOZENIKA Home">
            <span className="brand-text">REGEN PHYTOZENIKA</span>
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/Science" className="nav-link">Science</Link>

            <div className="nav-dropdown">
              <button
                type="button"
                className={`nav-trigger ${openMenu === 'category' ? 'active' : ''}`}
                onClick={() =>
                  setOpenMenu((current) =>
                    current === 'category' ? null : 'category',
                  )
                }
                aria-expanded={openMenu === 'category'}
                aria-haspopup="true"
              >
                Our products
                <span aria-hidden="true">▾</span>
              </button>

              {openMenu === 'category' && (
                <div className="dropdown-menu">
                  {categories.map((item) => (
                    <a
                      key={item}
                      href="#products"
                      className="dropdown-item"
                      onClick={() => setOpenMenu(null)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="nav-dropdown">
              <button
                type="button"
                className={`nav-trigger ${openMenu === 'concern' ? 'active' : ''}`}
                onClick={() =>
                  setOpenMenu((current) =>
                    current === 'concern' ? null : 'concern',
                  )
                }
                aria-expanded={openMenu === 'concern'}
                aria-haspopup="true"
              >
                Range of Products
                <span aria-hidden="true">▾</span>
              </button>

              {openMenu === 'concern' && (
                <div className="dropdown-menu">
                  {concerns.map((item) => (
                    <a
                      key={item}
                      href="#products"
                      className="dropdown-item"
                      onClick={() => setOpenMenu(null)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#blog" className="nav-link">Blog</a>
            <button
              type="button"
              className="nav-trigger nav-contact-button"
              onClick={() => onContactOpen(true)}
            >
              Contact
            </button>
          </nav>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileNavOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileNavOpen && (
          <div
            style={{
              background: '#ffffff',
              borderTop: '1px solid var(--border-subtle)',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <Link to="/" onClick={() => setMobileNavOpen(false)} style={{ padding: '8px 0', fontWeight: 600 }}>
              Home
            </Link>
            <Link to="/about" onClick={() => setMobileNavOpen(false)} style={{ padding: '8px 0', fontWeight: 600 }}>
              About Us
            </Link>
            <Link to="/Science" onClick={() => setMobileNavOpen(false)} style={{ padding: '8px 0', fontWeight: 600 }}>
              Science
            </Link>
            <a href="#products" onClick={() => setMobileNavOpen(false)} style={{ padding: '8px 0', fontWeight: 600 }}>
              Our products
            </a>
            <a href="#blog" onClick={() => setMobileNavOpen(false)} style={{ padding: '8px 0', fontWeight: 600 }}>
              Blog
            </a>
            <button
              type="button"
              className="primary-btn"
              style={{ marginTop: '8px', textAlign: 'center' }}
              onClick={() => {
                setMobileNavOpen(false)
                onContactOpen(true)
              }}
            >
              Contact
            </button>
          </div>
        )}
      </header>

      <ContactModal isOpen={contactOpen} onClose={() => onContactOpen(false)} />
    </>
  )
}

export default Navbar
