import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import WhyChooseUs from '../WhyChooseUs.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <Navbar contactOpen={contactOpen} onContactOpen={setContactOpen} />
      <main className="page-shell">
        <Hero />
        <WhyChooseUs />
      </main>
      <Footer onContactOpen={setContactOpen} />
    </>
  )
}

export default Home
