import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navigation.module.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/services', label: 'Services' },
  { path: '/hosting', label: 'Hosting' },
  { path: '/testimonials', label: 'Testimonials' },
  { path: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className={styles.inner}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <motion.div className={styles.logoMark} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <svg width="56" height="56" viewBox="0 0 36 36" fill="none">
              <path d="M18 3 L31 10.5 L31 25.5 L18 33 L5 25.5 L5 10.5 Z"
                stroke="#3B82F6" strokeWidth="1.5" fill="rgba(59,130,246,0.08)" />
              <path d="M18 9 L26 13.5 L26 22.5 L18 27 L10 22.5 L10 13.5 Z"
                fill="rgba(0,212,255,0.12)" stroke="#00D4FF" strokeWidth="1" />
              <text x="18" y="21" textAnchor="middle" fontFamily="Space Grotesk" fontWeight="700"
                fontSize="8" fill="#fff">MD</text>
            </svg>
          </motion.div>
          <div className={styles.logoText}>
            <span className={styles.logoName}>Made Easy</span>
            <span className={styles.logoRole}>Full-Stack Developer</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`${styles.link} animated-underline ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/contact" className={`btn btn-primary btn-pulse ${styles.ctaBtn}`}>
          Hire Me
        </Link>

        {/* Mobile Toggle */}
        <button className={styles.hamburger} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          <motion.div animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} className={styles.bar} />
          <motion.div animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} className={styles.bar} />
          <motion.div animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} className={styles.bar} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={link.path}
                  className={`${styles.mobileLink} ${location.pathname === link.path ? styles.mobileLinkActive : ''}`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
              <Link to="/contact" className={`btn btn-primary ${styles.mobileCta}`}>Hire Me</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}