import React from 'react';
import { Star, Play } from "lucide-react";
import { MOCK_TESTIMONIALS } from '../../lib/mock';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Real Agencies, Real Results</h2>
          <p className="text-xl text-slate-600">See how top producing teams are automating their follow-up.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {MOCK_TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {/* Media Header */}
              <div className="relative mb-6 rounded-xl overflow-hidden aspect-video bg-slate-100 group cursor-pointer">
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {testimonial.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play fill="black" size={24} />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <blockquote className="text-lg font-medium text-slate-800 mb-6 flex-1 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-slate-100 pt-6 mt-auto">
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500 mb-3">{testimonial.role}, {testimonial.agency}</div>
                  <div className="inline-block bg-emerald-50 text-emerald-700 text-sm font-bold px-4 py-1.5 rounded-full border border-emerald-100">
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
