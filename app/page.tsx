import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './section/Hero'
import Footer from './section/Footer'

import "./globals.css";
import Pricing from './pricing/page';

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Pricing />
      <Footer />
    </div>
  )
}

export default page