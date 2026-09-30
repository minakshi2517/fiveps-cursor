'use client';

import Link from 'next/link';

const CALCULATOR = 'https://livecalculator.fivepsdigital.com/';

const ICONS = {
    megaphone: <path d="M4 10v4h3l6 4V6L7 10H4zM16 9a4 4 0 0 1 0 6M18.5 7a7 7 0 0 1 0 10" />,
    share: <path d="M7 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM21 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM21 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM6.8 11l9.4-4.4M6.8 13l9.4 4.4" />,
    note: <path d="M5 4h10l4 4v12H5zM8 10h7M8 13.5h7M8 17h4M14 4v4h5" />,
    mail: <path d="M3.5 6h17v12h-17zM3.5 6l8.5 7 8.5-7" />,
    image: <path d="M4 5h16v14H4zM4 16l5-5 4 4 2.5-2.5L20 17M15.5 9.5a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />,
    pen: <path d="M4 20l1.2-4.4L15.8 5a2 2 0 0 1 2.8 0l.4.4a2 2 0 0 1 0 2.8L8.4 18.8 4 20zM13.8 7l3.2 3.2" />,
    code: <path d="M8.5 7L3.5 12l5 5M15.5 7l5 5-5 5M13.5 5l-3 14" />,
    person: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.5 20.5c1-3.8 4-5.5 7.5-5.5s6.5 1.7 7.5 5.5" />,
    pentool: <path d="M12 3v7M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM6 9l6-6 6 6-2.5 9h-7L6 9zM8.5 18h7v3h-7z" />,
    play: <path d="M3.5 5.5h17v13h-17zM10 9v6l5-3-5-3z" />,
    people: <path d="M9 11a3.2 3.2 0 1 0 0-6.4A3.2 3.2 0 0 0 9 11zM2.5 19.5c.8-3.2 3.3-4.8 6.5-4.8s5.7 1.6 6.5 4.8M16.5 10.5a2.6 2.6 0 1 0 0-5.2M18 14.8c2 .5 3.2 2 3.6 4.2" />,
    insta: <path d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zM12 15.6a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2zM17 6.8h.01" />,
    ads: <path d="M9.5 4.5l-6 10.4a3 3 0 1 0 5.2 3L14.7 7.5M9.5 4.5a3 3 0 0 1 5.2 3l6 10.4a3 3 0 1 1-5.2 3L9.5 10.5" />,
    click: <path d="M9 9l11 4-4.6 1.6L13.8 19.2 9 9zM6 3.5l.8 2.4M2.8 7.2l2.4.8M3.6 12.6l2-1.4M11.4 3.8l-1.4 2" />,
    chart: <path d="M4 20h16M6.5 16.5V13M11 16.5V9.5M15.5 16.5V11.5M20 16.5V6M4.5 11l5-4.5 4 3L19.5 4" />,
    gear: <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 13.5l1.6 1.2-1.8 3.1-1.9-.7a7 7 0 0 1-2 1.2l-.3 2h-3.6l-.3-2a7 7 0 0 1-2-1.2l-1.9.7-1.8-3.1 1.6-1.2a7 7 0 0 1 0-2.4L2.4 9.9 4.2 6.8l1.9.7a7 7 0 0 1 2-1.2l.3-2h3.6l.3 2a7 7 0 0 1 2 1.2l1.9-.7 1.8 3.1-1.6 1.2a7 7 0 0 1 0 2.4z" />,
};

const SERVICES = [
    ['Digital Marketing', 'megaphone', 'peach'],
    ['Social Media Marketing', 'share', 'lilac'],
    ['Content Marketing', 'note', 'violet'],
    ['Email Marketing', 'mail', 'sky'],
    ['Meme Marketing', 'image', 'mint'],
    ['Logo Designing', 'pen', 'pink'],
    ['Web Development', 'code', 'aqua'],
    ['Personal Branding', 'person', 'green'],
    ['UI/UX Designing', 'pentool', 'rose'],
    ['Video Editing', 'play', 'purple'],
    ['Lead Generation', 'people', 'lavender'],
    ['Instagram / Facebook Ads', 'insta', 'blush'],
    ['Google Ads', 'ads', 'blue'],
    ['Pay Per Click', 'click', 'ice'],
    ['SMM & Optimization', 'chart', 'sun'],
    ['Automation', 'gear', 'mint'],
];

export default function ServicesExperience() {
    return (
        <section className="sv">
            <svg className="sv__loop" viewBox="0 0 240 160" aria-hidden="true">
                <path d="M8 92c36 8 58 38 96 36 28-2 38-28 24-38-12-8-28 8-16 20 12 14 42 18 72 10" />
                <path d="M28 78c-5-8-16-3-11 6l11 9 11-9c5-9-6-14-11-6z" />
            </svg>

            <Link href="/" className="sv__logo">
                <svg className="sv__rays" viewBox="0 0 40 40" aria-hidden="true">
                    <path d="M8 26l10-8M14 34l12-6M4 14l10-2" />
                </svg>
                FivePS
                <svg className="sv__swash" viewBox="0 0 120 14" aria-hidden="true">
                    <path d="M4 10c30-6 70-8 112-4" />
                </svg>
            </Link>

            <div className="sv__inner">
                <header className="sv__head">
                    <p className="sv__kicker">
                        <svg viewBox="0 0 28 28" aria-hidden="true">
                            <path d="M6 16l6-5M10 22l8-5M4 8l7-1" />
                        </svg>
                        work
                    </p>
                    <h1>Our <em>Services</em></h1>
                    <p>From strategy to execution — we build digital experiences that help your brand grow.</p>

                    <a
                        href={CALCULATOR}
                        target="_blank"
                        rel="noreferrer"
                        className="sv__calc"
                    >
                        <span className="sv__calc-note">psst… know your budget?</span>
                        <strong>Estimate your price</strong>
                        <span className="sv__calc-sub">Pick your services, see what your business needs, live.</span>
                        <span className="sv__calc-btn">
                            Calculate now
                            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11L11 5M6 5h5v5" /></svg>
                        </span>
                    </a>
                </header>

                <ul className="sv__grid">
                    {SERVICES.map(([name, icon, tone], index) => (
                        <li key={name} style={{ '--i': index }}>
                            <div className="sv__row">
                                <span className={`sv__icon sv__icon--${tone}`}>
                                    <svg viewBox="0 0 24 24" aria-hidden="true">{ICONS[icon]}</svg>
                                </span>
                                <i>{String(index + 1).padStart(2, '0')}</i>
                                <strong>{name}</strong>
                                <b aria-hidden="true">
                                    <svg viewBox="0 0 16 16"><path d="M3 8h9M8.5 4.5L12 8l-3.5 3.5" /></svg>
                                </b>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="sv__bot" aria-hidden="true">
                <img src="/fiveps-mascot.png" alt="" />
            </div>
        </section>
    );
}
