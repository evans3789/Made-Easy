import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedSection, StaggerContainer, staggerItem } from '../components/AnimatedSection';
import styles from './About.module.css';

const skills = [
  { name: 'React / Next.js', level: 95, color: '#61DAFB' },
  { name: 'Node.js / Express', level: 90, color: '#68A063' },
  { name: 'TypeScript', level: 88, color: '#3178C6' },
  { name: 'UI/UX Design', level: 85, color: '#F24E1E' },
  { name: 'AWS / Cloud', level: 82, color: '#FF9900' },
  { name: 'PostgreSQL / MongoDB', level: 87, color: '#336791' },
];

const timeline = [
  {
    year: '2024–Present',
    title: 'Senior Full-Stack Developer & Freelancer',
    company: 'Self-Employed',
    desc: 'Building premium web products for international clients. Delivering design, development, hosting, and management under one roof.',
    color: '#3B82F6',
  },
  {
    year: '2022–2024',
    title: 'Lead Frontend Engineer',
    company: 'TechCraft Agency',
    desc: 'Led a team of 5 developers building SaaS products. Established component design systems adopted across 12 client projects.',
    color: '#00D4FF',
  },
  {
    year: '2020–2022',
    title: 'Full-Stack Developer',
    company: 'Nexus Digital',
    desc: 'Built e-commerce platforms and CRM systems. Introduced CI/CD pipelines reducing deployment time by 70%.',
    color: '#818CF8',
  },
  {
    year: '2019–2020',
    title: 'Junior Web Developer',
    company: 'StartUp Hub',
    desc: 'Built and maintained 20+ client websites. Developed a passion for performance optimization and clean architecture.',
    color: '#34D399',
  },
];

