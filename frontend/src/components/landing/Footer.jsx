import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">C</span>
                </div>
                <span className="text-xl font-bold tracking-tight">CloseLoop</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Automating lead conversion for top-producing real estate teams. Stop chasing leads, start closing deals.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">AI Voice Agent</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Brochure Generator</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Video Creator</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2025 CloseLoop AI. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Social Icons would go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
