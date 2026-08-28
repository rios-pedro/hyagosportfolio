import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group block rounded-2xl overflow-hidden bg-white/5 border border-white/10
                 hover:border-babyblue/40 transition-colors"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg leading-snug">{project.title}</h3>
        <p className="font-body text-white/70 text-sm mt-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-body px-2.5 py-1 rounded-full
                         bg-babyblue/15 text-babyblue-light"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default ProjectCard;