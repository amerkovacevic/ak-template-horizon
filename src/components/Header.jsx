import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

function Header({ onBookNow }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer"
          >
            <h1 className="text-2xl font-semibold text-neutral-800">
              Horizon <span className="text-accent-yellow">Salon</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('stylists')}
              className="text-neutral-700 hover:text-accent-yellow transition-smooth font-medium"
            >
              Stylists
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-neutral-700 hover:text-accent-yellow transition-smooth font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-neutral-700 hover:text-accent-yellow transition-smooth font-medium"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-neutral-700 hover:text-accent-yellow transition-smooth font-medium"
            >
              Contact
            </button>
            <button
              onClick={onBookNow}
              className="bg-accent-yellow hover:bg-accent-yellow-dark text-neutral-900 font-semibold px-6 py-2 rounded-full transition-smooth shadow-lg hover:shadow-xl"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-800"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-slide-up">
            <button
              onClick={() => scrollToSection('stylists')}
              className="block w-full text-left text-neutral-700 hover:text-accent-yellow transition-smooth font-medium py-2"
            >
              Stylists
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-neutral-700 hover:text-accent-yellow transition-smooth font-medium py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-neutral-700 hover:text-accent-yellow transition-smooth font-medium py-2"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-neutral-700 hover:text-accent-yellow transition-smooth font-medium py-2"
            >
              Contact
            </button>
            <button
              onClick={onBookNow}
              className="w-full bg-accent-yellow hover:bg-accent-yellow-dark text-neutral-900 font-semibold px-6 py-3 rounded-full transition-smooth shadow-lg"
            >
              Book Now
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

