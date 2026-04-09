import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const canvasRef = useRef(null);

    /* ── Particle canvas animation ── */
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const PRIMARY = '#A7402D';
        const PARTICLES = 55;

        const particles = Array.from({ length: PARTICLES }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2.5 + 0.5,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            alpha: Math.random() * 0.5 + 0.15,
        }));

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = PRIMARY + Math.round(p.alpha * 255).toString(16).padStart(2, '0');
                ctx.fill();
            });

            // draw connecting lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 110) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = PRIMARY + Math.round((1 - dist / 110) * 60).toString(16).padStart(2, '0');
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }
            animId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div className={styles.page}>
            <canvas ref={canvasRef} className={styles.canvas} />

            <div className={styles.glare} />

            <div className={styles.card}>
                {/* Big 404 */}
                <div className={styles.codeWrap}>
                    <span className={styles.codeDigit}>4</span>
                    <span className={styles.codeZero}>
                        <span className={styles.zeroPulse} />
                        0
                    </span>
                    <span className={styles.codeDigit}>4</span>
                </div>

                <div className={styles.divider} />

                <h1 className={styles.title}>Page Not Found</h1>
                <p className={styles.sub}>
                    Oops! The URL{' '}
                    <span className={styles.url}>
                        {location.pathname}
                    </span>{' '}
                    doesn't exist on this website.
                </p>

                <div className={styles.actions}>
                    <button
                        className={styles.btnPrimary}
                        onClick={() => navigate('/')}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                        Go Home
                    </button>
                </div>

                <p className={styles.helpText}>
                    Need help?{' '}
                    <span className={styles.helpLink} onClick={() => navigate('/contact')}>
                        Contact us
                    </span>
                </p>
            </div>
        </div>
    );
}
