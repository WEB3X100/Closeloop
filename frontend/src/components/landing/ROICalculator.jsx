import React, { useState } from 'react';
import { Slider } from "../ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowRight, DollarSign } from "lucide-react";
import { MOCK_ROI_DATA } from '../../lib/mock';

export function ROICalculator() {
  const [leads, setLeads] = useState(MOCK_ROI_DATA.leadsPerMonth);
  const [commission, setCommission] = useState(MOCK_ROI_DATA.commissionPerDeal);
  
  // Calculation Logic
  // Without CloseLoop: 33% contact rate, 2% conversion
  // With CloseLoop: 89% contact rate, +25 appts -> let's say 4.5% conversion as per testimonial
  
  const leadsContactedBase = Math.floor(leads * 0.33);
  const leadsContactedAI = Math.floor(leads * 0.89);
  
  const annualRevenueBase = leads * 12 * 0.015 * commission; // 1.5% conversion conservative
  const annualRevenueAI = leads * 12 * 0.045 * commission; // 4.5% conversion with AI
  
  const additionalRevenue = annualRevenueAI - annualRevenueBase;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 mb-4">The Math Is Simple: <br/>More Contacts = More Commissions</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Inputs */}
          <div className="space-y-8 p-8 bg-gray-50 rounded-2xl border border-border">
            <h3 className="text-xl font-bold mb-6">Calculate Your Agency's ROI</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="font-medium">Monthly Leads</label>
                <span className="font-bold text-green-600">{leads}</span>
              </div>
              <Slider 
                defaultValue={[50]} 
                max={500} 
                step={10} 
                onValueChange={(vals) => setLeads(vals[0])}
                className="py-4"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="font-medium">Avg. Commission per Deal</label>
                <span className="font-bold text-green-600">${commission.toLocaleString()}</span>
              </div>
              <Slider 
                defaultValue={[10000]} 
                max={50000} 
                step={1000} 
                onValueChange={(vals) => setCommission(vals[0])}
                className="py-4"
              />
            </div>
            
            <div className="pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Current Contact Rate (Est. 33%)</span>
                    <span className="font-medium">{leadsContactedBase} leads/mo</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-green-700 font-bold">With CloseLoop (Est. 89%)</span>
                    <span className="font-bold text-green-700">{leadsContactedAI} leads/mo</span>
                </div>
            </div>
          </div>

          {/* Results Card */}
          <Card className="border-green-100 shadow-xl overflow-hidden relative">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
             <CardHeader className="text-center pb-2 pt-8">
                <CardTitle className="text-lg font-normal text-gray-500">Additional Annual Revenue</CardTitle>
             </CardHeader>
             <CardContent className="text-center pb-8">
                <div className="text-5xl md:text-6xl font-bold text-green-600 mb-2">
                    +${additionalRevenue.toLocaleString()}
                </div>
                <p className="text-sm text-gray-400 mb-8">*Based on industry average conversion lift</p>
                
                <a href="#demo" className="btn-green-primary w-full justify-center">
                    Capture This Revenue <ArrowRight className="ml-2 w-4 h-4"/>
                </a>
             </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
