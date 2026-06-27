import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Particles from '../components/Particles';
import { AnimatedSection, StaggerContainer, staggerItem } from '../components/AnimatedSection';
import Stats from '../components/Stats';
import styles from './Home.module.css';

/* ── Data ── */
const stats = [
  { value: 85, suffix: '+', label: 'Projects Delivered' },
  { value: 60, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 99, suffix: '%', label: 'Client Retention' },
];

const services = [
  {
    icon: '⬡',
    title: 'Web Design',
    desc: 'Pixel-perfect UI/UX that converts visitors into customers. Every interaction designed with purpose.',
    color: '#3B82F6',
  },
  {
    icon: '⟨/⟩',
    title: 'Development',
    desc: 'Full-stack applications built on modern, scalable architectures. Clean code, blazing fast performance.',
    color: '#00D4FF',
  },
  {
    icon: '☁',
    title: 'Cloud Hosting',
    desc: '99.9% uptime SLA. Managed infrastructure, SSL, CDN, and automated backups included.',
    color: '#818CF8',
  },
  {
    icon: '⚙',
    title: 'Maintenance',
    desc: 'Monthly updates, security patches, performance monitoring, and proactive support.',
    color: '#34D399',
  },
  {
    icon: '◎',
    title: 'SEO & Growth',
    desc: 'Technical SEO, Core Web Vitals optimization, and data-driven growth strategies.',
    color: '#F59E0B',
  },
  {
    icon: '⬗',
    title: 'Web Management',
    desc: 'Content updates, plugin management, analytics reporting. Let me handle the ops.',
    color: '#EC4899',
  },
];

const projects = [
  {
    title: 'NexaPay Dashboard',
    category: 'Web Application',
    desc: 'Real-time fintech dashboard with data visualization and multi-currency support.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    color: '#3B82F6',
  },
  {
    title: 'Lumina Agency',
    category: 'Business Website',
    desc: 'Award-winning creative agency site with parallax storytelling and booking system.',
    tech: ['Next.js', 'GSAP', 'Prismic'],
    color: '#00D4FF',
  },
  {
    title: 'ShipSwift Logistics',
    category: 'Web Application',
    desc: 'End-to-end logistics platform with real-time tracking and automated dispatch.',
    tech: ['React', 'Express', 'MongoDB'],
    color: '#818CF8',
  },
];

const testimonials = [
  {
    quote: "Evans transformed our outdated website into a lead-generating machine. Revenue from web inquiries went up 340% in three months.",
    name: "Sarah Chen",
    role: "CEO, Lumina Agency",
    initials: "SC",
    color: '#3B82F6',
  },
  {
    quote: "Incredible attention to detail and communication throughout. The site loads in under a second and looks stunning on every device.",
    name: "Marcus Reid",
    role: "Founder, ShipSwift",
    initials: "MR",
    color: '#00D4FF',
  },
  {
    quote: "Not just a developer — a true partner. Evans understood our brand voice and delivered something beyond what we imagined.",
    name: "Priya Nair",
    role: "Marketing Director, NexaPay",
    initials: "PN",
    color: '#818CF8',
  },
];

