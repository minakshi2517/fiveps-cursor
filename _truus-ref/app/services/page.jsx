import Link from 'next/link';
import { SERVICE_PAGES } from '@/lib/pages';

export const metadata = { title: 'Services — FivePS' };

export default function ServicesPage() {
    return (
        <main className="page">
            <header className="page__intro">
                <p className="page__kicker">What we do</p>
                <h1>Five services. One team.</h1>
                <p className="page__lead">
                    FivePS takes a brand from the first idea to the thing people actually see. Strategy, design, film, the site, and the follow-up sit together, so the work feels like one piece.
                </p>
            </header>
            {SERVICE_PAGES.map((service) => (
                <article key={service.id} id={service.id} className="svc-band" style={{ background: service.tone }}>
                    <div>
                        <span className="svc-band__num">{service.num}</span>
                        <h2>{service.name}</h2>
                        <p>{service.does}</p>
                    </div>
                    <div>
                        <p>{service.why}</p>
                        <ul>
                            {service.items.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                        <a className="page__cta" href={`mailto:hello@fiveps.com?subject=${encodeURIComponent(`FivePS / ${service.name}`)}`}>Start {service.name === 'Automation' ? 'an' : 'a'} {service.name} project</a>
                    </div>
                </article>
            ))}
            <p className="page__intro"><Link href="/contact">Or send the brief from the contact page.</Link></p>
        </main>
    );
}
