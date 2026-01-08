import React from 'react';
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ProblemAgitation } from "./ProblemAgitation";
import { Features } from "./Features";
import { HowItWorks } from "./HowItWorks";
import { Testimonials } from "./Testimonials";
import { ROICalculator } from "./ROICalculator";
import { FAQ } from "./FAQ";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans text-body-custom bg-page selection:bg-green-100 selection:text-green-900">
      <Header />
      <main>
        <Hero />
        <ProblemAgitation />
        <Features />
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
