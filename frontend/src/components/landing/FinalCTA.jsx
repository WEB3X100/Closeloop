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
    website: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelect = (name, val) => {
    setFormData({ ...formData, [name]: val });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^\+?[\d\s-()]{10,}$/.test(phone);
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (step === 1) {
      if (!validateEmail(formData.email)) {
        toast.error("Please enter a valid email address");
        return;
      }
    }

    if (step === 2) {
      if (!formData.name.trim()) {
        toast.error("Please enter your full name");
        return;
      }
      if (!validatePhone(formData.phone)) {
        toast.error("Please enter a valid phone number (min 10 digits)");
        return;
      }
    }

    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Prepare query parameters for GET request
      const queryParams = new URLSearchParams(formData).toString();
      const webhookUrl = `https://only100x.app.n8n.cloud/webhook/agentosync-form?${queryParams}`;

      await fetch(webhookUrl, {
        method: 'GET',
        mode: 'no-cors'
      });

      // Optional: Also try sending to backend if configured
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      if (BACKEND_URL) {
        // Fire and forget backend call
        axios.post(`${BACKEND_URL}/api/leads`, formData).catch(err => console.error("Backend sync failed", err));
      }

      toast.success("Demo requested! We'll call you shortly.");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="py-32 relative overflow-hidden bg-[#020617]">
      {/* Background Effects - Grid & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] mask-gradient-to-b"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          <div className="text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              See Your First AI Appointment <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Within 7 Days</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Join 127+ agencies using AgentoSync to never miss a commission again. Custom implementation. White-glove service.
            </p>

            <div className="space-y-5">
              {[
                "AI calls your leads within 3 minutes",
                "3-5X more appointments guaranteed",
                "Zero manual calling required",
                "Month-to-month, cancel anytime"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 group">
                  <CheckCircle2 className="text-emerald-400 h-6 w-6 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-6 pt-4 text-slate-500 font-medium">
              <span className="flex items-center gap-2 text-sm hover:text-emerald-400 transition-colors"><Lock size={16} /> SOC 2 Compliant</span>
              <span className="flex items-center gap-2 text-sm hover:text-emerald-400 transition-colors">Stripe Verified</span>
            </div>
          </div>

          {/* Progressive Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-emerald-900/20 border border-white/10 relative">
            {/* Form specific background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="mb-8 relative z-10">
              <div className="flex gap-2 mb-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= i ? 'bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-slate-100'}`}></div>
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
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Website <span className="text-slate-400 font-normal">(Optional)</span></label>
                    <Input
                      name="website"
                      placeholder="https://agency.com"
                      value={formData.website}
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
                      <SelectContent className="bg-slate-900/95 backdrop-blur-md border-slate-700 text-slate-100">
                        <SelectItem value="0-25" className="focus:bg-slate-800 focus:text-emerald-400">0-25 leads/mo</SelectItem>
                        <SelectItem value="25-50" className="focus:bg-slate-800 focus:text-emerald-400">25-50 leads/mo</SelectItem>
                        <SelectItem value="50-100" className="focus:bg-slate-800 focus:text-emerald-400">50-100 leads/mo</SelectItem>
                        <SelectItem value="100+" className="focus:bg-slate-800 focus:text-emerald-400">100+ leads/mo</SelectItem>
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
                <Lock size={12} /> Your data is encrypted and never shared.
              </p>
            </form>
          </div>
        </div>
      </div >
    </section >
  );
}
