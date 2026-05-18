import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data';

const allTechs = ['All', ...new Set(projects.flatMap((p) => p.techStack))];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = projects.filter((p) => {
    const matchFilter = activeFilter === 'All' || p.techStack.includes(activeFilter);
    const matchSearch =
      search === '' ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchFilter && matchSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Background orbs */}
      <div className="orb orb-1" style={{ opacity: 0.5 }} />
      <div className="orb orb-2" style={{ opacity: 0.5 }} />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <SectionTitle
          label="My Work"
          title={<>Featured <span className="gradient-text">projects</span></>}
          subtitle="A selection of projects I've built — from POS systems to mobile apps. Each one solving a real problem."
        />

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10 space-y-4"
        >
          {/* Search bar */}
          <div className="relative max-w-md mx-auto">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input
              type="text"
              placeholder="Search projects or technologies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 glass border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm font-body focus:outline-none focus:border-accent-500/50 transition-colors duration-200"
            />
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {allTechs.slice(0, 12).map((tech) => (
              <motion.button
                key={tech}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(tech)}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200"
                style={
                  activeFilter === tech
                    ? {
                        background: 'rgba(139, 92, 246, 0.2)',
                        color: '#a78bfa',
                        border: '1px solid rgba(139, 92, 246, 0.4)',
                      }
                    : {
                        background: 'rgba(255,255,255,0.04)',
                        color: '#64748b',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }
                }
              >
                {tech}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-slate-500 text-sm font-mono mb-8"
        >
          Showing {filtered.length} of {projects.length} projects
        </motion.p>

        {/* Project grid */}
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onDetails={setSelectedProject}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-slate-500"
          >
            <div className="text-4xl mb-4">🔍</div>
            <p className="font-display font-semibold text-lg text-white mb-2">No projects found</p>
            <p className="text-sm">Try a different search or filter</p>
            <button
              onClick={() => { setSearch(''); setActiveFilter('All'); }}
              className="mt-4 btn-secondary text-sm py-2"
            >
              Reset filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Project detail modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}