const techStack = [
  { name: 'React', icon: '⚛', color: '#61DAFB' },
  { name: 'Next.js', icon: '▲', color: '#fff' },
  { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
  { name: 'Node.js', icon: '⬡', color: '#68A063' },
  { name: 'AWS', icon: '☁', color: '#FF9900' },
  { name: 'Docker', icon: '🐳', color: '#2496ED' },
  { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
  { name: 'MongoDB', icon: '🍃', color: '#47A248' },
  { name: 'GraphQL', icon: '◈', color: '#E10098' },
  { name: 'Figma', icon: '◆', color: '#F24E1E' },
  { name: 'Tailwind', icon: '🌊', color: '#38BDF8' },
  { name: 'Framer', icon: '◉', color: '#0055FF' },
];

const values = [
  { icon: '⚡', title: 'Performance First', desc: 'Every millisecond matters. I optimize for Core Web Vitals and real-world performance from day one.' },
  { icon: '🎯', title: 'Purposeful Design', desc: 'Beauty without function is decoration. Every design decision serves the user journey and business goal.' },
  { icon: '🔒', title: 'Security by Default', desc: 'HTTPS, sanitized inputs, rate limiting, and regular audits — security is never an afterthought.' },
  { icon: '🤝', title: 'Long-Term Partnership', desc: "I don't disappear after launch. I'm invested in your ongoing success and available when you need me." },
];

function SkillBar({ skill, i }) {
  const [ref, inView] = [null, true];
  return (
    <AnimatedSection delay={i * 0.08} className={styles.skillRow}>
      <div className={styles.skillInfo}>
        <span style={{ color: '#fff', fontWeight: 500, fontSize: '0.92rem' }}>{skill.name}</span>
        <span style={{ color: 'var(--text-muted)', fontFamily: 'JetBrains Mono', fontSize: '0.78rem' }}>{skill.level}%</span>
      </div>
      <div className={styles.skillBar}>
        <motion.div
          className={styles.skillFill}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
          style={{ background: `linear-gradient(90deg, var(--accent-blue), ${skill.color})` }}
        />
      </div>
    </AnimatedSection>
  );
}

export default function About() {
  return (
    <main style={{ paddingTop: 80 }}>

      {/* Bio */}
      <section className="section grid-bg">
        <div className="container">
          <div className={styles.bioGrid}>
            <AnimatedSection direction="right" className={styles.bioLeft}>
              <div className="section-label">About Me</div>
              <h1 className={`section-title ${styles.bigName}`}>
               Evans Ondieki Nyakundi
                <br />
                <span className="text-gradient">Digital Craftsman</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 20 }}>
                I'm a full-stack developer and designer based in Nairobi with 7+ years building web products that perform, convert, and endure. My work spans early-stage startups to established businesses across fintech, logistics, creative agencies, and e-commerce.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 32 }}>
                What sets me apart is the full picture: I design with intention, build with care, and stay involved after launch. No handoffs to strangers — you get one person who knows your project inside out.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Work With Me</Link>
                <a href="#" className="btn btn-outline">Download CV</a>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" className={styles.bioRight}>
              <div className={styles.avatarCard}>
                <div className={styles.avatarVisual}>
                  <div className={styles.avatarInner}>
                    <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '3rem', color: 'var(--accent-cyan)' }}>EO</span>
                  </div>
                  <div className={styles.avatarRing1} />
                  <div className={styles.avatarRing2} />
                </div>
                <div className={styles.quickFacts}>
                  {[
                    { label: 'Location', value: 'Nairobi, KE &#127472;&#127466;' },
                    { label: 'Experience', value: '7+ Years' },
                    { label: 'Availability', value: 'Open to Projects' },
                    { label: 'Response Time', value: '< 24 hours' },
                  ].map(f => (
                    <div key={f.label} className={styles.factRow}>
                      <span className={styles.factLabel}>{f.label}</span>
                      <span className={styles.factValue}>{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <AnimatedSection>
            <div className="section-label">Expertise</div>
            <h2 className="section-title">Skills & <span className="text-gradient">Proficiency</span></h2>
          </AnimatedSection>
          <div className={styles.skillsGrid}>
            {skills.map((s, i) => <SkillBar key={s.name} skill={s} i={i} />)}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section grid-bg">
        <div className="container">
          <AnimatedSection>
            <div className="section-label">Journey</div>
            <h2 className="section-title">Experience <span className="text-gradient">Timeline</span></h2>
          </AnimatedSection>
          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className={styles.timelineItem}>
                <div className={styles.timelineLine}>
                  <div className={styles.timelineDot} style={{ background: item.color, boxShadow: `0 0 12px ${item.color}` }} />
                  {i < timeline.length - 1 && <div className={styles.timelineConnector} />}
                </div>
                <div className={`glass ${styles.timelineCard}`} style={{ borderColor: `${item.color}25` }}>
                  <span className={styles.timelineYear} style={{ color: item.color }}>{item.year}</span>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <span className={styles.timelineCompany}>{item.company}</span>
                  <p className={styles.timelineDesc}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <AnimatedSection>
            <div className="section-label">Technology</div>
            <h2 className="section-title">My <span className="text-gradient">Tech Stack</span></h2>
          </AnimatedSection>
          <StaggerContainer className={styles.techGrid}>
            {techStack.map((t) => (
              <motion.div key={t.name} variants={staggerItem} className={`glass glass-hover ${styles.techItem}`}>
                <span style={{ fontSize: '1.5rem' }}>{t.icon}</span>
                <span style={{ color: t.color, fontWeight: 600, fontSize: '0.9rem', fontFamily: 'Space Grotesk' }}>{t.name}</span>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="section grid-bg">
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Philosophy</div>
            <h2 className="section-title">What I <span className="text-gradient">stand for</span></h2>
          </AnimatedSection>
          <StaggerContainer className={styles.valuesGrid}>
            {values.map((v) => (
              <motion.div key={v.title} variants={staggerItem} className={`glass glass-hover ${styles.valueCard}`}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, color: '#fff', marginBottom: 8 }}>{v.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65 }}>{v.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

    </main>
  );
}