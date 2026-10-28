import { useEffect } from 'react';

/** Reveal content once, without hiding it from assistive technology or reduced-motion users. */
export function useReveal() {
    useEffect(() => {
        const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
        const targets = document.querySelectorAll<HTMLElement>(
            '.section-head, .project, .experience-row, .about-grid, .principle, .contact-panel',
        );
        if (!('IntersectionObserver' in window) || preference.matches) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.08 },
        );

        targets.forEach((element) => {
            element.classList.add('reveal');
            observer.observe(element);
        });
        const reveal_all = () => {
            if (!preference.matches) return;
            targets.forEach((element) => element.classList.add('is-visible'));
            observer.disconnect();
        };
        preference.addEventListener('change', reveal_all);
        return () => {
            observer.disconnect();
            preference.removeEventListener('change', reveal_all);
            targets.forEach((element) => element.classList.remove('reveal', 'is-visible'));
        };
    }, []);
}
