import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail, FiMapPin, FiGithub, FiLinkedin,
  FiFacebook, FiSend, FiCheck,
} from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import { personalInfo, socialLinks } from '../data';

const contactDetails = [
  {
    icon: FiMail,
    label: 'Email',
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
    color: '#0ea5e9',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: personalInfo.location,
    href: null,
    color: '#8b5cf6',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'https://github.com/Reicheruuu',
    href: socialLinks.github,
    color: '#f1f5f9',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'https://linkedin.com/in/paul-jericho-marata',
    href: socialLinks.linkedin,
    color: '#0ea5e9', 
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission (frontend-only)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="min-h-screen relative">
      <div className="orb orb-1" style={{ opacity: 0.4 }} />
      <div className="orb orb-2" style={{ opacity: 0.4 }} />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
        <SectionTitle
          label="Get In Touch"
          title={<>Let's <span className="gradient-text">work together</span></>}
          subtitle="Have a project in mind? Let's talk. I'm open to freelance work, collaborations, and full-time opportunities."
        />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactDetails.map((item, i) => {
              const Icon = item.icon;
              const Tag = item.href ? 'a' : 'div';
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Tag
                    href={item.href}
                    target={item.href && !item.href.startsWith('mailto') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 glass rounded-2xl p-4 border border-white/8 transition-all duration-300 ${item.href ? 'hover:border-white/15 hover:scale-[1.02] cursor-pointer' : ''}`}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                    >
                      <Icon size={18} style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-mono mb-0.5">{item.label}</p>
                      <p className="text-white text-sm font-medium">{item.value}</p>
                    </div>
                  </Tag>
                </motion.div>
              );
            })}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="glass rounded-2xl p-5 border border-white/8"
            >
              <p className="text-slate-500 text-xs font-mono mb-3 uppercase tracking-wider">Social</p>
              <div className="flex gap-2">
                {[
                  { icon: FiGithub, href: socialLinks.github, label: 'GitHub' },
                  { icon: FiLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
                  { icon: FiFacebook, href: socialLinks.facebook, label: 'Facebook' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex-1 flex flex-col items-center gap-1.5 p-3 rounded-xl glass border border-white/8 hover:border-accent-500/30 hover:text-accent-400 text-slate-400 transition-all duration-300 text-xs font-mono"
                  >
                    <Icon size={18} />
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="glass-strong rounded-3xl border border-white/10 p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', bounce: 0.5, delay: 0.1 }}
                  className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-6"
                >
                  <FiCheck size={28} className="text-green-400" />
                </motion.div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">Message Sent!</h3>
                <p className="text-slate-400 mb-6">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="btn-secondary text-sm"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-strong rounded-3xl border border-white/10 p-8 space-y-5">
                <h3 className="font-display font-bold text-xl text-white mb-2">Send a message</h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-xs font-mono mb-2 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 glass border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-accent-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-mono mb-2 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 glass border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-accent-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-mono mb-2 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 glass border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-accent-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-mono mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-4 py-3 glass border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-accent-500/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-slate-600 text-xs">
                  This is a UI-only form. Connect an email service (EmailJS, Formspree) for real submissions.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}