import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold bg-portfolio-gradient bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <div className="flex items-center space-x-1">
                <div className="w-0.5 h-4 bg-current"></div>
                <div className="w-0.5 h-6 bg-current"></div>
              </div>
            )}
          </Button>
        </div>

        {/* Dropdown Navigation - Right Aligned */}
        {isOpen && (
          <div className="absolute right-6 top-full mt-2 w-48 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg">
            <div className="flex flex-col space-y-2 p-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2 hover:bg-muted/50 rounded px-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2 hover:bg-muted/50 rounded px-2"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2 hover:bg-muted/50 rounded px-2"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2 hover:bg-muted/50 rounded px-2"
              >
                Contact
              </button>
              <div className="pt-2 border-t border-border">
                <Button variant="hero" size="sm" className="w-full">
                  Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};