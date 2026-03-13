import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface ExperienceEntry {
  role: string;
  company: string;
  date: string;
  bullets: string[];
  tags: string[];
}

const experiences: ExperienceEntry[] = [
  {
    role: "IT Support & Software Developer",
    company: "Mendocino College (in collaboration with SETI Institute & NASA)",
    date: "Jan 2024 – Jun 2025",
    bullets: [
      "Developed Python analysis pipeline for CAMS spectrograph data with NASA/SETI teams — automated ingestion, preprocessing, calibration, and export",
      "Reduced processing time by ~95% and significantly increased dataset throughput",
      "Supported 27 faculty and 500+ students, resolving 1,200+ software issues annually",
    ],
    tags: ["Python", "Data Pipelines", "NASA/SETI", "Automation"],
  },
  {
    role: "AI Engineer Intern",
    company: "Reality AI Labs (Remote)",
    date: "Apr 2024 – Sep 2024",
    bullets: [
      "Built ReX, an AI career coach using OpenAI and Google Gemini, boosting throughput 40%",
      "Implemented RAG over resumes, job posts, and course content using LangChain/LlamaIndex + FAISS/Pinecone",
      "Built eval harness with A/B testing and Weights & Biases tracking",
      "Productionized FastAPI services with Redis + Docker on GCP/AWS; maintained p95 latency < 300ms",
    ],
    tags: ["Python", "FastAPI", "LangChain", "RAG", "GCP", "AWS", "Docker", "Redis"],
  },
  {
    role: "Software Engineer Intern",
    company: "Web3 Labs (San Francisco, CA)",
    date: "Feb 2024 – Jun 2024",
    bullets: [
      "Engineered backend services with Java/Spring Boot/Hibernate, reducing manual data handling 80%",
      "Integrated Kafka for high-speed pipelines (~40% faster transfers)",
      "Deployed Snowflake on Azure, cutting query latency ~25%",
    ],
    tags: ["Java", "Spring Boot", "Kafka", "Snowflake", "Azure"],
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-28 px-6"
      style={{ background: "#0d0d14" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#6ee7f7" }}>
            02 / Experience
          </p>
          <h2 className="section-heading">Where I've Worked</h2>
        </motion.div>

        {/* Timeline */}
        <div className="flex flex-col gap-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
                },
              }}
              className="relative pl-12"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                style={{
                  borderColor: "#6ee7f7",
                  background: "#0a0a0f",
                  boxShadow: "0 0 10px rgba(110, 231, 247, 0.3)",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#6ee7f7" }}
                />
              </div>

              {/* Connector line (not on last) */}
              {i < experiences.length - 1 && (
                <div
                  className="absolute left-2 top-6"
                  style={{
                    width: "1px",
                    bottom: "-48px",
                    background: "linear-gradient(to bottom, rgba(110,231,247,0.3), transparent)",
                  }}
                />
              )}

              {/* Card */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="text-lg font-semibold" style={{ color: "#f1f5f9" }}>
                    {exp.role}
                  </h3>
                  <span className="text-sm" style={{ color: "#6ee7f7" }}>
                    {exp.date}
                  </span>
                </div>
                <p className="text-sm font-medium mb-4" style={{ color: "#a78bfa" }}>
                  {exp.company}
                </p>
                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex gap-3 text-sm" style={{ color: "#94a3b8", lineHeight: 1.7 }}>
                      <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full" style={{ background: "#6ee7f7" }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="skill-badge">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
