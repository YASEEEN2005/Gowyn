import React from 'react'
import Navbar from '../componets/Navbar'
import HeroBanner from '../componets/HeroBanner'
import WhyChooseUs from '../componets/WhyChooseUs'
import Experiences from '../componets/Experiences'
import Services from '../componets/Services'
import Gallery from '../componets/Gallery'
import Reviews from '../componets/Reviews'
import About from '../componets/About'
import Contact from '../componets/Contact'
import Footer from '../componets/Footer'

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      {/* <Experiences /> */}
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Reviews />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage
