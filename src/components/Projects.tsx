import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "UC Berkeley AI Hackathon - Multi-Agent Cybersecurity Platform",
      description: "Full-Stack Multi-Agent AI Cybersecurity Platform (Social Agent) built for UC Berkeley AI Hackathon, simulating 9 social engineering scenarios with GPT-4 powered agents.",
      tech: ["FastAPI", "WebSocket", "Three.js", "Docker", "PostgreSQL", "GPT-4"],
      highlights: [
        "Built FastAPI/WebSocket + Three.js system simulating 9 social engineering scenarios with GPT-4 powered agents",
        "Designed scalable microservices with Docker & PostgreSQL, enabling seamless transition from demo mock agents to enterprise LLM deployment",
        "Delivered AI-powered analytics with conversation analysis, vulnerability detection, and automated security reports for organizational training"
      ],
      impact: "Advanced cybersecurity training platform demonstrating multi-agent systems, social engineering simulation, and enterprise-grade architecture.",
      metrics: "9 social experiments • Enterprise-ready • AI-powered analytics",
      problem: "Cybersecurity training lacks realistic simulation of social engineering and manipulation tactics",
      solution: "Multi-agent system that simulates realistic social dynamics for educational and research purposes",
      githubUrl: "https://github.com/Evode-Manirahari/social-agent",
      liveUrl: "https://social-agent-flax.vercel.app"
    },
    {
      title: "Dejavas: AI Marketing Intelligence Platform",
      description: "AI Marketing Intelligence Platform built with FastAPI + LangGraph system featuring autonomous AI agents, deep persona DNA, and 22+ production-ready APIs.",
      tech: ["FastAPI", "LangGraph", "PostgreSQL", "Redis", "Prometheus", "Grafana"],
      highlights: [
        "Built FastAPI + LangGraph system with autonomous AI agents, deep persona DNA, and 22+ production-ready APIs",
        "Delivered Grammarly-like extension with real-time content scanning, multi-language/voice analysis, and integrations across Slack, Discord, Shopify, and WordPress",
        "Deployed PostgreSQL, Redis, Prometheus, Grafana, and CI/CD pipelines with 300+ tests"
      ],
      impact: "Comprehensive marketing intelligence platform demonstrating AI agent systems, real-time content analysis, and enterprise integrations.",
      metrics: "22+ APIs • 300+ tests • Multi-platform integration",
      problem: "Marketing teams need intelligent content analysis and multi-platform integration capabilities",
      solution: "AI-powered marketing intelligence platform with autonomous agents and comprehensive integrations",
      githubUrl: "https://github.com/Evode-Manirahari/dejavas",
      liveUrl: ""
    },
    {
      title: "CodeQuest Jr.: Gamified Python Learning for Kids",
      description: "Gamified Python Learning platform for kids (Littlekids) featuring React+TypeScript SPA with Pyodide workers for client-side Python execution.",
      tech: ["React", "TypeScript", "Pyodide", "Vite", "Canvas", "Web Audio"],
      highlights: [
        "Architected React+TypeScript SPA (25+ components) with Pyodide workers for client-side Python; Vite-optimized to ~0.5 MB",
        "Added hidden autograder + staged hints for educational progression",
        "Shipped 25 levels (drag-and-drop → Python), Canvas/Web Audio effects, progress saves, and educator analytics",
        "Deployed on Vercel with GitHub Actions CI and per-PR preview deploys"
      ],
      impact: "Educational platform for teaching Python to children, demonstrating modern web development, educational technology, and progressive learning design.",
      metrics: "25 levels • 0.5MB optimized • 25+ components",
      problem: "Children need engaging, interactive ways to learn programming fundamentals",
      solution: "Gamified learning platform with progressive difficulty and interactive Python execution",
      githubUrl: "https://github.com/Evode-Manirahari/littlekids",
      liveUrl: "https://littlekids-n4rq.vercel.app"
    },
    {
      title: "FunHealth: SRHR Education Platform",
      description: "Board-game style quizzes and service finder connecting Rwandan youth to Sexual and Reproductive Health and Rights (SRHR) care, built with HTML5 Canvas and JavaScript.",
      tech: ["JavaScript", "HTML5 Canvas", "Game Development", "Health Tech", "Localization"],
      highlights: [
        "Built HTML5 Canvas + JavaScript web game to teach Sexual and Reproductive Health and Rights (SRHR) & mental health topics",
        "Drove a 65% improvement in adolescent SRHR in pilot sessions",
        "Designed board-game-style quizzes, progress tracking, and a service-finder screen",
        "Collaborated with Rwanda-based youth nonprofit organizations to localize content (Kinyarwanda/English)",
        "Recognized as the 'Most Innovative Solution' during iAccelerator bootcamp (May 2024), securing $15000 from Hanga Pitchfest 2024"
      ],
      impact: "Significant improvement in adolescent health education, demonstrating social impact through technology and community collaboration.",
      metrics: "65% improvement in SRHR • $15K funding • Multi-language support",
      problem: "Rwandan youth lack accessible education about sexual and reproductive health and rights",
      solution: "Interactive educational platform with gamified learning and local service connections",
      githubUrl: "",
      liveUrl: "https://kundwahealth.org/funhealth/index.html"
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects demonstrating expertise across AI/ML, full-stack development, 
            data engineering, and systems programming. Each project tackles real-world challenges 
            with modern technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};