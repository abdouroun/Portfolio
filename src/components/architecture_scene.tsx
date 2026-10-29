import { useRef, useState, type PointerEvent } from 'react';

const layers = [
    {
        id: 'interface',
        name: 'Interface',
        title: 'Clarity at the surface.',
        detail: 'Thoughtful interfaces, built with React and TypeScript.',
    },
    {
        id: 'systems',
        name: 'Systems',
        title: 'Structure behind the experience.',
        detail: 'Reusable modules and APIs that connect the pieces.',
    },
    {
        id: 'cloud',
        name: 'Cloud',
        title: 'Room for the product to grow.',
        detail: 'Cloud delivery with Azure, AWS, and reliable integrations.',
    },
] as const;

export function ArchitectureScene() {
    const [selected, set_selected] = useState(0);
    const [paused, set_paused] = useState(false);
    const surface = useRef<HTMLDivElement>(null);

    const tilt = (event: PointerEvent<HTMLDivElement>) => {
        if (
            event.pointerType === 'touch' ||
            paused ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        )
            return;
        const box = event.currentTarget.getBoundingClientRect();
        surface.current?.style.setProperty(
            '--tilt-x',
            `${-(event.clientY - box.top - box.height / 2) / 55}deg`,
        );
        surface.current?.style.setProperty(
            '--tilt-y',
            `${(event.clientX - box.left - box.width / 2) / 55}deg`,
        );
    };
    const reset_tilt = () => {
        surface.current?.style.setProperty('--tilt-x', '0deg');
        surface.current?.style.setProperty('--tilt-y', '0deg');
    };

    return (
        <div
            className="architecture"
            data-layer={layers[selected].id}
            data-paused={paused}
            onPointerMove={tilt}
            onPointerLeave={reset_tilt}
            aria-label="Interactive illustration of interface, systems, and cloud architecture"
        >
            <div className="architecture-toolbar">
                <span>
                    <i /> FROM IDEA TO EXPERIENCE
                </span>
                <button
                    type="button"
                    aria-label={paused ? 'Resume diagram animation' : 'Pause diagram animation'}
                    aria-pressed={paused}
                    onClick={() => {
                        set_paused(!paused);
                        reset_tilt();
                    }}
                >
                    {paused ? 'Play ▷' : 'Pause Ⅱ'}
                </button>
            </div>
            <div className="architecture-canvas" ref={surface}>
                <svg viewBox="0 0 480 365" aria-hidden="true" className="architecture-svg">
                    <defs>
                        <pattern
                            id="architecture-grid"
                            width="24"
                            height="24"
                            patternUnits="userSpaceOnUse"
                        >
                            <circle cx="1" cy="1" r=".8" fill="#a8b9a0" opacity=".45" />
                        </pattern>
                        <linearGradient id="platform-fill" x1="0" y1="0" x2="1" y2="1">
                            <stop stopColor="#f6f8ee" />
                            <stop offset="1" stopColor="#d7e1cc" />
                        </linearGradient>
                        <filter id="module-shadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow
                                dx="0"
                                dy="12"
                                stdDeviation="9"
                                floodColor="#255b46"
                                floodOpacity=".12"
                            />
                        </filter>
                    </defs>
                    <rect width="480" height="365" fill="url(#architecture-grid)" />
                    <ellipse
                        className="scene-orbit"
                        cx="240"
                        cy="210"
                        rx="192"
                        ry="108"
                        fill="none"
                        stroke="#a8bba0"
                        strokeDasharray="3 8"
                        opacity=".45"
                    />
                    <path d="M58 263 240 358 422 263 240 169Z" fill="#dbe4d2" opacity=".5" />
                    <path
                        d="M58 253 240 348 422 253 240 159Z"
                        fill="url(#platform-fill)"
                        stroke="#b4c5a9"
                    />
                    <g className="scene-connections" fill="none" stroke="#8caa85" strokeWidth="1.5">
                        <path d="M134 141V210L240 265 348 209V140" />
                        <path d="M240 151V265" />
                        <path d="M134 210 240 153 348 209" opacity=".5" />
                    </g>
                    <g
                        className="scene-signals"
                        fill="none"
                        stroke="#255b46"
                        strokeWidth="3"
                        strokeLinecap="round"
                    >
                        <path d="M134 141V210L240 265 348 209V140" />
                        <path d="M240 151V265" />
                    </g>
                    <g className="scene-module module-interface" filter="url(#module-shadow)">
                        <path
                            d="M76 100 134 69 193 100V147L134 179 76 147Z"
                            fill="#d0ddc5"
                            stroke="#96ad8d"
                        />
                        <path d="M76 100 134 132 193 100" fill="#f5f7ee" stroke="#96ad8d" />
                        <path d="M134 132V179" stroke="#96ad8d" />
                        <g transform="translate(102 87) skewY(-2)">
                            <rect width="64" height="38" rx="4" fill="#f9faf4" stroke="#597f5a" />
                            <path d="M0 10h64" stroke="#597f5a" />
                            <circle cx="6" cy="5" r="1.3" fill="#255b46" />
                            <rect x="7" y="16" width="16" height="15" rx="2" fill="#bed196" />
                            <path
                                d="M29 18h26m-26 6h19m-19 6h23"
                                stroke="#719168"
                                strokeWidth="2"
                            />
                        </g>
                        <text x="134" y="204" textAnchor="middle">
                            01 / INTERFACE
                        </text>
                    </g>
                    <g className="scene-module module-cloud" filter="url(#module-shadow)">
                        <path
                            d="M289 100 348 69 406 100V147L348 179 289 147Z"
                            fill="#d0ddc5"
                            stroke="#96ad8d"
                        />
                        <path d="M289 100 348 132 406 100" fill="#f5f7ee" stroke="#96ad8d" />
                        <path d="M348 132V179" stroke="#96ad8d" />
                        <path
                            d="M327 118c-15 0-18-20-4-24 0-20 31-24 38-5 23-3 27 29 7 29Z"
                            fill="#e0eab7"
                            stroke="#597f5a"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M344 103v18m-6-12 6-6 6 6"
                            stroke="#255b46"
                            fill="none"
                            strokeWidth="2"
                        />
                        <text x="348" y="204" textAnchor="middle">
                            03 / CLOUD
                        </text>
                    </g>
                    <g className="scene-module module-systems" filter="url(#module-shadow)">
                        <path
                            d="M174 207 240 171 306 207V259L240 295 174 259Z"
                            fill="#244f3d"
                            stroke="#173e2e"
                        />
                        <path
                            d="M174 207 240 243 306 207 240 171Z"
                            fill="#337052"
                            stroke="#173e2e"
                        />
                        <path d="M240 243V295" stroke="#173e2e" />
                        <text x="240" y="221" textAnchor="middle" className="scene-code">
                            {'</>'}
                        </text>
                        <circle cx="189" cy="244" r="3" fill="#dce9aa" className="scene-status" />
                        <path d="m198 248 22 12m-22-5 16 9" stroke="#74a17c" strokeWidth="2" />
                        <text x="240" y="325" textAnchor="middle">
                            02 / SYSTEMS
                        </text>
                    </g>
                    <g fill="#6f8f64">
                        <circle cx="57" cy="138" r="2" />
                        <circle cx="423" cy="180" r="2" />
                        <path d="M235 51h10m-5-5v10M72 300h8m-4-4v8" stroke="#8ea27f" />
                    </g>
                </svg>
            </div>
            <div className="architecture-bottom">
                <div className="architecture-tabs" aria-label="Explore architecture layers">
                    {layers.map((layer, index) => (
                        <button
                            type="button"
                            key={layer.id}
                            aria-pressed={selected === index}
                            onClick={() => set_selected(index)}
                        >
                            {layer.name}
                        </button>
                    ))}
                </div>
                <div className="architecture-caption" key={selected} aria-live="polite">
                    <strong>{layers[selected].title}</strong>
                    <p>{layers[selected].detail}</p>
                </div>
            </div>
        </div>
    );
}
