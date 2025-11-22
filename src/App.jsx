import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import StylistSpotlight from './components/StylistSpotlight'
import ServiceMenu from './components/ServiceMenu'
import Testimonials from './components/Testimonials'
import MapHours from './components/MapHours'
import BookingModal from './components/BookingModal'
import StickyBookingCTA from './components/StickyBookingCTA'

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedServices, setSelectedServices] = useState([])

  const handleBookNow = () => {
    setIsBookingModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsBookingModalOpen(false)
  }

  const handleAddToQuote = (serviceId) => {
    setSelectedServices(prev => {
      if (prev.includes(serviceId)) {
        return prev.filter(id => id !== serviceId)
      }
      return [...prev, serviceId]
    })
  }

  return (
    <div className="min-h-screen">
      <Header onBookNow={handleBookNow} />
      <Hero onBookNow={handleBookNow} />
      <StylistSpotlight />
      <ServiceMenu 
        selectedServices={selectedServices}
        onAddToQuote={handleAddToQuote}
      />
      <Testimonials />
      <MapHours />
      <StickyBookingCTA onBookNow={handleBookNow} />
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={handleCloseModal}
        selectedServices={selectedServices}
      />
    </div>
  )
}

export default App

