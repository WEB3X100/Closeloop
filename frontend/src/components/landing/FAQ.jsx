import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { MOCK_FAQS } from '../../lib/mock';

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] invert"></div>

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white leading-tight">
          Common Questions About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Implementation</span>
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {MOCK_FAQS.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="bg-slate-900/50 backdrop-blur-sm border border-white/5 px-6 rounded-2xl data-[state=open]:border-emerald-500/30 data-[state=open]:ring-1 data-[state=open]:ring-emerald-500/20 data-[state=open]:bg-slate-800/50 shadow-lg hover:bg-slate-800/30 transition-all duration-300">
              <AccordionTrigger className="text-lg font-semibold text-slate-200 hover:text-emerald-400 hover:no-underline py-6 [&[data-state=open]]:text-emerald-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 text-lg pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
