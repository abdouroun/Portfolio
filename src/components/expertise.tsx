import { Approach } from './approach';

export function Expertise() {
    return (
        <section id="expertise" aria-labelledby="expertise-title">
            <div className="about-grid">
                <div>
                    <div className="kicker">03 — EXPERTISE & APPROACH</div>
                    <h2 id="expertise-title">
                        Care for the code.
                        <br />
                        Care for the people.
                    </h2>
                    <div className="about-copy">
                        <p>
                            My work sits at the intersection of frontend craft, backend systems, and
                            team collaboration. I look for the reusable foundation behind a complex
                            problem—and the clear experience it can create.
                        </p>
                        <p>
                            From Morocco to Québec, I’ve worked with developers, architects, product
                            teams, and clients to turn business needs into software people can rely
                            on.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="skill-group">
                        <h3>01 / Interfaces</h3>
                        <p>
                            React · TypeScript · JavaScript · Redux · Gatsby · Vite · Responsive
                            design
                        </p>
                    </div>
                    <div className="skill-group">
                        <h3>02 / Systems &amp; integrations</h3>
                        <p>
                            Node.js · Express · Symfony / PHP · REST APIs · GraphQL · SQL · RabbitMQ
                            · Strapi
                        </p>
                    </div>
                    <div className="skill-group">
                        <h3>03 / Cloud &amp; delivery</h3>
                        <p>Microsoft Azure · AWS · Docker · CI/CD · Azure DevOps · Git</p>
                    </div>
                    <div className="skill-group">
                        <h3>04 / Engineering practice</h3>
                        <p>
                            Reusable components · SOLID · Domain-driven design · Microservices ·
                            Jest · PHPUnit · TDD · Code reviews
                        </p>
                    </div>
                    <div className="skill-group">
                        <h3>05 / Working together</h3>
                        <p>
                            Agile / Scrum · Mentorship · Stakeholder collaboration · AI-assisted
                            development with systematic review and testing
                        </p>
                    </div>
                </div>
            </div>
            <Approach />
        </section>
    );
}
