import React from 'react';
import { InlineWidget } from 'react-calendly';
import { X } from 'lucide-react';

export function CalendlyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-[#0f172a] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl shadow-emerald-900/20 animate-in zoom-in-95 duration-300">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Schedule Your Demo</h2>
            <p className="text-slate-400 text-sm">See how we can 3-5X your appointments</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-slate-400 hover:text-white"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Calendly Widget */}
        <div className="bg-white">
          <InlineWidget
            url="https://calendly.com/neuralsync-info/30min"
            styles={{
              height: '600px',
              width: '100%',
            }}
            pageSettings={{
              backgroundColor: 'ffffff',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: '10b981',
              textColor: '1e293b',
            }}
          />
        </div>
      </div>
    </div>
  );
}
