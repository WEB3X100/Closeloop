import React from 'react';
import { Bot, Smartphone, Megaphone, BarChart3, ArrowDown } from "lucide-react";

export function ProcessSteps() {
  const steps = [
    {
      id: "01",
      title: "Agent Creation",
      desc: "Configure your AI ISA with custom personality, conversation flows, and local market knowledge. Set up scripts for buyer qualification, listing inquiries, and open house follow-ups customized to your agency's voice.",
      icon: Bot,
      color: "emerald"
    },
    {
      id: "02",
      title: "Phone & CRM Integration",
      desc: "Connect your CRM (Follow Up Boss, KVCore) and lead sources (Zillow, Realtor.com). We provision dedicated local phone numbers so your AI appears as a trusted local expert to your leads.",
      icon: Smartphone,
      color: "blue"
    },
    {
      id: "03",
      title: "Campaign Deployment",
      desc: "Launch both 'Speed-to-Lead' for new inbound leads and 'Reactivation' campaigns for cold databases. Set up automated sequences that work around the clock to capture and convert prospects into appointments.",
      icon: Megaphone,
      color: "purple"
    },
    {
      id: "04",
      title: "Performance Monitoring",
      desc: "Track real-time metrics including appointments booked, live transfers, and conversion rates. Use detailed analytics to see your exact ROI and listen to call recordings to optimize performance.",
      icon: BarChart3,
      color: "amber"
    }
  ];

  return (
    <section className="py-24 bg-[#020817] relative overflow-hidden">
      {/* Connecting Line Background */}
      <div className="absolute left-1/2 top-24 bottom-24 w-0.5 bg-gradient-to-b from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 -translate-x-1/2 hidden lg:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">From Setup to Success in 4 Steps</h2>
          <p className="text-lg text-slate-400">Our streamlined process gets your AI real estate system running quickly, driving immediate results.</p>
        </div>

        <div className="space-y-12 lg:space-y-24">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-8 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Text Side */}
              <div className={`flex-1 text-center ${index % 2 !== 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                <div className={`inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-${step.color}-500/10 text-${step.color}-400 border border-${step.color}-500/20`}>
                  Step {step.id}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{step.desc}</p>
              </div>

              {/* Center Icon (Desktop) */}
              <div className="relative hidden lg:flex flex-none w-16 h-16 rounded-full bg-[#020817] border-4 border-slate-800 items-center justify-center z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                 <step.icon size={28} className={`text-${step.color}-400`} />
              </div>

              {/* Visual Side */}
              <div className="flex-1 w-full">
                <div className={`relative group p-1 rounded-2xl bg-gradient-to-br from-white/10 to-white/0 border border-white/10 overflow-hidden`}>
                   <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   
                   {/* Abstract Visual Representation of the Step */}
                   <div className="bg-[#0f172a] rounded-xl p-6 h-64 flex items-center justify-center relative overflow-hidden">
                      {/* Background Grid */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
                      
                      {/* Dynamic Content based on index */}
                      {index === 0 && ( // Agent Creation
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                                <Bot size={40} className="text-emerald-400" />
                            </div>
                            <div className="flex gap-2">
                                <span className="h-2 w-16 bg-slate-700 rounded-full animate-pulse"></span>
                                <span className="h-2 w-10 bg-slate-700 rounded-full animate-pulse delay-75"></span>
                            </div>
                        </div>
                      )}

                      {index === 1 && ( // Integration
                         <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">Z</div>
                            <div className="flex gap-1">
                                <span className="w-1 h-1 bg-white/20 rounded-full animate-bounce"></span>
                                <span className="w-1 h-1 bg-white/20 rounded-full animate-bounce delay-75"></span>
                                <span className="w-1 h-1 bg-white/20 rounded-full animate-bounce delay-150"></span>
                            </div>
                            <div className="w-16 h-16 bg-[#020817] border border-white/20 rounded-xl flex items-center justify-center">
                                <Smartphone size={32} className="text-white" />
                            </div>
                         </div>
                      )}

                      {index === 2 && ( // Campaign
                         <div className="w-full max-w-xs space-y-3">
                            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400"><Megaphone size={16}/></div>
                                <div className="flex-1">
                                    <div className="h-2 w-24 bg-purple-500/40 rounded-full mb-1"></div>
                                    <div className="h-1.5 w-16 bg-slate-700 rounded-full"></div>
                                </div>
                                <div className="text-xs text-green-400 font-mono">ACTIVE</div>
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5 opacity-50">
                                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center"><Megaphone size={16}/></div>
                                <div className="flex-1">
                                    <div className="h-2 w-20 bg-slate-700 rounded-full mb-1"></div>
                                    <div className="h-1.5 w-12 bg-slate-800 rounded-full"></div>
                                </div>
                            </div>
                         </div>
                      )}

                      {index === 3 && ( // Performance
                          <div className="flex items-end gap-3 h-32 px-10 pb-4 w-full">
                              <div className="w-full bg-amber-500/20 rounded-t-sm h-[40%] relative group-hover:h-[50%] transition-all duration-500 border-t border-x border-amber-500/30"></div>
                              <div className="w-full bg-amber-500/40 rounded-t-sm h-[60%] relative group-hover:h-[75%] transition-all duration-500 border-t border-x border-amber-500/30"></div>
                              <div className="w-full bg-amber-500/80 rounded-t-sm h-[85%] relative group-hover:h-[95%] transition-all duration-500 border-t border-x border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.2)]"></div>
                          </div>
                      )}

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
