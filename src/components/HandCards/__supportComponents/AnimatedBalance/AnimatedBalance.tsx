import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AnimatedBalance.css';
gsap.registerPlugin(ScrollTrigger);

interface AnimatedBalanceProps {
    startValue: number;
}

const AnimatedBalance: React.FC<AnimatedBalanceProps> = ({ startValue }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const amountRef = useRef<HTMLSpanElement>(null);
    const triggerRef = useRef<ScrollTrigger | null>(null);
    const rafId = useRef<number | null>(null);
    const currentValue = useRef<number>(startValue);
    const lastTimestamp = useRef<number | null>(null);
    const SPEED = 0.0005;

    const animate = (timestamp: number) => {
        if (lastTimestamp.current === null) lastTimestamp.current = timestamp;
        const elapsed = (timestamp - lastTimestamp.current) / 1000; // в секундах
        lastTimestamp.current = timestamp;
        currentValue.current += SPEED * elapsed;
        if (amountRef.current) {
            amountRef.current.innerText = currentValue.current.toFixed(5);
        }
        rafId.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        const el = amountRef.current;
        if (!el) return;
        el.innerText = startValue.toFixed(5);
        currentValue.current = startValue;
        lastTimestamp.current = null;

        if (triggerRef.current) {
            triggerRef.current.kill();
        }

        triggerRef.current = ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top 90%',
            onEnter: () => {
                // сброс значения и запуск анимации
                currentValue.current = startValue;
                lastTimestamp.current = null;
                if (amountRef.current) amountRef.current.innerText = startValue.toFixed(5);
                rafId.current = requestAnimationFrame(animate);
            },
            onLeave: () => {
                // остановить анимацию
                if (rafId.current) cancelAnimationFrame(rafId.current);
            },
            onLeaveBack: () => {
                // остановить анимацию и сбросить значение
                if (rafId.current) cancelAnimationFrame(rafId.current);
                currentValue.current = startValue;
                if (amountRef.current) amountRef.current.innerText = startValue.toFixed(5);
            },
            onEnterBack: () => {
                // сброс значения и запуск анимации
                currentValue.current = startValue;
                lastTimestamp.current = null;
                if (amountRef.current) amountRef.current.innerText = startValue.toFixed(5);
                rafId.current = requestAnimationFrame(animate);
            }
        });

        return () => {
            if (triggerRef.current) {
                triggerRef.current.kill();
            }
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, [startValue]);

    return (
        <div className="balance-overlay" ref={containerRef}>
            <span className="balance-amount" ref={amountRef}>{startValue.toFixed(5)}</span>
            <span className="balance-currency">USD Pro</span>
        </div>
    );
};

export default AnimatedBalance; 