import { useLanguage } from '../i18n/language';
const principles = [
    {
        number: '01',
        title: 'approach.understandTheProblem',
        text: 'approach.workWithProductTeamsAndStakeholders',
    },
    {
        number: '02',
        title: 'approach.buildTheFoundation',
        text: 'approach.designReusableComponentsAndReliableIntegrations',
    },
    {
        number: '03',
        title: 'approach.raiseTheStandard',
        text: 'approach.useCodeReviewsTestingAndMentorship',
    },
] as const;
export function Approach() {
    const { t } = useLanguage();
    return (
        <div className="expertise-approach" id="approach" aria-labelledby="approach-title">
            <div className="section-head">
                <div>
                    <div className="kicker">{t('approach.myApproach')}</div>
                    <h3 id="approach-title">{t('approach.goodSoftwareIsATeamEffort')}</h3>
                </div>
                <p>{t('approach.aPracticalApproachShapedByFrontend')}</p>
            </div>
            <div className="principles">
                {principles.map(({ number, title, text }) => (
                    <article className="principle" key={number}>
                        <span className="principle-number">{number} /</span>
                        <h4>{t(title)}</h4>
                        <p>{t(text)}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}
