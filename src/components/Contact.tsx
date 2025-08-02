import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Calendar, Download, Github, Linkedin } from "lucide-react";

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
                <Mail className="w-6 h-6 text-primary" />
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
                <Mail className="w-4 h-4" />
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
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              <Github className="w-5 h-5" />
              View GitHub
            </Button>
          </div>

          {/* Professional Links */}
          <div className="flex justify-center space-x-6 pt-8 border-t border-border">
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
      </div>
    </section>
  );
};