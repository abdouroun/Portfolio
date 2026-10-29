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
                        <path d="M162 271h41l-4 43h-17l-1-25h-19" fill="#293f33" />
                        <path d="M181 313h19l8 7h-29Z" fill="#203429" />
                        <path d="M131 226q1-21 20-26l21 4q18 7 22 28l-7 41h-55Z" fill="#397454" />
                        <path d="M145 198v13q10 8 19 0v-17" fill="#c99c7b" />
                        <ellipse cx="155" cy="179" rx="20" ry="25" fill="#d7ad8b" />
                        <path
                            d="M135 183q-13-30 11-34 31-9 32 18l-10-1-4-9q-13 12-26 11l2 18Z"
                            fill="#243c2e"
                        />
                        <path
                            d="M174 178h8m-28-2h13v8h-13Zm-18 0h13v8h-13Zm13 3h5"
                            fill="none"
                            stroke="#294934"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M169 189q-5 5-10 2"
                            fill="none"
                            stroke="#a76d50"
                            strokeLinecap="round"
                        />
                        <path
                            d="M165 225q6 25 29 31l29-1"
                            fill="none"
                            stroke="#d7ad8b"
                            strokeWidth="12"
                            strokeLinecap="round"
                        />
                        <path d="M164 218q8 9 9 18" stroke="#397454" strokeWidth="19" fill="none" />
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
