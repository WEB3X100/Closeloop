import React from 'react';
import { ArrowRight, CheckCircle2, PlayCircle, Phone, Calendar, MessageSquare, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#020817]">
      
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px] -z-10 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 opacity-40"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16 lg:mb-24">
            
          {/* Social Proof Badge - Centered & Glass */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-full pl-2 pr-5 py-1.5 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-xl shadow-emerald-900/20">
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

          {/* Main Headline - Centered & High Contrast */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 drop-shadow-sm">
            Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">3-5X More Appointments</span><br className="hidden md:block"/> Without Making a Single Call
          </h1>

          {/* Subheadline - Centered & Readable */}
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Tired of losing deals to voicemail? Stop manual follow-ups. Our AI calls your leads 3-5x until contact, handles objections, and books appointments automatically.
          </p>

          {/* CTA Buttons - Centered */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <a href="#demo" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#020817] text-lg font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transform hover:-translate-y-0.5">
              Book Your Free Demo <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#video" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10 text-lg font-medium px-8 py-4 rounded-full transition-all duration-200">
              <PlayCircle className="h-5 w-5 text-emerald-400" /> See How It Works
            </a>
          </div>

          {/* Trust Indicators - Centered Flex */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base font-medium text-slate-400 animate-in fade-in duration-700 delay-500">
            <span className="flex items-center gap-2.5"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> Custom implementation</span>
            <span className="flex items-center gap-2.5"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> Live in 7 business days</span>
            <span className="flex items-center gap-2.5"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> White-glove setup included</span>
          </div>
        </div>

        {/* Hero Visual Mockup - Centered */}
        <div className="relative max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500 px-2">
            
          {/* Glass Card Container */}
          <div className="relative rounded-2xl border border-white/10 bg-[#0f172a]/60 backdrop-blur-2xl shadow-2xl overflow-hidden">
             
             {/* Mockup Header */}
             <div className="h-14 border-b border-white/10 flex items-center px-6 justify-between bg-[#0f172a]/40">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="px-4 py-1.5 bg-white/5 rounded-full text-xs font-mono text-slate-400 border border-white/5">
                    dashboard.closeloop.ai
                </div>
             </div>

             {/* Mockup Body - Grid Layout */}
             <div className="grid md:grid-cols-[240px_1fr] h-[400px] md:h-[500px]">
                
                {/* Sidebar */}
                <div className="hidden md:flex flex-col p-4 border-r border-white/5 bg-[#0f172a]/30 gap-4">
                    <div className="h-10 bg-emerald-500/20 border border-emerald-500/30 rounded-lg w-full mb-4 flex items-center px-4 gap-3">
                        <div className="w-4 h-4 bg-emerald-500 rounded-sm"></div>
                        <div className="h-2 w-20 bg-emerald-500/40 rounded-full"></div>
                    </div>
                    {[1,2,3,4].map(i => (
                        <div key={i} className="h-8 w-full flex items-center px-2 gap-3 opacity-60 hover:opacity-100 cursor-pointer">
                            <div className="w-4 h-4 bg-slate-600 rounded-sm"></div>
                            <div className="h-2 w-24 bg-slate-700 rounded-full"></div>
                        </div>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="p-6 md:p-8 bg-gradient-to-br from-[#0f172a] to-[#020817] relative">
                    
                    {/* Header of Content */}
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <div className="h-6 w-32 bg-slate-700/50 rounded-md mb-2"></div>
                            <div className="h-4 w-48 bg-slate-800/50 rounded-md"></div>
                        </div>
                        <div className="h-10 w-32 bg-emerald-600 rounded-lg shadow-lg shadow-emerald-900/50 flex items-center justify-center text-white text-sm font-semibold">
                            + New Campaign
                        </div>
                    </div>

                    {/* Active Call Card - The Hero Feature */}
                    <div className="bg-[#1e293b]/80 border border-emerald-500/30 rounded-xl p-5 mb-4 shadow-xl backdrop-blur-md relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 ring-2 ring-emerald-500/20">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className="text-white font-semibold">AI Agent Active Call</h4>
                                    <span className="text-xs font-mono text-emerald-400 animate-pulse">● LIVE 00:42</span>
                                </div>
                                <div className="text-sm text-slate-400 mb-3">Speaking with <span className="text-white">Sarah Jenkins</span> (Zillow Lead)</div>
                                
                                {/* Audio Waveform Visual */}
                                <div className="flex items-center gap-1 h-6">
                                    {[...Array(20)].map((_, i) => (
                                        <div 
                                            key={i} 
                                            className="w-1 bg-emerald-500 rounded-full animate-pulse"
                                            style={{ 
                                                height: `${Math.random() * 100}%`,
                                                animationDelay: `${i * 0.05}s`
                                            }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Notification Stack */}
                    <div className="space-y-3 opacity-60 hover:opacity-100 transition-opacity">
                        <div className="bg-[#1e293b]/50 border border-white/5 rounded-xl p-4 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><Calendar size={18}/></div>
                            <div>
                                <div className="text-sm text-slate-200 font-medium">Appointment Booked</div>
                                <div className="text-xs text-slate-500">Tomorrow at 2:00 PM • via SMS</div>
                            </div>
                        </div>
                        <div className="bg-[#1e293b]/50 border border-white/5 rounded-xl p-4 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400"><MessageSquare size={18}/></div>
                            <div>
                                <div className="text-sm text-slate-200 font-medium">Brochure Sent</div>
                                <div className="text-xs text-slate-500">123 Maple Ave Property Guide</div>
                            </div>
                        </div>
                    </div>

                </div>
             </div>
          </div>

          {/* Floating Stats Badges - Properly Centered */}
          <div className="hidden md:flex absolute -bottom-8 left-1/2 -translate-x-1/2 w-full justify-center gap-4 px-4 z-20">
              {[
                { label: "10k+ Leads Called", icon: "📞" },
                { label: "47% Response Rate", icon: "📈" },
                { label: "500+ Bookings", icon: "📅" }
              ].map((badge, i) => (
                <div key={i} className="bg-[#0f172a] border border-white/10 shadow-xl shadow-black/40 rounded-full px-6 py-3 flex items-center gap-3 text-sm font-semibold text-white whitespace-nowrap hover:-translate-y-1 transition-transform">
                    <span className="text-lg">{badge.icon}</span> {badge.label}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
