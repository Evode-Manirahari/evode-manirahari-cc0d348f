import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted animate-gradient-x"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Software Engineer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about building intelligent systems that solve real-world problems. 
            From AI-powered applications to infrastructure optimization, I craft solutions 
            that make a meaningful impact.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToProjects}
            className="text-lg px-8 py-4"
          >
            View My Work
            <ArrowDown className="w-5 h-5" />
          </Button>
          <Button variant="portfolio" size="lg" className="text-lg px-8 py-4">
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <Button variant="ghost" size="icon" className="h-12 w-12 hover:scale-110 transition-transform">
            <Github className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12 hover:scale-110 transition-transform">
            <Linkedin className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12 hover:scale-110 transition-transform">
            <Mail className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};