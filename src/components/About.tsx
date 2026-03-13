import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stats = [
  { value: "3", label: "Internships" },
  { value: "$15k", label: "Hanga Pitch Fest '24" },
  { value: "95%", label: "Pipeline Speedup @ NASA/SETI" },
  { value: "NVIDIA", label: "Summer Bridge '24" },
];

export const About = () => {
  return (
    <section
      id="about"
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
            01 / About
          </p>
          <h2 className="section-heading">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-5"
          >
            <p className="text-base leading-relaxed" style={{ color: "#94a3b8", lineHeight: 1.8 }}>
              I'm a Computer Science junior at Sonoma State University with hands-on experience across backend engineering, applied ML, and radio astronomy research with NASA/SETI Institute.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#94a3b8", lineHeight: 1.8 }}>
              I've built production systems at Reality AI Labs (RAG pipelines, FastAPI on GCP/AWS), engineered backend services at Web3 Labs (Java/Spring Boot, Kafka, Snowflake), and automated data pipelines for SETI research that cut processing time by 95%.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#94a3b8", lineHeight: 1.8 }}>
              Outside of engineering, I've led student government as Treasurer of SSCCC Region I and Activities Director at Mendocino College. I'm driven by building technology that reaches people who need it most — from health education in Rwanda to AI tools for American workers.
            </p>
          </motion.div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, ease: "easeOut", delay: i * 0.1 },
                  },
                }}
                className="glass-card rounded-xl p-6"
              >
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: "#6ee7f7" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: "#64748b" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
