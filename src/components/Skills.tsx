import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "SQL", "C++", "Go", "Bash"]
    },
    {
      title: "AI/ML & Data Science",
      skills: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "Prophet", "SHAP", "MLflow", "Hugging Face"]
    },
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "Plotly", "D3.js"]
    },
    {
      title: "Backend & APIs",
      skills: ["Django", "Express.js", "FastAPI", "Node.js", "REST APIs", "WebSocket"]
    },
    {
      title: "Databases & Storage",
      skills: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "DuckDB", "Supabase"]
    },
    {
      title: "Cloud & Infrastructure",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "GitHub Actions", "Vercel"]
    },
    {
      title: "Data Engineering",
      skills: ["Airflow", "Prefect", "dbt", "Apache Spark", "Kafka", "ETL/ELT", "Data Warehousing"]
    },
    {
      title: "Specialized Technologies",
      skills: ["LangChain", "Pandas", "NumPy", "OpenCV", "Git/GitHub", "VS Code", "CLion", "PyCharm", "Figma"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, AI/ML, data engineering, 
            and systems programming. Always eager to learn and adopt new technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Education</h3>
          <div className="max-w-4xl mx-auto mb-12 space-y-6">
            {/* Sonoma State University */}
            <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      🎓
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground">Bachelor of Science in Computer Science</h4>
                      <p className="text-primary font-semibold">Sonoma State University</p>
                      <p className="text-sm text-muted-foreground">Rohnert Park, CA • Expected May 2027</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                    <Badge variant="secondary" className="bg-accent/20 text-accent-foreground font-medium">
                      🧠 AI/ML Specialization Track
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary font-medium">
                      📅 Currently Pursuing
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm italic">
                    Relevant Coursework: Intro to Unix, Data Structure, Software Design & Development, Database Management System, Computer Science Colloquium
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Mendocino College */}
            <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      🏛️
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground">AS for Transfer in Computer Science</h4>
                      <p className="text-accent font-semibold">Mendocino College</p>
                      <p className="text-sm text-muted-foreground">Ukiah, CA • May 2025</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                    <Badge variant="secondary" className="bg-primary/20 text-primary-foreground font-medium">
                      ✅ Completed
                    </Badge>
                    <Badge variant="outline" className="border-accent/30 text-accent font-medium">
                      🎯 Transfer Degree
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm italic">
                    Relevant Coursework: Programming & Algorithms I&II, Computer Organization & Architecture, Calculus 1&2, Discrete Math
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional expertise highlights */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Areas of Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-primary">AI/ML Engineering</h4>
              <p className="text-muted-foreground text-sm">
                End-to-end ML pipelines, computer vision, NLP, responsible AI, and production deployment
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-primary">Full-Stack Development</h4>
              <p className="text-muted-foreground text-sm">
                Modern web and mobile applications with scalable architectures and optimal user experiences
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-primary">Data Engineering</h4>
              <p className="text-muted-foreground text-sm">
                Large-scale data processing, ETL pipelines, data warehousing, and analytics infrastructure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};