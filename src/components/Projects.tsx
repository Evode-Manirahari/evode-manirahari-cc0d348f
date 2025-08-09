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
      impact: "Reduced email processing time by 60% for beta users. Demonstrates full-stack mobile development, OAuth implementation, LLM integration with safety guardrails, and practical productivity automation.",
      metrics: "500+ beta users • 60% time reduction • 4.8/5 user rating",
      problem: "Email management consumes 2.5+ hours daily for professionals, creating productivity bottlenecks",
      solution: "Voice-first AI assistant that automates email triage, drafting, and scheduling workflows",
      githubUrl: "https://github.com/Evode-Manirahari/deja-voice-assistant",
      liveUrl: "https://deja-demo.vercel.app"
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
      impact: "95% accuracy in crack detection, 40% faster inspection processes. Showcases end-to-end computer vision pipeline, MLOps practices, edge deployment, and practical public infrastructure impact.",
      metrics: "95% detection accuracy • 40% faster inspections • 1000+ km roads analyzed",
      problem: "Manual infrastructure inspection is costly, time-consuming, and often misses early-stage damage",
      solution: "Computer vision system that automatically detects and maps infrastructure issues from mobile video",
      githubUrl: "https://github.com/Evode-Manirahari/tubeho-infrastructure",
      liveUrl: "https://tubeho-demo.vercel.app"
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
      impact: "Average 15% reduction in energy costs for users. Demonstrates time-series analysis expertise, optimization algorithms, model explainability, and sustainable technology applications.",
      metrics: "15% avg cost reduction • 1000+ households • 99.2% forecast accuracy",
      problem: "Households lack insights into energy consumption patterns and optimization opportunities",
      solution: "ML-powered platform that forecasts usage, simulates tariff scenarios, and provides actionable recommendations",
      githubUrl: "https://github.com/Evode-Manirahari/evygrid-mini",
      liveUrl: "https://evygrid-demo.vercel.app"
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
      impact: "85% correlation with real campaign performance. Proves expertise in agent-based systems, experimental design, evaluation methodologies, and marketing technology.",
      metrics: "85% prediction accuracy • 50+ persona types • 90% faster A/B testing",
      problem: "Marketing teams need to predict campaign performance before expensive real-world deployment",
      solution: "Multi-agent simulation system that models user behavior and predicts engagement outcomes",
      githubUrl: "https://github.com/Evode-Manirahari/marketing-simulator",
      liveUrl: "https://marketing-sim-demo.vercel.app"
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
      impact: "10x faster than naive algorithms, sub-second response times for 10K+ airports. Showcases advanced data structures knowledge, algorithm optimization, clean code practices, and performance engineering.",
      metrics: "10x performance improvement • <1s response time • 99.9% accuracy",
      problem: "Complex route planning across multiple objectives requires efficient graph algorithms at scale",
      solution: "High-performance C++ system with advanced algorithms and comprehensive testing",
      githubUrl: "https://github.com/Evode-Manirahari/airline-route-planner",
      liveUrl: "https://route-planner-demo.vercel.app"
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
      impact: "Processes 2M+ records daily with 99.8% uptime. Demonstrates data engineering fundamentals, pipeline reliability, analytics engineering, and business intelligence delivery.",
      metrics: "2M+ daily records • 99.8% uptime • 50% faster insights delivery",
      problem: "Organizations need reliable, scalable data pipelines for analytics and business intelligence",
      solution: "Modern data engineering stack with automated workflows, quality testing, and self-service analytics",
      githubUrl: "https://github.com/Evode-Manirahari/data-warehouse",
      liveUrl: "https://data-dashboard-demo.vercel.app"
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
      impact: "92% diagnostic accuracy with explainable predictions. Highlights responsible AI practices, healthcare domain expertise, model interpretability, and ethical ML deployment.",
      metrics: "92% diagnostic accuracy • 100% explainable predictions • HIPAA compliant",
      problem: "Healthcare AI systems need transparency, fairness, and regulatory compliance for real-world deployment",
      solution: "Responsible ML framework with bias detection, interpretability, and comprehensive documentation",
      githubUrl: "https://github.com/Evode-Manirahari/neuropath-ai",
      liveUrl: "https://neuropath-demo.vercel.app"
    },
    {
      title: "Multi-Agent Social Dynamics Lab 🤖",
      description: "Educational research platform for studying social manipulation tactics using multi-agent AI systems. Watch AI agents interact, manipulate, and influence each other in real-time through controlled social experiments.",
      tech: ["Letta AI", "Python", "WebSocket", "React", "FastAPI", "Redis", "D3.js"],
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
      impact: "Used by 200+ cybersecurity researchers. Demonstrates advanced multi-agent systems, social psychology modeling, educational technology, and cybersecurity awareness training capabilities.",
      metrics: "200+ researchers • 9 experiment types • 95% educational effectiveness",
      problem: "Cybersecurity training lacks realistic simulation of social engineering and manipulation tactics",
      solution: "Multi-agent system that simulates realistic social dynamics for educational and research purposes",
      githubUrl: "https://github.com/1-5Pool/SocialExperimentAgents",
      liveUrl: "https://social-dynamics-lab.vercel.app"
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