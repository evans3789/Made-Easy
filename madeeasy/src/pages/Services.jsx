import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedSection, StaggerContainer, staggerItem } from '../components/AnimatedSection';
import styles from './Services.module.css';

const services = [
  {
    icon: '◆',
    title: 'Website Design',
    desc: 'Bespoke, conversion-focused designs crafted in Figma. Every pixel serves the user journey — from wireframes to polished, interactive prototypes.',
    features: ['Brand-aligned UI/UX', 'Mobile-first responsive', 'Interactive Figma prototype', 'Design system included', 'Unlimited revisions', 'Accessibility (WCAG AA)'],
    color: '#3B82F6',
  },
  {
    icon: '⟨/⟩',
    title: 'Web Development',
    desc: 'Modern, performant web applications built with React, Next.js, and Node.js. Clean architecture, thorough testing, and production-ready from day one.',
    features: ['React / Next.js frontend', 'Node.js / REST or GraphQL API', 'Database design & integration', 'CI/CD pipeline setup', 'Performance-optimized', 'Full source code ownership'],
    color: '#00D4FF',
  },
  {
    icon: '☁',
    title: 'Hosting Setup',
    desc: 'Reliable, scalable infrastructure on AWS or Vercel. I configure everything — domain, SSL, CDN, caching layers — so you launch with confidence.',
    features: ['AWS or Vercel infrastructure', 'SSL certificates included', 'Global CDN setup', 'Automated daily backups', 'Monitoring & alerts', '99.9% uptime SLA'],
    color: '#818CF8',
  },
  {
    icon: '⚙',
    title: 'Maintenance & Support',
    desc: 'Monthly retainer plans keeping your site fast, secure, and up to date. Includes priority support, security patches, and performance audits.',
    features: ['Monthly CMS content updates', 'Security patches & updates', 'Performance monitoring', 'Priority email support', 'Monthly health report', 'Emergency response < 4hr'],
    color: '#34D399',
  },
  {
    icon: '◎',
    title: 'SEO Optimisation',
    desc: 'Technical SEO foundations, Core Web Vitals optimisation, structured data, and keyword strategy to grow your organic presence.',
    features: ['Technical SEO audit', 'Core Web Vitals optimisation', 'Schema / structured data', 'Sitemap & robots.txt', 'On-page SEO implementation', 'Monthly rank tracking'],
    color: '#F59E0B',
  },
  {
    icon: '⬗',
    title: 'Web Management',
    desc: 'Let me run the day-to-day. Content additions, media updates, plugin management, analytics reporting — all handled so you can focus on your business.',
    features: ['Content & media updates', 'Plugin & CMS management', 'Analytics reporting (GA4)', 'A/B test oversight', 'Uptime monitoring', 'Quarterly strategy review'],
    color: '#EC4899',
  },
];

const packages = [
  {
    name: 'Starter',
    price: '$200',
    period: 'one-time',
    desc: 'Perfect for small businesses getting online for the first time.',
    features: [
      '5-page website design & build',
      'Mobile-responsive',
      'Contact form integration',
      'Basic SEO setup',
      'SSL + hosting setup',
      '1 month free support',
    ],
    color: '#3B82F6',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$300',
    period: 'one-time',
    desc: 'For growing businesses ready to invest in a serious web presence.',
    features: [
      'Up to 15 pages + CMS',
      'Custom UI/UX design',
      'Blog / content hub',
      'SEO optimisation suite',
      'Analytics dashboard',
      'Payment or booking integration',
      '3 months priority support',
    ],
    color: '#00D4FF',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'project',
    desc: 'Bespoke web applications, platforms, and long-term partnerships.',
    features: [
      'Full custom web application',
      'Complex integrations & APIs',
      'Design system',
      'DevOps & CI/CD pipeline',
      'Performance & security audits',
      'Dedicated ongoing retainer',
      'SLA with guaranteed response',
    ],
    color: '#818CF8',
    popular: false,
  },
];

const retainerPlans = [
  {
    name: 'Basic Care',
    price: '£250/mo',
    features: ['Security updates', '2 content updates/mo', 'Monthly report', 'Email support (48hr)'],
    color: '#3B82F6',
  },
  {
    name: 'Pro Care',
    price: '£550/mo',
    features: ['Everything in Basic', '8 content updates/mo', 'SEO monitoring', 'Priority support (12hr)', 'Performance audits'],
    color: '#00D4FF',
    popular: true,
  },
  {
    name: 'Elite Care',
    price: '£1,200/mo',
    features: ['Everything in Pro', 'Unlimited updates', 'Dedicated Slack channel', 'Emergency support (2hr)', 'Quarterly strategy call', 'A/B testing'],
    color: '#818CF8',
  },
];

