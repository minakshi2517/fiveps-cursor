'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

export default function CaseStudy({ piece, next }) {
    const root = useRef(null);
    const router = useRouter();
    const [ask, setAsk] = useState('');
    const hero = piece.hero;

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

    const chips = [piece.client, piece.category, ...piece.services]
        .filter((item, i, all) => all.indexOf(item) === i);

    return (
        <div className="csf" ref={root}>
            <article>
                <header className="abo-hero">
                    <i className="abo-blob abo-blob--cream" aria-hidden="true" />
                    <i className="abo-blob abo-blob--yellow" aria-hidden="true" />
                    <i className="abo-blob abo-blob--ring" aria-hidden="true" />
                    <p className="services__kicker craft-in">Case study · {piece.num}</p>
                    <h1 className="craft-in">
                        {piece.title}
                        <br />
                        <em>{piece.accent}</em>
                    </h1>
                    <div className="abo-hero__chips craft-in">
                        {chips.map((chip) => (
                            <span key={chip}>{chip}</span>
                        ))}
                    </div>
                    <i className="abo-stamp" aria-hidden="true">{piece.category}</i>
                </header>

                <div className="csf-stage work-card craft-in">
                    <div className="work-card__stage csf-stage__media">
                        {hero.type === 'video' ? (
                            <video src={hero.src} poster={hero.poster} muted loop playsInline autoPlay preload="metadata" />
                        ) : (
                            <img src={hero.src} alt={`${piece.client} — ${piece.title}`} />
                        )}
                    </div>
                </div>

                <section className="csf-story">
                    <p className="agency-stats__kicker craft-in">in this file</p>
                    <ul className="agency-stats">
                        <li className="craft-in">
                            <span className="agency-stats__icon" aria-hidden="true" />
                            <strong>The brief</strong>
                            <span className="agency-stats__label">{piece.brief}</span>
                        </li>
                        <li className="craft-in">
                            <span className="agency-stats__icon" aria-hidden="true" />
                            <strong>What we made</strong>
                            <span className="agency-stats__label">{piece.made}</span>
                        </li>
                        <li className="craft-in">
                            <span className="agency-stats__icon" aria-hidden="true" />
                            <strong>In the file</strong>
                            <span className="agency-stats__label">{piece.note}</span>
                        </li>
                    </ul>
                </section>

                <section className="work cs-files" aria-label="Work from this file">
                    <div className="work__intro craft-in">
                        <p className="work__kicker">the work</p>
                        <h2 className="work__title">from the file</h2>
                    </div>
                    <div className="work__grid">
                        {piece.shots.map((src, i) => (
                            <article className="work-card" data-reveal key={src}>
                                <p className="work-card__label">Still</p>
                                <div className="work-card__stage">
                                    <div className="work-card__track">
                                        <div className="work-card__slide">
                                            <img src={src} alt={`${piece.client} work ${i + 1}`} />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <nav className="csf-next">
                    <Link href="/case-study" className="csf-next__back">All case studies</Link>
                    <Link href={`/portfolio/${next.slug}`} className="csf-next__go">
                        <small>Next file</small>
                        <strong>{next.title}</strong>
                        <em>{next.accent}</em>
                    </Link>
                </nav>

                <section className="ask-help">
                    <p className="ask-help__marks" aria-hidden="true">* * * * *</p>
                    <h2>Let’s make something.</h2>
                    <p>Have a project in mind? Send the brief.</p>
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
                            placeholder="Ask the studio anything…"
                            value={ask}
                            onChange={(e) => setAsk(e.target.value)}
                        />
                        <button type="submit">Ask</button>
                    </form>
                </section>
            </article>
            <Footer />
        </div>
    );
}
