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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`nav-header ${isScrolled ? 'bg-white/80' : 'bg-transparent'} transition-all duration-300`}>
      <div className="flex items-center gap-2 px-4">
        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">C</span>
        </div>
        <span className="text-xl font-bold text-primary-custom tracking-tight">CloseLoop</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6">
        <a href="#features" className="nav-link">Features</a>
        <a href="#how-it-works" className="nav-link">How it Works</a>
        <a href="#testimonials" className="nav-link">Results</a>
        <a href="#faq" className="nav-link">FAQ</a>
      </nav>

      <div className="hidden md:flex items-center gap-3 pr-2">
        <a href="#demo" className="btn-secondary text-sm px-6 py-2 h-auto no-underline">Log in</a>
        <a href="#demo" className="btn-green-primary text-sm px-6 py-2 h-auto no-underline">Book Demo</a>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden pr-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              <a href="#features" className="text-lg font-medium">Features</a>
              <a href="#how-it-works" className="text-lg font-medium">How it Works</a>
              <a href="#testimonials" className="text-lg font-medium">Results</a>
              <a href="#faq" className="text-lg font-medium">FAQ</a>
              <hr className="border-border" />
              <Button className="w-full bg-green-600 hover:bg-green-700">Book Free Demo</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
