import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export const Hero = () => {
  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-overlay"
      style={{ background: "#0a0a0f" }}
    >
      {/* Animated orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col items-center gap-6"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeInUp}
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: "#6ee7f7" }}
          >
            Rohnert Park, CA · Open to Opportunities
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="font-bold tracking-tight leading-none"
            style={{ fontSize: "clamp(42px, 8vw, 72px)", color: "#f1f5f9" }}
          >
            Evode Manirahari
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl font-medium"
            style={{ color: "#94a3b8" }}
          >
            Software Engineer · Builder · CS @ Sonoma State
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ color: "#64748b", lineHeight: 1.8 }}
          >
            I build AI-powered products and backend systems. Former researcher at NASA/SETI. Award-winning founder. Currently building at the intersection of AI and real-world impact.
          </motion.p>

          {/* Accent line */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <span className="accent-line" />
            <span className="text-xs tracking-widest uppercase" style={{ color: "#6ee7f7" }}>
              $15k Hanga Pitch Fest Winner · 95% Pipeline Speedup · NVIDIA Bridge '24
            </span>
            <span className="accent-line" style={{ transform: "rotate(180deg)" }} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <button className="btn-cyan" onClick={scrollToProjects}>
              View My Work
              <ArrowDown size={16} />
            </button>
            <button className="btn-outline" onClick={scrollToContact}>
              Get In Touch
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp} className="flex items-center gap-5 mt-2">
            <a
              href="https://github.com/Evode-Manirahari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors duration-200"
              style={{ color: "#64748b" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6ee7f7")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/evode-manirahari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors duration-200"
              style={{ color: "#64748b" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6ee7f7")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:manirahari@sonoma.edu"
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "#64748b" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6ee7f7")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
            >
              manirahari@sonoma.edu
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToProjects}
        style={{ color: "#64748b" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
};
