import { motion } from 'framer-motion';

export default function SectionTitle({ label, title, subtitle, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-accent-500/20 text-accent-400 text-xs font-mono mb-4 ${align === 'center' ? 'mx-auto' : ''}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
        {label}
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}