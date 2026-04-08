import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "IT Support & Software Developer",
      company: "Mendocino College — Sustainable Technology Program",
      location: "Ukiah, CA",
      duration: "Jan 2024 – June 2025",
      type: "Full-time",
      achievements: [
        "Wrote Python software to process spectroscopic data from the CAMS meteor-observation network — the data goes into SETI/NASA research",
        "Rewrote the analysis pipeline and cut processing time by about 95%",
        "Handled IT support for 27 faculty and 500+ students alongside the campus IT team"
      ],
      technologies: ["Python", "Data Analysis", "Scientific Computing", "NASA/SETI Research"]
    },
    {
      title: "Tutor",
      company: "Mendocino College — MESA (Mathematics, Engineering, Science Achievement)",
      location: "Ukiah, CA", 
      duration: "Dec 2024 – May 2025",
      type: "Part-time",
      achievements: [
        "Tutored 50+ students in Calculus and Data Structures — mostly small groups and 1:1 sessions",
        "Led weekly coding labs in C++ covering the standard DS&A topics: trees, graphs, hash tables, sorting, etc.",
        "Did a lot of code review and debugging walkthroughs to help students get unstuck on assignments"
      ],
      technologies: ["C++", "Java", "Python", "Data Structures", "Algorithms", "Teaching"]
    },
    {
      title: "Treasurer Region I",
      company: "Student Senate for California Community Colleges (SSCCC)",
      location: "Sacramento, CA",
      duration: "Nov 2024 – June 2025", 
      type: "Leadership",
      achievements: [
        "Managed the Region I budget covering 116 colleges and 2.1M+ students — published monthly reports so everything was visible",
        "Redesigned the reimbursement process and ran Budget 101 workshops; money actually got spent instead of sitting unused (+68%)",
        "Built dashboards to track spending in real time and helped more student orgs get access to funding"
      ],
      technologies: ["Financial Management", "Data Visualization", "Leadership", "Budget Analysis"]
    },
    {
      title: "AI Engineer Intern",
      company: "Reality AI Labs",
      location: "Remote",
      duration: "April 2024 – Sept 2024",
      type: "Internship",
      achievements: [
        "Built ReX — an AI career coach using OpenAI and Gemini to give personalized job-search advice and mentorship",
        "Made it adapt to each user's background and goals; session quality improved by about 40%",
        "Set up RAG over resumes, job postings, and course content using LangChain, LlamaIndex, and FAISS/Pinecone",
        "Built an eval harness with unit tests and A/B testing, tracked experiments with Weights & Biases",
        "Deployed on FastAPI + Docker on GCP/AWS with Redis caching; kept latency in check under real load"
      ],
      technologies: ["Python", "FastAPI", "OpenAI API", "LangChain", "Redis", "Docker", "AWS", "MLOps"]
    },
    {
      title: "Software Engineer Intern", 
      company: "Web3 Labs",
      location: "San Francisco, CA",
      duration: "Feb 2024 – June 2024",
      type: "Internship",
      achievements: [
        "Built backend services in Java/Spring Boot with Hibernate — automated a lot of manual data work (~80% reduction)",
        "Added Kafka for real-time data pipelines and set up Snowflake on Azure; transfers got ~40% faster, queries ~25% faster"
      ],
      technologies: ["Java", "Spring Boot", "Hibernate", "Kafka", "Snowflake", "Azure", "Backend Development"]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Places I've worked and things I've shipped.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 animate-fade-in border-border/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Building className="w-4 h-4" />
                      {exp.company}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
