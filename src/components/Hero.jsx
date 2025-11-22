import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&h=1080&fit=crop&q=80"
          alt="Wind turbines in green field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/60 via-accent-dark/50 to-neutral-900/70"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-30 container-custom px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Headline and CTAs */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-xl md:text-2xl text-white/90 font-medium drop-shadow-lg">
                #1 Energy provider in the world
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl leading-tight">
                New Energy for the Future
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-accent hover:bg-neutral-50 font-semibold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg inline-flex items-center gap-2 group"
              >
                Get in touch
                <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-accent-light font-semibold py-3 px-8 inline-flex items-center gap-2 group transition-colors"
              >
                Our services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Side - Floating Project Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group">
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop&q=80"
                  alt="Wind turbine close-up"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center justify-between text-white">
                <span className="font-semibold text-lg">Discover Our Recent Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scrollable Text Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-accent-dark/95 text-white py-3 overflow-hidden z-40">
        <div className="flex whitespace-nowrap" style={{ width: '200%' }}>
          <div className="flex animate-scroll" style={{ width: '100%' }}>
            <span className="text-lg font-medium mx-8">Renewable Energy Solutions</span>
            <span className="text-lg font-medium mx-8">•</span>
            <span className="text-lg font-medium mx-8">Solar Power Systems</span>
            <span className="text-lg font-medium mx-8">•</span>
            <span className="text-lg font-medium mx-8">Wind Energy Generation</span>
            <span className="text-lg font-medium mx-8">•</span>
            <span className="text-lg font-medium mx-8">Sustainable Future</span>
            <span className="text-lg font-medium mx-8">•</span>
            <span className="text-lg font-medium mx-8">Clean Energy Technology</span>
            <span className="text-lg font-medium mx-8">•</span>
          </div>
          <div className="flex animate-scroll" style={{ width: '100%' }}>
            <span className="text-lg font-medium mx-8">Renewable Energy Solutions</span>
            <span className="text-lg font-medium mx-8">•</span>
            <span className="text-lg font-medium mx-8">Solar Power Systems</span>
            <span className="text-lg font-medium mx-8">•</span>
            <span className="text-lg font-medium mx-8">Wind Energy Generation</span>
            <span className="text-lg font-medium mx-8">•</span>
            <span className="text-lg font-medium mx-8">Sustainable Future</span>
            <span className="text-lg font-medium mx-8">•</span>
            <span className="text-lg font-medium mx-8">Clean Energy Technology</span>
            <span className="text-lg font-medium mx-8">•</span>
          </div>
        </div>
      </div>
    </section>
  )
}

