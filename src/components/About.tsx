import { Badge } from "@/components/ui/badge";

export const About = () => {
  return (
    <section className="py-32 px-6 bg-elegant-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground tracking-tight">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl text-foreground leading-relaxed">
              I’m a CS student at Sonoma State who builds things — AI agents, APIs, data pipelines, and web apps.
              I’ve interned at Reality AI Labs and Web3 Labs, done research software for NASA/SETI at Mendocino College,
              and won Hanga Pitchfest ‘24 with FunHealth, a health-ed platform for Rwandan youth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I care about writing code that actually works in production, not just on my laptop.
              Outside of coding I’ve been involved in student government — served as Treasurer for SSCCC Region I
              and now run the AI & Startup Club at SSU.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary/20 text-foreground">
                Seeking Software Engineering Internships
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-accent/40 text-foreground">
                Available Summer 2026
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-green-500/30 text-foreground">
                Open to Relocation
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};