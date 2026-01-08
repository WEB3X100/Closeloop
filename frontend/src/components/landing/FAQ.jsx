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
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="heading-2 text-center mb-12">Common Questions About Implementation</h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {MOCK_FAQS.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border border-border px-6 rounded-xl data-[state=open]:border-green-200 shadow-sm">
              <AccordionTrigger className="text-lg font-medium hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-text-secondary text-base pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
