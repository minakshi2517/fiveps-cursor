'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

const YEARS = [
    ['2018', 'The idea', 'It started as a thought — brands deserve marketing people actually want to see.', 'ink'],
    ['2019', 'The desire', 'The thought would not leave. Wanting to build it became bigger than talking about it.', 'cream'],
    ['2020', 'The work', 'Nights and weekends. Learning what makes people stop and remember.', 'teal'],
    ['2021', 'The craft', 'Every brief taught something. The work got sharper, one post at a time.', 'yellow'],
    ['2022', 'The circle', 'Word of mouth did its thing. More brands, more trust — still one founder at the centre.', 'ink'],
    ['2023', 'The system', 'Strategy, design, video and ads started running as one process, not five vendors.', 'cream'],
    ['2024', 'The momentum', 'Bigger briefs, braver ideas, and work clients could point to.', 'teal'],
    ['2025', 'The full funnel', 'Websites, automation and performance joined the mix. One roof.', 'yellow'],
    ['2026', 'The agency', 'FivePS is a trusted digital marketing agency. 250+ clients already worked with — and counting.', 'ink'],
];

const WHY = [
    ['01', 'One founder. One roof.', 'FivePS is Pankaj’s company. The brief goes to the person who built the agency.', 'ink'],
    ['02', 'The brief decides.', 'The work takes the shape the brand needs — first audience or a brand that already has one.', 'yellow'],
    ['03', '250+ brands.', 'Clinics, farms, dealerships, event studios, founders. Real work, not a moodboard.', 'teal'],
    ['04', 'Not five vendors.', 'Strategy, design, websites, video and ads sit together, so nothing feels taped on.', 'cream'],
];

const SHOTS = [
    ['/work/brand-fiveps.jpg', 'The mark', '-4deg'],
    ['/work/site-home.jpg', 'The site', '3deg'],
    ['/work/poster-growth-lab.jpg', 'The reel', '-3deg'],
    ['/work/site-fiveps-in.jpg', 'Live', '4deg'],
    ['/work/poster-digital-logo.jpg', 'Motion', '-2deg'],
    ['/work/brand-growth-lab.jpg', 'The brand', '3deg'],
];

const TICK = ['One founder', 'One roof', '200+ projects', '5+ years', '96% stay', '250+ brands', 'Strategy', 'Ads', 'Content', 'Websites'];

function ShotsCarousel() {
    const count = SHOTS.length;
    const [index, setIndex] = useState(count);
    const [paused, setPaused] = useState(false);
    const [snap, setSnap] = useState(false);
    const loop = [...SHOTS, ...SHOTS, ...SHOTS];

    useEffect(() => {
        if (paused) return undefined;
        const timer = setInterval(() => setIndex((current) => current + 1), 2800);
        return () => clearInterval(timer);
    }, [paused]);

    useEffect(() => {
        if (index < count || index >= count * 2) {
            const next = ((index % count) + count);
            const jump = window.setTimeout(() => {
                setSnap(true);
                setIndex(next);
            }, 720);
            return () => window.clearTimeout(jump);
        }
        setSnap(false);
        return undefined;
    }, [index, count]);

    const go = (dir) => setIndex((current) => current + dir);

    return (
        <div
            className="abo-shots__carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="abo-shots__view">
                <div
                    className={`abo-shots__track${snap ? ' is-snap' : ''}`}
                    style={{ transform: `translateX(calc(${index} * -18.5rem))` }}
                >
                    {loop.map(([src, tag, tilt], i) => (
                        <figure key={`${src}-${i}`} style={{ '--tilt': tilt }}>
                            <img src={src} alt="" />
                            <figcaption>{tag}</figcaption>
                        </figure>
                    ))}
                </div>
            </div>
            <div className="abo-shots__nav">
                <button type="button" aria-label="Previous work" onClick={() => go(-1)}>←</button>
                <span>{(index % count) + 1} / {count}</span>
                <button type="button" aria-label="Next work" onClick={() => go(1)}>→</button>
            </div>
        </div>
    );
}

