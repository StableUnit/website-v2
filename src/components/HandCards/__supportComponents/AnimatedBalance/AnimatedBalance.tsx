import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AnimatedBalance.css';
gsap.registerPlugin(ScrollTrigger);

interface AnimatedBalanceProps {
    startValue: number;
    endValue: number;
    duration?: number; // seconds
}

const AnimatedBalance: React.FC<AnimatedBalanceProps> = ({ startValue, endValue, duration = 5 }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const amountRef = useRef<HTMLSpanElement>(null);
    const triggerRef = useRef<ScrollTrigger | null>(null);

    useEffect(() => {
        const el = amountRef.current;
        if (!el) return;
        el.innerText = startValue.toFixed(5);

        if (triggerRef.current) {
            triggerRef.current.kill();
        }

        triggerRef.current = ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top 90%',
            onEnter: () => {
                gsap.fromTo(el, {
                    innerText: startValue
                }, {
                    innerText: endValue,
                    duration,
                    ease: 'power2.out',
                    snap: { innerText: 0.00001 },
                    onUpdate: function () {
                        if (el) {
                            const current = parseFloat(el.innerText);
                            el.innerText = current.toFixed(5);
                        }
                    }
                });
            },
            onLeaveBack: () => {
                // Reset to start value so it can re-animate
                if (el) el.innerText = startValue.toFixed(5);
            },
            onEnterBack: () => {
                // Replay animation when scrolling back
                gsap.fromTo(el, {
                    innerText: startValue
                }, {
                    innerText: endValue,
                    duration,
                    ease: 'power2.out',
                    snap: { innerText: 0.00001 },
                    onUpdate: function () {
                        if (el) {
                            const current = parseFloat(el.innerText);
                            el.innerText = current.toFixed(5);
                        }
                    }
                });
            }
        });

        return () => {
            if (triggerRef.current) {
                triggerRef.current.kill();
            }
        };
    }, [startValue, endValue, duration]);

    return (
        <div className="balance-overlay" ref={containerRef}>
            <span className="balance-amount" ref={amountRef}>{startValue.toFixed(5)}</span>
            <span className="balance-currency">USD Pro</span>
        </div>
    );
};

export default AnimatedBalance; 