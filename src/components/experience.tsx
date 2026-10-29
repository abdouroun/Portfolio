import { useLanguage } from '../i18n/language';
export function Experience() {
    const { t } = useLanguage();
    return (
        <section id="experience">
            <div className="section-head">
                <div>
                    <div className="kicker">{t('experience.02ProfessionalJourney')}</div>
                    <h2>{t('experience.builtOnExperience')}</h2>
                </div>
                <p>{t('experience.handsOnDevelopmentTechnicalOwnershipAnd')}</p>
            </div>
            <div className="experience-row">
                <div className="period">
                    {t('experience.sep2022Present')}
                    <br />
                    {t('experience.sherbrookeCanada')}
                </div>
                <div>
                    <h3>{t('experience.seniorReactFrontendDeveloper')}</h3>
                    <p>{t('experience.seniorConsultantOnTheCityOf')}</p>
                </div>
                <span className="company">{t('experience.cgi')}</span>
            </div>
            <div className="experience-row">
                <div className="period">
                    {t('experience.jan2021Aug2022')}
                    <br />
                    {t('experience.morocco')}
                </div>
                <div>
                    <h3>{t('experience.teamLead')}</h3>
                    <p>{t('experience.ledSevenDevelopersAlignedTechnicalDelivery')}</p>
                </div>
                <span className="company">{t('experience.tamtamInternational')}</span>
            </div>
            <div className="experience-row">
                <div className="period">
                    {t('experience.feb2019Dec2020')}
                    <br />
                    {t('experience.morocco')}
                </div>
                <div>
                    <h3>{t('experience.fullStackDeveloper')}</h3>
                    <p>{t('experience.developedAccountingDashboardsAndFinancialIntegrations')}</p>
                </div>
                <span className="company">{t('experience.tamtamInternational')}</span>
            </div>
        </section>
    );
}
