import { ProjectIllustration } from './project_illustration';
import { ContributionDetails } from './contribution_details';
import { projects } from '../data/projects';

export function SelectedWork() {
    return (
        <section id="work" aria-labelledby="work-title">
            <div className="section-head">
                <div>
                    <div className="kicker">01 — SELECTED CONTRIBUTIONS</div>
                    <h2 id="work-title">Complexity, made useful.</h2>
                </div>
                <p>
                    Real challenges. Practical engineering.
                    <br />A selection of work delivered with my teams.
                </p>
            </div>
            {projects.map((project) => (
                <article className="project" key={project.id}>
                    <div className={`project-art${project.dark ? ' dark' : ''}`}>
                        <span className="project-number">{project.number}</span>
                        <h3>
                            {project.headline.map((line, index) => (
                                <span className="headline-line" key={index}>
                                    {line}
                                </span>
                            ))}
                        </h3>
                        <ProjectIllustration kind={project.id} />
                        <span className="art-caption">{project.caption}</span>
                    </div>
                    <div className="project-content">
                        <div className="eyebrow">{project.role}</div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tags">
                            {project.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                        <div className="result">
                            <strong>{project.result}</strong>
                            {project.resultDetail}
                        </div>
                        <ContributionDetails contributions={project.contributions} />
                        <a
                            className="project-external-link"
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${project.linkLabel} (opens in a new tab)`}
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M14 3h7v7m0-7L10 14" />
                                <path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6" />
                            </svg>
                            {project.linkLabel}
                        </a>
                    </div>
                </article>
            ))}
        </section>
    );
}
