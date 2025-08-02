import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "TypeScript", "JavaScript", "SQL", "Rust", "Go"]
    },
    {
      title: "AI/ML & Data Science",
      skills: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "Prophet", "SHAP", "MLflow", "Hugging Face"]
    },
    {
      title: "Frontend Development",
      skills: ["React", "React Native", "Flutter", "Next.js", "Tailwind CSS", "Plotly", "D3.js"]
    },
    {
      title: "Backend & APIs",
      skills: ["FastAPI", "Node.js", "Express", "GraphQL", "REST APIs", "WebSocket", "gRPC"]
    },
    {
      title: "Databases & Storage",
      skills: ["PostgreSQL", "SQLite", "DuckDB", "Redis", "MongoDB", "Supabase", "Firebase"]
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
      skills: ["Computer Vision", "NLP", "LangGraph", "ONNX", "OAuth", "WebRTC", "Edge Computing"]
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

        {/* Additional expertise highlights */}
        <div className="mt-16 text-center">
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