/* ── Hero ── */
function Hero() {
  const [typed, setTyped] = useState('');
  const roles = ['Full-Stack Developer', 'UI/UX Designer', 'Cloud Architect', 'Digital Partner'];
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;
    if (!deleting && typed.length < current.length) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 80);
    } else if (!deleting && typed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(typed.slice(0, -1)), 40);
    } else if (deleting && typed.length === 0) {
      setDeleting(false);
      setRoleIdx((roleIdx + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [typed, deleting, roleIdx]);

  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid} />
      <Particles count={55} />
      {/* Ambient orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div className={styles.heroContent}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>

          <motion.div className="section-label"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            Available for new projects
          </motion.div>

          <motion.h1 className={styles.heroTitle}
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}>
            Building the web's
            <br />
            <span className="text-gradient glow-pulse">next generation</span>
          </motion.h1>

          <motion.div className={styles.typingRow}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <span className={styles.typingLabel}>I'm a </span>
            <span className={styles.typingText}>{typed}</span>
            <span className={styles.cursor}>|</span>
          </motion.div>

          <motion.p className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}>
            I design, build, host, and manage high-performance websites that grow businesses.
            From initial concept to ongoing maintenance — one trusted partner, end to end.
          </motion.p>

          <motion.div className={styles.heroCta}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
            <Link to="/portfolio" className="btn btn-primary btn-pulse">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 10h16M4 14h8" strokeLinecap="round" />
              </svg>
              View Portfolio
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Request Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div className={styles.trustRow}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
            <span className={styles.trustLabel}>Trusted by</span>
            {['Lumina', 'NexaPay', 'ShipSwift', 'VeloSport'].map(n => (
              <span key={n} className={styles.trustBadge}>{n}</span>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero visual */}
        <motion.div className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}>
          <HeroCard />
        </motion.div>
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div className={styles.heroCard}>
      <div className={styles.heroCardHeader}>
        <div className={styles.dots}>
          <span style={{ background: '#FF5F57' }} />
          <span style={{ background: '#FEBC2E' }} />
          <span style={{ background: '#28C840' }} />
        </div>
        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.72rem', color: '#64748B' }}>portfolio.jsx</span>
      </div>
      <div className={styles.heroCardBody}>
        {[
          { indent: 0, code: <><span style={{color:'#818CF8'}}>const</span> <span style={{color:'#60A5FA'}}>developer</span> = {'{'}</> },
          { indent: 1, code: <><span style={{color:'#94A3B8'}}>name:</span> <span style={{color:'#34D399'}}>"Evans Ondieki"</span>,</> },
          { indent: 1, code: <><span style={{color:'#94A3B8'}}>skills:</span> [<span style={{color:'#34D399'}}>"React"</span>, <span style={{color:'#34D399'}}>"Node"</span>, <span style={{color:'#34D399'}}>"AWS"</span>],</> },
          { indent: 1, code: <><span style={{color:'#94A3B8'}}>available:</span> <span style={{color:'#00D4FF'}}>true</span>,</> },
          { indent: 1, code: <><span style={{color:'#94A3B8'}}>passion:</span> <span style={{color:'#34D399'}}>"craft"</span>,</> },
          { indent: 0, code: <span style={{color:'#CBD5E1'}}>{'}'}</span> },
          { indent: 0, code: <></> },
          { indent: 0, code: <><span style={{color:'#818CF8'}}>export default</span> <span style={{color:'#60A5FA'}}>developer</span><span style={{color:'#CBD5E1'}}>;</span></> },
        ].map((line, i) => (
          <motion.div key={i} className={styles.codeLine}
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + i * 0.08 }}
            style={{ paddingLeft: `${line.indent * 20}px` }}>
            <span className={styles.lineNum}>{i + 1}</span>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.82rem' }}>{line.code}</span>
          </motion.div>
        ))}
      </div>
      {/* Status bar */}
      <div className={styles.statusBar}>
        <span style={{ color: '#34D399' }}>● Online</span>
        <span>React 18</span>
        <span>TypeScript</span>
      </div>
    </div>
  );
}

