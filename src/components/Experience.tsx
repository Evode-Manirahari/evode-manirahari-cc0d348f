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
        "Built and maintained software for analyzing spectroscopic data from the CAMS spectrograph, supporting research at SETI Institute and NASA",
        "Optimized analysis workflow, reducing processing time by ~95% and increasing dataset throughput",
        "Supported 27 faculty and 500+ students with technical issues, coordinating with campus IT"
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
        "Supported a cohort of 50+ students through weekly small-group sessions and 1:1 tutoring in Calculus I-II and Data Structures & Algorithms",
        "Led coding labs primarily in C++ (with examples in Java and Python) on stacks, queues, hash tables, binary trees, and graphs",
        "Emphasized problem-solving and Big-O analysis, unblocking students on lab assignments through code review and debugging guidance"
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
        "Oversaw budget serving 2.1M+ students across 116 colleges, driving full transparency with monthly reports",
        "Streamlined reimbursements with new systems, boosting fund utilization by 68% and launching 'Budget 101' workshops",
        "Built live financial dashboards and expanded funding access, enabling student-led events and statewide outreach"
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
        "Built ReX, an AI career coach powered by OpenAI API + Google Gemini, delivering personalized coaching, mentorship, and job-search support",
        "Implemented adaptive ML that tailored guidance to each learner's goals and progress, boosting coaching throughput by 40%",
        "Shipped RAG over resumes, job posts, and course content using LangChain/LlamaIndex, embeddings, and vector DB (FAISS/Pinecone)",
        "Designed eval harness with unit tests + A/B testing and Weights & Biases tracking; instrumented telemetry for quality and latency",
        "Productionized APIs with Python/FastAPI, Redis caching, Docker, and GCP/AWS services; monitored reliability and kept p95 latency low"
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
        "Engineered robust backend systems with Java, Spring Boot, and Hibernate, slashing manual data handling by 80% and boosting development efficiency",
        "Integrated Kafka for high-speed, real-time data pipelines—40% faster transfers—and deployed Snowflake on Azure to cut query latency by 25%",
        "Delivered cloud-ready, enterprise-grade services that dramatically improved data flow reliability and operational agility"
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
            A diverse range of professional experiences spanning AI/ML engineering, software development, 
            leadership roles, and educational technology. Each role has contributed to my growth as a 
            well-rounded technologist and leader.
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
      <p className="text-center text-sm text-muted-foreground mt-16">
        © 2025. All rights reserved.
      </p>
    </section>
  );
};
