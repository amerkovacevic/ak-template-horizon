import { Calendar } from 'lucide-react'

function Hero({ onBookNow }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 px-4 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-light text-neutral-800 mb-6 leading-tight">
          Welcome to <span className="font-semibold">Horizon Salon</span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-2xl mx-auto">
          Where style meets expertise. Book your appointment and experience the difference.
        </p>
        <button
          onClick={onBookNow}
          className="group relative inline-flex items-center gap-3 bg-accent-yellow hover:bg-accent-yellow-dark text-neutral-900 font-semibold px-8 py-4 rounded-full text-lg transition-smooth shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <Calendar className="w-5 h-5" />
          <span>Book Now</span>
          <div className="absolute inset-0 rounded-full bg-accent-yellow-dark opacity-0 group-hover:opacity-20 transition-smooth"></div>
        </button>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm animate-slide-up">
            <div className="text-3xl font-bold text-accent-yellow mb-2">10+</div>
            <div className="text-neutral-600">Years Experience</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold text-accent-yellow mb-2">5000+</div>
            <div className="text-neutral-600">Happy Clients</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-accent-yellow mb-2">4.9★</div>
            <div className="text-neutral-600">Average Rating</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

