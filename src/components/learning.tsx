import { useLanguage } from '../i18n/language';
const certifications = [
    { name: 'SAFe® 6 Practitioner', issuer: 'Scaled Agile' },
    { name: 'Google AI Essentials', issuer: 'Google' },
    { name: 'Google AI Professional Certificate', issuer: 'Google' },
];
export function Learning() {
    const { t } = useLanguage();
    return (
        <section id="education" className="learning" aria-labelledby="learning-title">
            <div className="section-head">
                <div>
                    <div className="kicker">{t('learning.04EducationCertifications')}</div>
                    <h2 id="learning-title" className="learning-title">
                        {t('learning.engineeringFoundation')}
                        <br />
                        {t('learning.continuousLearning')}
                    </h2>
                </div>
                <p>{t('learning.aFoundationInComputerSystemsWith')}</p>
            </div>
            <div className="learning-grid">
                <div className="learning-card">
                    <div className="learning-card-heading">
                        <span className="learning-icon" aria-hidden="true">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m2 9 10-5 10 5-10 5-10-5Z" />
                                <path d="M6 11v6c4 3 8 3 12 0v-6M22 9v7" />
                            </svg>
                        </span>
                        <h4>{t('header.education')}</h4>
                    </div>
                    <ol className="degree-list">
                        <li>
                            <span className="degree-year">2016–2019</span>
                            <h5>{t('learning.bachelorSDegreeInNetworkInformation')}</h5>
                            <p>{t('learning.facultyOfSciencesAndTechniquesMorocco')}</p>
                            <span className="degree-equivalence">
                                {t('learning.mifiEquivalencyBachelorSInComputer')}
                            </span>
                        </li>
                        <li>
                            <span className="degree-year">2014–2016</span>
                            <h5>{t('learning.universityTechnologyDiplomaDutInComputer')}</h5>
                            <p>{t('learning.higherSchoolOfTechnologyMorocco')}</p>
                            <span className="degree-equivalence">
                                {t('learning.mifiEquivalencyDecInComputerScience')}
                            </span>
                        </li>
                    </ol>
                </div>
                <div className="learning-card certification-card">
                    <div className="learning-card-heading">
                        <span className="learning-icon" aria-hidden="true">
                            ✧
                        </span>
                        <h4>{t('learning.certifications')}</h4>
                    </div>
                    <ul className="certification-list">
                        {certifications.map(({ name, issuer }) => (
                            <li key={name}>
                                <span className="certification-check" aria-hidden="true">
                                    ✓
                                </span>
                                <div>
                                    <h5>{name}</h5>
                                    <p>{issuer}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="learning-in-progress">
                        <span className="progress-label">
                            <span />
                            {t('learning.inProgress')}
                        </span>
                        <p>{t('learning.googleProjectManagementProfessionalCertificate')}</p>
                        <p>{t('learning.aiAssistedFrontEndDevelopmentCodecademy')}</p>
                    </div>
                </div>
            </div>
            <div className="languages">
                <h4>{t('learning.languages')}</h4>
                <ul>
                    <li>
                        <strong>{t('learning.french')}</strong>
                        <span>{t('learning.bilingual')}</span>
                    </li>
                    <li>
                        <strong>{t('languageSwitch.english')}</strong>
                        <span>{t('learning.professional')}</span>
                    </li>
                    <li>
                        <strong>{t('learning.arabic')}</strong>
                        <span>{t('learning.native')}</span>
                    </li>
                </ul>
            </div>
        </section>
    );
}