/* ── Services Section ── */
function ServicesSection() {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <AnimatedSection>
          <div className="section-label">What I Do</div>
          <h2 className="section-title">
            Complete web solutions,<br />
            <span className="text-gradient">under one roof</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 520, marginBottom: 56 }}>
            From idea to launch to ongoing growth — I handle every layer so you can focus on your business.
          </p>
        </AnimatedSection>

        <StaggerContainer className={styles.servicesGrid}>
          {services.map((s, i) => (
            <motion.div key={s.title} variants={staggerItem} className={`glass glass-hover ${styles.serviceCard}`}>
              <div className={styles.serviceIcon} style={{ color: s.color, borderColor: `${s.color}30`, background: `${s.color}10` }}>
                {s.icon}
              </div>
              <h3 className={styles.serviceTitle}>{s.title}</h3>
              <p className={styles.serviceDesc}>{s.desc}</p>
              <div className={styles.serviceArrow} style={{ color: s.color }}>→</div>
            </motion.div>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3} style={{ textAlign: 'center', marginTop: 48 }}>
          <Link to="/services" className="btn btn-outline">View All Services</Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── Featured Projects ── */
function ProjectsSection() {
  return (
    <section className="section grid-bg">
      <div className="container">
        <AnimatedSection>
          <div className="section-label">Featured Work</div>
          <h2 className="section-title">
            Projects that <span className="text-gradient">deliver results</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className={styles.projectsGrid} style={{ marginTop: 48 }}>
          {projects.map((p) => (
            <motion.div key={p.title} variants={staggerItem} className={`glass neon-border ${styles.projectCard}`}>
              <div className={styles.projectThumb} style={{ background: `linear-gradient(135deg, ${p.color}20, ${p.color}05)` }}>
                <div className={styles.projectDots}>
                  {[...Array(9)].map((_, i) => <div key={i} className={styles.dot} style={{ background: p.color }} />)}
                </div>
                <div className={styles.projectGlow} style={{ background: p.color }} />
              </div>
              <div className={styles.projectBody}>
                <span className="badge" style={{ color: p.color, borderColor: `${p.color}40`, background: `${p.color}12` }}>
                  {p.category}
                </span>
                <h3 className={styles.projectTitle}>{p.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{p.desc}</p>
                <div className={styles.techList}>
                  {p.tech.map(t => <span key={t} className={styles.techTag}>{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3} style={{ textAlign: 'center', marginTop: 48 }}>
          <Link to="/portfolio" className="btn btn-primary">See All Projects</Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── Testimonials ── */
function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <AnimatedSection style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Client Feedback</div>
          <h2 className="section-title">
            What clients <span className="text-gradient">say</span>
          </h2>
        </AnimatedSection>

        <div className={styles.testimonialWrapper}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className={`glass ${styles.testimonialCard}`}
              animate={{ opacity: i === active ? 1 : 0.35, scale: i === active ? 1 : 0.96, y: i === active ? 0 : 16 }}
              transition={{ duration: 0.5 }}
              style={{ border: i === active ? `1px solid ${t.color}40` : '1px solid rgba(59,130,246,0.1)' }}
            >
              <div className={styles.quoteIcon} style={{ color: t.color }}>"</div>
              <p className={styles.quoteText}>{t.quote}</p>
              <div className={styles.quoteAuthor}>
                <div className={styles.avatar} style={{ background: `${t.color}20`, border: `1px solid ${t.color}40`, color: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>{t.name}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              width: i === active ? 24 : 8, height: 8, borderRadius: 4,
              background: i === active ? 'var(--accent-blue)' : 'rgba(59,130,246,0.2)',
              border: 'none', cursor: 'none', transition: 'all 0.3s',
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ── */
function CTASection() {
  return (
    <section className="section">
      <div className="container">
        <AnimatedSection direction="scale">
          <div className={styles.ctaBox}>
            <div className={styles.ctaGlow} />
            <div className="section-label" style={{ justifyContent: 'center' }}>Ready to build?</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: 16, textAlign: 'center' }}>
              Let's create something<br /><span className="text-gradient">extraordinary together</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 480, textAlign: 'center', lineHeight: 1.7, marginBottom: 40 }}>
              Whether you need a brand-new website, a web application, or ongoing management — I'm here and ready.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary btn-pulse" style={{ fontSize: '1rem', padding: '14px 32px' }}>
                Start Your Project
              </Link>
              <Link to="/portfolio" className="btn btn-outline">View My Work</Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <AnimatedSection><Stats stats={stats} /></AnimatedSection>
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}