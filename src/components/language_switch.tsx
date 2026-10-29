import { useLanguage } from '../i18n/language';

export function LanguageSwitch() {
    const { language, set_language, t } = useLanguage();
    return (
        <div className="language-switch" role="group" aria-label={t('language.siteLabel')}>
            <button
                type="button"
                lang="en"
                aria-label="languageSwitch.english"
                aria-pressed={language === 'en'}
                onClick={() => set_language('en')}
            >
                EN
            </button>
            <button
                type="button"
                lang="fr"
                aria-label="Français"
                aria-pressed={language === 'fr'}
                onClick={() => set_language('fr')}
            >
                FR
            </button>
        </div>
    );
}
