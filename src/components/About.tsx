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
    <section className="py-32 px-6 bg-elegant-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground tracking-tight">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-foreground leading-relaxed">
              I'm a passionate <span className="text-primary font-semibold">Computer Science student</span> at Sonoma State University, 
              specializing in AI/ML and software development. Through coursework, personal projects, and hands-on learning, 
              I've explored everything from mobile AI assistants to computer vision applications, always eager to tackle new challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my <span className="text-accent font-medium">BS in Computer Science</span> with a focus on artificial intelligence 
              and machine learning. I'm passionate about applying theoretical knowledge to real-world problems, whether that's 
              building energy optimization models, developing computer vision systems for infrastructure analysis, 
              or creating multi-agent systems for research applications.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="glass-card elegant-hover animate-elegant-scale border-border/20">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 bg-foreground/5 rounded-full flex items-center justify-center mx-auto mb-6 text-foreground/80">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground tracking-wide">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-12 text-foreground tracking-wide">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="space-y-3">
              <div className="text-4xl font-light text-foreground tracking-tight">8+</div>
              <div className="text-sm text-muted-foreground font-light tracking-wide uppercase">Production Projects Deployed</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-light text-foreground tracking-tight">95%+</div>
              <div className="text-sm text-muted-foreground font-light tracking-wide uppercase">ML Model Accuracy Achieved</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-light text-foreground tracking-tight">2M+</div>
              <div className="text-sm text-muted-foreground font-light tracking-wide uppercase">Data Records Processed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};