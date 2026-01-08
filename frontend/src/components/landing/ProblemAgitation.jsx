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
          <h2 className="heading-2 mb-6">
            You're Losing <span className="text-red-500">$47,000</span> Every Year to Leads That Go to Voicemail
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pains.map((pain, idx) => (
            <div key={idx} className="bg-red-50/50 rounded-2xl p-8 border border-red-100 text-center hover:bg-red-50 transition-colors">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
                <pain.icon size={32} />
              </div>
              <h3 className="heading-3 mb-4">{pain.title}</h3>
              <p className="body-medium text-text-secondary">{pain.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center border-t border-border pt-8 max-w-4xl mx-auto">
          <p className="text-sm text-text-muted font-medium mb-8">
            SOURCES: NAR 2024 Study | McKinsey Real Estate Report | Industry Benchmark Data
          </p>
          <div className="inline-flex items-center gap-4 bg-green-50 text-green-900 px-6 py-3 rounded-full font-semibold border border-green-200">
            <span>💡 Transition:</span>
            What if every lead got called back in 3 minutes instead of 3 days?
          </div>
        </div>
      </div>
    </section>
  );
}
