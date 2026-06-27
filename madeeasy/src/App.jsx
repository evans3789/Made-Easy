import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useSpring, useMotionValue } from 'framer-motion';
import './global.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Hosting from './pages/Hosting';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Preloader from './components/Preloader';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    const onEnter = () => setIsHover(true);
    const onLeave = () => setIsHover(false);
    window.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = pos.current.x + 'px';
        cursorRef.current.style.top = pos.current.y + 'px';
      }
      if (ringRef.current) {
        ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
        ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;
        ringRef.current.style.left = ringPos.current.x + 'px';
        ringRef.current.style.top = ringPos.current.y + 'px';
      }
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={`cursor ${isHover ? 'cursor-hover' : ''}`} />
      <div ref={ringRef} className={`cursor-ring ${isHover ? 'cursor-hover' : ''}`} />
    </>
  );
}

function PageWrapper({ children }) {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function AppContent() {
  const location = useLocation();
  return (
    <>
      <Navigation />
      <PageWrapper>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageWrapper>
      <Footer />
    </>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <Router>
      <CustomCursor />
      <ScrollProgress />
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <AppContent />
    </Router>
  );
}