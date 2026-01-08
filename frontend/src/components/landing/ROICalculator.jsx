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
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">The Math Is Simple: <br/>More Contacts = More Commissions</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Inputs */}
          <div className="space-y-10 p-10 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold mb-8 text-slate-900">Calculate Your Agency's ROI</h3>
            
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <label className="font-semibold text-slate-700">Monthly Leads</label>
                <span className="text-2xl font-bold text-emerald-600">{leads}</span>
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
                <label className="font-semibold text-slate-700">Avg. Commission per Deal</label>
                <span className="text-2xl font-bold text-emerald-600">${commission.toLocaleString()}</span>
              </div>
              <Slider 
                defaultValue={[10000]} 
                max={50000} 
                step={1000} 
                onValueChange={(vals) => setCommission(vals[0])}
                className="py-4 cursor-pointer"
              />
            </div>
            
            <div className="pt-8 border-t border-slate-100 grid grid-cols-2 gap-8">
                <div>
                    <span className="text-sm text-slate-400 block mb-1">Current Contact Rate (33%)</span>
                    <span className="font-bold text-slate-700 text-xl">{leadsContactedBase} leads/mo</span>
                </div>
                <div>
                    <span className="text-sm text-emerald-600 font-bold block mb-1">With CloseLoop (89%)</span>
                    <span className="font-bold text-emerald-600 text-xl">{leadsContactedAI} leads/mo</span>
                </div>
            </div>
          </div>

          {/* Results Card */}
          <Card className="border-emerald-200 shadow-2xl overflow-hidden relative bg-emerald-900 text-white h-full flex flex-col justify-center">
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
             
             <CardHeader className="text-center pb-2 pt-12 relative z-10">
                <CardTitle className="text-xl font-medium text-emerald-200">Additional Annual Revenue</CardTitle>
             </CardHeader>
             <CardContent className="text-center pb-12 relative z-10">
                <div className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                    +${additionalRevenue.toLocaleString()}
                </div>
                <p className="text-sm text-emerald-200/60 mb-10">*Based on industry average conversion lift</p>
                
                <a href="#demo" className="inline-flex items-center justify-center bg-white text-emerald-900 hover:bg-emerald-50 font-bold px-8 py-4 rounded-full transition-colors w-full md:w-auto">
                    Capture This Revenue <ArrowRight className="ml-2 w-5 h-5"/>
                </a>
             </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
