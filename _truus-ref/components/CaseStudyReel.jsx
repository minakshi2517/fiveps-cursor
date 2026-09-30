'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CASES } from '@/lib/pages';

const TICK = [
    ...CASES.map((item) => item.title),
    'The brief',
    'What we made',
    'The file',
];

const POINTS = [
    ['The brief', 'What the brand needed, before we opened the file.'],
    ['What we made', 'Identity, reels, sites and campaigns — the actual work.'],
    ['The file', 'Real stills and film. No stock. No invented results.'],
];

function CaseCard({ item }) {
    const [open, setOpen] = useState(false);
    const media = item.hero;

    return (
        <article className={`work-card cs-file${open ? ' is-open' : ''}`} data-reveal>
            <p className="work-card__label">{item.category}</p>
            <Link href={`/portfolio/${item.slug}`} className="work-card__stage" aria-label={item.title}>
                <div className="work-card__track">
                    <div className="work-card__slide">
                        {media.type === 'video' ? (
                            <video src={media.src} poster={media.poster} muted loop playsInline autoPlay preload="metadata" />
                        ) : (
                            <img src={item.cover} alt="" />
                        )}
                    </div>
                </div>
            </Link>
            <div className="cs-file__copy">
                <h2>{item.title}</h2>
                <p className="cs-file__accent">{item.accent}</p>
                <p className="cs-file__brief">{item.brief}</p>
                {open ? (
                    <>
                        <p className="cs-file__tag">What we made</p>
                        <p className="cs-file__extra">{item.made}</p>
                        <p className="cs-file__tag">In the file</p>
                        <p className="cs-file__extra">{item.note}</p>
                    </>
                ) : null}
            </div>
            <div className="work-card__bar">
                <button type="button" className="cs-file__more" onClick={() => setOpen((v) => !v)}>
                    {open ? 'Show less' : 'Read more'}
                </button>
                <Link href={`/portfolio/${item.slug}`} className="work-card__arrow" aria-label={`Open ${item.title}`}>
                    →
                </Link>
            </div>
        </article>
    );
}

export default function CaseStudyReel() {
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
        }, { threshold: 0.16 });
        nodes.forEach((node) => observer.observe(node));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="csf" ref={root}>
            <section className="abo-hero abo-hero--case">
                <p className="services__kicker craft-in">Case studies</p>
                <h1 className="craft-in">
                    The files,
                    <br />
                    <em>opened.</em>
                </h1>
                <p className="abo-lead craft-in">
                    Real briefs, real work. Identity, reels, sites and campaigns — no stock, no invented results.
                </p>
                <div className="abo-hero__chips craft-in">
                    <span>Brief</span>
                    <span>Made</span>
                    <span>File</span>
                    <span>Work</span>
                </div>
                <a className="abo-btn" href="mailto:hello@fiveps.com">Start a project</a>
            </section>

            <div className="abo-tick" aria-hidden="true">
                <div className="abo-tick__track">
                    {[...TICK, ...TICK].map((word, i) => (
                        <span key={`${word}-${i}`}>{word}</span>
                    ))}
                </div>
            </div>

            <section className="csf-points">
                <p className="agency-stats__kicker craft-in">In every file</p>
                <ul className="agency-stats" aria-label="What a case study holds">
                    {POINTS.map(([title, text]) => (
                        <li key={title} className="craft-in">
                            <span className="agency-stats__icon" aria-hidden="true" />
                            <strong>{title}</strong>
                            <span className="agency-stats__label">{text}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="work cs-files" aria-labelledby="cs-files-title">
                <div className="work__intro craft-in">
                    <p className="work__kicker">The files</p>
                    <h2 id="cs-files-title" className="work__title">Work we’ve opened</h2>
                    <p className="work__lead">
                        Six real briefs. Read a few lines, or open the file.
                    </p>
                </div>
                <div className="work__grid">
                    {CASES.map((item) => (
                        <CaseCard key={item.slug} item={item} />
                    ))}
                </div>
            </section>

            <section className="ask-help">
                <p className="ask-help__marks" aria-hidden="true">* * * * *</p>
                <h2>How can we help?</h2>
                <p>Ask about a reel, a site, a mark — or send the brief.</p>
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
        </div>
    );
}
