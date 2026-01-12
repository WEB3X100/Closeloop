import React from 'react';
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ProcessSteps } from "./ProcessSteps";
import { ProblemAgitation } from "./ProblemAgitation";
import { HowItWorks } from "./HowItWorks";
import { Testimonials } from "./Testimonials";
import { ROICalculator } from "./ROICalculator";
import { FAQ } from "./FAQ";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans text-body-custom bg-page selection:bg-emerald-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <ProcessSteps />
        <ProblemAgitation />
        <HowItWorks />
        <Testimonials />
        <ROICalculator />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
