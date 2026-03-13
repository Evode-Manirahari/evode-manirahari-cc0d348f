import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "Java", "TypeScript", "C++", "JavaScript", "SQL", "HTML"],
  },
  {
    title: "Frameworks",
    skills: ["FastAPI", "Spring Boot", "React", "React Native"],
  },
  {
    title: "AI / ML",
    skills: [
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "LlamaIndex",
      "FAISS",
      "Pinecone",
      "OpenAI API",
      "Gemini",
      "RAG",
      "Weights & Biases",
    ],
  },
  {
    title: "Cloud & Data",
    skills: ["AWS", "GCP", "Docker", "PostgreSQL", "Snowflake", "Kafka", "Redis", "Azure"],
  },
  {
    title: "DevOps",
    skills: ["Git", "GitHub Actions", "CI/CD", "Vercel"],
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 px-6"
      style={{ background: "#0d0d14" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#6ee7f7" }}>
            04 / Skills
          </p>
          <h2 className="section-heading">What I Work With</h2>
        </motion.div>

        <div className="flex flex-col gap-10">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: "easeOut", delay: i * 0.08 },
                },
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Category label */}
              <div className="sm:w-40 shrink-0">
                <span className="text-sm font-semibold" style={{ color: "#6ee7f7" }}>
                  {cat.title}
                </span>
              </div>

              {/* Badge list */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
