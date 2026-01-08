import React from 'react';
import { ArrowRight, CheckCircle2, PlayCircle, Phone, Calendar, MessageSquare } from "lucide-react";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="hero-section hero-gradient-bg overflow-hidden">
      <div className="container relative z-10 pt-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
            
          {/* Social Proof Badge */}
          <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-green-100 rounded-full px-4 py-1.5 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover"/>
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-primary-custom">
              ★★★★★ 4.9/5 from 127+ Agencies
            </span>
          </div>

          <h1 className="heading-1 mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Get 3-5X More Appointments <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
              Without Making a Single Call
            </span>
          </h1>

          <p className="hero-subtitle max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Tired of losing deals to voicemail? Stop manual follow-ups. Our AI calls your leads 3-5x until contact, handles objections, and books appointments automatically.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <a href="#demo" className="btn-green-primary w-full sm:w-auto text-lg px-8 py-4 h-auto shadow-lg shadow-green-200/50">
              Book Your Free Demo <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#video" className="btn-secondary w-full sm:w-auto text-lg px-8 py-4 h-auto bg-white/50 backdrop-blur-sm hover:bg-white/80">
              <PlayCircle className="mr-2 h-5 w-5" /> See How It Works
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-text-secondary animate-in fade-in duration-700 delay-500">
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> Custom implementation</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> Live in 7 business days</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> White-glove setup included</span>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
          <div className="relative rounded-xl border border-border bg-white/40 backdrop-blur-xl shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[16/8]">
             {/* Mockup Content */}
             <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50/30 to-white flex flex-col">
                {/* Header Mock */}
                <div className="h-12 border-b border-border/50 flex items-center px-6 justify-between bg-white/60">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-xs text-muted-foreground">CloseLoop Dashboard</div>
                </div>
                {/* Body Mock */}
                <div className="flex-1 p-6 flex gap-6">
                    {/* Sidebar */}
                    <div className="w-48 hidden md:block space-y-2">
                        <div className="h-8 bg-green-100/50 rounded-md w-full mb-4"></div>
                        <div className="h-4 bg-gray-100 rounded-md w-3/4"></div>
                        <div className="h-4 bg-gray-100 rounded-md w-full"></div>
                        <div className="h-4 bg-gray-100 rounded-md w-5/6"></div>
                    </div>
                    {/* Main Area */}
                    <div className="flex-1 space-y-4">
                        <div className="flex justify-between items-center mb-6">
                            <div className="h-8 w-48 bg-gray-100 rounded-md"></div>
                            <div className="h-8 w-24 bg-green-500 rounded-md"></div>
                        </div>
                        {/* Activity Card */}
                        <div className="bg-white rounded-lg border border-border p-4 shadow-sm flex items-center gap-4 animate-in slide-in-from-right duration-500">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><MessageSquare size={18}/></div>
                            <div className="flex-1">
                                <div className="text-sm font-semibold">New Lead: Sarah Jenkins</div>
                                <div className="text-xs text-muted-foreground">Zillow Inquiry • 123 Maple Dr</div>
                            </div>
                            <span className="text-xs font-mono text-muted-foreground">Just now</span>
                        </div>
                        {/* Call Active Card */}
                         <div className="bg-white rounded-lg border-l-4 border-green-500 p-4 shadow-sm flex items-center gap-4 animate-pulse">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Phone size={18}/></div>
                            <div className="flex-1">
                                <div className="text-sm font-semibold flex items-center gap-2">
                                    AI Agent calling Sarah...
                                    <span className="flex gap-0.5">
                                        <span className="w-1 h-3 bg-green-500 animate-bounce"></span>
                                        <span className="w-1 h-5 bg-green-500 animate-bounce delay-75"></span>
                                        <span className="w-1 h-3 bg-green-500 animate-bounce delay-150"></span>
                                    </span>
                                </div>
                                <div className="text-xs text-green-700">Objection Handling Mode Active</div>
                            </div>
                            <span className="text-xs font-bold text-green-600">00:14</span>
                        </div>
                        {/* Booking Card */}
                        <div className="bg-white rounded-lg border border-border p-4 shadow-sm flex items-center gap-4 opacity-50">
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600"><Calendar size={18}/></div>
                            <div className="flex-1">
                                <div className="text-sm font-semibold">Appointment Booked</div>
                                <div className="text-xs text-muted-foreground">Tomorrow at 10:00 AM</div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             {/* Overlay Image for Realism - blended */}
             <img 
                src="https://images.unsplash.com/photo-1616587896595-51352538155b?auto=format&fit=crop&q=80&w=2000" 
                alt="Dashboard Background" 
                className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay pointer-events-none"
             />
          </div>
          
          {/* Floating Trust Badges */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-4 w-full max-w-4xl px-4">
              {[
                { label: "10,000+ Leads Contacted Monthly", icon: "📞" },
                { label: "47% Average Response Rate", icon: "📈" },
                { label: "500+ Appointments Booked", icon: "📅" }
              ].map((badge, i) => (
                <div key={i} className="bg-white border border-border shadow-lg rounded-full px-6 py-3 flex items-center gap-3 text-sm font-semibold text-primary-custom whitespace-nowrap">
                    <span className="text-lg">{badge.icon}</span> {badge.label}
                </div>
              ))}
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
    </section>
  );
}
