import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi2'

export default function ProjectCard({ project, onDetails, index }) {
  const colorMap = {
    '#00F5C4': 'from-[#00F5C4]/20 to-transparent',
    '#5B7FFF': 'from-[#5B7FFF]/20 to-transparent',
    '#F59E0B': 'from-[#F59E0B]/20 to-transparent',
    '#A855F7': 'from-[#A855F7]/20 to-transparent',
    '#EC4899': 'from-[#EC4899]/20 to-transparent',
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass glass-hover rounded-2xl overflow-hidden flex flex-col h-full border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
    >
      {/* Card Header / Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-gray-900">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colorMap[project.color] || 'from-accent/20 to-transparent'}`}
        />
        <div className="absolute inset-0 grid-bg opacity-40" />
        {/* Decorative shapes */}
        <div
          className="absolute -right-8 -top-8 w-32 h-32 rounded-full blur-2xl opacity-30"
          style={{ background: project.color }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <span
            className="font-display font-bold text-5xl opacity-10 select-none"
            style={{ color: project.color }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className="font-mono text-xs px-3 py-1 rounded-full border mt-3"
            style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}10` }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div>
          <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map(tech => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-gray-400 text-xs font-mono"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-gray-600 text-xs font-mono">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-auto pt-2">
          <button
            onClick={() => onDetails(project)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08]
                       border border-white/[0.06] hover:border-white/[0.12] text-gray-300 hover:text-white
                       text-xs font-medium transition-all duration-300 flex-1 justify-center group/btn"
          >
            Details
            <HiArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg glass glass-hover flex items-center justify-center text-gray-400 hover:text-accent transition-colors"
            aria-label="Live demo"
          >
            <FaExternalLinkAlt className="w-3 h-3" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg glass glass-hover flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}