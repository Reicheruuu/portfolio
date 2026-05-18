import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiXMark, HiCheckCircle, HiLightBulb } from 'react-icons/hi2'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
    }
    return () => { document.body.style.overflow = '' }
  }, [project])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl
                       bg-gray-900 border border-white/[0.08] shadow-2xl"
          >
            {/* Header Glow */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
              style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
            />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-xl glass flex items-center justify-center
                         text-gray-400 hover:text-white transition-colors"
            >
              <HiXMark className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {/* Title & Category */}
              <div className="mb-6">
                <span
                  className="font-mono text-xs px-3 py-1 rounded-full border"
                  style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}10` }}
                >
                  {project.category}
                </span>
                <h2 className="font-display font-bold text-3xl text-white mt-3 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-400 leading-relaxed">{project.fullDescription}</p>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="font-display font-semibold text-sm text-gray-300 mb-3 uppercase tracking-wider">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg glass border border-white/[0.08] text-gray-300 text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="font-display font-semibold text-sm text-gray-300 mb-3 uppercase tracking-wider">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                      <HiCheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: project.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenge */}
              <div className="mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2">
                  <HiLightBulb className="w-4 h-4 text-yellow-400" />
                  <h3 className="font-display font-semibold text-sm text-gray-300">Challenge Solved</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{project.challenges}</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 justify-center">
                  <FaExternalLinkAlt className="w-3.5 h-3.5" />
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 justify-center">
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}