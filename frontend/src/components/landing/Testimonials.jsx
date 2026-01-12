import React from 'react';
import { Star, Play } from "lucide-react";
import { MOCK_TESTIMONIALS } from '../../lib/mock';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background Effects - Multi-color mesh */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] -z-10 mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] -z-10 mix-blend-screen"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 font-bold tracking-wider text-sm uppercase mb-6 backdrop-blur-sm">
            Proven Results
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-emerald-100 mb-6 leading-tight">
            Real Agencies, Real Results
          </h2>
          <p className="text-xl text-slate-400">See how top producing teams are automating their follow-up.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {MOCK_TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-white/5 flex flex-col h-full hover:bg-slate-800/60 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-900/20 hover:-translate-y-2 transition-all duration-300 group">
              {/* Media Header */}
              <div className="relative mb-6 rounded-xl overflow-hidden aspect-video bg-slate-800/50 cursor-pointer border border-white/5 shadow-inner">
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                {testimonial.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform border border-white/20 group-hover:border-purple-400 group-hover:shadow-purple-500/50">
                      <Play fill="white" size={24} className="drop-shadow-lg" />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-purple-400 text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]" />
                  ))}
                </div>

                <blockquote className="text-lg font-medium text-slate-200 mb-6 flex-1 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="border-t border-white/5 pt-6 mt-auto">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-white text-lg">{testimonial.name}</div>
                    <img src={testimonial.avatar || `https://ui-avatars.com/api/?name=${testimonial.name}&background=random`} alt={testimonial.name} className="w-8 h-8 rounded-full ring-2 ring-purple-500/20" />
                  </div>
                  <div className="text-sm text-slate-400 mb-4">{testimonial.role}, {testimonial.agency}</div>
                  <div className="inline-block bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 text-emerald-400 text-sm font-bold px-4 py-2 rounded-lg border border-emerald-500/20 shadow-[0_0_15px_-3px_rgba(16,185,129,0.1)]">
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
