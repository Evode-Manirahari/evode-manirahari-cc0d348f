import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface Project {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  badge?: string;
  featured?: boolean;
  githubUrl?: string;
  note?: string;
}

const projects: Project[] = [
  {
    title: "FunHealth",
    tagline: "Award-winning health education platform · Kigali, Rwanda",
    badge: "🏆 $15k — Hanga Pitch Fest '24",
    description:
      "Interactive HTML5 Canvas board-game quiz teaching sexual & reproductive health rights (SRHR) in Rwanda. Increased engagement 40% and retention 25% within first 3 months.",
    stack: ["HTML5 Canvas", "JavaScript", "Web APIs"],
    featured: true,
    note: "Lead Developer · Oct 2024–Present",
  },
  {
    title: "UC Berkeley AI Hackathon",
    tagline: "Real-time social engineering simulator",
    badge: "🏅 UC Berkeley Hackathon '25",
    description:
      "Built a real-time GPT-4 multi-agent social-engineering simulator with Python, FastAPI/WebSocket, and Three.js. Scalable microservices with Docker & PostgreSQL. AI-powered vulnerability detection and automated security reports.",
    stack: ["Python", "FastAPI", "WebSocket", "Three.js", "Docker", "PostgreSQL", "GPT-4"],
    githubUrl: "https://github.com/1-5Pool/SocialExperimentAgents",
  },
  {
    title: "CodeQuest Jr.",
    tagline: "Gamified Python learning for kids",
    description:
      "React/TypeScript SPA with 25 components and Pyodide web workers. 25 levels with drag-and-drop, hidden autograder, Canvas/Web Audio, progress saves, and educator analytics. Deployed via GitHub Actions CI.",
    stack: ["React", "TypeScript", "Pyodide", "Vite", "Vercel", "GitHub Actions"],
    note: "~0.5 MB production bundle",
  },
  {
    title: "Actober AI",
    tagline: "Real-time AI vision coaching for skilled trade workers",
    description:
      "Phone-mounted camera + GPT-4o vision + voice I/O coaching electricians through tasks in real time. React Native MVP complete.",
    stack: ["React Native", "Expo", "GPT-4o", "Python", "Voice I/O"],
    githubUrl: "https://github.com/Evode-Manirahari/actober",
  },
  {
    title: "ReX — AI Career Coach",
    tagline: "AI career coaching with RAG · Reality AI Labs",
    description:
      "Built at Reality AI Labs — personalized career coach using OpenAI + Gemini, RAG over resumes/job posts, vector search with FAISS/Pinecone, production-deployed on GCP.",
    stack: ["Python", "LangChain", "LlamaIndex", "FAISS", "Pinecone", "FastAPI", "Weights & Biases"],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut", delay: index * 0.08 },
      },
    }}
    className={`glass-card rounded-xl p-6 flex flex-col gap-4 ${
      project.featured
        ? "border-[rgba(110,231,247,0.2)] md:col-span-2"
        : ""
    }`}
    style={
      project.featured
        ? { borderColor: "rgba(110, 231, 247, 0.2)" }
        : undefined
    }
  >
    {/* Badge */}
    {project.badge && (
      <span
        className="inline-block text-xs font-semibold px-3 py-1 rounded-full w-fit"
        style={{
          background: "rgba(110, 231, 247, 0.1)",
          color: "#6ee7f7",
          border: "1px solid rgba(110,231,247,0.25)",
        }}
      >
        {project.badge}
      </span>
    )}

    {/* Title + tagline */}
    <div>
      <div className="flex items-start justify-between gap-3">
        <h3
          className="text-lg font-semibold"
          style={{ color: project.featured ? "#6ee7f7" : "#f1f5f9" }}
        >
          {project.title}
        </h3>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 mt-0.5 transition-colors duration-200"
            style={{ color: "#64748b" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#6ee7f7")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
        )}
      </div>
      <p className="text-xs mt-0.5" style={{ color: "#a78bfa" }}>
        {project.tagline}
      </p>
    </div>

    {/* Description */}
    <p className="text-sm leading-relaxed flex-1" style={{ color: "#94a3b8", lineHeight: 1.75 }}>
      {project.description}
    </p>

    {/* Stack */}
    <div className="flex flex-wrap gap-2">
      {project.stack.map((tech) => (
        <span key={tech} className="skill-badge">
          {tech}
        </span>
      ))}
    </div>

    {/* Note */}
    {project.note && (
      <p className="text-xs" style={{ color: "#64748b" }}>
        {project.note}
      </p>
    )}
  </motion.div>
);

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-28 px-6"
      style={{ background: "#0a0a0f" }}
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
            03 / Projects
          </p>
          <h2 className="section-heading">Things I've Built</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
