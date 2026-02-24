import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './section/Hero'
import Footer from './section/Footer'
import Pricing from './section/Pricing'
import "./globals.css";

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