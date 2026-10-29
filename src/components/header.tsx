import { LanguageSwitch } from './language_switch';
import { useLanguage } from '../i18n/language';
import { useEffect, useState } from 'react';
const navigation = [
    { id: 'work', label: 'header.work' },
    { id: 'experience', label: 'header.experience' },
    { id: 'expertise', label: 'header.expertise' },
    { id: 'education', label: 'header.education' },
] as const;
export function Header() {
    const { t } = useLanguage();
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
                {t('header.skipToContent')}
            </a>
            <div className="wrap nav">
                <a className="mark" href="#" aria-label={t('header.abdelmouhaimineRounHome')}>
                    <img
                        src="/ar-transparent.png"
                        alt="projectIllustration.label"
                        width="64"
                        height="64"
                    />
                </a>
                <button
                    id="menu-toggle"
                    className="menu-toggle"
                    type="button"
                    aria-expanded={menu_open}
                    aria-controls="main-navigation"
                    onClick={() => set_menu_open(!menu_open)}
                >
                    {t(menu_open ? 'header.close' : 'header.menu')}
                </button>
                <nav
                    id="main-navigation"
                    className={menu_open ? 'is-open' : ''}
                    aria-label={t('header.mainNavigation')}
                >
                    {navigation.map(({ id, label }) => (
                        <a
                            href={`#${id}`}
                            key={id}
                            aria-current={active_section === id ? 'location' : undefined}
                            onClick={() => set_menu_open(false)}
                        >
                            {t(label)}
                        </a>
                    ))}
                    <a
                        className="nav-contact"
                        href="mailto:abdouroun@gmail.com"
                        onClick={() => set_menu_open(false)}
                    >
                        {t('header.letSTalk')}
                    </a>
                </nav>
                <LanguageSwitch />
            </div>
            <div
                className="reading-progress"
                aria-hidden="true"
                style={{ transform: `scaleX(${Math.min(1, Math.max(0, progress))})` }}
            />
        </header>
    );
}
