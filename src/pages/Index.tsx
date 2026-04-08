import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Awards } from "@/components/Awards";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <Projects />
        <section id="skills">
          <Skills />
        </section>
        <section id="awards">
          <Awards />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer className="py-8 px-6 text-center text-sm text-muted-foreground border-t border-border/40">
        <p>© 2026 Evode Manirahari</p>
      </footer>
    </div>
  );
};

export default Index;
