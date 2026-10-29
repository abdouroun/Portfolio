import english from './en.json' with { type: 'json' };
import french from './fr.json' with { type: 'json' };

export type Language = 'en' | 'fr';
export type TranslationKey = keyof typeof english;
const translations: Record<Language, Readonly<Record<TranslationKey, string>>> = {
    en: english,
    fr: french,
};

/** Resolve stable catalog keys and replace named placeholders as plain text. */
export function translate(
    key: TranslationKey,
    language: Language,
    parameters: Record<string, string> = {},
): string {
    return translations[language][key].replace(
        /\{(\w+)\}/g,
        (placeholder, name: string) => parameters[name] ?? placeholder,
    );
}
