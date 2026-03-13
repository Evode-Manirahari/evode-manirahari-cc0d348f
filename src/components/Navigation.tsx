import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10, 10, 15, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(110, 231, 247, 0.08)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="text-lg font-bold tracking-tight"
          style={{ color: "#6ee7f7" }}
        >
          Evode Manirahari
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "#94a3b8" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6ee7f7")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          style={{ color: "#94a3b8" }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{
            background: "rgba(10, 10, 15, 0.95)",
            borderTop: "1px solid rgba(110, 231, 247, 0.08)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left text-sm font-medium py-1 transition-colors duration-200"
              style={{ color: "#94a3b8" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6ee7f7")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
