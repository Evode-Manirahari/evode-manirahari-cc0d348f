import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Deja: Voice Assistant for Email & Calendar",
      description: "Mobile app that revolutionizes email management through voice interaction, providing intelligent inbox summaries, automated reply drafting, and seamless scheduling.",
      tech: ["React Native", "Flutter", "FastAPI", "OpenAI API", "OAuth", "PostgreSQL"],
      highlights: [
        "Voice-to-text processing for hands-free email management",
        "AI-powered inbox summarization and priority detection",
        "Auto-draft replies with user confirmation workflow",
        "Scheduled email sending with smart timing suggestions",
        "Smart follow-up recommendations and contact relationship mapping"
      ],
      impact: "Demonstrates full-stack mobile development, OAuth implementation, LLM integration with safety guardrails, and practical productivity automation."
    },
    {
      title: "Tubeho: AI Infrastructure Scanner",
      description: "Computer vision system that analyzes road and bridge infrastructure through mobile video capture, automatically detecting structural issues and generating comprehensive reports.",
      tech: ["PyTorch", "TensorFlow", "ONNX", "FastAPI", "PostgreSQL", "Computer Vision"],
      highlights: [
        "Real-time crack and pothole detection in infrastructure videos",
        "Geospatial mapping of identified issues with GPS integration",
        "Automated PDF report generation for maintenance teams",
        "On-device inference optimization for mobile deployment",
        "Human-in-the-loop learning for continuous model improvement"
      ],
      impact: "Showcases end-to-end computer vision pipeline, MLOps practices, edge deployment, and practical public infrastructure impact."
    },
    {
      title: "EvyGrid Mini: Energy Use Optimizer",
      description: "Data-driven energy management platform that ingests smart meter data to forecast usage patterns and recommend cost-saving strategies for optimal energy consumption.",
      tech: ["Python", "Prophet", "XGBoost", "FastAPI", "PostgreSQL", "Plotly", "React"],
      highlights: [
        "Time-series forecasting with Prophet and XGBoost models",
        "Interactive 'what-if' tariff simulator for cost analysis",
        "Top 3 actionable energy-saving recommendations",
        "Real-time dashboard with usage visualization",
        "Reinforcement learning for automated scheduling optimization"
      ],
      impact: "Demonstrates time-series analysis expertise, optimization algorithms, model explainability, and sustainable technology applications."
    },
    {
      title: "Multi-Agent Marketing Simulator",
      description: "Advanced simulation platform using LangGraph to model synthetic user personas reacting to marketing creatives, providing predictive engagement analytics.",
      tech: ["LangGraph", "Python", "Redis", "Streamlit", "Vercel", "Agent Systems"],
      highlights: [
        "Configurable synthetic user personas with realistic behavior patterns",
        "A/B testing framework for creative performance evaluation",
        "Engagement lift predictions with confidence intervals",
        "CSV export for integration with existing analytics workflows",
        "Model calibration against public marketing datasets"
      ],
      impact: "Proves expertise in agent-based systems, experimental design, evaluation methodologies, and marketing technology."
    },
    {
      title: "C++ Airline Route Planner",
      description: "High-performance route optimization system implementing advanced graph algorithms to find optimal flight paths based on cost, time, and distance constraints.",
      tech: ["Modern C++17/20", "Catch2", "GoogleTest", "Graph Algorithms", "CLI", "Web UI"],
      highlights: [
        "Multi-objective optimization: cheapest, fastest, and shortest paths",
        "Robust CSV parsing and data validation",
        "Comprehensive unit testing and performance benchmarking",
        "Contraction hierarchies and A* with custom heuristics",
        "Optional web interface for interactive route planning"
      ],
      impact: "Showcases advanced data structures knowledge, algorithm optimization, clean code practices, and performance engineering."
    },
    {
      title: "Data Engineering Pipeline: Open Data Warehouse",
      description: "Production-ready ETL pipeline processing public datasets with modern data engineering practices, featuring automated workflows and comprehensive analytics.",
      tech: ["Python", "Airflow", "Prefect", "DuckDB", "dbt", "Metabase", "Superset"],
      highlights: [
        "Scalable ETL for NYC TLC trip data and other public datasets",
        "dbt models with data quality testing and documentation",
        "One-click dashboard deployment for stakeholder access",
        "Incremental data processing with change data capture",
        "CI/CD pipeline with automated SQL testing"
      ],
      impact: "Demonstrates data engineering fundamentals, pipeline reliability, analytics engineering, and business intelligence delivery."
    },
    {
      title: "NeuroPathAI: Responsible ML for Healthcare",
      description: "Ethical AI system processing synthetic clinical and genomic data with emphasis on bias detection, model interpretability, and responsible deployment practices.",
      tech: ["scikit-learn", "XGBoost", "SHAP", "Hydra", "FastAPI", "MLflow"],
      highlights: [
        "Comprehensive bias detection across demographic groups",
        "SHAP-based model interpretability and feature importance",
        "Rigorous model evaluation with calibration metrics",
        "Detailed model cards with ethics and limitations documentation",
        "Federated learning simulation for privacy-preserving training"
      ],
      impact: "Highlights responsible AI practices, healthcare domain expertise, model interpretability, and ethical ML deployment."
    },
    {
      title: "Multi-Agent Social Dynamics Lab 🤖",
      description: "Educational research platform for studying social manipulation tactics using multi-agent AI systems. Watch AI agents interact, manipulate, and influence each other in real-time through controlled social experiments.",
      tech: ["LangGraph", "Python", "WebSocket", "React", "FastAPI", "Redis", "D3.js"],
      highlights: [
        "9 social experiments: credential theft, phishing, insider threats, peer pressure",
        "Authority bias simulation and workplace rumor propagation studies",
        "Trust exploitation, groupthink, and bribery scenario modeling",
        "Real-time agent conversations with natural language processing",
        "AI moderator analysis providing insights on manipulation tactics",
        "Visual flow diagrams showing attack patterns and influence networks",
        "Security recommendations and prevention strategies generation",
        "Exportable reports for educational and training purposes"
      ],
      impact: "Demonstrates advanced multi-agent systems, social psychology modeling, educational technology, and cybersecurity awareness training capabilities.",
      githubUrl: "https://github.com/1-5Pool/SocialExperimentAgents"
    }
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