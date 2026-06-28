import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StaggerContainer, staggerItem, AnimatedSection } from '../components/AnimatedSection';
import styles from './Portfolio.module.css';

const categories = ['All', 'Business Websites', 'Web Applications', 'UI/UX Designs', 'Personal Projects'];

const projects = [
  {
    title: 'NexaPay Dashboard',
    category: 'Web Applications',
    desc: 'Real-time fintech dashboard with live data visualisation, multi-currency wallet support, and automated reporting for 50k+ active users.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'Redis'],
    color: '#3B82F6',
    year: '2024',
    link: 'https://nexapay-gqkr.onrender.com/',
    metrics: ['50k+ Users', '99.9% Uptime', '< 200ms API'],
  },
  {
    title: 'Lumina Agency Site',
    category: 'Business Websites',
    desc: 'Award-winning creative agency website with parallax storytelling, animated case studies, and integrated booking/CRM system.',
    tech: ['Next.js', 'GSAP', 'Prismic', 'Tailwind', 'Vercel'],
    color: '#00D4FF',
    year: '2024',
    link: 'https://luminasource.onrender.com/',
    metrics: ['340% Lead Growth', 'Awwwards HM', '0.8s Load'],
  },
  {
    title: 'ShipSwift Platform',
    category: 'Web Applications',
    desc: 'End-to-end logistics SaaS with real-time GPS tracking, automated dispatch, invoice generation, and driver mobile app integration.',
    tech: ['React', 'Express', 'MongoDB', 'Socket.io', 'AWS'],
    color: '#818CF8',
    year: '2023',
    link: '#',
    metrics: ['2k+ Shipments/day', '12 Enterprise Clients', 'React Native App'],
  },
  {
    title: 'VeloSport E-Commerce',
    category: 'Business Websites',
    desc: 'High-performance cycling gear store with custom product configurator, subscription plans, and headless CMS integration.',
    tech: ['Next.js', 'Shopify', 'Sanity', 'Stripe', 'Cloudflare'],
    color: '#34D399',
    year: '2023',
    link: '#',
    metrics: ['£2M+ Revenue', '4.8★ Rating', '1.2s LCP'],
  },
  {
    title: 'Zenith Design System',
    category: 'UI/UX Designs',
    desc: 'Comprehensive design system for a SaaS product — 120+ components, dark/light tokens, accessibility-first patterns, and Figma variables.',
    tech: ['Figma', 'Storybook', 'React', 'CSS Variables'],
    color: '#F59E0B',
    year: '2023',
    link: '#',
    metrics: ['120+ Components', '4 Brand Themes', 'WCAG AA'],
  },
  {
    title: 'DevBlog Platform',
    category: 'Personal Projects',
    desc: 'Open-source developer blog platform with MDX support, syntax highlighting, RSS feed, newsletter integration, and blazing-fast static generation.',
    tech: ['Next.js', 'MDX', 'PlanetScale', 'Resend'],
    color: '#EC4899',
    year: '2024',
    link: '#',
    metrics: ['Open Source', '400+ GitHub ⭐', '100 Lighthouse'],
  },
  {
    title: 'PulseHR Dashboard',
    category: 'UI/UX Designs',
    desc: 'Human resources dashboard redesign — improved onboarding flow, leave management, performance reviews, and team insights.',
    tech: ['Figma', 'Principle', 'User Research'],
    color: '#06B6D4',
    year: '2022',
    link: '#',
    metrics: ['32% Task Reduction', '4.9/5 Usability', 'B2B SaaS'],
  },
  {
    title: 'Horizon Property',
    category: 'Business Websites',
    desc: 'Premium real estate agency site with interactive property map, VR tour integration, mortgage calculator, and WhatsApp enquiry automation.',
    tech: ['React', 'Mapbox', 'Node.js', 'Twilio'],
    color: '#A78BFA',
    year: '2022',
    link: '#',
    metrics: ['180% Enquiries', '3 Award Nominations', 'VR Tours'],
  },
  {
    title: 'CLI Toolkit',
    category: 'Personal Projects',
    desc: 'Node.js CLI toolkit for scaffolding full-stack projects with opinionated best practices, Docker config, and GitHub Actions out of the box.',
    tech: ['Node.js', 'Commander.js', 'Docker', 'GitHub Actions'],
    color: '#10B981',
    year: '2023',
    link: '#',
    metrics: ['npm Package', '1k+ Downloads', 'MIT License'],
  },
];

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <AnimatePresence>
      <motion.div
        className={styles.modalOverlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={styles.modal}
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ duration: 0.35, ease: [0.34, 1.2, 0.64, 1] }}
          onClick={e => e.stopPropagation()}
        >
          <button className={styles.modalClose} onClick={onClose}>✕</button>

          <div className={styles.modalThumb} style={{ background: `linear-gradient(135deg, ${project.color}25, ${project.color}08)`, borderBottom: `1px solid ${project.color}30` }}>
            <div className={styles.modalThumbContent}>
              {[...Array(20)].map((_, i) => (
                <div key={i} style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: project.color,
                  opacity: Math.random() * 0.4 + 0.1,
                }} />
              ))}
            </div>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '3rem', color: project.color, opacity: 0.3 }}>
                {project.title.slice(0, 2).toUpperCase()}
              </span>
            </div>
          </div>

          <div className={styles.modalBody}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <span className="badge" style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}12` }}>
                {project.category}
              </span>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{project.year}</span>
            </div>

            <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '1.7rem', fontWeight: 700, color: '#fff', marginBottom: 16 }}>
              {project.title}
            </h2>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 24 }}>{project.desc}</p>

            <div style={{ display: 'flex', gap: 20, marginBottom: 24, flexWrap: 'wrap' }}>
              {project.metrics.map(m => (
                <div key={m} style={{
                  padding: '10px 16px',
                  background: `${project.color}10`,
                  border: `1px solid ${project.color}25`,
                  borderRadius: 10,
                  color: project.color,
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                }}>{m}</div>
              ))}
            </div>

            <div style={{ marginBottom: 28 }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontFamily: 'JetBrains Mono', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Tech Stack</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {project.tech.map(t => (
                  <span key={t} style={{
                    padding: '5px 12px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 6,
                    color: 'var(--text-secondary)',
                    fontFamily: 'JetBrains Mono',
                    fontSize: '0.8rem',
                  }}>{t}</span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <a href={project.link} className="btn btn-primary" target='_blank' rel="noopener noreferrer">View Live Site</a>
              <a href={project.link} className="btn btn-outline" target='_blank' rel="noopener noreferrer">Case Study</a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <main style={{ paddingTop: 80 }}>
      {/* Header */}
      <section className="section-sm grid-bg" style={{ paddingTop: 80 }}>
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>My Work</div>
            <h1 className="section-title">
              Projects that <span className="text-gradient">speak for themselves</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
              A curated selection of real-world projects delivering measurable results across industries, technologies, and scale.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter */}
      <section className="section-sm" style={{ background: 'var(--bg-secondary)', paddingTop: 0, paddingBottom: 0 }}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.filterBar}>
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${active === cat ? styles.filterBtnActive : ''}`}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Grid */}
      <section className="section" style={{ background: 'var(--bg-secondary)', paddingTop: 40 }}>
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <StaggerContainer className={styles.grid}>
                {filtered.map(project => (
                  <motion.div
                    key={project.title}
                    variants={staggerItem}
                    className={`glass ${styles.card}`}
                    onClick={() => setSelected(project)}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    style={{ '--card-color': project.color }}
                  >
                    <div className={styles.cardThumb} style={{ background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)` }}>
                      <div className={styles.thumbDots}>
                        {[...Array(9)].map((_, i) => (
                          <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: project.color, opacity: 0.4 }} />
                        ))}
                      </div>
                      <div className={styles.thumbGlow} style={{ background: project.color }} />
                      <div className={styles.cardOverlay}>
                        <span>View Project →</span>
                      </div>
                    </div>
                    <div className={styles.cardBody}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                        <span className="badge" style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}12` }}>
                          {project.category}
                        </span>
                        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.72rem', color: 'var(--text-muted)' }}>{project.year}</span>
                      </div>
                      <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, color: '#fff', marginBottom: 8, fontSize: '1.05rem' }}>
                        {project.title}
                      </h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.87rem', lineHeight: 1.6, marginBottom: 14 }}>
                        {project.desc.length > 110 ? project.desc.slice(0, 110) + '…' : project.desc}
                      </p>
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                        {project.tech.slice(0, 3).map(t => (
                          <span key={t} style={{
                            fontFamily: 'JetBrains Mono', fontSize: '0.7rem',
                            padding: '2px 8px', borderRadius: 4,
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.07)',
                            color: 'var(--text-muted)',
                          }}>{t}</span>
                        ))}
                        {project.tech.length > 3 && (
                          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'var(--text-muted)' }}>+{project.tech.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </StaggerContainer>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </main>
  );
}