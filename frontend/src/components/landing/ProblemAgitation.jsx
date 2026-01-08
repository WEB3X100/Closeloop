import React from 'react';
import { PhoneOff, Clock, TrendingDown } from "lucide-react";

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
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            You're Losing <span className="text-red-600">$47,000</span> Every Year to Leads That Go to Voicemail
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pains.map((pain, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-red-100/50 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
                <pain.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{pain.title}</h3>
              <p className="text-slate-600 leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center border-t border-slate-100 pt-10 max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-8">
            SOURCES: NAR 2024 Study | McKinsey Real Estate Report | Industry Benchmark Data
          </p>
          <div className="inline-flex items-center gap-4 bg-emerald-50 text-emerald-900 px-8 py-4 rounded-full font-medium border border-emerald-100 shadow-sm">
            <span className="text-2xl">💡</span>
            <span className="text-lg">What if every lead got called back in 3 minutes instead of 3 days?</span>
          </div>
        </div>
      </div>
    </section>
  );
}
