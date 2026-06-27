import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats({ stats }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      gap: '1px',
      background: 'rgba(59,130,246,0.1)',
      borderRadius: '16px',
      overflow: 'hidden',
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{
          background: 'var(--bg-secondary)',
          padding: '32px 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.08), transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #3B82F6, #00D4FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1,
            marginBottom: '8px',
          }}>
            <Counter end={s.value} suffix={s.suffix} />
          </div>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 500 }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}