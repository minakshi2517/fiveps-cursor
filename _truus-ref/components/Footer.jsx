import Link from 'next/link';

const PAGES = [
    ['Home', '/'],
    ['Services', '/services'],
    ['Portfolio', '/portfolio'],
    ['Case Study', '/case-study'],
    ['About', '/about'],
    ['Blog', '/blog'],
    ['Contact', '/contact'],
];

const REWARI = {
    city: 'Rewari',
    lines: ['SCO A-03, 1st Floor', 'Above Suncity Projects Office', 'Sector 6, Suncity, Rewari 123401'],
    map: 'https://www.google.com/maps/search/?api=1&query=Suncity+Rewari+Haryana+123401',
};

const DELHI = {
    city: 'New Delhi',
    lines: ['3rd floor, Shop No. 338', 'Kakrole Housing Complex', 'Dwarka Mor, New Delhi 110078'],
    map: 'https://www.google.com/maps/search/?api=1&query=Dwarka+Mor+Kakrola+New+Delhi+110078',
};

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-footer__cta">
                <div>
                    <p className="site-footer__kicker">Start a project</p>
                    <p className="site-footer__cta-title">Let’s make something.</p>
                </div>
                <Link href="/contact" className="site-footer__btn">Talk to the agency</Link>
            </div>

            <div className="site-footer__grid">
                <div className="site-footer__brand">
                    <p className="site-footer__mark">
                        <img src="/fiveps-mark.png" alt="FivePS" />
                    </p>
                    <p className="site-footer__line">
                        Making brands internet-worthy. Strategy, ads, content, design, and websites — from one agency.
                    </p>
                    <a className="site-footer__mail" href="mailto:hello@fiveps.com">hello@fiveps.com</a>
                    <a className="site-footer__phone" href="tel:+919350612825">+91 93506 12825</a>
                    <p className="site-footer__hours">Mon–Sat, 9am–6pm</p>
                </div>

                <nav className="site-footer__col" aria-label="Agency">
                    <p>Agency</p>
                    {PAGES.map(([label, href]) => (
                        <Link key={href} href={href}>{label}</Link>
                    ))}
                </nav>

                <div className="site-footer__col">
                    <p>Offices</p>
                    <address>
                        <strong>{REWARI.city}</strong>
                        {REWARI.lines.map((line) => <span key={line}>{line}</span>)}
                        <a href={REWARI.map} target="_blank" rel="noreferrer">Open in Maps</a>
                    </address>
                    <address>
                        <strong>{DELHI.city}</strong>
                        {DELHI.lines.map((line) => <span key={line}>{line}</span>)}
                        <a href={DELHI.map} target="_blank" rel="noreferrer">Open in Maps</a>
                    </address>
                </div>

                <div className="site-footer__col">
                    <p>Work with us</p>
                    <Link href="/contact">Send a brief</Link>
                    <Link href="/case-study">Case studies</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <a href="https://livecalculator.fivepsdigital.com/" target="_blank" rel="noreferrer">
                        Price calculator
                    </a>
                    <a href="mailto:hello@fiveps.com">Email the agency</a>
                </div>
            </div>

            <div className="site-footer__bar">
                <p>© {new Date().getFullYear()} FivePS. One founder. One roof.</p>
                <p>Rewari · New Delhi</p>
            </div>
        </footer>
    );
}
