import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiArrowDown, HiArrowDownTray } from 'react-icons/hi2'
import { skills } from '../data'

const socials = [
  { icon: FaGithub, href: 'https://github.com/Reicheruuu', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/paul-jericho-marata', label: 'LinkedIn' },
  { icon: FaFacebook, href: 'https://www.facebook.com/p/Paul-Jericho-100004018570029/', label: 'Facebook' },
]

const categoryColors = {
  Frontend: '#00F5C4',
  Backend: '#5B7FFF',
  Database: '#A855F7',
  Tools: '#F59E0B',
}

function AnimatedBadge({ name, color, delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm font-mono cursor-default"
      style={{
        color,
        borderColor: `${color}30`,
        background: `${color}08`,
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
      {name}
    </motion.span>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-accent/5 blur-[100px]" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent-blue/5 blur-[80px]" />
        </motion.div>

        <motion.div style={{ opacity }} className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="section-tag"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Available for work
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-white mb-4"
              >
                Hi, I'm{' '}
                <span className="gradient-text block">Paul Jericho Marata</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-accent/60 to-transparent" />
                <span className="font-mono text-accent-blue text-sm">Web Developer</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg"
              >
                I focus now building react projects - ready web and desktop applications --
                like POS System and Inventory System. {' '}
                {/* <span className="text-gray-300 font-medium">beautifully</span>. */}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-3 mb-10"
              >
                <Link to="/projects" className="btn-primary">
                  View Projects
                  <HiArrowDown className="w-4 h-4" />
                </Link>
                <a href="/resume.pdf" download className="btn-secondary">
                  <HiArrowDownTray className="w-4 h-4" />
                  Download CV
                </a>
              </motion.div>

              {/* Socials */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <span className="text-gray-600 text-sm font-mono">follow</span>
                <div className="flex gap-2">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-xl glass glass-hover flex items-center justify-center
                                 text-gray-500 hover:text-accent transition-colors duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent/20 via-accent-blue/10 to-accent-purple/20 blur-2xl animate-glow" />
                {/* Avatar */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden
                                border-2 border-white/10 bg-gray-800 flex items-center justify-center">
                  {/* Placeholder avatar with initials */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
                  <div className="absolute inset-0 grid-bg opacity-20" />
                  <span className="relative font-display font-bold text-8xl gradient-text select-none">PJ</span>
                </div>
                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -left-6 top-1/4 glass border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl"
                >
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-mono text-gray-300">2+ years exp</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -right-4 bottom-1/4 glass border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl"
                >
                  <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                  <span className="text-xs font-mono text-gray-300">3 projects done</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-28 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-tag"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Passionate about <span className="gradient-text">clean code</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4 text-gray-400 leading-relaxed"
            >
              <p>
                I'm a web developer based in the Philippines with a passion for building
                software that solves real problems. I enjoy working across the entire stack —
                from crafting pixel-perfect UIs to designing efficient database schemas.
              </p>
              <p>
                My work spans web apps, desktop applications with Electron and Vercel.
                I believe great software is invisible to the user — it just <em>works</em>.
              </p>
              <p>
                Currently focused on expanding my expertise in cloud deployments, system architecture,
                and building more impactful open-source projects.
              </p>
            </motion.div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Projects Completed', value: '3+', color: '#00F5C4' },
              { label: 'Technologies Used', value: '12+', color: '#5B7FFF' },
              { label: 'Years Experience', value: '2+', color: '#A855F7' },
              { label: 'Cups of Coffee', value: '∞', color: '#F59E0B' },
            ].map(({ label, value, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass glass-hover rounded-2xl p-6 border border-white/[0.06]"
              >
                <div className="font-display font-bold text-4xl mb-1" style={{ color }}>
                  {value}
                </div>
                <div className="text-gray-500 text-sm">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/2 w-80 h-80 rounded-full bg-accent-purple/5 blur-[80px] -translate-y-1/2" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-tag"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              My Skills
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Tools of the <span className="gradient-text">trade</span>
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass glass-hover rounded-2xl p-6 border border-white/[0.06]"
              >
                <div
                  className="font-display font-bold text-sm mb-5 flex items-center gap-2"
                  style={{ color: categoryColors[category] }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: categoryColors[category] }} />
                  {category}
                </div>
                <div className="space-y-4">
                  {items.map(({ name, level }, i) => (
                    <div key={name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-gray-300 font-mono text-xs">{name}</span>
                        <span className="text-gray-600 font-mono text-xs">{level}%</span>
                      </div>
                      <div className="h-1 rounded-full bg-white/[0.05] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${categoryColors[category]}80, ${categoryColors[category]})` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* All Skill Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap gap-2 justify-center"
          >
            {Object.entries(skills).flatMap(([cat, items]) =>
              items.map(({ name }, i) => (
                <AnimatedBadge key={name} name={name} color={categoryColors[cat]} delay={i * 0.04} />
              ))
            )}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-white/[0.06] p-12 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-accent-blue/5 to-accent-purple/5" />
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative">
            <span className="section-tag inline-flex mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Let's work together
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
              Got a project in mind?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
              I'm open to freelance opportunities, collaborations, and full-time roles.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link to="/projects" className="btn-secondary">
                See My Work
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}