import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Multi-Agent Cybersecurity Platform",
      description: "Built for UC Berkeley's AI Hackathon. Simulates 9 social engineering attack scenarios using GPT-4 agents so organizations can train employees against manipulation tactics.",
      tech: ["FastAPI", "WebSocket", "Three.js", "Docker", "PostgreSQL", "GPT-4"],
      highlights: [
        "FastAPI + WebSocket backend, Three.js frontend, separate GPT-4 agents driving each attack scenario",
        "Containerized with Docker and PostgreSQL — structured so swapping in a different LLM is straightforward",
        "Generates a security report after each session showing which tactics worked and what vulnerabilities showed up"
      ],
      impact: "",
      metrics: "",
      problem: "",
      solution: "",
      githubUrl: "https://github.com/Evode-Manirahari/social-agent",
      liveUrl: "https://social-agent-flax.vercel.app"
    },
    {
      title: "Dejavas",
      description: "Marketing content tool with AI agents that analyze tone, voice, and brand fit. Includes a browser extension that works like Grammarly but checks content against your brand's persona.",
      tech: ["FastAPI", "LangGraph", "PostgreSQL", "Redis", "Prometheus", "Grafana"],
      highlights: [
        "FastAPI + LangGraph backend with 22+ endpoints, agents that build brand personas and score content against them",
        "Browser extension with real-time scanning, integrates with Slack, Discord, Shopify, and WordPress",
        "Postgres + Redis, observability with Prometheus/Grafana, 300+ tests"
      ],
      impact: "",
      metrics: "",
      problem: "",
      solution: "",
      githubUrl: "https://github.com/Evode-Manirahari/dejavas",
      liveUrl: ""
    },
    {
      title: "CodeQuest Jr.",
      description: "Teaches kids Python through a 25-level game. Python runs directly in the browser via Pyodide — no installs, no setup needed.",
      tech: ["React", "TypeScript", "Pyodide", "Vite", "Canvas", "Web Audio"],
      highlights: [
        "React/TypeScript, 25+ components, Pyodide web workers for in-browser Python execution — whole bundle is ~0.5MB",
        "Hidden autograder checks solutions; hints unlock progressively so kids have to think first",
        "25 levels going from drag-and-drop blocks to real Python, with Canvas animations and sound effects",
        "Deployed on Vercel with GitHub Actions CI and per-PR preview deploys"
      ],
      impact: "",
      metrics: "",
      problem: "",
      solution: "",
      githubUrl: "https://github.com/Evode-Manirahari/littlekids",
      liveUrl: "https://littlekids-n4rq.vercel.app"
    },
    {
      title: "FunHealth",
      description: "A web game that teaches Rwandan teenagers about sexual and reproductive health. Built with local nonprofits, available in Kinyarwanda and English.",
      tech: ["JavaScript", "HTML5 Canvas", "Game Development", "Health Tech", "Localization"],
      highlights: [
        "Board-game format built with HTML5 Canvas — SRHR and mental health topics as quiz challenges",
        "Includes a service-finder screen so users can look up actual health providers near them",
        "65% improvement in health knowledge scores in pilot sessions",
        "Won Most Innovative Solution at iAccelerator bootcamp and $15K at Hanga Pitchfest 2024"
      ],
      impact: "",
      metrics: "",
      problem: "",
      solution: "",
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
            Things I've built.
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