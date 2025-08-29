import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Download } from "lucide-react";
import githubLogo from "@/assets/github-logo.png";
import linkedinLogo from "@/assets/linkedin-logo.svg";
import gmailLogo from "@/assets/gmail-logo.png";
import xLogo from "@/assets/x-logo-new.png";

export const Contact = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Actively seeking internship opportunities in software engineering, AI/ML, and data engineering. 
            Let's discuss how I can contribute to your team's success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <img src={gmailLogo} alt="Gmail" className="w-6 h-6" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Ready to discuss opportunities and answer any questions about my projects.
              </p>
              <Button 
                variant="portfolio" 
                className="w-full"
                onClick={() => window.location.href = 'mailto:manirahari@sonoma.edu'}
              >
                <img src={gmailLogo} alt="Gmail" className="w-4 h-4" />
                manirahari@sonoma.edu
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-primary" />
                Schedule a Call
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Available for technical interviews and project discussions.
              </p>
              <Button 
                variant="portfolio" 
                className="w-full"
                onClick={() => window.open('https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting+with+Evode+Manirahari&dates=20250810T100000Z/20250810T110000Z&details=Technical+interview+or+project+discussion+with+Evode+Manirahari%2C+Software+Engineer&location=Virtual+Meeting', '_blank')}
              >
                <Calendar className="w-4 h-4" />
                Book Meeting
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => window.open('https://github.com/Evode-Manirahari', '_blank')}
            >
              <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
              View GitHub
            </Button>
          </div>

          {/* Professional Links */}
          <div className="flex justify-center space-x-6 pt-8 border-t border-border">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-12 w-12 hover:scale-110 transition-transform p-2"
              onClick={() => window.open('https://github.com/Evode-Manirahari', '_blank')}
            >
              <img src={githubLogo} alt="GitHub" className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-12 w-12 hover:scale-110 transition-transform p-2"
              onClick={() => window.open('https://www.linkedin.com/in/evode-manirahari-409b85206/', '_blank')}
            >
              <img src={linkedinLogo} alt="LinkedIn" className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-12 w-12 hover:scale-110 transition-transform p-2 cursor-pointer"
              onClick={() => window.open('https://x.com/Manevosocs', '_blank')}
            >
              <img src={xLogo} alt="X" className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-12 w-12 hover:scale-110 transition-transform"
              onClick={() => window.location.href = 'mailto:manirahari@sonoma.edu'}
            >
              <img src={gmailLogo} alt="Gmail" className="w-6 h-6" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};