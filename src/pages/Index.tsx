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
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <About />
        <section id="experience">
          <Experience />
        </section>
        <Projects />
        <section id="skills">
          <Skills />
        </section>
        <Awards />
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
