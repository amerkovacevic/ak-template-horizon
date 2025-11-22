import { MapPin, Clock, Phone, Mail } from 'lucide-react'

function MapHours() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-4">
            Visit <span className="font-semibold">Us</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="bg-neutral-100 rounded-3xl overflow-hidden shadow-sm h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184133388887!2d-73.98811768459418!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
          
          {/* Hours & Contact */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-accent-yellow" />
                <h3 className="text-2xl font-semibold text-neutral-800">Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                  <span className="text-neutral-600">Monday - Friday</span>
                  <span className="font-medium text-neutral-800">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                  <span className="text-neutral-600">Saturday</span>
                  <span className="font-medium text-neutral-800">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                  <span className="text-neutral-600">Sunday</span>
                  <span className="font-medium text-neutral-800">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-accent-yellow" />
                <h3 className="text-2xl font-semibold text-neutral-800">Location</h3>
              </div>
              <p className="text-neutral-600 mb-6">
                123 Beauty Street<br />
                New York, NY 10001
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-neutral-700 hover:text-accent-yellow transition-smooth"
                >
                  <Phone className="w-5 h-5" />
                  <span>(123) 456-7890</span>
                </a>
                <a
                  href="mailto:hello@horizonsalon.com"
                  className="flex items-center gap-3 text-neutral-700 hover:text-accent-yellow transition-smooth"
                >
                  <Mail className="w-5 h-5" />
                  <span>hello@horizonsalon.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapHours

