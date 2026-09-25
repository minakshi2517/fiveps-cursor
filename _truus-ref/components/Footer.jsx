const EXPLORE = [
    ['Portfolio', '/portfolio'],
    ['The studio', '/about'],
    ['Contact', '/contact'],
];

const REACH = [
    ['Email', 'mailto:hello@fiveps.com'],
    ['Services', '/services'],
    ['Blog', '/blog'],
];

const INFO = [
    ['Clients', '/#clients'],
    ['FAQ', '/#qa'],
    ['Start a project', 'mailto:hello@fiveps.com'],
];

function Column({ title, links }) {
    return (
        <nav aria-label={title}>
            <p>{title}</p>
            {links.map(([label, href]) => (
                <a key={label} href={href}>{label}</a>
            ))}
        </nav>
    );
}

export default function Footer() {
    return (
        <div className="site-footer">
            <div className="site-footer__top">
                <div className="site-footer__brand">
                    <p className="site-footer__mark">FivePS</p>
                    <p className="site-footer__line">
                        Making brands internet-worthy. Strategy, design, film, and the site, from one studio.
                    </p>
                    <p className="site-footer__copy">© {new Date().getFullYear()} FivePS</p>
                </div>
                <Column title="Explore" links={EXPLORE} />
                <Column title="Reach" links={REACH} />
                <Column title="Information" links={INFO} />
            </div>
            <div className="site-footer__garden" aria-hidden="true">
                <FlowerBed />
            </div>
        </div>
    );
}

function Bloom({ x, stem, petal, center, scale = 1, lean = 0 }) {
    return (
        <g transform={`translate(${x} 168) scale(${scale}) rotate(${lean})`}>
            <path d={`M0 0 C ${lean} ${stem * 0.45}, ${-lean} ${stem * 0.7}, 0 ${stem}`} fill="none" stroke="#6d8a62" strokeWidth="1.6" />
            <path d={`M0 ${stem * 0.55} c -16 8 -22 18 -8 22`} fill="none" stroke="#7d9a70" strokeWidth="1.2" />
            <g transform={`translate(0 ${stem})`}>
                {[0, 55, 110, 170, 230, 290].map((a) => (
                    <ellipse key={a} cx="0" cy="-16" rx="8" ry="16" fill={petal} transform={`rotate(${a})`} opacity="0.95" />
                ))}
                <circle r="6.5" fill={center} />
                <circle r="2.2" fill="#3a2a18" />
            </g>
        </g>
    );
}

function FlowerBed() {
    const flowers = [
        [40, -78, '#e7b7a2', '#f3d36b', 0.85, -8],
        [120, -96, '#f4e2c4', '#c9843a', 1, 6],
        [210, -70, '#d98b9a', '#e7c56b', 0.9, -4],
        [300, -110, '#f6f0dc', '#d7a15a', 1.05, 8],
        [390, -84, '#c9b6de', '#e8c98a', 0.95, -6],
        [480, -100, '#e7a08a', '#f0d48a', 1.08, 4],
        [575, -72, '#f3e6cf', '#c47b4a', 0.82, -10],
        [660, -108, '#e8b4c4', '#efd39a', 1, 7],
        [755, -80, '#f7d7a8', '#c9843a', 0.92, -3],
        [845, -112, '#d7c4ea', '#f3d36b', 1.06, 5],
        [935, -76, '#f4c7b0', '#e7c56b', 0.88, -7],
        [1025, -98, '#f6f0dc', '#d7a15a', 1, 6],
        [1115, -86, '#e7b7a2', '#c47b4a', 0.96, -5],
        [1205, -108, '#c9b6de', '#f0d48a', 1.04, 8],
    ];
    return (
        <svg viewBox="0 0 1280 180" preserveAspectRatio="xMidYMax slice">
            <rect width="1280" height="180" fill="#10120f" />
            {flowers.map(([x, stem, petal, center, scale, lean]) => (
                <Bloom key={x} x={x} stem={stem} petal={petal} center={center} scale={scale} lean={lean} />
            ))}
        </svg>
    );
}
