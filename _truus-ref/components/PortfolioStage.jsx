'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const GRAPHIC = [
    'https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/686b8e614494dac669a4099c_c310914b5a1a573b4c7499e9531f8d52_DE.avif',
    'https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/686b8e607142a7a25157d9dd_1875b9852ca289170917f9060c95b6a4_BolpuntJapie.avif',
    'https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/686b8e60ba19eb1109d3daa5_b1280272f47b3cd3ea25b91391935efa_RonaldoMassage.avif',
    'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=70',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=70',
    'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=800&q=70',
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=70',
    'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=70',
    'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=800&q=70',
    'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=800&q=70',
];

const VIDEOS = [
    'https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4',
    'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4',
    'https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4',
];

const PAGES = [
    '1551288049-bebda4e38f71',
    '1460925895917-afdab827c52f',
    '1543286386-713bdd548da4',
    '1467232004584-a241de8bcf5d',
    '1498050108023-c5249f4df085',
    '1547658719-da2b51169166',
    '1486312338219-ce68d2c6f44d',
    '1432888498266-38ffec3eaf0a',
    '1559028012-481c04fa702d',
    '1542744173-8e7e53415bb0',
    '1551434678-e076c223a692',
    '1519389950473-47ba0277781c',
    '1600880292203-757bb62b4baf',
    '1553877522-43269d4ea984',
    '1499951360447-b19be8fe80f5',
    '1507238691740-187a5b1d37b8',
    '1517245386807-bb43f82c33c4',
    '1522202176988-66273c2fd55f',
    '1522071820081-009f0129c71c',
    '1552664730-d307ca884978',
    '1460925895917-afdab827c52f',
    '1542744095-fcf48d80b0fd',
].map((id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=700&q=70`);

const SITES = [
    ['Storefront', 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=70'],
    ['Landing', 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=70'],
    ['Product', 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1400&q=70'],
];

const PIPE = [
    ['01', 'Lead', 'A name and a message come in.'],
    ['02', 'Capture', 'The form or the chat keeps the details.'],
    ['03', 'Route', 'It goes to the right person.'],
    ['04', 'CRM', 'It lands in the system.'],
    ['05', 'Reply', 'The follow-up does not wait on memory.'],
    ['06', 'Report', 'What moved is visible after.'],
];

function GraphicArc() {
    const shots = Array.from({ length: 14 }, (_, index) => GRAPHIC[index % GRAPHIC.length]);

    return (
        <div className="g-arc">
            <div className="g-arc__spin">
                {shots.map((src, index) => (
                    <img
                        key={`${src}-${index}`}
                        src={src}
                        alt=""
                        style={{ '--a': `${(360 / shots.length) * index}deg` }}
                    />
                ))}
            </div>
        </div>
    );
}

function PageArc() {
    const [index, setIndex] = useState(0);
    const count = PAGES.length;

    useEffect(() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) return undefined;
        const timer = setInterval(() => setIndex((current) => (current + 1) % count), 2400);
        return () => clearInterval(timer);
    }, [count]);

    return (
        <div className="cover">
            {PAGES.map((src, item) => {
                let offset = item - index;
                if (offset > count / 2) offset -= count;
                if (offset < -count / 2) offset += count;
                const distance = Math.abs(offset);
                const hidden = distance > 2;
                return (
                    <img
                        key={`${src}-${item}`}
                        src={src}
                        alt=""
                        className="cover__card"
                        style={{
                            transform: `translateX(${offset * 250}px) translateZ(${-distance * 140}px) rotateY(${offset * -32}deg) scale(${offset === 0 ? 1.05 : 0.82})`,
                            zIndex: 12 - distance,
                            opacity: hidden ? 0 : 1,
                        }}
                    />
                );
            })}
        </div>
    );
}

export default function PortfolioStage() {
    const fan = [
        { kind: 'video', src: VIDEOS[0], tilt: -11 },
        { kind: 'image', src: GRAPHIC[3], tilt: -5 },
        { kind: 'video', src: VIDEOS[1], tilt: 0 },
        { kind: 'image', src: GRAPHIC[4], tilt: 5 },
        { kind: 'video', src: VIDEOS[2], tilt: 11 },
    ];
    const strip = [...PAGES.slice(0, 12), ...PAGES.slice(0, 12)];
    const ring = Array.from({ length: 12 }, (_, index) => GRAPHIC[index % GRAPHIC.length]);

    return (
        <div className="folio">
            <header className="folio-hero" id="videos">
                <h1>Here is what<br />you need to see.</h1>
                <p className="folio-hero__sub">Films, frames, pages, and the sites that hold them.</p>
                <div className="fan">
                    {fan.map((item, index) => (
                        <div className="fan__card" key={index} style={{ '--t': `${item.tilt}deg` }}>
                            {item.kind === 'video' ? (
                                <video src={item.src} muted playsInline autoPlay loop />
                            ) : (
                                <img src={item.src} alt="" />
                            )}
                        </div>
                    ))}
                </div>
                <Link href="/contact" className="vrow__cta">Start a project</Link>
            </header>

            <section className="strip" id="graphic" aria-label="Graphic">
                <div className="strip__track">
                    {strip.map((src, index) => (
                        <img key={`${src}-${index}`} src={src} alt="" />
                    ))}
                </div>
            </section>

            <section className="split" id="pages">
                <div>
                    <p>Pages</p>
                    <h2>A quiet place for the frames.</h2>
                    <span>Layouts, screens, and the pages already in the work.</span>
                </div>
                <img src={PAGES[0]} alt="" />
            </section>

            <section className="ring" id="find">
                <h2>You will find it here.</h2>
                <div className="ring__spin">
                    {ring.map((src, index) => (
                        <img
                            key={`${src}-${index}`}
                            src={src}
                            alt=""
                            style={{ '--a': `${(360 / ring.length) * index}deg` }}
                        />
                    ))}
                </div>
            </section>

            <section className="folio-block" id="websites">
                <h2>Websites</h2>
                <div className="sites sites--clean">
                    {SITES.map(([label, src]) => (
                        <article key={label}>
                            <div className="sites__shot">
                                <img src={src} alt="" />
                            </div>
                            <div className="sites__bar">
                                <h3>{label}</h3>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="folio-block" id="automation">
                <h2>Automation</h2>
                <ol className="pipe">
                    {PIPE.map(([num, title, text]) => (
                        <li key={num}>
                            <b>{num}</b>
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </li>
                    ))}
                    <span className="pipe__dot" aria-hidden="true" />
                </ol>
            </section>
        </div>
    );
}
