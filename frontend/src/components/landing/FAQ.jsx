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
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">Common Questions About Implementation</h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {MOCK_FAQS.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border border-slate-200 px-6 rounded-2xl data-[state=open]:border-emerald-500/50 data-[state=open]:ring-4 data-[state=open]:ring-emerald-500/5 shadow-sm transition-all">
              <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
