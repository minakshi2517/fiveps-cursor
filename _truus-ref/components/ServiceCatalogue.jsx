'use client';

import { useState } from 'react';
import { SERVICE_PAGES } from '@/lib/pages';

const STEPS = ['Brief', 'Make', 'Ship', 'Follow up'];

export default function ServiceCatalogue() {
    const [active, setActive] = useState(0);
    const service = SERVICE_PAGES[active];

    return (
        <div className="cap">
            <div className="cap__stage">
                <ol className="cap__index">
                    {SERVICE_PAGES.map((item, i) => (
                        <li key={item.id}>
                            <button
                                type="button"
                                className={i === active ? 'is-on' : ''}
                                onClick={() => setActive(i)}
                                aria-current={i === active ? 'true' : undefined}
                            >
                                <span>{item.num}</span>
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ol>
                <article className="cap__detail" key={service.id}>
                    <p className="cap__num">{service.num}</p>
                    <h2>{service.name}</h2>
                    <p className="cap__does">{service.does}</p>
                    <p className="cap__why">{service.why}</p>
                    <ul>
                        {service.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <ol className="cap__steps">
                        {STEPS.map((step, i) => <li key={step}><i>{String(i + 1).padStart(2, '0')}</i>{step}</li>)}
                    </ol>
                    <a href={`mailto:hello@fiveps.com?subject=${encodeURIComponent(`FivePS / ${service.name}`)}`}>
                        Start {service.name === 'Automation' ? 'an' : 'a'} {service.name} project →
                    </a>
                </article>
            </div>
            <div className="cap__flow" aria-hidden="true">
                {SERVICE_PAGES.map((item, i) => (
                    <span key={item.id}>{item.name}{i < SERVICE_PAGES.length - 1 ? ' →' : ''}</span>
                ))}
            </div>
        </div>
    );
}
