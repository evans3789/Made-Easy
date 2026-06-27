import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection, StaggerContainer, staggerItem } from '../components/AnimatedSection';
import styles from './Contact.module.css';

const services = [
  'Web Design',
  'Web Development',
  'Hosting Setup',
  'Web Maintenance',
  'SEO Optimisation',
  'Full Project',
];

const budgets = ['< $150', '$150–$300', '$300–$800', '$800–$1000', '$2000+', 'Not sure yet'];

const faqs = [
  {
    q: 'How long does a typical website project take?',
    a: "A standard 5–10 page business website takes 4–6 weeks from kickoff to launch. Complex web applications or large e-commerce builds take 8–16 weeks. I'll give you a precise timeline after our discovery call.",
  },
  {
    q: 'Do you work with clients globally?',
    a: 'Absolutely. I work with clients globally. All project communication happens over Slack, Notion, and Zoom — timezone differences have never been a problem.',
  },
  {
    q: 'What do you need from me to get started?',
    a: 'Very little to begin with. A brief description of what you need, your rough budget, and a good time to talk. I handle the rest of the discovery process in our kickoff call.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes. Projects are typically split into three payments: 40% to start, 40% at design approval, and 20% on launch. Retainer plans are billed monthly with no lock-in after the first month.',
  },
  {
    q: 'Will I own the website once it\'s built?',
    a: '100%. You own everything — the code, the design files, the domain, and the hosting account. I never hold clients hostage to proprietary systems.',
  },
];

function FAQItem({ q, a, i }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className={styles.faqItem}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
    >
      <button className={styles.faqQuestion} onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <motion.span
          className={styles.faqIcon}
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >+</motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.faqAnswer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div style={{ padding: '0 0 20px 0', color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.92rem' }}>
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', services: [], budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleService = (s) => {
    setForm(prev => ({
      ...prev,
      services: prev.services.includes(s) ? prev.services.filter(x => x !== s) : [...prev.services, s],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1800);
  };

  return (
    <main style={{ paddingTop: 80 }}>
      {/* Header */}
      <section className="section grid-bg">
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</div>
            <h1 className="section-title">
              Let's build something<br /><span className="text-gradient">great together</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              Have a project in mind? Fill in the form and I'll get back to you within 24 hours with initial thoughts and next steps.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section" style={{ background: 'var(--bg-secondary)', paddingTop: 40 }}>
        <div className="container">
          <div className={styles.contactGrid}>

            {/* Sidebar Info */}
            <AnimatedSection direction="right" className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Direct contact</h3>
                <div className={styles.infoItems}>
                  <a href="mailto:evansondiekinyakundi@gmail.com" className={styles.infoItem}>
                    <div className={styles.infoIcon} style={{ background: 'rgba(59,130,246,0.1)', borderColor: 'rgba(59,130,246,0.25)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'JetBrains Mono', textTransform: 'uppercase', letterSpacing: 1 }}>Email</div>
                      <div style={{ color: '#fff', fontSize: '0.92rem', marginTop: 2 }}>evansondiekinyakundi@gmail.com</div>
                    </div>
                  </a>
                  <a href="#" className={styles.infoItem}>
                    <div className={styles.infoIcon} style={{ background: 'rgba(0,212,255,0.08)', borderColor: 'rgba(0,212,255,0.2)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2">
                        <path d="M21 2H3v16h5l4 4 4-4h5V2z"/>
                      </svg>
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'JetBrains Mono', textTransform: 'uppercase', letterSpacing: 1 }}>LinkedIn</div>
                      <div style={{ color: '#fff', fontSize: '0.92rem', marginTop: 2 }}>linkedin.com/in/evansondiekinyakundi</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Response time</h3>
                <div className={styles.responseGrid}>
                  {[
                    { label: 'Initial reply', value: '< 24 hours', color: '#34D399' },
                    { label: 'Proposal', value: '2–3 days', color: '#3B82F6' },
                    { label: 'Project start', value: '1–2 weeks', color: '#818CF8' },
                  ].map(r => (
                    <div key={r.label} className={styles.responseItem}>
                      <span style={{ color: r.color, fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.95rem' }}>{r.value}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Find me online</h3>
                <div className={styles.socials}>
                  {[
                    { name: 'GitHub', color: '#fff', href: '#' },
                    { name: 'LinkedIn', color: '#0A66C2', href: '#' },
                    { name: 'Twitter / X', color: '#1DA1F2', href: '#' },
                    { name: 'Dribbble', color: '#EA4C89', href: '#' },
                  ].map(s => (
                    <a key={s.name} href={s.href} className={styles.socialLink}>
                      <span style={{ color: s.color, fontWeight: 600, fontSize: '0.9rem' }}>{s.name}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>→</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className={styles.statusBadge}>
                <div className={styles.statusDot} />
                <div>
                  <div style={{ color: '#34D399', fontWeight: 600, fontSize: '0.9rem' }}>Available for new projects</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Taking on work from July 2025</div>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="left">
              <div className={`glass ${styles.formCard}`}>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={styles.successState}
                    >
                      <div className={styles.successIcon}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>Message sent!</h3>
                      <p style={{ color: 'var(--text-secondary)', textAlign: 'center', lineHeight: 1.7 }}>
                        Thanks for reaching out. I'll review your details and get back to you within 24 hours with my initial thoughts.
                      </p>
                      <button className="btn btn-outline" onClick={() => { setSubmitted(false); setForm({ name:'', email:'', company:'', services:[], budget:'', message:'' }); }}>
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className={styles.form}>
                      <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: 28 }}>
                        Tell me about your project
                      </h2>

                      <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                          <label className={styles.label}>Your Name *</label>
                          <input className={styles.input} type="text" required placeholder="Alex Johnson"
                            value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                        </div>
                        <div className={styles.formGroup}>
                          <label className={styles.label}>Email Address *</label>
                          <input className={styles.input} type="email" required placeholder="alex@company.com"
                            value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>Company / Website (optional)</label>
                        <input className={styles.input} type="text" placeholder="Acme Corp or acme.com"
                          value={form.company} onChange={e => setForm({...form, company: e.target.value})} />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>Services Needed</label>
                        <div className={styles.checkboxGrid}>
                          {services.map(s => (
                            <button key={s} type="button"
                              className={`${styles.checkBtn} ${form.services.includes(s) ? styles.checkBtnActive : ''}`}
                              onClick={() => toggleService(s)}>
                              {form.services.includes(s) ? '✓ ' : ''}{s}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>Approximate Budget</label>
                        <div className={styles.budgetGrid}>
                          {budgets.map(b => (
                            <button key={b} type="button"
                              className={`${styles.checkBtn} ${form.budget === b ? styles.checkBtnActive : ''}`}
                              onClick={() => setForm({...form, budget: b})}>
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>Project Details *</label>
                        <textarea className={styles.textarea} required rows={5}
                          placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                          value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                      </div>

                      <button type="submit" className={`btn btn-primary btn-pulse ${styles.submitBtn}`} disabled={loading}>
                        {loading ? (
                          <><div className={styles.spinner} /> Sending…</>
                        ) : (
                          <>Send Message <span>→</span></>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section grid-bg">
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>FAQs</div>
            <h2 className="section-title">Common <span className="text-gradient">questions</span></h2>
          </AnimatedSection>
          <div className={styles.faqList}>
            {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} i={i} />)}
          </div>
        </div>
      </section>
    </main>
  );
}