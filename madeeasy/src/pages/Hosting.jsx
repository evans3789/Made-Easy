import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedSection, StaggerContainer, staggerItem } from '../components/AnimatedSection';
import styles from './Hosting.module.css';

const hostingFeatures = [
  { icon: '⚡', title: '99.9% Uptime SLA', desc: 'Enterprise-grade infrastructure with redundant systems and automatic failover.', color: '#3B82F6' },
  { icon: '🔒', title: 'SSL & Security', desc: 'Free SSL certificates, DDoS protection, WAF, and automated vulnerability scanning.', color: '#34D399' },
  { icon: '🌐', title: 'Global CDN', desc: 'Static assets served from 200+ edge locations for sub-100ms response worldwide.', color: '#00D4FF' },
  { icon: '💾', title: 'Daily Backups', desc: 'Automated daily backups with 30-day retention. One-click restore at any time.', color: '#818CF8' },
  { icon: '📊', title: 'Performance Monitoring', desc: 'Real-time metrics, Core Web Vitals tracking, and proactive alerting before issues affect users.', color: '#F59E0B' },
  { icon: '♻', title: 'Zero-Downtime Deploys', desc: 'Rolling deployments and instant rollbacks mean your site stays live during every update.', color: '#EC4899' },
];

const securityFeatures = [
  'SSL/TLS encryption (A+ rating)',
  'DDoS protection (up to 10 Tbps)',
  'Web Application Firewall (WAF)',
  'Automated malware scanning',
  'Brute-force login protection',
  'Two-factor authentication',
  'GDPR-compliant infrastructure',
  'Regular penetration testing',
];

const maintenancePlans = [
  {
    name: 'Essentials',
    price: '£250',
    period: '/month',
    color: '#3B82F6',
    features: [
      'CMS & plugin updates',
      '2 content changes/month',
      'Monthly uptime report',
      'SSL monitoring',
      'Email support (48hr)',
    ],
  },
  {
    name: 'Professional',
    price: '£550',
    period: '/month',
    color: '#00D4FF',
    popular: true,
    features: [
      'Everything in Essentials',
      '8 content changes/month',
      'Performance optimisation',
      'SEO health monitoring',
      'Priority support (12hr)',
      'Quarterly strategy call',
    ],
  },
  {
    name: 'Elite',
    price: '£1,200',
    period: '/month',
    color: '#818CF8',
    features: [
      'Everything in Professional',
      'Unlimited content changes',
      'Dedicated Slack channel',
      'Emergency response <2hr',
      'A/B testing management',
      'Monthly analytics deep-dive',
      'New feature development (4hr)',
    ],
  },
];

const whyTrustMe = [
  {
    stat: '99.97%',
    label: 'Average Uptime',
    desc: 'Across all managed client sites over the past 24 months.',
    color: '#3B82F6',
  },
  {
    stat: '< 1s',
    label: 'Average Page Load',
    desc: 'Median Time to First Byte across managed infrastructure.',
    color: '#00D4FF',
  },
  {
    stat: '0',
    label: 'Data Breaches',
    desc: 'Zero security incidents across all client sites, ever.',
    color: '#34D399',
  },
  {
    stat: '4hr',
    label: 'Max Response Time',
    desc: 'Guaranteed maximum response for emergency issues on Elite plans.',
    color: '#818CF8',
  },
];

