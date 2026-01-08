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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 mb-4">From Demo to First Appointment <br/> in 7 Business Days</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative bg-white pt-4">
                <div className="w-16 h-16 bg-white border-2 border-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 shadow-sm mx-auto md:mx-0 relative z-10">
                  <step.icon size={32} />
                  <div className="absolute -top-3 -right-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {step.day}
                  </div>
                </div>
                
                <h3 className="heading-3 mb-3">{step.title}</h3>
                <p className="body-medium text-text-secondary">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-green-50 rounded-2xl p-8 border border-green-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
                <h4 className="text-xl font-bold text-green-900 mb-2">📊 The CloseLoop Guarantee</h4>
                <p className="text-green-800">If you don't book at least 10 additional appointments in your first 30 days, we'll work for free until you do. No excuses.</p>
            </div>
            <a href="#demo" className="btn-green-primary whitespace-nowrap">Schedule Discovery Call →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
