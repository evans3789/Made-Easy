import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const socials = [
  { label: 'GitHub', href: '#', icon: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z' },
  { label: 'LinkedIn', href: '#', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { label: 'Twitter', href: '#', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z' },
];

const footerLinks = {
  'Services': [
    { label: 'Web Design', to: '/services' },
    { label: 'Development', to: '/services' },
    { label: 'Hosting', to: '/hosting' },
    { label: 'Management', to: '/hosting' },
    { label: 'SEO', to: '/services' },
  ],
  'Company': [
    { label: 'About', to: '/about' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Testimonials', to: '/testimonials' },
    { label: 'Contact', to: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M18 3 L31 10.5 L31 25.5 L18 33 L5 25.5 L5 10.5 Z"
                  stroke="#3B82F6" strokeWidth="1.5" fill="rgba(59,130,246,0.08)" />
                <path d="M18 9 L26 13.5 L26 22.5 L18 27 L10 22.5 L10 13.5 Z"
                  fill="rgba(0,212,255,0.1)" stroke="#00D4FF" strokeWidth="1" />
                <text x="18" y="21" textAnchor="middle" fontFamily="Space Grotesk"
                  fontWeight="700" fontSize="8" fill="#fff">DEV</text>
              </svg>
              <span className={styles.logoName}>Made Easy</span>
            </Link>
            <p className={styles.tagline}>
              Crafting premium digital experiences. From pixel-perfect designs to rock-solid infrastructure — your complete web partner.
            </p>
            <div className={styles.socials}>
              {socials.map(s => (
                <a key={s.label} href={s.href} className={styles.social} aria-label={s.label}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>{group}</h4>
              <ul className={styles.linkList}>
                {links.map(l => (
                  <li key={l.label}>
                    <Link to={l.to} className={styles.footerLink}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact info */}
          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Get In Touch</h4>
            <div className={styles.contactInfo}>
              <a href="mailto:hello@alexcarter.dev" className={styles.contactLink}>
                evansondiekinyakundi2024@gmail.com
              </a>
              <Link to="/contact" className="btn btn-outline" style={{ marginTop: '16px', fontSize: '0.85rem', padding: '10px 20px' }}>
                Start a Project
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© {new Date().getFullYear()}MadeEasy. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}