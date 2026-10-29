import { useLanguage } from '../i18n/language';
import { Approach } from './approach';
export function Expertise() {
    const { t } = useLanguage();
    return (
        <section id="expertise" aria-labelledby="expertise-title">
            <div className="about-grid">
                <div>
                    <div className="kicker">{t('expertise.03ExpertiseApproach')}</div>
                    <h2 id="expertise-title">
                        {t('expertise.careForTheCode')}
                        <br />
                        {t('expertise.careForThePeople')}
                    </h2>
                    <div className="about-copy">
                        <p>{t('expertise.myWorkSitsAtTheIntersection')}</p>
                        <p>{t('expertise.fromMoroccoToQuBecI')}</p>
                    </div>
                </div>
                <div>
                    <div className="skill-group">
                        <h3>{t('expertise.01Interfaces')}</h3>
                        <p>{t('expertise.reactTypescriptJavascriptReduxGatsbyVite')}</p>
                    </div>
                    <div className="skill-group">
                        <h3>{t('expertise.02SystemsIntegrations')}</h3>
                        <p>{t('expertise.nodeJsExpressSymfonyPhpRest')}</p>
                    </div>
                    <div className="skill-group">
                        <h3>{t('expertise.03CloudDelivery')}</h3>
                        <p>{t('expertise.microsoftAzureAwsDockerCiCd')}</p>
                    </div>
                    <div className="skill-group">
                        <h3>{t('expertise.04EngineeringPractice')}</h3>
                        <p>{t('expertise.reusableComponentsSolidDomainDrivenDesign')}</p>
                    </div>
                    <div className="skill-group">
                        <h3>{t('expertise.05WorkingTogether')}</h3>
                        <p>{t('expertise.agileScrumMentorshipStakeholderCollaborationAi')}</p>
                    </div>
                </div>
            </div>
            <Approach />
        </section>
    );
}
