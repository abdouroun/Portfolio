export function Hero() {
    return (
        <div className="wrap hero">
            <div className="eyebrow">
                <span className="dot"></span>Senior Full Stack Developer · Sherbrooke, Canada
            </div>
            <div className="hero-grid">
                <div>
                    <h1>
                        Software,
                        <br />
                        <em>thoughtfully</em>
                        <br />
                        built.
                    </h1>
                    <p className="intro">
                        I’m <strong>Abdelmouhaimine Roun.</strong> I turn complex requirements into
                        clear interfaces, reusable systems, and web platforms built to grow.
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
                <div
                    aria-label="Abstract interconnected modules representing reusable software architecture"
                    className="visual"
                    role="img"
                >
                    <div className="grid"></div>
                    <div className="orbit"></div>
                    <div className="orbit two"></div>
                    <div className="orbit three"></div>
                    <div className="core">{'</>'}</div>
                    <span className="chip one">Interfaces with intent</span>
                    <span className="chip two">Architecture that scales</span>
                    <div className="visual-label">
                        <span>THINK. BUILD. REFINE.</span>
                        <span>01 / AR</span>
                    </div>
                </div>
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
