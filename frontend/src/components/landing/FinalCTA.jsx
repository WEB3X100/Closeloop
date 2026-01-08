import React, { useState } from 'react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { CheckCircle2, Lock } from "lucide-react";
import axios from 'axios';
import { toast } from "sonner";

export function FinalCTA() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    leads: '',
    crm: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelect = (name, val) => {
    setFormData({ ...formData, [name]: val });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
        if (!BACKEND_URL) {
            setTimeout(() => {
                 toast.success("Demo requested! We'll call you shortly.");
                 setLoading(false);
            }, 1000);
            return;
        }

        await axios.post(`${BACKEND_URL}/api/leads`, formData);
        toast.success("Demo requested! We'll call you shortly.");
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong. Please try again.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <section id="demo" className="py-32 relative overflow-hidden bg-[#020817]">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          <div className="text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              See Your First AI Appointment <span className="text-emerald-400">Within 7 Days</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Join 127+ agencies using CloseLoop to never miss a commission again. Custom implementation. White-glove service.
            </p>
            
            <div className="space-y-5">
              {[
                "AI calls your leads within 3 minutes",
                "3-5X more appointments guaranteed",
                "Zero manual calling required",
                "Month-to-month, cancel anytime"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                  <CheckCircle2 className="text-emerald-400 h-6 w-6 shrink-0" />
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex gap-6 pt-4 text-slate-500 font-medium">
                <span className="flex items-center gap-2 text-sm"><Lock size={16}/> SOC 2 Compliant</span>
                <span className="flex items-center gap-2 text-sm">Stripe Verified</span>
            </div>
          </div>

          {/* Progressive Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-white/10">
            <div className="mb-8">
                <div className="flex gap-2 mb-6">
                    {[1,2,3].map(i => (
                        <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${step >= i ? 'bg-emerald-500' : 'bg-slate-100'}`}></div>
                    ))}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Your Free Demo</h3>
                <p className="text-slate-500">We'll show you exactly how many leads we can recover.</p>
            </div>

            <form onSubmit={step === 3 ? handleSubmit : handleNext} className="space-y-6">
              
              <div className={step >= 1 ? 'block' : 'hidden'}>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
                <Input 
                    name="email" 
                    placeholder="name@agency.com" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="h-14 text-lg bg-slate-50 border-slate-200 focus:ring-emerald-500"
                />
              </div>

              {step >= 2 && (
                 <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                        <Input 
                            name="name" 
                            placeholder="John Doe" 
                            required 
                            value={formData.name}
                            onChange={handleChange}
                            className="h-12 bg-slate-50 border-slate-200"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                        <Input 
                            name="phone" 
                            placeholder="(555) 555-5555" 
                            required 
                            value={formData.phone}
                            onChange={handleChange}
                             className="h-12 bg-slate-50 border-slate-200"
                        />
                    </div>
                 </div>
              )}

              {step >= 3 && (
                 <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Lead Volume</label>
                        <Select onValueChange={(val) => handleSelect('leads', val)}>
                            <SelectTrigger className="h-12 bg-slate-50 border-slate-200">
                                <SelectValue placeholder="Select volume" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="0-25">0-25 leads/mo</SelectItem>
                                <SelectItem value="25-50">25-50 leads/mo</SelectItem>
                                <SelectItem value="50-100">50-100 leads/mo</SelectItem>
                                <SelectItem value="100+">100+ leads/mo</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Current CRM</label>
                        <Select onValueChange={(val) => handleSelect('crm', val)}>
                            <SelectTrigger className="h-12 bg-slate-50 border-slate-200">
                                <SelectValue placeholder="Select CRM" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="zillow">Zillow Premier Agent</SelectItem>
                                <SelectItem value="fub">Follow Up Boss</SelectItem>
                                <SelectItem value="kvcore">kvCore</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                 </div>
              )}

              <div className="pt-2">
                {step < 3 ? (
                    <Button type="submit" className="w-full h-14 text-lg bg-emerald-500 hover:bg-emerald-600 font-bold shadow-lg shadow-emerald-200">
                        Continue →
                    </Button>
                ) : (
                    <Button type="submit" className="w-full h-14 text-lg bg-emerald-500 hover:bg-emerald-600 font-bold shadow-lg shadow-emerald-200" disabled={loading}>
                        {loading ? 'Submitting...' : 'Book My Demo →'}
                    </Button>
                )}
              </div>
              
              <p className="text-xs text-center text-slate-400 mt-6 flex items-center justify-center gap-1">
                <Lock size={12}/> Your data is encrypted and never shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
