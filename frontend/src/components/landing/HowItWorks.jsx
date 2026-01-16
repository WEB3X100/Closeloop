import React from 'react';
import { Phone, CheckCircle, Calendar, MessageSquare } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-emerald-400 font-bold tracking-wider text-sm uppercase mb-3 block">Simple Implementation</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Automate Your Workflow <br/> In 3 Simple Steps</h2>
          <p className="text-xl text-slate-400">No complex setup. No technical skills required. We handle everything.</p>
        </div>

        <div className="relative max-w-6xl mx-auto space-y-24">

          {/* Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/20 via-emerald-500/60 to-emerald-500/20 -translate-x-1/2 -z-10"></div>

          {/* Step 1 */}
          <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Timeline Dot */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-900 border-4 border-emerald-500 rounded-full items-center justify-center font-bold text-emerald-400 z-10 shadow-lg shadow-emerald-500/20">1</div>

            <div className="order-2 lg:order-1 lg:text-right space-y-6">
                <div className="inline-block lg:hidden bg-emerald-500/10 text-emerald-400 font-bold px-4 py-1 rounded-full text-sm mb-2 border border-emerald-500/20">Step 1</div>
                <h3 className="text-3xl font-bold text-white">Connect Your Lead Source</h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                    We integrate directly with your existing tools. Whether you use Zillow, Realtor.com, Follow Up Boss, or Facebook Ads, leads flow instantly into AgentoSync.
                </p>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                    <span className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm font-semibold text-slate-300 backdrop-blur-sm">Zillow</span>
                    <span className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm font-semibold text-slate-300 backdrop-blur-sm">Realtor.com</span>
                    <span className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm font-semibold text-slate-300 backdrop-blur-sm">Follow Up Boss</span>
                </div>
            </div>
            
            <div className="order-1 lg:order-2">
                <div className="relative rounded-2xl border border-slate-700/50 shadow-2xl bg-slate-800/50 backdrop-blur-xl p-6 aspect-[4/3] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50"></div>
                    {/* Visual Mock: Integration Grid */}
                    <div className="relative z-10 grid grid-cols-2 gap-4 w-3/4">
                        <div className="bg-slate-700/50 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-slate-600/50 flex items-center gap-3 hover:bg-slate-700/70 transition-colors">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">Z</div>
                            <div>
                                <div className="font-bold text-white">Zillow</div>
                                <div className="text-xs text-green-400 flex items-center gap-1"><CheckCircle size={10}/> Connected</div>
                            </div>
                        </div>
                        <div className="bg-slate-700/30 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-slate-600/30 flex items-center gap-3 opacity-60">
                            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">H</div>
                            <div>
                                <div className="font-bold text-white">HubSpot</div>
                                <div className="text-xs text-slate-400">Connect</div>
                            </div>
                        </div>
                        <div className="bg-slate-700/50 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-slate-600/50 flex items-center gap-3 col-span-2 hover:bg-slate-700/70 transition-colors">
                            <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white font-bold">F</div>
                            <div className="flex-1">
                                <div className="font-bold text-white">Follow Up Boss</div>
                                <div className="text-xs text-green-400 flex items-center gap-1"><CheckCircle size={10}/> 24 New Leads Synced</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             {/* Timeline Dot */}
             <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-900 border-4 border-emerald-500 rounded-full items-center justify-center font-bold text-emerald-400 z-10 shadow-lg shadow-emerald-500/20">2</div>

            <div className="order-1 lg:order-1">
                <div className="relative rounded-2xl border border-slate-700/50 shadow-2xl bg-slate-800/50 backdrop-blur-xl p-2 aspect-[4/3] overflow-hidden">
                     {/* Visual Mock: Mobile Conversation */}
                     <div className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl relative overflow-hidden flex flex-col">
                        <div className="bg-slate-800/80 backdrop-blur-sm p-4 border-b border-slate-700/50 flex items-center justify-between">
                            <div className="font-bold text-white">Live Conversation</div>
                            <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full animate-pulse border border-green-500/30">AI Active</span>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-emerald-600 flex-shrink-0 flex items-center justify-center text-white text-xs">AI</div>
                                <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 p-3 rounded-2xl rounded-tl-none text-sm text-slate-300 shadow-sm max-w-[80%]">
                                    Hi Sarah! I saw you were looking at the property on Maple Ave. Would you like a video tour?
                                </div>
                            </div>
                            <div className="flex gap-3 flex-row-reverse">
                                <div className="w-8 h-8 rounded-full bg-slate-600 flex-shrink-0 flex items-center justify-center text-white text-xs">S</div>
                                <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none text-sm shadow-sm max-w-[80%]">
                                    Yes actually, that would be great! I'm free tomorrow.
                                </div>
                            </div>
                             <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-emerald-600 flex-shrink-0 flex items-center justify-center text-white text-xs">AI</div>
                                <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 p-3 rounded-2xl rounded-tl-none text-sm text-slate-300 shadow-sm max-w-[80%]">
                                    Perfect. Sending you the video now. I can also book a viewing for 2 PM?
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>

            <div className="order-2 lg:order-2 space-y-6">
                <div className="inline-block lg:hidden bg-emerald-500/10 text-emerald-400 font-bold px-4 py-1 rounded-full text-sm mb-2 border border-emerald-500/20">Step 2</div>
                <h3 className="text-3xl font-bold text-white">AI Engages Immediately</h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                    Within seconds of a new lead, our Voice AI calls to qualify, while the Content Machine sends relevant brochures and videos via SMS.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-slate-300 font-medium"><Phone size={18} className="text-emerald-400"/> Instant speed-to-lead calling</li>
                    <li className="flex items-center gap-3 text-slate-300 font-medium"><MessageSquare size={18} className="text-emerald-400"/> SMS follow-up with video content</li>
                    <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle size={18} className="text-emerald-400"/> 24/7 objection handling</li>
                </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             {/* Timeline Dot */}
             <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-900 border-4 border-emerald-500 rounded-full items-center justify-center font-bold text-emerald-400 z-10 shadow-lg shadow-emerald-500/20">3</div>

            <div className="order-2 lg:order-1 lg:text-right space-y-6">
                <div className="inline-block lg:hidden bg-emerald-500/10 text-emerald-400 font-bold px-4 py-1 rounded-full text-sm mb-2 border border-emerald-500/20">Step 3</div>
                <h3 className="text-3xl font-bold text-white">Appointments Appear on Calendar</h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                    You only step in when a qualified lead is ready to meet. The AI syncs directly with your Google or Outlook calendar to book slots.
                </p>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                    <div className="bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-lg font-bold border border-emerald-500/20 backdrop-blur-sm">
                        +15 Appts / Week
                    </div>
                </div>
            </div>

            <div className="order-1 lg:order-2">
                <div className="relative rounded-2xl border border-slate-700/50 shadow-2xl bg-slate-800/50 backdrop-blur-xl p-6 aspect-[4/3] flex items-center justify-center overflow-hidden">
                    {/* Visual Mock: Calendar Card */}
                    <div className="w-full max-w-sm bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-md border border-slate-700/50 overflow-hidden">
                        <div className="bg-slate-700/50 p-4 border-b border-slate-600/50 flex justify-between items-center">
                            <div className="font-bold text-white">Upcoming Viewings</div>
                            <Calendar size={18} className="text-slate-400"/>
                        </div>
                        <div className="divide-y divide-slate-700/30">
                            {[1,2,3].map((i) => (
                                <div key={i} className="p-4 flex gap-4 hover:bg-slate-700/30 transition-colors">
                                    <div className="flex flex-col items-center justify-center bg-emerald-500/10 w-12 h-12 rounded-lg text-emerald-400 font-bold border border-emerald-500/20">
                                        <span className="text-xs">OCT</span>
                                        <span className="text-lg leading-none">{12+i}</span>
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">Property Viewing</div>
                                        <div className="text-sm text-slate-400">10:00 AM • 45 mins</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
