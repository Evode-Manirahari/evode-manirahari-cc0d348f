import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Rocket, Users } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-First Mindset",
      description: "Leveraging machine learning and AI to solve complex problems with intelligent automation and data-driven insights."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code Advocate",
      description: "Writing maintainable, scalable code with comprehensive testing, documentation, and modern development practices."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Performance Focused",
      description: "Optimizing systems for speed, efficiency, and scalability from database queries to edge deployment."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Impact Driven",
      description: "Building solutions that create measurable business value and positive real-world impact."
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-foreground leading-relaxed">
              I'm a passionate <span className="text-primary font-semibold">Software & AI Engineer</span> with 3.5+ years of experience 
              building production-ready applications that solve real-world problems. My journey spans from mobile AI assistants 
              to computer vision infrastructure scanners, always with a focus on creating measurable impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my <span className="text-accent font-medium">BS in Computer Science</span> at Sonoma State University 
              with an AI/ML specialization track. I thrive on the intersection of cutting-edge technology and practical solutions, 
              whether that's optimizing energy consumption patterns, detecting infrastructure damage through computer vision, 
              or building multi-agent systems for social dynamics research.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary font-medium">
                🎯 Seeking Software Engineering Internships
              </Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent font-medium">
                🚀 Available Summer 2026
              </Badge>
              <Badge variant="secondary" className="bg-green-500/10 text-green-600 font-medium">
                ✅ Open to Relocation
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-fade-in border-border/50 hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground">Production Projects Deployed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">95%+</div>
              <div className="text-sm text-muted-foreground">ML Model Accuracy Achieved</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">2M+</div>
              <div className="text-sm text-muted-foreground">Data Records Processed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};