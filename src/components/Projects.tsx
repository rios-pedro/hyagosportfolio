import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Papa from "papaparse";
import ProjectCard from "./ProjectsCard";
import type { Project } from "../types";

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTorNAZN-sp2liPjbkTs2vocdHa69UksmAymwG3NLHKPH1fSjSRLCjVnxlPxwy9b6e-vy-2yuoD1jD8/pub?gid=0&single=true&output=csv";

interface SheetRow {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string;
  link: string;
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    Papa.parse<SheetRow>(SHEET_CSV_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const parsed: Project[] = result.data
          .filter((row) => row.title)
          .map((row) => ({
            id: Number(row.id),
            title: row.title,
            description: row.description,
            image: row.image,
            tags: row.tags
              ? row.tags.split(",").map((t) => t.trim())
              : [],
            link: row.link,
          }));
        setProjects(parsed);
        setLoading(false);
      },
      error: () => {
        setError(true);
        setLoading(false);
      },
    });
  }, []);

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

      {loading && (
        <p className="font-body text-white/50 text-sm">Carregando projetos...</p>
      )}

      {error && (
        <p className="font-body text-white/50 text-sm">
          Não foi possível carregar os projetos no momento.
        </p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;