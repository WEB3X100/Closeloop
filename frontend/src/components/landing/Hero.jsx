import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, PlayCircle, Mic, FileText, Video, Star } from "lucide-react";
import { CalendlyModal } from "./CalendlyModal";

export function Hero() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#020817]">
      
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 opacity-30"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            
          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-full pl-2 pr-5 py-1.5 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-xl shadow-emerald-900/20 group hover:bg-white/10 transition-colors cursor-default">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-[#020817] overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover"/>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
                <div className="flex">
                    {[1,2,3,4,5].map(s => <Star key={s} size={12} className="fill-emerald-400 text-emerald-400" />)}
                </div>
                <span className="text-sm font-medium text-slate-200">
                <span className="text-white font-bold">4.9/5</span> from 127+ Agencies
                </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 drop-shadow-2xl">
            Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">3-5X More Appointments</span><br className="hidden md:block"/> Without Making a Single Call
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Tired of losing deals to voicemail? Stop manual follow-ups. Our AI calls your leads 3-5x until contact, handles objections, and books appointments automatically.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <a href="#demo" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#020817] text-lg font-bold px-10 py-5 rounded-full transition-all duration-200 shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] transform hover:-translate-y-1">
              Book Your Free Demo <ArrowRight className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm border border-white/10 text-lg font-medium px-10 py-5 rounded-full transition-all duration-200 hover:border-white/20 cursor-pointer"
            >
              <PlayCircle className="h-5 w-5 text-emerald-400" /> See How It Works
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base font-medium text-slate-400 animate-in fade-in duration-700 delay-500 mb-20">
            <span className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/5"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> Custom implementation</span>
            <span className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/5"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> Live in 7 business days</span>
            <span className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/5"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> White-glove setup included</span>
          </div>

          {/* Product Trio Cards - Highlighted Feature Set */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
             {/* Card 1: Voice Agent */}
             <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-left hover:bg-[#1e293b] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 group shadow-lg">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300 border border-emerald-500/20">
                    <Mic size={28} />
                </div>
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-emerald-400 transition-colors">Voice Agent</h3>
                <p className="text-slate-400 text-base leading-relaxed">
                    Calls leads within 2 mins. Qualifies intent, handles objections, and live-transfers warm prospects.
                </p>
             </div>

             {/* Card 2: AI Content Machine */}
             <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-left hover:bg-[#1e293b] transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 group shadow-lg">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300 border border-purple-500/20">
                    <Video size={28} />
                </div>
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-purple-400 transition-colors">AI Content Machine</h3>
                <p className="text-slate-400 text-base leading-relaxed">
                    Auto-generates social reels & walkthroughs from listing photos. Viral-ready content in seconds.
                </p>
             </div>

             {/* Card 3: AI Brochure Generator */}
             <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-left hover:bg-[#1e293b] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 group shadow-lg">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-500/20">
                    <FileText size={28} />
                </div>
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-blue-400 transition-colors">Brochure Generator</h3>
                <p className="text-slate-400 text-base leading-relaxed">
                    Instantly creates branded PDFs with market comps & neighborhood stats. Sent automatically to leads.
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* Calendly Modal */}
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </section>
  );
}
