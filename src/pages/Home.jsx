import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import TargetedBestSellers from '../components/TargetedBestSellers.jsx'
import { BrandMarqueeSection } from '../WhyChooseUs.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <Navbar contactOpen={contactOpen} onContactOpen={setContactOpen} />
      <main className="page-shell">
        <Hero />
        <BrandMarqueeSection />
        <TargetedBestSellers onContactOpen={setContactOpen} />
      </main>
      <Footer onContactOpen={setContactOpen} />
    </>
  )
}

export default Home
