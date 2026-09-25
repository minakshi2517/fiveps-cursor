'use client';

import { useEffect, useState } from 'react';

const COLUMNS = [
    {
        label: 'Videos',
        kind: 'video',
        slides: [
            'https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4',
            'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4',
            'https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4',
        ],
    },
    {
        label: 'Graphic',
        kind: 'image',
        slides: [
            'https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/686b8e614494dac669a4099c_c310914b5a1a573b4c7499e9531f8d52_DE.avif',
            'https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/686b8e607142a7a25157d9dd_1875b9852ca289170917f9060c95b6a4_BolpuntJapie.avif',
            'https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/686b8e60ba19eb1109d3daa5_b1280272f47b3cd3ea25b91391935efa_RonaldoMassage.avif',
        ],
    },
    {
        label: 'Pages',
        kind: 'image',
        slides: [
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=900&q=80',
        ],
    },
    {
        label: 'Website',
        kind: 'image',
        slides: [
            'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80',
        ],
    },
];

function WorkCard({ column, delay }) {
    const [index, setIndex] = useState(0);
    const count = column.slides.length;

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((current) => (current + 1) % count);
        }, 3200 + delay);
        return () => clearInterval(timer);
    }, [count, delay]);

    const go = (next) => setIndex(((next % count) + count) % count);

    return (
        <article className="work-card">
            <p className="work-card__label">{column.label}</p>
            <div className="work-card__stage">
                <div className="work-card__track" style={{ transform: `translateX(-${index * 100}%)` }}>
                    {column.slides.map((src, i) => (
                        <div className="work-card__slide" key={src}>
                            {column.kind === 'video' ? (
                                <video src={src} muted playsInline autoPlay loop />
                            ) : (
                                <img src={src} alt="" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="work-card__bar">
                <div className="work-card__dots" role="tablist" aria-label={`${column.label} slides`}>
                    {column.slides.map((src, i) => (
                        <button
                            key={src}
                            type="button"
                            className={`work__dot${i === index ? ' is-active' : ''}`}
                            aria-label={`${column.label} slide ${i + 1}`}
                            onClick={() => go(i)}
                        />
                    ))}
                </div>
                <button
                    type="button"
                    className="work-card__arrow"
                    aria-label={`Next ${column.label} slide`}
                    onClick={() => go(index + 1)}
                >
                    →
                </button>
            </div>
        </article>
    );
}

export default function Work() {
    return (
        <section className="work" id="work" aria-labelledby="work-title">
            <div className="work__intro">
                <p className="work__kicker">Our work</p>
                <h2 id="work-title" className="work__title">Work we’ve brought to life</h2>
                <p className="work__lead">
                    Films, graphics, pages, and sites we’ve put into the world.
                </p>
            </div>
            <div className="work__grid">
                {COLUMNS.map((column, i) => (
                    <WorkCard key={column.label} column={column} delay={i * 400} />
                ))}
            </div>
        </section>
    );
}
