import { Link } from 'react-router-dom'

function Footer({ onContactOpen = () => {} }) {
  return (
    <footer className="site-footer">
      <div className="footer-grid container">
        <div className="footer-brand-block">
          <h3>Regen Phytozenika</h3>

          <p>
            Regenerating Solutions for Your Changing Needs.
            <br />
            Nature you trust. Science that delivers.
          </p>
        </div>

        <div className="footer-links-block">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#products">Products</a></li>
            <li><Link to="/about">About Us</Link></li>
            <li>
              <button
                type="button"
                className="footer-contact-link"
                onClick={() => onContactOpen(true)}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-contact-block">
          <h4>Find us</h4>
          <p>
            If you have any questions or need help, feel free to contact us for
            medical assistance.
          </p>
          <div className="footer-phone">☎ +91 9824000210</div>
          <div className="footer-address">
            Address: 3rd Floor, 301 D/E, Ananta Trendz, Near Narayan Garden Society,
            Gotri-Vuda Road, Gotri, Vadodara-390021, Gujarat (India)
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        Copyright © 2025 REGEN PHYTOZENIKA
      </div>
    </footer>
  )
}

export default Footer
