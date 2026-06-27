import { motion } from 'framer-motion';
import { AnimatedSection, StaggerContainer, staggerItem } from '../components/AnimatedSection';
import Stats from '../components/Stats';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "Evans transformed our outdated website into a genuine lead-generating machine. Within three months of launch, revenue from web enquiries went up 340%. The site is stunning, fast, and actually converts.",
    name: "Sarah Chen",
    role: "CEO",
    company: "Lumina Agency",
    initials: "SC",
    color: '#3B82F6',
    rating: 5,
    project: 'Business Website',
  },
  {
    quote: "Incredible attention to detail and communication throughout the project. The site loads in under a second on mobile and looks phenomenal on every device. Evans went above and beyond what was scoped.",
    name: "Marcus Reid",
    role: "Founder",
    company: "ShipSwift Logistics",
    initials: "MR",
    color: '#00D4FF',
    rating: 5,
    project: 'Web Application',
  },
  {
    quote: "Not just a developer — a true strategic partner. Evans understood our brand voice from day one and delivered something beyond what we imagined. The design system alone saved us months of future work.",
    name: "Priya Nair",
    role: "Marketing Director",
    company: "NexaPay",
    initials: "PN",
    color: '#818CF8',
    rating: 5,
    project: 'Fintech Dashboard',
  },
  {
    quote: "We'd been burnt by developers before — projects over budget, over time, under quality. Evans was the complete opposite. Delivered on time, exactly to brief, and has been looking after the site ever since.",
    name: "Tom Harrington",
    role: "Director",
    company: "Horizon Property",
    initials: "TH",
    color: '#34D399',
    rating: 5,
    project: 'Business Website',
  },
  {
    quote: "The VeloSport rebuild doubled our conversion rate in the first month. The custom product configurator was a complex build and Evans nailed it. Our customers constantly compliment the experience.",
    name: "Zoe Mitchell",
    role: "E-Commerce Manager",
    company: "VeloSport",
    initials: "ZM",
    color: '#F59E0B',
    rating: 5,
    project: 'E-Commerce',
  },
  {
    quote: "We hired Evans for a 'quick redesign' that turned into a complete platform rebuild — and we're so glad it did. The new PulseHR dashboard reduced support tickets by 32% because the UX is just so much clearer.",
    name: "Daniel Park",
    role: "CPO",
    company: "PulseHR",
    initials: "DP",
    color: '#EC4899',
    rating: 5,
    project: 'UI/UX Design',
  },
];

const stats = [
  { value: 60, suffix: '+', label: 'Happy Clients' },
  { value: 98, suffix: '%', label: 'Would Recommend' },
  { value: 4.9, suffix: '/5', label: 'Average Rating' },
  { value: 85, suffix: '%', label: 'Return Clients' },
];

const trustBadges = [
  { label: 'Verified Reviews', icon: '✓', desc: 'All reviews are from real clients I\'ve worked with.' },
  { label: 'No Hidden Fees', icon: '⬡', desc: 'Fixed pricing, clear contracts, no surprise invoices.' },
  { label: 'NDA Available', icon: '🔒', desc: 'Happy to sign NDAs for confidential projects.' },
  { label: '30-Day Warranty', icon: '⚡', desc: 'Post-launch bugs fixed free within 30 days, guaranteed.' },
];

function StarRating({ count = 5 }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[...Array(count)].map((_, i) => (
        <span key={i} style={{ color: '#F59E0B', fontSize: '0.85rem' }}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <main style={{ paddingTop: 80 }}>
      {/* Header */}
      <section className="section grid-bg">
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Client Stories</div>
            <h1 className="section-title">
              Don't take my word<br /><span className="text-gradient">for it</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              Real feedback from real clients. Every review is from a project I've personally delivered — no aggregator embellishments.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats bar */}
      <section className="section-sm" style={{ background: 'var(--bg-secondary)', paddingTop: 0, paddingBottom: 60 }}>
        <div className="container">
          <AnimatedSection><Stats stats={stats} /></AnimatedSection>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="section" style={{ background: 'var(--bg-secondary)', paddingTop: 0 }}>
        <div className="container">
          <StaggerContainer className={styles.grid}>
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={staggerItem}
                className={`glass ${styles.card}`}
                style={{ '--t-color': t.color }}
                whileHover={{ y: -5 }}>
                <div className={styles.cardTop}>
                  <StarRating count={t.rating} />
                  <span className="badge" style={{ color: t.color, borderColor: `${t.color}35`, background: `${t.color}10` }}>
                    {t.project}
                  </span>
                </div>
                <div className={styles.quoteIcon} style={{ color: t.color }}>"</div>
                <p className={styles.quoteText}>{t.quote}</p>
                <div className={styles.author}>
                  <div className={styles.avatar} style={{ background: `${t.color}18`, border: `2px solid ${t.color}40`, color: t.color }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>{t.name}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{t.role} · {t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section grid-bg">
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>My Commitments</div>
            <h2 className="section-title">Why clients <span className="text-gradient">trust me</span></h2>
          </AnimatedSection>
          <StaggerContainer className={styles.badgesGrid}>
            {trustBadges.map(b => (
              <motion.div key={b.label} variants={staggerItem} className={`glass glass-hover ${styles.badge}`}>
                <div className={styles.badgeIcon}>{b.icon}</div>
                <h3 className={styles.badgeTitle}>{b.label}</h3>
                <p className={styles.badgeDesc}>{b.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured story */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <AnimatedSection direction="scale">
            <div className={styles.featuredStory}>
              <div className={styles.featuredGlow} />
              <div className={styles.featuredContent}>
                <div className="section-label">Featured Success Story</div>
                <h2 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', marginBottom: 20 }}>
                  How <span className="text-gradient">Lumina Agency</span> grew 340% in 3 months
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24, maxWidth: 560 }}>
                  Lumina came to me with a 6-year-old WordPress site, no clear messaging, and a poor mobile experience. Within 8 weeks we launched a completely rebuilt Next.js site with animated case studies, a streamlined quote form, and an integrated CRM. The results spoke for themselves within the first quarter.
                </p>
                <div className={styles.storyMetrics}>
                  {[
                    { value: '340%', label: 'More leads' },
                    { value: '4.2s → 0.8s', label: 'Load time' },
                    { value: '8 weeks', label: 'Delivery' },
                  ].map(m => (
                    <div key={m.label} className={styles.storyMetric}>
                      <span className={styles.storyMetricValue}>{m.value}</span>
                      <span className={styles.storyMetricLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.storyAuthor}>
                  <div className={styles.avatar} style={{ background: 'rgba(59,130,246,0.15)', border: '2px solid rgba(59,130,246,0.4)', color: '#3B82F6' }}>SC</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff' }}>Sarah Chen</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>CEO, Lumina Agency</div>
                  </div>
                  <div style={{ marginLeft: 'auto' }}><StarRating count={5} /></div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}