import { ArchitectureScene } from './architecture_scene';

export function Hero() {
    return (
        <div className="wrap hero">
            <div className="hero-grid">
                <div>
                    <h1 className="hero-name hero-wordmark">
                        <span className="sr-only">Abdelmouhaimine Roun</span>
                        <img
                            src="/name-wordmark-06.png"
                            alt=""
                            aria-hidden="true"
                            width="2172"
                            height="724"
                            fetchPriority="high"
                        />
                    </h1>
                    <p className="eyebrow hero-role">
                        <span className="dot" aria-hidden="true" />
                        Senior Full Stack Developer · Sherbrooke, Canada
                    </p>
                    <p className="hero-signature">
                        Software, <em>thoughtfully</em> built.
                    </p>
                    <p className="intro">
                        I turn complex requirements into clear interfaces, reusable systems, and web
                        platforms built to grow.
                    </p>
                    <div className="buttons">
                        <a className="button" href="#work">
                            Explore my work <span>↘</span>
                        </a>
                        <a className="textlink" download="" href="Abdelmouhaimine-Roun-CV.pdf">
                            Download CV ↓
                        </a>
                    </div>
                </div>
                <ArchitectureScene />
            </div>
            <div className="identity">
                <span>
                    <strong>React &amp; TypeScript</strong> at the interface.{' '}
                    <strong>Node.js &amp; cloud</strong> behind it.
                </span>
                <span>Engineering · Collaboration · Mentorship</span>
            </div>
            <div className="metrics">
                <div className="metric">
                    <b>7+</b>
                    <span>Years building web platforms</span>
                </div>
                <div className="metric">
                    <b>200k+</b>
                    <span>Users on a platform I contribute to</span>
                </div>
                <div className="metric">
                    <b>75%</b>
                    <span>Less time to deliver new forms</span>
                </div>
            </div>
        </div>
    );
}
