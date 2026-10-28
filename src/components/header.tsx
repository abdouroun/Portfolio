import { useEffect, useState } from 'react';

const navigation = [
    { id: 'work', label: 'Selected work' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
];

export function Header() {
    const [menu_open, set_menu_open] = useState(false);
    const [active_section, set_active_section] = useState('');
    const [progress, set_progress] = useState(0);

    useEffect(() => {
        const update_progress = () => {
            const max_scroll = document.documentElement.scrollHeight - window.innerHeight;
            set_progress(max_scroll > 0 ? window.scrollY / max_scroll : 0);
            const current = navigation
                .filter(({ id }) => {
                    const section = document.getElementById(id);
                    return section && section.getBoundingClientRect().top <= 180;
                })
                .at(-1);
            set_active_section(current?.id ?? '');
        };
        const close_on_escape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                set_menu_open(false);
                document.getElementById('menu-toggle')?.focus();
            }
        };
        update_progress();
        window.addEventListener('scroll', update_progress, { passive: true });
        window.addEventListener('resize', update_progress);
        window.addEventListener('keydown', close_on_escape);
        return () => {
            window.removeEventListener('scroll', update_progress);
            window.removeEventListener('resize', update_progress);
            window.removeEventListener('keydown', close_on_escape);
        };
    }, []);

    return (
        <header>
            <a className="skip-link" href="#main-content">
                Skip to content
            </a>
            <div className="wrap nav">
                <a className="mark" href="#" aria-label="Abdelmouhaimine Roun home">
                    AR<span>.</span>
                </a>
                <button
                    id="menu-toggle"
                    className="menu-toggle"
                    type="button"
                    aria-expanded={menu_open}
                    aria-controls="main-navigation"
                    onClick={() => set_menu_open(!menu_open)}
                >
                    {menu_open ? 'Close ×' : 'Menu +'}
                </button>
                <nav
                    id="main-navigation"
                    className={menu_open ? 'is-open' : ''}
                    aria-label="Main navigation"
                >
                    {navigation.map(({ id, label }) => (
                        <a
                            href={`#${id}`}
                            key={id}
                            aria-current={active_section === id ? 'location' : undefined}
                            onClick={() => set_menu_open(false)}
                        >
                            {label}
                        </a>
                    ))}
                    <a
                        className="nav-contact"
                        href="mailto:abdouroun@gmail.com"
                        onClick={() => set_menu_open(false)}
                    >
                        Let’s talk ↗
                    </a>
                </nav>
            </div>
            <div
                className="reading-progress"
                aria-hidden="true"
                style={{ transform: `scaleX(${Math.min(1, Math.max(0, progress))})` }}
            />
        </header>
    );
}
