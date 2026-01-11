import React from 'react';
import { PhoneOff, Clock, TrendingDown, Lightbulb } from "lucide-react";

export function ProblemAgitation() {
  const pains = [
    {
      icon: PhoneOff,
      title: "67% Never Get Called Back",
      desc: "You're in showings all day. 50-100 leads/month is overwhelming. After 3 voicemails, you give up. Your leads go cold."
    },
    {
      icon: Clock,
      title: "15-20 Hours Lost Weekly",
      desc: "Manual calling, voicemail tag, data entry, and follow-up spreadsheets eat your entire evening. No time for family or prospecting."
    },
    {
      icon: TrendingDown,
      title: "Competitors Beat You",
      desc: "While you're leaving voicemail #3 for lead #1, your competitor's AI already booked lead #27 for a showing tomorrow morning."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            You're Losing <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">$47,000</span> Every Year to Leads That Go to Voicemail
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {pains.map((pain, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 text-center hover:bg-slate-800/70 hover:border-red-500/30 hover:-translate-y-1 transition-all duration-300 group shadow-xl">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-red-400 border border-red-500/20 group-hover:scale-110 transition-transform duration-300">
                <pain.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{pain.title}</h3>
              <p className="text-slate-400 leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center border-t border-slate-700/50 pt-12 max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-8">
            SOURCES: NAR 2024 Study | McKinsey Real Estate Report | Industry Benchmark Data
          </p>
          <div className="inline-flex items-center gap-4 bg-emerald-500/10 text-emerald-300 px-8 py-5 rounded-full font-medium border border-emerald-500/20 backdrop-blur-sm shadow-lg hover:bg-emerald-500/15 transition-colors group">
            <Lightbulb className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="text-lg">What if every lead got called back in 3 minutes instead of 3 days?</span>
          </div>
        </div>
      </div>
    </section>
  );
}
