import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => { setDone(true); setTimeout(onComplete, 500); }, 200);
          return 100;
        }
        return p + Math.random() * 12 + 4;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed', inset: 0, zIndex: 99999,
            background: '#0A0F1F',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '32px',
          }}
        >
          {/* Animated logo mark */}
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ position: 'relative' }}
          >
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
              <motion.path
                d="M36 8 L60 22 L60 50 L36 64 L12 50 L12 22 Z"
                stroke="#3B82F6" strokeWidth="2" fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />
              <motion.path
                d="M36 18 L52 27 L52 45 L36 54 L20 45 L20 27 Z"
                stroke="#00D4FF" strokeWidth="1.5" fill="rgba(59,130,246,0.08)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.text
                x="36" y="40" textAnchor="middle"
                fontFamily="Space Grotesk" fontWeight="700" fontSize="14"
                fill="#FFFFFF"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >MED</motion.text>
            </svg>
            {/* Rotating ring */}
            <motion.div
              style={{
                position: 'absolute', inset: -12,
                border: '1px solid rgba(59,130,246,0.3)',
                borderRadius: '50%',
                borderTopColor: '#00D4FF',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>

          {/* Progress bar */}
          <div style={{ width: 240, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{
              height: '2px', background: 'rgba(59,130,246,0.15)',
              borderRadius: '2px', overflow: 'hidden',
            }}>
              <motion.div
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #3B82F6, #00D4FF)',
                  boxShadow: '0 0 10px #00D4FF',
                  borderRadius: '2px',
                }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem',
              color: '#64748B',
            }}>
              <span>Initializing</span>
              <span>{Math.min(Math.round(progress), 100)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}