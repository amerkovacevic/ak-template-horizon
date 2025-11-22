import { useEffect, useState } from 'react'
import { Calendar, X } from 'lucide-react'

function StickyBookingCTA({ onBookNow }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      // Show after scrolling past the hero section
      if (scrollPosition > windowHeight * 0.5 && !isDismissed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border-2 border-accent-yellow/20 p-4 flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm font-semibold text-neutral-800 mb-1">
            Ready to book your appointment?
          </p>
          <p className="text-xs text-neutral-600">
            Click below to schedule with our expert stylists
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onBookNow}
            className="bg-accent-yellow hover:bg-accent-yellow-dark text-neutral-900 font-semibold px-6 py-3 rounded-xl transition-smooth shadow-lg hover:shadow-xl flex items-center gap-2 whitespace-nowrap"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Now</span>
          </button>
          <button
            onClick={handleDismiss}
            className="p-2 hover:bg-neutral-100 rounded-full transition-smooth"
            aria-label="Dismiss"
          >
            <X className="w-5 h-5 text-neutral-600" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default StickyBookingCTA

