import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 px-6"
      style={{ background: "#0d0d14" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-sm font-medium tracking-widest uppercase" style={{ color: "#6ee7f7" }}>
            06 / Contact
          </p>

          <h2
            className="font-bold leading-tight"
            style={{ fontSize: "clamp(32px, 6vw, 48px)", color: "#f1f5f9" }}
          >
            Let's Build Something
          </h2>

          <p className="text-base max-w-lg" style={{ color: "#64748b", lineHeight: 1.8 }}>
            Open to internships, research collaborations, and conversations about what we're both building.
          </p>

          {/* Primary CTA */}
          <a
            href="mailto:manirahari@sonoma.edu"
            className="btn-cyan mt-2"
          >
            <Mail size={16} />
            manirahari@sonoma.edu
          </a>

          {/* Social links */}
          <div className="flex items-center gap-6 mt-2">
            <a
              href="https://github.com/Evode-Manirahari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: "#64748b" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6ee7f7")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/evode-manirahari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: "#64748b" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6ee7f7")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
