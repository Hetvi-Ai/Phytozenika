function Contact() {
  return (
    <section id="contact" className="about-section" style={{ background: 'var(--bg-surface)' }} aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">Direct Communication</span>
          <h2 id="contact-heading">Connect with Phytozenika Medical &amp; Research Team</h2>
          <p>
            Submit your clinical inquiry, product dossier request, or distribution proposal.
            Our medical specialists and formulation team respond within 24 hours.
          </p>
        </div>

        <div style={{ maxWidth: '780px', margin: '0 auto', background: 'var(--bg-page)', padding: '36px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-medium)', boxShadow: 'var(--shadow-md)' }}>
          <form
            className="contact-form"
            action="https://formsubmit.co/hello@phytozenika.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="form-row">
              <label>
                <span>Full Name *</span>
                <input type="text" name="fullName" placeholder="Dr. / Mr. / Ms. Full Name" required />
              </label>

              <label>
                <span>Email Address *</span>
                <input type="email" name="email" placeholder="name@example.com" required />
              </label>
            </div>

            <div className="form-row">
              <label>
                <span>Query Type *</span>
                <select name="queryType" defaultValue="" required>
                  <option value="" disabled>Select inquiry type</option>
                  <option value="Nutraceutical Formulation Inquiry">Nutraceutical Formulation Inquiry</option>
                  <option value="Clinical Dossier Request">Clinical Dossier Request</option>
                  <option value="Distribution & Partnership">Distribution &amp; Partnership</option>
                  <option value="Doctor & Vaidya Consultation">Doctor &amp; Vaidya Consultation</option>
                  <option value="General Support">General Support</option>
                </select>
              </label>

              <label>
                <span>Mobile Number *</span>
                <input type="tel" name="mobile" placeholder="+91 98765 43210" required />
              </label>
            </div>

            <div className="form-row">
              <label>
                <span>Profession *</span>
                <select name="profession" defaultValue="" required>
                  <option value="" disabled>Select Profession</option>
                  <option value="Healthcare Professional / Doctor">Healthcare Professional / Doctor</option>
                  <option value="Ayurvedic Vaidya">Ayurvedic Vaidya</option>
                  <option value="Nutraceutical Distributor">Nutraceutical Distributor</option>
                  <option value="Researcher / Scientist">Researcher / Scientist</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label>
                <span>City &amp; State *</span>
                <input type="text" name="cityState" placeholder="e.g. Vadodara, Gujarat" required />
              </label>
            </div>

            <label className="full-width">
              <span>Inquiry Details</span>
              <textarea
                name="message"
                rows="4"
                placeholder="Share your inquiry or requirement..."
              ></textarea>
            </label>

            <div className="contact-details-inline">
              <div>
                <span className="detail-label">Helpline:</span>
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
              Submit Clinical Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
