import React from 'react';
import { ArrowRight, Bot, FileText, Video } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Bot,
      title: "AI Voice Lead Converter",
      headline: "AI Calls Your Leads Until They Pick Up",
      desc: "We build a custom Voice AI agent for your agency that calls new leads 3-5 times across 48 hours. Handles objections, answers questions about your listings, and books appointments.",
      stat: "47% contact rate (industry avg: 23%)",
      img: "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?auto=format&fit=crop&q=80&w=800",
      link: "#demo"
    },
    {
      icon: FileText,
      title: "AI Brochure Generator",
      headline: "Send Perfect Property Brochures in 10s",
      desc: "Upload listing photos. Our AI generates professional brochures with market comps, neighborhood data, financing options, and your branding. Automatically sent to every lead.",
      stat: "Listings with brochures get 3.2X more inquiries",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      link: "#demo"
    },
    {
      icon: Video,
      title: "AI Video Creator",
      headline: "Create Listing Videos Without Filming",
      desc: "Our AI turns your listing photos into engaging video walkthroughs with professional voiceover, music, and property highlights. Share on social, email, or SMS in minutes.",
      stat: "Video listings sell 68% faster",
      img: "https://images.unsplash.com/photo-1616092017315-e54c88662814?auto=format&fit=crop&q=80&w=800",
      link: "#demo"
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-emerald-600 font-bold tracking-wider text-sm uppercase mb-3 block">The Solution</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Your Custom AI System <br/> Implemented In 7 Days</h2>
        </div>

        <div className="flex flex-col gap-24">
          {features.map((feature, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 mb-2 shadow-sm">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">{feature.headline}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{feature.desc}</p>
                
                <div className="bg-white border-l-4 border-emerald-500 p-6 rounded-r-xl shadow-sm">
                  <p className="font-semibold text-slate-800 text-lg">Proof Point: <span className="text-emerald-700 font-bold">{feature.stat}</span></p>
                </div>
                
                <a href={feature.link} className="inline-flex items-center text-emerald-700 font-bold text-lg hover:text-emerald-800 group">
                  Learn More <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] group">
                  <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Floating UI Element Mock */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-lg z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                            <feature.icon size={24} />
                        </div>
                        <div>
                            <div className="font-bold text-slate-900">{feature.title}</div>
                            <div className="text-sm text-emerald-600 font-medium">Status: Active & Converting</div>
                        </div>
                     </div>
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
