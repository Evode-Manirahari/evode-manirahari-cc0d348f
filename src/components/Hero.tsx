import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { SciFiBackground } from "./SciFiBackground";
import githubLogo from "@/assets/github-logo.png";
import linkedinLogo from "@/assets/linkedin-logo.svg";
import gmailLogo from "@/assets/gmail-logo.png";
import xLogo from "@/assets/x-logo-new.png";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-refined-gradient">      
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 animate-refined-fade-in">
        {/* Profile Image */}
        <div className="mx-auto mb-12 w-36 h-36 rounded-full border border-border/20 p-1.5 bg-card/50 backdrop-blur-sm">
          <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden shadow-sm">
            <img 
              src="/lovable-uploads/9e884364-cf9c-4fe1-819c-65eb26a0d2f1.png"
              alt="Evode Manirahari"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        
        <div className="mb-12">
          <p className="text-lg md:text-xl text-muted-foreground mb-6 font-light tracking-wide">Hey there, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground tracking-tight text-balance">
            Evode Manirahari
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-foreground/80 tracking-extra-wide uppercase">
            Computer Science Student
          </h2>
          <div className="space-y-4 mb-8">
            <p className="text-sm md:text-base text-accent font-medium tracking-wide uppercase">
              Passionate About AI & Software Development
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="px-4 py-2 rounded-full border border-border/40 bg-card/50 backdrop-blur-sm font-medium">
                Junior CS Student
              </span>
              <span className="hidden sm:block text-border">|</span>
              <span className="px-4 py-2 rounded-full border border-border/40 bg-card/50 backdrop-blur-sm font-medium">
                AI/ML Specialization
              </span>
              <span className="hidden sm:block text-border">|</span>
              <span className="font-medium">
                Sonoma State University
              </span>
            </div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            A dedicated Computer Science student exploring the intersection of AI and software engineering. 
            I build innovative projects using modern web technologies, machine learning, and cloud platforms 
            while continuously learning and growing through hands-on experience and academic pursuits.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToProjects}
            className="text-base px-12 py-4 h-14 tracking-wide"
          >
            View My Work
            <ArrowDown className="w-4 h-4" />
          </Button>
          <Button 
            variant="portfolio" 
            size="lg" 
            className="text-base px-12 py-4 h-14 tracking-wide"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8">
          <Button 
            variant="minimal" 
            size="icon" 
            className="h-14 w-14 rounded-full border border-border/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            onClick={() => window.open('https://github.com/Evode-Manirahari', '_blank')}
          >
            <img src={githubLogo} alt="GitHub" className="w-5 h-5 opacity-70" />
          </Button>
          <Button 
            variant="minimal" 
            size="icon" 
            className="h-14 w-14 rounded-full border border-border/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            onClick={() => window.open('https://www.linkedin.com/in/evode-manirahari-409b85206/', '_blank')}
          >
            <img src={linkedinLogo} alt="LinkedIn" className="w-5 h-5 opacity-70" />
          </Button>
          <Button 
            variant="minimal" 
            size="icon" 
            className="h-14 w-14 rounded-full border border-border/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            onClick={() => window.open('https://x.com/Manevosocs', '_blank')}
          >
            <img src={xLogo} alt="X" className="w-5 h-5 opacity-70" />
          </Button>
          <Button 
            variant="minimal" 
            size="icon" 
            className="h-14 w-14 rounded-full border border-border/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            onClick={() => window.location.href = 'mailto:manirahari@sonoma.edu'}
          >
            <img src={gmailLogo} alt="Gmail" className="w-5 h-5 opacity-70" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-subtle-float cursor-pointer group"
        onClick={scrollToProjects}
      >
        <div className="w-8 h-12 border border-border/40 rounded-full flex justify-center items-start p-2 group-hover:border-primary/40 transition-colors duration-300">
          <div className="w-1 h-3 bg-foreground/40 rounded-full animate-pulse group-hover:bg-primary/60 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};