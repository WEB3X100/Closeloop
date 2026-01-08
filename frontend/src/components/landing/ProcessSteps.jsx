import React from 'react';
import { Bot, Smartphone, Megaphone, BarChart3, TrendingUp, CheckCircle2 } from "lucide-react";

export function ProcessSteps() {
  const steps = [
    {
      id: "01",
      title: "Agent Creation",
      desc: "Configure your AI ISA with custom personality, conversation flows, and local market knowledge. Set up scripts for buyer qualification, listing inquiries, and open house follow-ups.",
      icon: Bot,
      color: "emerald"
    },
    {
      id: "02",
      title: "Phone & CRM Integration",
      desc: "Connect your CRM (Follow Up Boss, KVCore) and lead sources. We provision dedicated local numbers so your AI appears as a trusted local expert.",
      icon: Smartphone,
      color: "blue",
      stat: "10k+ Leads Called",
      statDesc: "Capacity per month"
    },
    {
      id: "03",
      title: "Campaign Deployment",
      desc: "Launch 'Speed-to-Lead' for inbound and 'Reactivation' for cold lists. Automated sequences work 24/7 to capture and convert.",
      icon: Megaphone,
      color: "purple"
    },
    {
      id: "04",
      title: "Performance Monitoring",
      desc: "Track real-time metrics including appointments booked and live transfers. Use analytics to optimize ROI and listen to call recordings.",
      icon: BarChart3,
      color: "amber"
    }
  ];

  return (
    <section className="py-32 bg-[#020817] relative overflow-hidden border-t border-white/5">
      {/* Connecting Line Background - Vertical */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent -translate-x-1/2 hidden lg:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-emerald-500 font-bold tracking-widest text-sm uppercase mb-3 block">The Setup Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">From Setup to Success in 4 Steps</h2>
          <p className="text-xl text-slate-400">Streamlined onboarding to get your AI voice agents live and driving revenue.</p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Text Side */}
              <div className={`flex-1 text-center ${index % 2 !== 0 ? 'lg:text-left' : 'lg:text-right'} space-y-6`}>
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase bg-${step.color}-500/10 text-${step.color}-400 border border-${step.color}-500/20 shadow-lg shadow-${step.color}-900/20`}>
                  <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                  Step {step.id}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg max-w-lg mx-auto lg:mx-0">{step.desc}</p>
                
                {/* Mobile Icon (visible only on small screens) */}
                <div className="lg:hidden flex justify-center mt-4">
                     <div className={`w-16 h-16 rounded-2xl bg-${step.color}-500/10 border border-${step.color}-500/20 flex items-center justify-center text-${step.color}-400`}>
                        <step.icon size={32} />
                     </div>
                </div>
              </div>

              {/* Center Marker (Desktop) */}
              <div className="relative hidden lg:flex flex-none w-14 h-14 rounded-full bg-[#020817] border-4 border-[#1e293b] items-center justify-center z-10 shadow-[0_0_0_8px_#020817]">
                 <div className={`w-3 h-3 rounded-full bg-${step.color}-500 shadow-[0_0_10px_currentColor]`}></div>
              </div>

              {/* Visual Side */}
              <div className="flex-1 w-full">
                <div className={`relative group p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-${step.color}-900/20`}>
                   
                   {/* Abstract Visual Representation */}
                   <div className="bg-[#0b1221] rounded-[22px] p-8 h-[320px] flex items-center justify-center relative overflow-hidden w-full">
                      {/* Background Grid Pattern */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                      <div className={`absolute top-0 right-0 w-64 h-64 bg-${step.color}-500/10 rounded-full blur-[80px]`}></div>
                      
                      {/* Step 1: Agent Creation Visual */}
                      {index === 0 && (
                        <div className="relative z-10 w-full max-w-xs bg-[#151f32] border border-white/10 rounded-xl p-5 shadow-2xl">
                             <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                                    <Bot size={24} className="text-emerald-400" />
                                </div>
                                <div>
                                    <div className="text-white font-bold">AI Realtor Setup</div>
                                    <div className="text-xs text-emerald-400 font-mono">STATUS: CONFIGURING</div>
                                </div>
                             </div>
                             <div className="space-y-3">
                                <div className="flex justify-between text-sm text-slate-400">
                                    <span>Personality</span>
                                    <span className="text-white">Professional & Warm</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full w-3/4 bg-emerald-500 rounded-full"></div>
                                </div>
                                <div className="flex justify-between text-sm text-slate-400">
                                    <span>Knowledge Base</span>
                                    <span className="text-white">Uploaded (45MB)</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full w-full bg-emerald-500 rounded-full"></div>
                                </div>
                             </div>
                        </div>
                      )}

                      {/* Step 2: Integration Visual WITH METRIC */}
                      {index === 1 && (
                         <div className="relative z-10 flex flex-col items-center gap-6 w-full">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-[#006aff] rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-lg border border-white/10">Z</div>
                                <div className="flex gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-[bounce_1s_infinite]"></span>
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-[bounce_1s_infinite_0.2s]"></span>
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-[bounce_1s_infinite_0.4s]"></span>
                                </div>
                                <div className="w-16 h-16 bg-[#0f172a] border-2 border-blue-500/50 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                                    <Smartphone size={32} className="text-blue-400" />
                                </div>
                            </div>
                            
                            {/* The Metric Outcome Card */}
                            <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-4 flex items-center gap-4 shadow-xl w-full max-w-xs animate-in slide-in-from-bottom-4 duration-700">
                                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                                    <TrendingUp className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-white/80 text-xs font-bold uppercase tracking-wider">System Capacity</div>
                                    <div className="text-white text-2xl font-bold leading-none">10,000+</div>
                                    <div className="text-white/90 text-sm">Leads Called / Month</div>
                                </div>
                            </div>
                         </div>
                      )}

                      {/* Step 3: Campaign Visual */}
                      {index === 2 && (
                         <div className="w-full max-w-xs space-y-4 relative z-10">
                            <div className="flex items-center gap-4 bg-[#1e293b]/80 backdrop-blur-md p-4 rounded-xl border border-purple-500/30 shadow-lg">
                                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.2)]"><Megaphone size={20}/></div>
                                <div className="flex-1">
                                    <div className="text-white font-semibold text-sm">Inbound Speed-to-Lead</div>
                                    <div className="h-1.5 w-full bg-slate-700 rounded-full mt-2 overflow-hidden">
                                        <div className="h-full w-2/3 bg-purple-500 animate-[shimmer_2s_infinite]"></div>
                                    </div>
                                </div>
                                <div className="text-[10px] bg-green-500/20 text-green-400 px-2 py-1 rounded font-bold border border-green-500/20">LIVE</div>
                            </div>
                            <div className="flex items-center gap-4 bg-[#1e293b]/40 backdrop-blur-md p-4 rounded-xl border border-white/5 opacity-60">
                                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-400"><Megaphone size={20}/></div>
                                <div className="flex-1">
                                    <div className="text-slate-300 font-semibold text-sm">Database Reactivation</div>
                                    <div className="h-1.5 w-1/2 bg-slate-700 rounded-full mt-2"></div>
                                </div>
                                <div className="text-[10px] bg-slate-700 text-slate-400 px-2 py-1 rounded font-bold">PAUSED</div>
                            </div>
                         </div>
                      )}

                      {/* Step 4: Performance Visual */}
                      {index === 3 && (
                          <div className="w-full max-w-xs relative z-10">
                              <div className="bg-[#1e293b] border border-amber-500/20 rounded-xl p-5 shadow-2xl">
                                  <div className="flex justify-between items-center mb-6">
                                      <div className="text-white font-bold">ROI Dashboard</div>
                                      <BarChart3 className="text-amber-500 w-5 h-5"/>
                                  </div>
                                  <div className="flex items-end gap-3 h-32 w-full">
                                      <div className="w-full bg-amber-500/20 rounded-t-sm h-[40%] relative group-hover:h-[50%] transition-all duration-500 border-t border-x border-amber-500/30"></div>
                                      <div className="w-full bg-amber-500/40 rounded-t-sm h-[60%] relative group-hover:h-[75%] transition-all duration-500 border-t border-x border-amber-500/30"></div>
                                      <div className="w-full bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-sm h-[85%] relative group-hover:h-[95%] transition-all duration-500 shadow-[0_0_20px_rgba(245,158,11,0.3)]"></div>
                                  </div>
                                  <div className="mt-4 flex items-center gap-2 text-green-400 text-sm font-bold bg-green-400/10 p-2 rounded-lg border border-green-400/10">
                                      <TrendingUp size={16} />
                                      +292% Appointment Rate
                                  </div>
                              </div>
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
