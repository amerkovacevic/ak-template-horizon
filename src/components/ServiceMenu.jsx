import { useState } from 'react'
import { services } from '../data'
import { Clock, DollarSign, Plus, Check } from 'lucide-react'

function ServiceMenu({ selectedServices, onAddToQuote }) {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-4">
            Our <span className="font-semibold">Services</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Choose from our range of professional services. Add to your quote and book your appointment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const isSelected = selectedServices.includes(service.id)
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-smooth border-2 border-transparent hover:border-accent-yellow/30"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">{service.name}</h3>
                    <p className="text-sm text-neutral-600 mb-4">{service.description}</p>
                  </div>
                  <button
                    onClick={() => onAddToQuote(service.id)}
                    className={`ml-4 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-smooth ${
                      isSelected
                        ? 'bg-accent-yellow text-neutral-900'
                        : 'bg-neutral-100 text-neutral-600 hover:bg-accent-yellow hover:text-neutral-900'
                    }`}
                    aria-label={isSelected ? 'Remove from quote' : 'Add to quote'}
                  >
                    {isSelected ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-neutral-600">
                      <DollarSign className="w-4 h-4" />
                      <span className="text-2xl font-bold text-neutral-900">${service.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-500 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
                {isSelected && (
                  <div className="mt-4 pt-4 border-t border-accent-yellow/20">
                    <div className="flex items-center gap-2 text-accent-yellow text-sm font-medium">
                      <Check className="w-4 h-4" />
                      <span>Added to quote</span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
        {selectedServices.length > 0 && (
          <div className="mt-12 text-center">
            <div className="inline-block bg-accent-yellow/10 border-2 border-accent-yellow/30 rounded-2xl px-6 py-4">
              <p className="text-neutral-700 font-medium">
                {selectedServices.length} service{selectedServices.length !== 1 ? 's' : ''} selected
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ServiceMenu

