import { useState } from 'react'
import { X, Calendar, Clock, User, Phone, Mail, Check } from 'lucide-react'
import { services } from '../data'

function BookingModal({ isOpen, onClose, selectedServices }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: '',
  })

  const selectedServicesData = services.filter(s => selectedServices.includes(s.id))
  const totalPrice = selectedServicesData.reduce((sum, service) => sum + service.price, 0)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Booking submitted:', { ...formData, services: selectedServicesData })
    alert('Booking request submitted! We will contact you shortly.')
    onClose()
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up">
        <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-neutral-800">Book Your Appointment</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-full transition-smooth"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {selectedServicesData.length > 0 && (
            <div className="mb-6 bg-accent-yellow/10 rounded-2xl p-4 border border-accent-yellow/20">
              <h3 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-accent-yellow" />
                Selected Services
              </h3>
              <div className="space-y-2 mb-3">
                {selectedServicesData.map(service => (
                  <div key={service.id} className="flex justify-between text-sm">
                    <span className="text-neutral-700">{service.name}</span>
                    <span className="font-medium">${service.price}</span>
                  </div>
                ))}
              </div>
              <div className="pt-3 border-t border-accent-yellow/20 flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-accent-yellow">${totalPrice}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/20 outline-none transition-smooth"
                placeholder="John Doe"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/20 outline-none transition-smooth"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/20 outline-none transition-smooth"
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/20 outline-none transition-smooth"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Preferred Time
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/20 outline-none transition-smooth"
                >
                  <option value="">Select time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Additional Notes (Optional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/20 outline-none transition-smooth resize-none"
                placeholder="Any special requests or information..."
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 rounded-xl border-2 border-neutral-300 text-neutral-700 font-medium hover:bg-neutral-50 transition-smooth"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 rounded-xl bg-accent-yellow hover:bg-accent-yellow-dark text-neutral-900 font-semibold transition-smooth shadow-lg hover:shadow-xl"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookingModal

