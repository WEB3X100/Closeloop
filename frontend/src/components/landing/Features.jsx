import React from 'react';
import { ArrowRight, Bot, FileText, Video } from "lucide-react";
import { Button } from "../ui/button";

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
    <section id="features" className="py-24 bg-section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-green-600 font-semibold tracking-wider text-sm uppercase mb-3 block">The Solution</span>
          <h2 className="heading-2">Your Custom AI System <br/> Implemented In 7 Days</h2>
        </div>

        <div className="flex flex-col gap-24">
          {features.map((feature, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-6">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-700 mb-2">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-primary-custom">{feature.headline}</h3>
                <p className="body-large text-text-secondary">{feature.desc}</p>
                
                <div className="bg-white border-l-4 border-green-500 p-4 rounded-r-lg shadow-sm">
                  <p className="font-semibold text-text-primary">Proof Point: <span className="text-green-700">{feature.stat}</span></p>
                </div>
                
                <a href={feature.link} className="inline-flex items-center text-green-700 font-semibold hover:text-green-800 group">
                  Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border aspect-[4/3] group">
                  <div className="absolute inset-0 bg-green-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Floating UI Element Mock */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <feature.icon size={20} />
                        </div>
                        <div>
                            <div className="font-semibold text-sm">{feature.title}</div>
                            <div className="text-xs text-muted-foreground">Status: Active & Converting</div>
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
