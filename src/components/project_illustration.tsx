type ProjectIllustrationProps = { kind: 'citizen-services' | 'accounting-saas' };

export function ProjectIllustration({ kind }: ProjectIllustrationProps) {
    const citizen = kind === 'citizen-services';
    const label = citizen
        ? 'Illustration of citizens connected to a form, progressing through fields to validation'
        : 'Illustrative accounting dashboard with financial trends, balance sheet rows, and chart bars';

    return (
        <div className={`project-illustration ${citizen ? 'citizen-scene' : 'finance-scene'}`}>
            <svg viewBox="0 0 300 210" role="img" aria-label={label}>
                {citizen ? (
                    <g>
                        <path
                            className="citizen-connector"
                            d="M42 60H77V100H100M42 139H77V110H100"
                            fill="none"
                            stroke="var(--art-line)"
                            strokeWidth="1.5"
                            strokeDasharray="3 5"
                        />
                        {[60, 139].map((y) => (
                            <g key={y} transform={`translate(22 ${y - 20})`}>
                                <circle
                                    cx="20"
                                    cy="20"
                                    r="24"
                                    fill="var(--art-panel)"
                                    stroke="var(--art-line)"
                                />
                                <circle
                                    cx="20"
                                    cy="15"
                                    r="6"
                                    fill="none"
                                    stroke="var(--art-ink)"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M9 30c0-12 22-12 22 0"
                                    fill="none"
                                    stroke="var(--art-ink)"
                                    strokeWidth="1.5"
                                />
                            </g>
                        ))}
                        <g className="form-sheet">
                            <rect
                                x="99"
                                y="13"
                                width="158"
                                height="179"
                                rx="9"
                                fill="var(--art-panel)"
                                stroke="var(--art-line)"
                            />
                            <path d="M100 45h156" stroke="var(--art-line)" />
                            <circle cx="113" cy="29" r="2" fill="var(--art-ink)" />
                            <text x="124" y="32">
                                CITIZEN REQUEST
                            </text>
                            <text x="114" y="62" className="form-field-label">
                                Your details
                            </text>
                            <rect
                                x="114"
                                y="70"
                                width="128"
                                height="20"
                                rx="3"
                                fill="none"
                                stroke="var(--art-line)"
                            />
                            <path
                                className="field-fill field-one"
                                d="M122 80h87"
                                stroke="var(--art-ink)"
                                strokeWidth="2"
                            />
                            <text x="114" y="108" className="form-field-label">
                                Your request
                            </text>
                            <rect
                                x="114"
                                y="116"
                                width="128"
                                height="29"
                                rx="3"
                                fill="none"
                                stroke="var(--art-line)"
                            />
                            <path
                                className="field-fill field-two"
                                d="M122 126h104m-104 9h70"
                                stroke="var(--art-ink)"
                                strokeWidth="2"
                            />
                            <rect
                                x="114"
                                y="158"
                                width="87"
                                height="21"
                                rx="10"
                                fill="var(--art-ink)"
                            />
                            <text x="157" y="172" textAnchor="middle" className="form-submit">
                                Submit request
                            </text>
                            <g className="form-success">
                                <circle
                                    cx="244"
                                    cy="175"
                                    r="18"
                                    fill="var(--art-accent)"
                                    stroke="var(--art-ink)"
                                />
                                <path
                                    d="m236 175 5 5 10-11"
                                    fill="none"
                                    stroke="var(--art-ink)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                        </g>
                    </g>
                ) : (
                    <g>
                        <rect
                            x="12"
                            y="12"
                            width="276"
                            height="183"
                            rx="9"
                            fill="var(--art-panel)"
                            stroke="var(--art-line)"
                        />
                        <path d="M12 42h276M51 42v153" stroke="var(--art-line)" />
                        <circle cx="27" cy="28" r="3" fill="var(--art-accent)" />
                        <text x="40" y="31">
                            FINANCIAL OVERVIEW
                        </text>
                        <g stroke="var(--art-line)" strokeWidth="2">
                            <path d="M26 60h11m-11 15h11m-11 15h11" />
                        </g>
                        <rect
                            x="64"
                            y="53"
                            width="104"
                            height="69"
                            rx="4"
                            fill="none"
                            stroke="var(--art-line)"
                        />
                        <text x="73" y="67">
                            CASH FLOW
                        </text>
                        <path
                            d="M73 111h85M73 95h85M73 79h85"
                            stroke="var(--art-line)"
                            opacity=".35"
                        />
                        <path
                            className="finance-trend"
                            d="m74 107 14-7 13 4 16-18 15 5 12-13 13-3"
                            fill="none"
                            stroke="var(--art-accent)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                        />
                        <rect
                            x="179"
                            y="53"
                            width="96"
                            height="69"
                            rx="4"
                            fill="none"
                            stroke="var(--art-line)"
                        />
                        <text x="188" y="67">
                            BALANCE
                        </text>
                        {[0, 1, 2, 3, 4].map((index) => (
                            <rect
                                className={`finance-bar bar-${index}`}
                                key={index}
                                x={190 + index * 15}
                                y={107 - (index + 1) * 7}
                                width="8"
                                height={(index + 1) * 7}
                                rx="2"
                                fill={index === 4 ? 'var(--art-accent)' : 'var(--art-line)'}
                            />
                        ))}
                        <text x="65" y="140">
                            BALANCE SHEET
                        </text>
                        <text x="222" y="140" className="ledger-heading">
                            DR / CR
                        </text>
                        {[151, 164, 177].map((y, index) => (
                            <g key={y} className={`ledger-row ledger-${index}`}>
                                <path
                                    d={`M65 ${y}h76m35 0h28m17 0h42`}
                                    stroke="var(--art-line)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </g>
                        ))}
                    </g>
                )}
            </svg>
            <div className="project-illustration-footer">
                <span>Illustration{citizen ? '' : ' · sample data'}</span>
            </div>
        </div>
    );
}
