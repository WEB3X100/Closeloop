import React from 'react';
import { Phone, Code2, Rocket } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      day: "Day 1",
      title: "Discovery Call",
      desc: "We audit your current lead flow, identify integration points with your CRM, and customize AI scripts for your market.",
      icon: Phone
    },
    {
      day: "Days 2-5",
      title: "Custom Build & Integration",
      desc: "Our team builds your AI agents, integrates with your CRM (Zillow, Follow Up Boss, etc.), and tests with sample leads.",
      icon: Code2
    },
    {
      day: "Days 6-7",
      title: "Go Live + Training",
      desc: "Launch your AI system, live training session for your team, and monitoring of first 50 calls together.",
      icon: Rocket
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">From Demo to First Appointment <br/> in 7 Business Days</h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative bg-white pt-4 group">
                <div className="w-20 h-20 bg-white border-2 border-slate-100 group-hover:border-emerald-500 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-emerald-500 mb-8 shadow-sm group-hover:shadow-lg transition-all duration-300 mx-auto md:mx-0 relative z-10">
                  <step.icon size={36} />
                  <div className="absolute -top-3 -right-3 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {step.day}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-emerald-900 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="flex-1 relative z-10">
                <h4 className="text-2xl font-bold text-white mb-2">📊 The CloseLoop Guarantee</h4>
                <p className="text-emerald-100 text-lg">If you don't book at least 10 additional appointments in your first 30 days, we'll work for free until you do. No excuses.</p>
            </div>
            <a href="#demo" className="relative z-10 bg-white text-emerald-900 hover:bg-emerald-50 font-bold px-8 py-4 rounded-full shadow-lg transition-colors whitespace-nowrap">Schedule Discovery Call →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
