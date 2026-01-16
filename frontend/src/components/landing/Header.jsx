import React from 'react';
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui/sheet";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-[#020817]/90 backdrop-blur-md border-white/10 py-3' : 'bg-transparent border-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-900/20">
              <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">AgentoSync</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Features', 'How it Works', 'Results', 'FAQ'].map((item) => (
            <a 
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
                {item}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#demo" className="bg-white text-[#020817] hover:bg-emerald-50 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg">
            Book Demo
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#020817] border-white/10 text-white">
              <div className="flex flex-col gap-6 mt-8">
                {['Features', 'How it Works', 'Results', 'FAQ'].map((item) => (
                    <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="text-lg font-medium text-slate-300 hover:text-white">
                        {item}
                    </a>
                ))}
                <hr className="border-white/10" />
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">Book Free Demo</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
