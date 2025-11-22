import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { services } from '../data'

export default function TrustedService() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Trusted service, for your various needs.
            </h2>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary mt-6 inline-flex items-center gap-2 group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 hover:border-accent group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl font-bold text-accent">
                    {service.number}
                  </span>
                  <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  {service.description}
                </p>
                <button className="text-accent font-semibold text-sm hover:underline">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop&q=80"
            alt="Solar panel installation"
            className="w-full h-[500px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}

