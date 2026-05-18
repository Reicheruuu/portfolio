import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

const socials = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
]

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
              <span className="font-mono text-accent font-bold text-xs">PJ</span>
            </div>
            <span className="font-display font-bold text-white">
              Paul<span className="text-accent">.</span>
            </span>
          </div>

          {/* Quick Links */}
          <nav className="flex items-center gap-6">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-gray-500 hover:text-gray-300 text-sm font-body transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg glass glass-hover flex items-center justify-center text-gray-500 hover:text-accent transition-colors duration-300"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center">
          <p className="text-gray-600 text-sm font-body">
            © {new Date().getFullYear()} Paul Jericho. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}