import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface AwardItem {
  emoji: string;
  title: string;
  subtitle: string;
}

const awards: AwardItem[] = [
  {
    emoji: "🏆",
    title: "Hanga Pitch Fest 2024 — $15k Winner",
    subtitle: "FunHealth · Kigali, Rwanda",
  },
  {
    emoji: "🎓",
    title: "NVIDIA Summer Bridge Program",
    subtitle: "Participant · 2024",
  },
  {
    emoji: "🏅",
    title: "2× National Bank of Rwanda Schools Quiz Challenge",
    subtitle: "Winner · 2020, 2021",
  },
  {
    emoji: "🎙️",
    title: "Treasurer, SSCCC Region I",
    subtitle: "Student Senate for California Community Colleges · 2024–2025",
  },
  {
    emoji: "📣",
    title: "Activities Director, ASMC",
    subtitle: "Associated Students of Mendocino College · 2024–2025",
  },
  {
    emoji: "🤝",
    title: "ColorStack Member · NSBE Member",
    subtitle: "Professional student orgs",
  },
  {
    emoji: "💻",
    title: "CodePath Technical Interview Prep",
    subtitle: "Intermediate level · 2025",
  },
];

export const Awards = () => {
  return (
    <section
      id="awards"
      className="py-28 px-6"
      style={{ background: "#0a0a0f" }}
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
            05 / Recognition
          </p>
          <h2 className="section-heading">Awards & Leadership</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {awards.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: "easeOut", delay: i * 0.07 },
                },
              }}
              className="glass-card rounded-xl p-5 flex gap-4 items-start"
            >
              <span className="text-2xl mt-0.5">{item.emoji}</span>
              <div>
                <p className="text-sm font-semibold" style={{ color: "#f1f5f9" }}>
                  {item.title}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#64748b" }}>
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
