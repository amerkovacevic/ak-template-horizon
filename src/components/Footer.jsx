import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sun, Facebook, Twitter, Instagram, Linkedin, Check } from 'lucide-react'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="contact" className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              It's time to support zero pollution, with renewable resources.
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-neutral-300">Experienced for more than 10 years</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-neutral-300">Support for the latest technology</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              By increasing the effectiveness and efficiency of electricity use, the use of renewable resources in every part helps us all.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-outline border-white text-white hover:bg-white hover:text-neutral-900"
            >
              Get in touch
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo and Copyright */}
            <div className="flex items-center gap-4">
              <Sun className="w-6 h-6 text-accent" />
              <span className="text-lg font-bold">Horizon Energy</span>
              <span className="text-neutral-500">© 2024 Horizon Energy Inc. All rights reserved.</span>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap items-center gap-6 text-neutral-400">
              <button
                onClick={() => scrollToSection('home')}
                className="hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="hover:text-white transition-colors"
              >
                About Us
              </button>
              <button className="hover:text-white transition-colors">
                Updates
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-white transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-6 border-t border-neutral-800 text-neutral-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

