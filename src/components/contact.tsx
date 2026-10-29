import { useLanguage } from '../i18n/language';
export function Contact() {
    const { t } = useLanguage();
    return (
        <div className="contact" id="contact">
            <div className="contact-panel">
                <div>
                    <div className="kicker">{t('contact.05LetSConnect')}</div>
                    <h2>
                        {t('contact.haveSomething')}
                        <br />
                        {t('contact.meaningfulToBuild')}
                    </h2>
                    <p>{t('contact.letSTalkAboutYourProduct')}</p>
                </div>
                <a className="button" href="mailto:abdouroun@gmail.com">
                    {t('contact.getInTouch')}
                </a>
            </div>
        </div>
    );
}
