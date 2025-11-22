import { useState, useEffect } from 'react'
import { testimonials } from '../data'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-4">
            What Our <span className="font-semibold">Clients Say</span>
          </h2>
        </div>
        <div className="relative">
          <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 shadow-sm min-h-[300px] flex flex-col justify-center">
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent-yellow text-accent-yellow" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-neutral-700 text-center mb-6 italic leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>
            <p className="text-center text-neutral-600 font-semibold text-lg">
              — {testimonials[currentIndex].name}
            </p>
          </div>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-accent-yellow hover:text-neutral-900 transition-smooth"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-accent-yellow hover:text-neutral-900 transition-smooth"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-smooth ${
                index === currentIndex
                  ? 'w-8 bg-accent-yellow'
                  : 'w-2 bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

