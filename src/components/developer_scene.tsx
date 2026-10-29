import { useRef, useState, type PointerEvent } from 'react';

const stages = [
    {
        id: 'understand',
        name: 'Understand',
        title: 'Start with the right problem.',
        detail: 'Listen to stakeholders. Clarify needs. Shape the solution together.',
    },
    {
        id: 'lead',
        name: 'Lead',
        title: 'Help the team move forward.',
        detail: 'Share context, mentor developers, and make technical decisions together.',
    },
    {
        id: 'build',
        name: 'Build',
        title: 'Turn clarity into working software.',
        detail: 'Write thoughtful code, review it, and build reusable foundations.',
    },
    {
        id: 'deliver',
        name: 'Deliver',
        title: 'Bring the product into people’s hands.',
        detail: 'Test, refine, and deliver software that meets real business needs.',
    },
] as const;

/** A conceptual illustration of the developer’s role, not a personal portrait. */
export function DeveloperScene() {
    const [selected, set_selected] = useState(0);
    const canvas = useRef<HTMLDivElement>(null);
    const tilt = (event: PointerEvent<HTMLDivElement>) => {
        if (
            event.pointerType === 'touch' ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        )
            return;
        const box = event.currentTarget.getBoundingClientRect();
        canvas.current?.style.setProperty(
            '--tilt-x',
            `${-(event.clientY - box.top - box.height / 2) / 65}deg`,
        );
        canvas.current?.style.setProperty(
            '--tilt-y',
            `${(event.clientX - box.left - box.width / 2) / 65}deg`,
        );
    };
    const reset_tilt = () => {
        canvas.current?.style.setProperty('--tilt-x', '0deg');
        canvas.current?.style.setProperty('--tilt-y', '0deg');
    };
    return (
        <div
            className="architecture developer-scene"
            data-stage={stages[selected].id}
            onPointerMove={tilt}
            onPointerLeave={reset_tilt}
            aria-label="Interactive illustration of a developer coding, understanding needs, leading a team, and delivering a product"
        >
            <div className="architecture-toolbar">
                <span>
                    <i /> PEOPLE. PURPOSE. PRODUCT.
                </span>
                <span className="developer-scene-index">AR / 01</span>
            </div>
            <div className="architecture-canvas" ref={canvas}>
                <svg viewBox="0 0 480 420" className="developer-svg" aria-hidden="true">
                    <defs>
                        <pattern
                            id="developer-grid"
                            width="24"
                            height="24"
                            patternUnits="userSpaceOnUse"
                        >
                            <circle cx="1" cy="1" r=".8" fill="#a8b9a0" opacity=".35" />
                        </pattern>
                        <linearGradient id="developer-halo" x1="0" y1="0" x2="1" y2="1">
                            <stop stopColor="#d5e2c0" />
                            <stop offset="1" stopColor="#e9eddf" />
                        </linearGradient>
                    </defs>
                    <rect width="480" height="420" fill="url(#developer-grid)" />
                    <circle cx="241" cy="218" r="124" fill="url(#developer-halo)" opacity=".7" />
                    <circle
                        cx="241"
                        cy="218"
                        r="148"
                        fill="none"
                        stroke="#b3c4a8"
                        strokeDasharray="2 8"
                        className="developer-orbit"
                    />
                    <g
                        className="developer-routes"
                        fill="none"
                        stroke="#8da780"
                        strokeDasharray="3 6"
                    >
                        <path d="M141 95Q176 96 197 151M337 103Q318 123 299 157M139 337Q163 313 180 279M344 336Q314 319 293 279" />
                    </g>
                    <ellipse cx="240" cy="321" rx="125" ry="13" fill="#b6c9a2" opacity=".3" />
                    <g className="developer-card card-understand">
                        <rect x="24" y="45" width="128" height="77" rx="8" />
                        <path d="M39 65h20v14H48l-6 5v-5h-3Z" fill="#dce9aa" stroke="#5c7f55" />
                        <text x="67" y="74">
                            THE NEED
                        </text>
                        <path d="M39 97h96m-96 8h72" stroke="#9eb28f" strokeWidth="2" />
                        <circle cx="134" cy="61" r="3" fill="#799950" />
                    </g>
                    <g className="developer-card card-deliver">
                        <rect x="335" y="61" width="123" height="78" rx="8" />
                        <text x="349" y="82">
                            PRODUCT
                        </text>
                        <rect
                            x="349"
                            y="94"
                            width="43"
                            height="28"
                            rx="3"
                            fill="#e3ead9"
                            stroke="#a8ba99"
                        />
                        <path d="M354 99h33m-33 5h15" stroke="#8ea97c" />
                        <circle cx="421" cy="106" r="13" fill="#dce9aa" stroke="#7d9b67" />
                        <path
                            d="m415 106 4 4 8-9"
                            fill="none"
                            stroke="#255b46"
                            strokeWidth="2"
                            className="delivery-check"
                        />
                    </g>
                    <g className="developer-workspace">
                        <path
                            d="M127 239h31v50h-31q-13 0-13-13v-22q0-15 13-15Z"
                            fill="#b6caa3"
                            stroke="#7e9d6f"
                        />
                        <path
                            d="M141 289v23m-15 0h30"
                            fill="none"
                            stroke="#78966b"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />
                        {/* Seated three-quarter pose, with glasses following the face. */}
                        <path d="M141 267h42q14 0 17 11l7 32h-14l-10-27h-41Z" fill="#354e3d" />
                        <path d="M146 275h32q10 0 10 10l-3 29h-14l-2-28h-23Z" fill="#273e30" />
                        <path d="M171 311h15l9 8h-26q-2-3 2-8Z" fill="#1f3428" />
                        <path d="M193 307h14l12 9h-25q-4-2-1-9Z" fill="#243b2d" />
                        <path
                            d="M132 225q2-17 14-21l13-3 14 7q13 6 15 24l-3 40h-51Z"
                            fill="#397454"
                        />
                        <path
                            d="M144 238q-3 17 0 31m33-29-2 30"
                            stroke="#2c6246"
                            strokeWidth="1.5"
                            fill="none"
                        />
                        <g className="developer-face">
                            <path d="M148 193v14q7 7 15 0v-15Z" fill="#c99c7b" />
                            <path
                                d="M139 166c0-12 8-17 18-17s17 8 17 19v11l3 6-4 2v6c-2 7-8 11-15 10-12-1-19-10-19-23Z"
                                fill="#d7ad8b"
                            />
                            <path
                                d="M138 180c-7-5-8-16-3-24 4-8 12-12 21-11 12 0 20 7 20 18-6 0-10-3-13-7-5 7-13 10-22 10v14Z"
                                fill="#243c2e"
                            />
                            <ellipse cx="139" cy="182" rx="4" ry="5.5" fill="#d7ad8b" />
                            <path
                                d="M138 181q3-2 3 3"
                                fill="none"
                                stroke="#b78766"
                                strokeWidth=".8"
                                strokeLinecap="round"
                            />
                            <g
                                fill="none"
                                stroke="#2b4936"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="145" y="174" width="12" height="9" rx="3" />
                                <rect x="160" y="174" width="12" height="9" rx="3" />
                                <path d="M157 178h3m-15-1-5-1" />
                            </g>
                            <g fill="#2b4936">
                                <circle cx="152" cy="178.5" r=".85" />
                                <circle cx="167" cy="178.5" r=".85" />
                            </g>
                            <path
                                d="m163 183-1 5h3"
                                fill="none"
                                stroke="#b28161"
                                strokeWidth=".9"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M158 193q5 3 9-.5"
                                fill="none"
                                stroke="#95664c"
                                strokeWidth="1"
                                strokeLinecap="round"
                            />
                        </g>
                        <path
                            d="M165 228 177 247q3 6 12 7l31 2"
                            fill="none"
                            stroke="#c99c7b"
                            strokeWidth="9"
                            strokeLinecap="round"
                        />
                        <path
                            d="M170 226 181 243q3 5 10 6l33 5"
                            fill="none"
                            stroke="#d7ad8b"
                            strokeWidth="10"
                            strokeLinecap="round"
                        />
                        <path d="m160 216 8-1q10 6 12 19l-14 5q-8-11-6-23Z" fill="#438360" />
                        <path d="m222 250 9 3 3 5-14-1" fill="#d7ad8b" />
                        <path d="M118 265h260v8H118Z" fill="#728e62" />
                        <path d="M131 273v46m232-46v46" stroke="#809d6d" strokeWidth="5" />
                        <path
                            d="M280 233v23m-23 2h46"
                            stroke="#58794c"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                        <rect
                            x="214"
                            y="151"
                            width="137"
                            height="86"
                            rx="6"
                            fill="#244c39"
                            stroke="#416b45"
                            strokeWidth="2"
                        />
                        <path d="M215 166h135" stroke="#497151" />
                        <g fill="#a8c18e">
                            <circle cx="223" cy="159" r="1.5" />
                            <circle cx="230" cy="159" r="1.5" />
                            <circle cx="237" cy="159" r="1.5" />
                        </g>
                        <g
                            className="developer-code"
                            fill="none"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                        >
                            <path
                                d="m230 180 6-5m-6 5 6 5m13-10-4 10m12-10 6 5-6 5"
                                stroke="#dce9aa"
                            />
                            <path
                                d="M230 196h21m7 0h53M240 205h36m7 0h43M240 214h56M230 223h23"
                                stroke="#8bb18d"
                            />
                        </g>
                        <path
                            className="developer-cursor"
                            d="M305 223h7"
                            stroke="#e5efc6"
                            strokeWidth="2"
                        />
                        <path
                            d="M223 259h91"
                            stroke="#a6bb94"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />
                        <path d="M332 249h15v13h-15Zm15 2h5v7h-5" fill="#eaf0df" stroke="#88a173" />
                        <path
                            className="developer-steam"
                            d="M337 244q-4-5 0-10m6 10q-4-5 0-10"
                            fill="none"
                            stroke="#a2b78f"
                        />
                    </g>
                    <g className="developer-card card-lead">
                        <rect x="22" y="324" width="142" height="73" rx="8" />
                        <text x="37" y="345">
                            ONE TEAM
                        </text>
                        <g fill="#dce9aa" stroke="#749365">
                            <circle cx="48" cy="365" r="7" />
                            <circle cx="89" cy="365" r="7" />
                            <circle cx="130" cy="365" r="7" />
                        </g>
                        <path
                            d="M38 382q0-13 20-1m21 1q0-14 20 0m21 0q0-14 20 0M59 365h19m23 0h17"
                            fill="none"
                            stroke="#7a9969"
                            strokeWidth="1.5"
                        />
                    </g>
                    <g className="developer-card card-build">
                        <rect x="336" y="321" width="122" height="77" rx="8" />
                        <text x="350" y="342">
                            DELIVERY PLAN
                        </text>
                        <g fill="#aec899">
                            <rect x="350" y="354" width="26" height="7" rx="3" />
                            <rect x="379" y="354" width="26" height="7" rx="3" />
                            <rect x="408" y="354" width="32" height="7" rx="3" />
                        </g>
                        <path
                            d="M350 375h90"
                            stroke="#c2d2b3"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />
                        <path
                            className="developer-progress"
                            d="M350 375h90"
                            stroke="#557c42"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />
                        <circle cx="441" cy="375" r="4" fill="#dce9aa" stroke="#7c9b67" />
                    </g>
                </svg>
            </div>
            <div className="architecture-bottom">
                <div className="architecture-tabs" aria-label="Explore my approach to software">
                    {stages.map((stage, index) => (
                        <button
                            type="button"
                            key={stage.id}
                            aria-pressed={selected === index}
                            onClick={() => set_selected(index)}
                        >
                            {stage.name}
                        </button>
                    ))}
                </div>
                <div className="architecture-caption" key={selected} aria-live="polite">
                    <strong>{stages[selected].title}</strong>
                    <p>{stages[selected].detail}</p>
                </div>
            </div>
        </div>
    );
}
