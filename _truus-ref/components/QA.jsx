'use client';

import { useState } from 'react';

const QUESTIONS = [
    {
        q: 'Do you work with startups or only established brands?',
        a: 'Both. We work with startups finding their first audience and with brands that already have one. The brief decides the shape of the work, not the size of the company.',
    },
    {
        q: 'What services do you offer?',
        a: 'Marketing, development, design, content, and strategy. Social, performance, sites, apps, brand, film, and the plan that holds them together.',
    },
    {
        q: 'How long does a typical project take?',
        a: 'A focused campaign can move in a few weeks. A brand, a product, or a site usually needs longer. We set the timeline once the scope is clear.',
    },
    {
        q: 'Do you offer ongoing support after project delivery?',
        a: 'Yes. We can stay on for content, ads, updates, and the next release, or hand the work over once it is live.',
    },
    {
        q: 'How do we get started?',
        a: 'Send the brief to hello@fiveps.com. We reply with how we would approach it, what it includes, and when it can start.',
    },
];

export default function QA() {
    const [open, setOpen] = useState(0);

    const toggle = (index) => {
        setOpen((current) => (current === index ? -1 : index));
    };

    return (
        <section className="qa" id="qa" aria-labelledby="qa-title">
            <div className="qa__layout">
                <h2 id="qa-title" className="qa__title">
                    Frequently asked questions
                </h2>
                <div className="qa__list">
                    {QUESTIONS.map((item, i) => {
                        const isOpen = open === i;
                        return (
                            <div key={item.q} className={`qa__item${isOpen ? ' is-open' : ''}`}>
                                <button
                                    type="button"
                                    className="qa__question"
                                    aria-expanded={isOpen}
                                    onClick={() => toggle(i)}
                                >
                                    <span>{item.q}</span>
                                    <span className="qa__mark" aria-hidden="true" />
                                </button>
                                {isOpen ? (
                                    <p className="qa__answer">{item.a}</p>
                                ) : null}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
