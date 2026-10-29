import { useLanguage } from '../i18n/language';
import { DeveloperScene } from './developer_scene';
export function Hero() {
    const { t } = useLanguage();
    return (
        <div className="wrap hero">
            <div className="hero-grid">
                <div>
                    <div className="hero-portrait">
                        <img
                            src="/abdelmouhaimine-portrait.jpg"
                            alt={t('hero.portraitOfAbdelmouhaimineRoun')}
                            width="128"
                            height="128"
                            fetchPriority="high"
                        />
                    </div>
                    <h1 className="hero-name hero-wordmark">
                        <span className="sr-only">{t('hero.abdelmouhaimineRoun')}</span>
                        <img
                            src="/name-wordmark-06.png"
                            alt="projectIllustration.label"
                            aria-hidden="true"
                            width="2172"
                            height="724"
                            fetchPriority="high"
                        />
                    </h1>
                    <p className="eyebrow hero-role">
                        <span className="dot" aria-hidden="true" />
                        {t('hero.seniorFullStackDeveloperSherbrookeCanada')}
                    </p>
                    <p className="hero-signature">
                        {t('hero.software')}
                        <em>{t('hero.thoughtfully')}</em>
                        {t('hero.built')}
                    </p>
                    <p className="intro">{t('hero.iTurnComplexRequirementsIntoClear')}</p>
                    <div className="buttons">
                        <a className="button" href="#work">
                            {t('hero.exploreMyWork')}
                        </a>
                    </div>
                </div>
                <DeveloperScene />
            </div>
            <div className="identity">
                <span>
                    <strong>{t('hero.reactTypescript')}</strong>
                    {t('hero.atTheInterface')} <strong>{t('hero.nodeJsCloud')}</strong>
                    {t('hero.behindIt')}
                </span>
                <span>{t('hero.engineeringCollaborationMentorship')}</span>
            </div>
            <div className="metrics">
                <div className="metric">
                    <b>7+</b>
                    <span>{t('hero.yearsBuildingWebPlatforms')}</span>
                </div>
                <div className="metric">
                    <b>200k+</b>
                    <span>{t('hero.usersOnAPlatformIContribute')}</span>
                </div>
                <div className="metric">
                    <b>75%</b>
                    <span>{t('hero.lessTimeToDeliverNewForms')}</span>
                </div>
            </div>
        </div>
    );
}