export default function AboutJourney() {
    const root = useRef(null);
    const router = useRouter();
    const [ask, setAsk] = useState('');

    useEffect(() => {
        const stage = root.current;
        if (!stage) return undefined;
        const nodes = stage.querySelectorAll('.craft-in, [data-reveal]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add(entry.target.classList.contains('craft-in') ? 'is-shown' : 'is-in');
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.18 });
        nodes.forEach((node) => observer.observe(node));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="abo" ref={root}>
            <section className="abo-hero">
                <i className="abo-blob abo-blob--cream" aria-hidden="true" />
                <i className="abo-blob abo-blob--yellow" aria-hidden="true" />
                <i className="abo-blob abo-blob--ring" aria-hidden="true" />
                <p className="services__kicker craft-in">The agency</p>
                <h1 className="craft-in">
                    An agency built
                    <br />
                    for the <em>work.</em>
                </h1>
                <p className="abo-hero__sub craft-in">One founder. One roof. No extras.</p>
                <p className="abo-lead craft-in">
                    FivePS is Pankaj’s digital marketing agency — one founder, one company, one roof.
                    Strategy, ads, content, design and websites sit together.
                </p>
                <div className="abo-hero__chips craft-in">
                    <span>strategy</span>
                    <span>ads</span>
                    <span>content</span>
                    <span>websites</span>
                </div>
                <a className="abo-btn" href="mailto:hello@fiveps.com">Start a project</a>
                <i className="abo-stamp" aria-hidden="true">est. 2018</i>
            </section>

            <div className="abo-tick" aria-hidden="true">
                <div className="abo-tick__track">
                    {[...TICK, ...TICK].map((word, i) => (
                        <span key={`${word}-${i}`}>{word}</span>
                    ))}
                </div>
            </div>

            <section className="abo-stats">
                <p className="services__kicker craft-in">By the numbers</p>
                <ul className="abo-nums" aria-label="Agency stats">
                    <li className="abo-nums__card abo-nums__card--yellow craft-in">
                        <b>200+</b>
                        <span>projects done</span>
                    </li>
                    <li className="abo-nums__card abo-nums__card--ink craft-in">
                        <b>5+</b>
                        <span>years in</span>
                    </li>
                    <li className="abo-nums__card abo-nums__card--cream craft-in">
                        <b>96%</b>
                        <span>stay with us</span>
                    </li>
                </ul>
            </section>

            <section className="abo-split">
                <div className="abo-split__copy">
                    <p className="services__kicker">The years</p>
                    <h2 className="services__title craft-in">
                        How FivePS
                        <br />
                        came to <em>life.</em>
                    </h2>
                    <p>
                        2018 was a thought. 2026 is an agency.
                        Same founder. Same roof. The work just got louder.
                    </p>
                    <p className="abo-scribble">Scroll the years ↓</p>
                </div>
                <ol className="abo-years">
                    {YEARS.map(([year, title, text, tone], i) => (
                        <li key={year} className={`abo-years__card abo-years__card--${tone}`} data-reveal style={{ transitionDelay: `${i * 45}ms` }}>
                            <b>{year}</b>
                            <div>
                                <strong>{title}</strong>
                                <p>{text}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="abo-why">
                <div className="abo-why__head craft-in">
                    <p className="services__kicker">Why us</p>
                    <h2 className="qa__title">Why brands stay <em>with FivePS.</em></h2>
                </div>
                <ol className="abo-why__list">
                    {WHY.map(([n, t, d, tone], i) => (
                        <li key={n} className={`abo-why__card abo-why__card--${tone}`} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                            <small>{n}</small>
                            <strong>{t}</strong>
                            <p>{d}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="abo-shots">
                <div className="abo-shots__head craft-in">
                    <p className="work__kicker">The work</p>
                    <h2 className="work__title">Made here. <em>Kept here.</em></h2>
                </div>
                <ShotsCarousel />
            </section>

            <section className="ask-help">
                <p className="ask-help__marks" aria-hidden="true">* * * * *</p>
                <h2>How can we help?</h2>
                <p>Ask about a service, a reel, a site — or just send the brief.</p>
                <form
                    className="ask-help__bar"
                    onSubmit={(event) => {
                        event.preventDefault();
                        const text = ask.trim();
                        router.push(text ? `/contact?q=${encodeURIComponent(text)}` : '/contact');
                    }}
                >
                    <input
                        type="text"
                        placeholder="Ask the agency anything…"
                        value={ask}
                        onChange={(e) => setAsk(e.target.value)}
                    />
                    <button type="submit">Ask</button>
                </form>
            </section>
            <Footer />
        </div>
    );
}
