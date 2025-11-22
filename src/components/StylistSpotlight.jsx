import { stylists } from '../data'
import { Scissors } from 'lucide-react'

function StylistSpotlight() {
  return (
    <section id="stylists" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-4">
            Meet Our <span className="font-semibold">Expert Stylists</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Our talented team is here to bring your vision to life
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stylists.map((stylist, index) => (
            <div
              key={stylist.id}
              className="bg-neutral-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-smooth transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  className="w-full h-full object-cover transition-smooth hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-semibold text-white mb-1">{stylist.name}</h3>
                  <p className="text-accent-yellow font-medium">{stylist.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-neutral-600 leading-relaxed">{stylist.bio}</p>
                <div className="mt-6 flex items-center gap-2 text-accent-yellow">
                  <Scissors className="w-5 h-5" />
                  <span className="text-sm font-medium">Available for bookings</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StylistSpotlight

