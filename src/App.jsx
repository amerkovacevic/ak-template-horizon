import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Statistics from './components/Statistics'
import QualityTrust from './components/QualityTrust'
import ServiceQuality from './components/ServiceQuality'
import TrustedService from './components/TrustedService'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Statistics />
      <QualityTrust />
      <ServiceQuality />
      <TrustedService />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App

