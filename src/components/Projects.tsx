import { motion } from "framer-motion";
import ProjectCard from "./ProjectsCard";
import projectsData from "../data/projects.json";
import type { Project } from "../types";

const projects = projectsData as Project[];

function Projects() {
  return (
    <section id="projetos" className="relative px-6 py-24 sm:py-32 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl mb-14"
      >
        <h2 className="font-display text-3xl sm:text-4xl mb-4">Projetos</h2>
        <p className="font-body text-white/70 leading-relaxed">
          {/* [EDITAR: texto sobre a história do Hyago] */}
          Ao longo da trajetória, cada projeto carrega um pouco da forma como
          o design pode transformar ideias em experiências visuais marcantes.
          Aqui estão alguns dos trabalhos que contam essa história.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;