'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

const CALCULATOR = 'https://livecalculator.fivepsdigital.com/';
const PHONE = '+919350612825';
const PHONE_SHOW = '+91 93506 12825';

const POINTS = [
    ['One founder. One roof.', 'The brief goes to the person who built the agency — not a pile of partners.'],
    ['Direct & clear.', 'We reply with how we would approach it, what it includes, and when it can start.'],
    ['The work sits here.', 'Strategy, ads, content, design and websites. One agency.'],
];

const PLACES = [
    {
        city: 'Rewari',
        tag: 'HQ',
        lines: ['SCO A-03, 1st Floor', 'Above Suncity Projects Office', 'Sector 6, Suncity, Rewari 123401'],
        map: 'https://maps.google.com/maps?q=Suncity%20Rewari%20Haryana%20123401&z=15&output=embed',
        open: 'https://www.google.com/maps/search/?api=1&query=Suncity+Rewari+Haryana+123401',
    },
    {
        city: 'New Delhi',
        tag: 'Delhi',
        lines: ['3rd floor, Shop No. 338', 'Kakrole Housing Complex, Opposite Reliance Fresh', 'Pillar No. 789, Dwarka Mor, New Delhi 110078'],
        map: 'https://maps.google.com/maps?q=Dwarka%20Mor%20Kakrola%20New%20Delhi%20110078&z=15&output=embed',
        open: 'https://www.google.com/maps/search/?api=1&query=Dwarka+Mor+Kakrola+New+Delhi+110078',
    },
];

export default function ContactExperience() {
    const [seed, setSeed] = useState('');
    const [ask, setAsk] = useState('');
    const [spot, setSpot] = useState(0);
    const here = PLACES[spot];

    useEffect(() => {
        const q = new URLSearchParams(window.location.search).get('q');
        if (!q) return undefined;
        setSeed(q);
        setAsk(q);
        const t = window.setTimeout(() => {
            document.getElementById('ask-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            document.querySelector('#ask-form textarea[name="message"]')?.focus();
        }, 80);
        return () => window.clearTimeout(t);
    }, []);

    const onAsk = (event) => {
        event.preventDefault();
        const text = ask.trim();
        if (text) setSeed(text);
        document.getElementById('ask-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        document.querySelector('#ask-form textarea[name="message"]')?.focus();
    };

    return (
        <>
            <div className="ask-top">
                <section className="ask-help">
                    <p className="ask-help__marks" aria-hidden="true">* * * * *</p>
                    <h2>How can we help?</h2>
                    <p>Ask about a service, a reel, a site — or just send the brief.</p>
                    <form className="ask-help__bar" onSubmit={onAsk}>
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

            <section className="ask-hero">
                <div className="ask-copy">
                    <p className="ask-kicker">Get in touch</p>
                    <h1>
                        Talk to the
                        <br />
                        agency
                        <br />
                        <em>today.</em>
                    </h1>
                    <p className="ask-lead">
                        Get in touch with the agency for any brief — one founder, one company.
                        We reply with the approach, what’s in it, and when it can start.
                    </p>
                    <ul className="ask-points">
                        {POINTS.map(([t, d]) => (
                            <li key={t}>
                                <i aria-hidden="true">✓</i>
                                <span>
                                    <strong>{t}</strong>
                                    {d}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <ContactForm seed={seed} />
            </section>

            <section className="ask-where" id="location">
                <header>
                    <p className="ask-kicker">Location &amp; information</p>
                    <h2>Where FivePS sits.</h2>
                </header>
                <div className="ask-loc">
                    <div className="ask-loc__list" role="tablist" aria-label="Offices">
                        {PLACES.map((place, i) => (
                            <button
                                key={place.city}
                                type="button"
                                role="tab"
                                aria-selected={i === spot}
                                className={i === spot ? 'is-on' : ''}
                                onClick={() => setSpot(i)}
                            >
                                <span>{place.tag}</span>
                                <strong>{place.city}</strong>
                                {place.lines.map((line) => <p key={line}>{line}</p>)}
                            </button>
                        ))}
                    </div>
                    <div className="ask-loc__map">
                        <iframe
                            key={here.city}
                            title={`Map of FivePS ${here.city}`}
                            src={here.map}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <a href={here.open} target="_blank" rel="noreferrer">
                            Open {here.city} in Maps
                        </a>
                    </div>
                </div>
                <ul className="ask-facts">
                    <li>
                        <span>Phone</span>
                        <a href={`tel:${PHONE}`}>{PHONE_SHOW}</a>
                        <small>Mon–Sat, 9am–6pm</small>
                    </li>
                    <li>
                        <span>Email</span>
                        <a href="mailto:hello@fiveps.com">hello@fiveps.com</a>
                    </li>
                    <li>
                        <span>Estimate</span>
                        <a href={CALCULATOR} target="_blank" rel="noreferrer">Price calculator</a>
                    </li>
                    <li>
                        <span>Work</span>
                        <Link href="/portfolio">See the work</Link>
                        <Link href="/services">See services</Link>
                    </li>
                </ul>
            </section>
        </>
    );
}
