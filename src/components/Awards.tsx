import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Award, Calendar } from "lucide-react";

export const Awards = () => {
  const awards = [
    {
      title: "2x National Bank of Rwanda Schools Quiz Challenge Winner",
      year: "2020 & 2021",
      description: "Champion in national academic competition, demonstrating excellence in knowledge and quick thinking",
      icon: <Trophy className="w-6 h-6" />,
      category: "Academic Excellence"
    },
    {
      title: "Most Innovative Solution - iAccelerator Bootcamp",
      year: "May 2024",
      description: "Recognized for developing innovative health technology solution, securing $15,000 from Hanga Pitchfest 2024",
      icon: <Award className="w-6 h-6" />,
      category: "Innovation"
    }
  ];

  const extracurriculars = [
    {
      title: "President of AI Building & Startup Club",
      organization: "Sonoma State University",
      period: "2025 - Present",
      description: "Leading student organization focused on AI innovation and entrepreneurship",
      icon: <Users className="w-6 h-6" />,
      category: "Leadership"
    },
    {
      title: "Activities Director",
      organization: "Associated Students of Mendocino College",
      period: "2024 - 2025",
      description: "Organized campus events and activities for student body engagement",
      icon: <Calendar className="w-6 h-6" />,
      category: "Student Government"
    },
    {
      title: "Treasurer Region I",
      organization: "Student Senate for California Community Colleges (SSCCC)",
      period: "Nov 2024 - June 2025",
      description: "Oversaw budget for 2.1M+ students across 116 colleges with full transparency",
      icon: <Users className="w-6 h-6" />,
      category: "Leadership"
    }
  ];

  const memberships = [
    {
      title: "ColorStack Member",
      period: "2024 - Present",
      description: "Supporting underrepresented students in tech"
    },
    {
      title: "NSBE Member", 
      period: "2024 - Present",
      description: "National Society of Black Engineers"
    },
    {
      title: "NVIDIA Summer Bridge Program Participant",
      period: "2024",
      description: "Advanced AI/ML training program"
    },
    {
      title: "Codepath Intermediate Technical Interview Prep Course Participant",
      period: "2025",
      description: "Technical interview preparation and career development"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Awards & Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition for academic excellence, innovation, and leadership across various organizations 
            and programs. These achievements reflect my commitment to continuous growth and community impact.
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 animate-fade-in border-border/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {award.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-foreground mb-2">{award.title}</CardTitle>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                          {award.year}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {award.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership & Extracurriculars */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Leadership & Extracurriculars</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extracurriculars.map((activity, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 animate-fade-in border-border/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-foreground mb-2">{activity.title}</CardTitle>
                      <p className="text-sm text-primary font-semibold mb-2">{activity.organization}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-accent/30 text-accent text-xs">
                          {activity.period}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {activity.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Memberships */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Professional Memberships</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {memberships.map((membership, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 animate-fade-in border-border/20"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="pt-6 text-center">
                  <h4 className="font-semibold text-foreground mb-2">{membership.title}</h4>
                  <Badge variant="outline" className="mb-3 text-xs">
                    {membership.period}
                  </Badge>
                  <p className="text-xs text-muted-foreground">{membership.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
