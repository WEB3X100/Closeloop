import React from 'react';
import { Star, Play } from "lucide-react";
import { MOCK_TESTIMONIALS } from '../../lib/mock';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 mb-4">Real Agencies, Real Results</h2>
          <p className="body-large text-text-secondary">See how top producing teams are automating their follow-up.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {MOCK_TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-sm border border-border flex flex-col h-full hover:shadow-md transition-shadow">
              {/* Media Header */}
              <div className="relative mb-6 rounded-xl overflow-hidden aspect-video bg-gray-100 group cursor-pointer">
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {testimonial.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play fill="black" size={20} />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-lg font-medium text-primary-custom mb-4 flex-1">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-border pt-4 mt-auto">
                  <div className="font-bold text-primary-custom">{testimonial.name}</div>
                  <div className="text-sm text-text-secondary">{testimonial.role}, {testimonial.agency}</div>
                  <div className="mt-3 inline-block bg-green-50 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                    {testimonial.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
