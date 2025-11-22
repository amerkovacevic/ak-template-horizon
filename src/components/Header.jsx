import { useState, useEffect } from 'react'
import { Menu, X, Plus } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-neutral-200 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Plus className="w-8 h-8 text-accent" />
            <span className={`text-2xl font-bold ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
              Horizon Energy
            </span>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            <button
              onClick={() => scrollToSection('home')}
              className={`transition-colors font-medium ${
                isScrolled ? 'text-neutral-700 hover:text-accent' : 'text-white hover:text-accent-light'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors font-medium ${
                isScrolled ? 'text-neutral-700 hover:text-accent' : 'text-white hover:text-accent-light'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className={`transition-colors font-medium ${
                isScrolled ? 'text-neutral-700 hover:text-accent' : 'text-white hover:text-accent-light'
              }`}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`transition-colors font-medium ${
                isScrolled ? 'text-neutral-700 hover:text-accent' : 'text-white hover:text-accent-light'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors font-medium ${
                isScrolled ? 'text-neutral-700 hover:text-accent' : 'text-white hover:text-accent-light'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              className={`transition-colors font-medium ${
                isScrolled ? 'text-neutral-700 hover:text-accent' : 'text-white hover:text-accent-light'
              }`}
            >
              Log in
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Get in touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden ${isScrolled ? 'text-neutral-900' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-slide-down bg-white rounded-lg p-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-neutral-700 hover:text-accent transition-colors py-2 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-neutral-700 hover:text-accent transition-colors py-2 font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left text-neutral-700 hover:text-accent transition-colors py-2 font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-neutral-700 hover:text-accent transition-colors py-2 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-neutral-700 hover:text-accent transition-colors py-2 font-medium"
            >
              Contact
            </button>
            <button
              className="block w-full text-left text-neutral-700 hover:text-accent transition-colors py-2 font-medium"
            >
              Log in
            </button>
            <button
              onClick={() => {
                scrollToSection('contact')
                setIsMenuOpen(false)
              }}
              className="btn-primary w-full"
            >
              Get in touch
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