export default function Services() {
  const [billingTab, setBillingTab] = useState('project');

  return (
    <main style={{ paddingTop: 80 }}>
      {/* Header */}
      <section className="section grid-bg">
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>What I Offer</div>
            <h1 className="section-title">
              Everything you need,<br /><span className="text-gradient">nothing you don't</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              Six core services designed to take your web presence from zero to outstanding — and keep it there.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section" style={{ background: 'var(--bg-secondary)', paddingTop: 0 }}>
        <div className="container">
          <StaggerContainer className={styles.servicesGrid}>
            {services.map(s => (
              <motion.div key={s.title} variants={staggerItem} className={`glass ${styles.serviceCard}`}
                style={{ '--svc-color': s.color }}>
                <div className={styles.serviceTop}>
                  <div className={styles.serviceIcon} style={{ color: s.color, background: `${s.color}12`, borderColor: `${s.color}30` }}>
                    {s.icon}
                  </div>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                </div>
                <ul className={styles.featureList}>
                  {s.features.map(f => (
                    <li key={f} className={styles.featureItem}>
                      <span className={styles.checkIcon} style={{ color: s.color }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing */}
      <section className="section grid-bg">
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Pricing</div>
            <h2 className="section-title">Transparent, <span className="text-gradient">fair pricing</span></h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto' }}>
              Fixed-price packages for clarity. No surprise invoices, no hourly rate anxiety.
            </p>
            {/* Billing toggle */}
            <div className={styles.billingToggle}>
              {['project', 'retainer'].map(t => (
                <button key={t} className={`${styles.toggleBtn} ${billingTab === t ? styles.toggleBtnActive : ''}`}
                  onClick={() => setBillingTab(t)}>
                  {t === 'project' ? 'Project Packages' : 'Monthly Retainers'}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <motion.div
            key={billingTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {billingTab === 'project' ? (
              <StaggerContainer className={styles.pricingGrid}>
                {packages.map(pkg => (
                  <motion.div key={pkg.name} variants={staggerItem}
                    className={`glass ${styles.pricingCard} ${pkg.popular ? styles.pricingCardPopular : ''}`}
                    style={{ borderColor: pkg.popular ? `${pkg.color}60` : 'rgba(59,130,246,0.12)' }}>
                    {pkg.popular && (
                      <div className={styles.popularBadge} style={{ background: pkg.color }}>Most Popular</div>
                    )}
                    <div className={styles.pricingHeader}>
                      <h3 className={styles.pkgName}>{pkg.name}</h3>
                      <div className={styles.pkgPrice} style={{ color: pkg.color }}>{pkg.price}</div>
                      <div className={styles.pkgPeriod}>{pkg.period}</div>
                      <p className={styles.pkgDesc}>{pkg.desc}</p>
                    </div>
                    <ul className={styles.pkgFeatures}>
                      {pkg.features.map(f => (
                        <li key={f} className={styles.pkgFeature}>
                          <span style={{ color: pkg.color }}>✓</span> {f}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className={`btn ${pkg.popular ? 'btn-primary btn-pulse' : 'btn-outline'}`}
                      style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}>
                      {pkg.price === 'Custom' ? 'Get a Quote' : 'Get Started'}
                    </Link>
                  </motion.div>
                ))}
              </StaggerContainer>
            ) : (
              <StaggerContainer className={styles.pricingGrid}>
                {retainerPlans.map(plan => (
                  <motion.div key={plan.name} variants={staggerItem}
                    className={`glass ${styles.pricingCard} ${plan.popular ? styles.pricingCardPopular : ''}`}
                    style={{ borderColor: plan.popular ? `${plan.color}60` : 'rgba(59,130,246,0.12)' }}>
                    {plan.popular && (
                      <div className={styles.popularBadge} style={{ background: plan.color }}>Best Value</div>
                    )}
                    <div className={styles.pricingHeader}>
                      <h3 className={styles.pkgName}>{plan.name}</h3>
                      <div className={styles.pkgPrice} style={{ color: plan.color }}>{plan.price}</div>
                      <div className={styles.pkgPeriod}>cancel anytime</div>
                    </div>
                    <ul className={styles.pkgFeatures}>
                      {plan.features.map(f => (
                        <li key={f} className={styles.pkgFeature}>
                          <span style={{ color: plan.color }}>✓</span> {f}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className={`btn ${plan.popular ? 'btn-primary btn-pulse' : 'btn-outline'}`}
                      style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}>
                      Start Plan
                    </Link>
                  </motion.div>
                ))}
              </StaggerContainer>
            )}
          </motion.div>

          <AnimatedSection style={{ textAlign: 'center', marginTop: 48 }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Not sure which plan? <Link to="/contact" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>Let's talk</Link> — I'll recommend the right fit for your goals and budget.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>How It Works</div>
            <h2 className="section-title">My <span className="text-gradient">process</span></h2>
          </AnimatedSection>
          <StaggerContainer className={styles.processGrid}>
            {[
              { n: '01', title: 'Discovery', desc: 'We deep-dive into your goals, audience, competitors, and constraints. I leave this call with everything I need to create.' },
              { n: '02', title: 'Strategy & Design', desc: 'Wireframes, UI mockups, and a clickable prototype. You see exactly what you\'re getting before a single line of code.' },
              { n: '03', title: 'Build & Test', desc: 'Development in focused sprints with weekly demos. Rigorous cross-browser and performance testing throughout.' },
              { n: '04', title: 'Launch & Grow', desc: 'A smooth deployment with zero downtime. Post-launch monitoring, SEO verification, and ongoing support.' },
            ].map((step, i) => (
              <motion.div key={step.n} variants={staggerItem} className={`glass ${styles.processCard}`}>
                <div className={styles.processNum}>{step.n}</div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
}