import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translate, type Language, type TranslationKey } from './translate';

const STORAGE_KEY = 'portfolio-language';
const LanguageContext = createContext<{
    language: Language;
    set_language: (language: Language) => void;
    t: (key: TranslationKey, parameters?: Record<string, string>) => string;
} | null>(null);

function initial_language(): Language {
    try {
        return localStorage.getItem(STORAGE_KEY) === 'fr' ? 'fr' : 'en';
    } catch {
        return 'en';
    }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, set_language] = useState<Language>(initial_language);
    useEffect(() => {
        document.documentElement.lang = language;
        document.title = translate('meta.title', language);
        document
            .querySelector('meta[name="description"]')
            ?.setAttribute('content', translate('meta.description', language));
        try {
            localStorage.setItem(STORAGE_KEY, language);
        } catch {
            // Switching still works when browser storage is unavailable.
        }
    }, [language]);
    const t = (key: TranslationKey, parameters?: Record<string, string>) =>
        translate(key, language, parameters);
    return (
        <LanguageContext.Provider value={{ language, set_language, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage requires a LanguageProvider.');
    return context;
}
