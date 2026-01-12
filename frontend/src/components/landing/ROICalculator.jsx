import React, { useState } from 'react';
import { Slider } from "../ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowRight } from "lucide-react";
import { MOCK_ROI_DATA } from '../../lib/mock';

export function ROICalculator() {
  const [leads, setLeads] = useState(MOCK_ROI_DATA.leadsPerMonth);
  const [commission, setCommission] = useState(MOCK_ROI_DATA.commissionPerDeal);

  const leadsContactedBase = Math.floor(leads * 0.33);
  const leadsContactedAI = Math.floor(leads * 0.89);

  const annualRevenueBase = leads * 12 * 0.015 * commission;
  const annualRevenueAI = leads * 12 * 0.045 * commission;

  const additionalRevenue = annualRevenueAI - annualRevenueBase;

  return (
    <section className="py-24 bg-[#0B1121] relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            The Math Is Simple: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">More Contacts = More Commissions</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Inputs */}
          <div className="space-y-10 p-10 bg-slate-900/50 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-white border-b border-white/5 pb-4">Calculate Your Agency's ROI</h3>

            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <label className="font-semibold text-slate-300">Monthly Leads</label>
                <div className="text-2xl font-bold text-emerald-400 bg-emerald-500/10 px-4 py-1 rounded-lg border border-emerald-500/20">{leads}</div>
              </div>
              <Slider
                defaultValue={[50]}
                max={500}
                step={10}
                onValueChange={(vals) => setLeads(vals[0])}
                className="py-4 cursor-pointer"
              />
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <label className="font-semibold text-slate-300">Avg. Commission per Deal</label>
                <div className="text-2xl font-bold text-emerald-400 bg-emerald-500/10 px-4 py-1 rounded-lg border border-emerald-500/20">${commission.toLocaleString()}</div>
              </div>
              <Slider
                defaultValue={[10000]}
                max={50000}
                step={1000}
                onValueChange={(vals) => setCommission(vals[0])}
                className="py-4 cursor-pointer"
              />
            </div>

            <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-8">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <span className="text-sm text-slate-400 font-medium block mb-2 uppercase tracking-wide">Current (33%)</span>
                <span className="font-bold text-white text-2xl">{leadsContactedBase} <span className="text-sm font-normal text-slate-500">leads/mo</span></span>
              </div>
              <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <span className="text-sm text-emerald-400 font-bold block mb-2 uppercase tracking-wide">With CloseLoop (89%)</span>
                <span className="font-bold text-emerald-400 text-2xl">{leadsContactedAI} <span className="text-sm font-normal text-emerald-600/60">leads/mo</span></span>
              </div>
            </div>
          </div>

          {/* Results Card */}
          <Card className="border-0 shadow-2xl shadow-emerald-900/20 overflow-hidden relative bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-950 text-white h-full flex flex-col justify-center ring-1 ring-white/10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none mix-blend-screen"></div>

            <CardHeader className="text-center pb-2 pt-12 relative z-10">
              <CardTitle className="text-xl font-medium text-emerald-200 uppercase tracking-widest text-sm">Additional Annual Revenue</CardTitle>
            </CardHeader>
            <CardContent className="text-center pb-12 relative z-10 px-8">
              <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-emerald-200 mb-6 tracking-tight drop-shadow-2xl">
                +${additionalRevenue.toLocaleString()}
              </div>
              <p className="text-sm text-emerald-200/60 mb-10 italic max-w-xs mx-auto">*Based on conservative 3X boost in contact rates and standard conversion metrics</p>

              <a href="#demo" className="inline-flex items-center justify-center bg-white text-emerald-950 hover:bg-emerald-50 hover:scale-105 active:scale-95 font-bold px-8 py-5 rounded-full transition-all duration-300 w-full md:w-auto shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                Capture This Revenue <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
