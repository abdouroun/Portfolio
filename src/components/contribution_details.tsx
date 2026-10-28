import { useId, useState } from 'react';

type ContributionDetailsProps = {
    contributions: readonly string[];
};

/** Keep the panel mounted so both opening and closing can animate. */
export function ContributionDetails({ contributions }: ContributionDetailsProps) {
    const [is_open, set_is_open] = useState(false);
    const panel_id = useId();
    const button_id = useId();

    return (
        <div className="contribution-details">
            <button
                type="button"
                className="contribution-toggle"
                id={button_id}
                aria-expanded={is_open}
                aria-controls={panel_id}
                onClick={() => set_is_open((previous) => !previous)}
            >
                <span>Inside the contribution</span>
                <span className="contribution-chevron" aria-hidden="true">
                    ↗
                </span>
            </button>
            <div
                id={panel_id}
                className={`contribution-panel${is_open ? ' is-open' : ''}`}
                role="region"
                aria-labelledby={button_id}
                aria-hidden={!is_open}
                inert={!is_open}
            >
                <div className="contribution-panel-inner">
                    <ul>
                        {contributions.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
