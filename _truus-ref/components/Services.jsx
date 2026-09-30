'use client';

import { useEffect, useRef } from 'react';

const SERVICES = [
    {
        tag: 'Marketing',
        title: 'Marketing',
        tone: 'blue',
        items: ['Organic Marketing', 'Advertisement', 'Lead Generation', 'Social Media', 'Performance', 'Content'],
    },
    {
        tag: 'Design',
        title: 'Graphic designing',
        tone: 'sage',
        items: ['Logo Design', 'Brand Guides', 'Website Design', 'App Design', 'UX Design', '3D Designing'],
    },
    {
        tag: 'Videos',
        title: 'Photo & video',
        tone: 'air',
        items: ['Corporate', 'Lifestyle', 'Food', 'Product', 'Shoot Strategy', 'Video Editing'],
    },
    {
        tag: 'Web Development',
        title: 'Web development',
        tone: 'teal',
        items: ['E-Commerce', 'Landing Pages', 'CMS', 'Mobile Apps', 'Personal Sites', 'Custom Products'],
    },
    {
        tag: 'Automation',
        title: 'Automation',
        tone: 'deep',
        items: ['Workflows', 'CRM Setup', 'Lead Routing', 'Reporting', 'Integrations', 'Chat Flows'],
    },
];

export default function Services() {
    const rootRef = useRef(null);

    useEffect(() => {
        const root = rootRef.current;
        const nodes = root.querySelectorAll('[data-reveal]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.35 });
        nodes.forEach((node) => observer.observe(node));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="services" id="services" aria-labelledby="services-title" ref={rootRef}>
            <div className="services__split">
                <div className="services__copy">
                    <p className="services__kicker">What we do</p>
                    <h2 id="services-title" className="services__title">Services</h2>
                    <p>
                        FivePS takes a brand from the first idea to the thing people actually see.
                        Strategy, ads, content, design and websites sit with one team,
                        so the work feels like one piece instead of five vendors taped together.
                    </p>
                    <a href="mailto:hello@fiveps.com">Start a project</a>
                </div>
                <div className="services__cards">
                    {SERVICES.map((service) => (
                        <article key={service.title} className={`svc svc--${service.tone}`} data-reveal>
                            <p className="svc__tag">{service.tag}</p>
                            <span className="svc__rule" aria-hidden="true" />
                            <ul className="svc__list">
                                {service.items.map((item, i) => (
                                    <li key={item} style={{ transitionDelay: `${120 + i * 70}ms` }}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