export default function Hosting() {
  return (
    <main style={{ paddingTop: 80 }}>
      {/* Hero */}
      <section className="section grid-bg">
        <div className="container">
          <div className={styles.heroGrid}>
            <AnimatedSection direction="right">
              <div className="section-label">Hosting & Management</div>
              <h1 className="section-title">
                Your site, always<br />
                <span className="text-gradient">fast and secure</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 28, maxWidth: 500 }}>
                I don't just build your website and walk away. I handle the infrastructure, security, and day-to-day operations so you never have to think about it.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary btn-pulse">Get Managed Hosting</Link>
                <a href="#plans" className="btn btn-outline">View Plans</a>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div className={styles.serverVisual}>
                <div className={styles.serverCard}>
                  <div className={styles.serverHeader}>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF5F57' }} />
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FEBC2E' }} />
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#28C840' }} />
                    </div>
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: '#64748B' }}>server-status</span>
                  </div>
                  <div className={styles.serverRows}>
                    {[
                      { label: 'Status', value: '● Online', valueColor: '#34D399' },
                      { label: 'Uptime', value: '99.97%', valueColor: '#3B82F6' },
                      { label: 'Response', value: '87ms', valueColor: '#00D4FF' },
                      { label: 'SSL', value: '✓ Valid', valueColor: '#34D399' },
                      { label: 'Backup', value: '2hr ago', valueColor: '#94A3B8' },
                      { label: 'Threats', value: '0 blocked', valueColor: '#34D399' },
                    ].map((row, i) => (
                      <motion.div key={row.label} className={styles.serverRow}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}>
                        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.78rem', color: '#64748B' }}>{row.label}</span>
                        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.78rem', color: row.valueColor, fontWeight: 600 }}>{row.value}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className={styles.serverPulse}>
                    <div className={styles.pulseRing} />
                    <div className={styles.pulseDot} />
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.72rem', color: '#34D399' }}>All systems operational</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="section-sm" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <StaggerContainer className={styles.trustGrid}>
            {whyTrustMe.map(item => (
              <motion.div key={item.stat} variants={staggerItem} className={`glass ${styles.trustCard}`}>
                <div className={styles.trustStat} style={{ color: item.color }}>{item.stat}</div>
                <div className={styles.trustLabel}>{item.label}</div>
                <p className={styles.trustDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features */}
      <section className="section grid-bg">
        <div className="container">
          <AnimatedSection style={{ marginBottom: 48 }}>
            <div className="section-label">Infrastructure</div>
            <h2 className="section-title">
              Enterprise hosting,<br /><span className="text-gradient">SME pricing</span>
            </h2>
          </AnimatedSection>
          <StaggerContainer className={styles.featuresGrid}>
            {hostingFeatures.map(f => (
              <motion.div key={f.title} variants={staggerItem} className={`glass glass-hover ${styles.featureCard}`}>
                <div className={styles.featureIcon} style={{ color: f.color, background: `${f.color}12`, borderColor: `${f.color}25` }}>
                  {f.icon}
                </div>
                <div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Security */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className={styles.securityGrid}>
            <AnimatedSection direction="right">
              <div className="section-label">Security</div>
              <h2 className="section-title">
                Fort Knox for<br /><span className="text-gradient">your website</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 32 }}>
                Security is baked into every layer of the stack — not bolted on as an afterthought. Your site, your data, and your customers are protected around the clock.
              </p>
              <Link to="/contact" className="btn btn-primary">Discuss Security Needs</Link>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div className={`glass ${styles.securityList}`}>
                <div style={{ marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid rgba(59,130,246,0.1)' }}>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#34D399', textTransform: 'uppercase', letterSpacing: 2 }}>
                    Security Checklist
                  </span>
                </div>
                {securityFeatures.map((f, i) => (
                  <motion.div key={f} className={styles.securityItem}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}>
                    <span className={styles.secCheck}>✓</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>{f}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section id="plans" className="section grid-bg">
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Maintenance Plans</div>
            <h2 className="section-title">
              Ongoing care that <span className="text-gradient">pays for itself</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto' }}>
              A hacked or broken website costs more to fix than a year of maintenance. Stay protected, stay updated, stay fast.
            </p>
          </AnimatedSection>

          <StaggerContainer className={styles.plansGrid}>
            {maintenancePlans.map(plan => (
              <motion.div key={plan.name} variants={staggerItem}
                className={`glass ${styles.planCard} ${plan.popular ? styles.planCardPopular : ''}`}
                style={{ borderColor: plan.popular ? `${plan.color}50` : 'rgba(59,130,246,0.12)' }}>
                {plan.popular && (
                  <div className={styles.popularTag} style={{ background: plan.color }}>Most Popular</div>
                )}
                <div className={styles.planHeader}>
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <div style={{ display: 'flex', align: 'baseline', gap: 2 }}>
                    <span className={styles.planPrice} style={{ color: plan.color }}>{plan.price}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{plan.period}</span>
                  </div>
                </div>
                <ul className={styles.planFeatures}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: 'var(--text-secondary)', fontSize: '0.9rem', padding: '6px 0', borderBottom: '1px solid rgba(59,130,246,0.06)' }}>
                      <span style={{ color: plan.color, flexShrink: 0, fontWeight: 700 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact"
                  className={`btn ${plan.popular ? 'btn-primary btn-pulse' : 'btn-outline'}`}
                  style={{ width: '100%', justifyContent: 'center' }}>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
}