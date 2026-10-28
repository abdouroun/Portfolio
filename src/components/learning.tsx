const certifications = [
    { name: 'SAFe® 6 Practitioner', issuer: 'Scaled Agile' },
    { name: 'Google AI Essentials', issuer: 'Google' },
    { name: 'Google AI Professional Certificate', issuer: 'Google' },
];

export function Learning() {
    return (
        <section id="education" className="learning" aria-labelledby="learning-title">
            <div className="section-head">
                <div>
                    <div className="kicker">04 — EDUCATION & CERTIFICATIONS</div>
                    <h2 id="learning-title" className="learning-title">
                        Engineering foundation.
                        <br />
                        Continuous learning.
                    </h2>
                </div>
                <p>A foundation in computer systems, with a continuing focus on AI and delivery.</p>
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
                        <h4>Education</h4>
                    </div>
                    <ol className="degree-list">
                        <li>
                            <span className="degree-year">2016–2019</span>
                            <h5>Bachelor’s degree in Network & Information Systems Engineering</h5>
                            <p>Faculty of Sciences and Techniques · Morocco</p>
                            <span className="degree-equivalence">
                                MIFI equivalency: Bachelor’s in Computer Engineering
                            </span>
                        </li>
                        <li>
                            <span className="degree-year">2014–2016</span>
                            <h5>University Technology Diploma (DUT) in Computer Science</h5>
                            <p>Higher School of Technology · Morocco</p>
                            <span className="degree-equivalence">
                                MIFI equivalency: DEC in Computer Science
                            </span>
                        </li>
                    </ol>
                </div>
                <div className="learning-card certification-card">
                    <div className="learning-card-heading">
                        <span className="learning-icon" aria-hidden="true">
                            ✧
                        </span>
                        <h4>Certifications</h4>
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
                            In progress
                        </span>
                        <p>Google Project Management Professional Certificate</p>
                        <p>AI-Assisted Front-End Development · Codecademy</p>
                    </div>
                </div>
            </div>
            <div className="languages">
                <h4>Languages</h4>
                <ul>
                    <li>
                        <strong>French</strong>
                        <span>Bilingual</span>
                    </li>
                    <li>
                        <strong>English</strong>
                        <span>Professional</span>
                    </li>
                    <li>
                        <strong>Arabic</strong>
                        <span>Native</span>
                    </li>
                </ul>
            </div>
        </section>
    );
}
