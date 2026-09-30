'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const W = '/work/';

export const portfolioScenes = [
    {
        id: 'web',
        category: 'Web Development',
        title: 'Digital experiences built to be seen and remembered.',
        description: 'Sites planned, designed and built end to end — structure, interface and the small details people notice.',
        path: 'work / web-development',
        image: W + 'site-home.jpg',
        media: [W + 'site-services.jpg', W + 'site-fiveps-in.jpg'],
    },
    {
        id: 'design',
        category: 'Design',
        title: 'Visual systems that make brands recognizable.',
        description: 'Logos, posts and campaign graphics that hold together across every placement.',
        path: 'work / design',
        image: W + 'brand-adis-farm.jpg',
        media: [
            [W + 'brand-param.jpg', 'Param Automobiles identity'],
            [W + 'brand-yaduvanshi.jpg', 'Yaduvanshi Pearls identity'],
            [W + 'brand-shree-shyam.jpg', 'Shree Shyam Pest Control identity'],
            [W + 'brand-bmr6.jpg', 'BMR6 identity'],
            [W + 'brand-nu-look.jpg', 'Nu Look identity'],
            [W + 'brand-anand-dental.jpg', 'Anand Dental Clinic identity'],
            [W + 'brand-call-of-the-blue.jpg', 'The Call of the Blue identity'],
        ],
    },
    {
        id: 'video',
        category: 'Video / Motion',
        title: 'Motion that holds attention.',
        description: 'Reels, logo animations and edits cut for the feed — built to be watched to the end.',
        path: 'work / motion',
        video: W + 'video-growth-lab.mp4',
        image: W + 'poster-growth-lab.jpg',
        media: [
            [W + 'poster-digital-logo.jpg', 'Logo motion'],
            [W + 'end-rao.jpg', 'End screen'],
            [W + 'end-yashika.jpg', 'End screen'],
            [W + 'end-nu-look.jpg', 'End screen'],
        ],
    },
    {
        id: 'content',
        category: 'Content',
        title: 'Content designed to stop the scroll.',
        description: 'Posts and stories planned as one feed, not a pile of one-offs.',
        path: 'work / content',
        image: W + 'brand-shyam-event.jpg',
        media: [
            [W + 'end-solar.jpg', 'SolarTouch end screen'],
            [W + 'end-euler.jpg', 'Euler end screen'],
            [W + 'brand-retro-insurance.jpg', 'Retro Insurance identity'],
            [W + 'brand-rr.jpg', 'RR identity'],
        ],
    },
    {
        id: 'results',
        category: 'Results',
        title: 'Work that is measured, not guessed.',
        description: 'Campaigns are tracked in Meta Insights and reported back project by project.',
        path: 'work / results',
    },
    {
        id: 'all',
        category: 'All work',
        title: 'Different formats. One standard.',
        description: 'Whatever the medium, the goal stays the same — make the work matter.',
        path: 'work',
        media: [
            [W + 'site-home.jpg', 'wide', 'FivePS website'],
            [W + 'end-yashika.jpg', 'tall', 'Yashika Group end screen'],
            [W + 'brand-param.jpg', '', 'Param Automobiles identity'],
            [W + 'brand-growth-lab.jpg', '', 'Growth Lab identity'],
            [W + 'poster-digital-logo.jpg', 'tall', 'FivePS logo motion'],
            [W + 'brand-bmr6.jpg', '', 'BMR6 identity'],
            [W + 'site-fiveps-in.jpg', 'wide', 'fiveps.in website'],
            [W + 'brand-belle-ame.jpg', '', 'Belle Ame identity'],
        ],
    },
];

const STUDIO_STATS = [
    ['200+', 'projects completed'],
    ['5+', 'years of industry experience'],
    ['96%', 'client satisfaction rate'],
];

const META_METRICS = ['Reach', 'Impressions', 'Engagement', 'Profile activity'];

const DESIGN_LAYOUT = [
    { x: 7, y: 12, w: 19, from: { xPercent: -140 }, r: -7 },
    { x: 73, y: 9, w: 19, from: { xPercent: 140 }, r: 6 },
    { x: 33, y: 5, w: 11, from: { yPercent: -160 }, r: -4, cls: 'is-extra' },
    { x: 57, y: 70, w: 12, from: { yPercent: 160 }, r: 3 },
    { x: 17, y: 54, w: 16, from: { yPercent: 150 }, r: 5, cls: 'is-extra' },
    { x: 68, y: 50, w: 16, from: { yPercent: 150 }, r: -5, cls: 'is-extra' },
    { x: 2, y: 70, w: 11, from: { xPercent: -160 }, r: 4, cls: 'is-wide' },
];

const VIDEO_OUT = [-150, 150, -290, 290];

const SPANS = [0, 3.6, 6.8, 10, 13.2, 16.4, 99];

function Arrow() {
    return (
        <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function WebScene({ scene }) {
    return (
        <div className="pfx-web">
            <div className="pfx-web__page" data-web-page>
                <img src={scene.image} alt="FivePS website home page" loading="lazy" decoding="async" />
                <img src={scene.media[0]} alt="FivePS services page" loading="lazy" decoding="async" />
            </div>
        </div>
    );
}

function DesignScene({ scene }) {
    return (
        <div className="pfx-design">
            {scene.media.map(([src, alt], i) => {
                const l = DESIGN_LAYOUT[i];
                return (
                    <figure
                        key={src}
                        className={`pfx-design__item ${l.cls || ''}`}
                        style={{ left: `${l.x}%`, top: `${l.y}%`, width: `${l.w}%` }}
                        data-design-item={i}
                    >
                        <img src={src} alt={alt} loading="lazy" decoding="async" />
                    </figure>
                );
            })}
            <figure className="pfx-design__hero" data-design-hero>
                <img src={scene.image} alt="Adi's Farm identity" loading="lazy" decoding="async" />
            </figure>
        </div>
    );
}

function VideoScene({ scene, videoRef, barRef }) {
    return (
        <div className="pfx-video">
            {scene.media.map(([src, label], i) => (
                <figure key={src} className={`pfx-video__mini ${i > 1 ? 'is-extra' : ''}`} data-video-mini={i}>
                    <img src={src} alt={label} loading="lazy" decoding="async" />
                    <span className="pfx-video__tag">
                        <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M4 2.5v7l5.5-3.5z" fill="currentColor" /></svg>
                        {label}
                    </span>
                </figure>
            ))}
            <figure className="pfx-video__main" data-video-main>
                <video
                    ref={videoRef}
                    src={scene.video}
                    poster={scene.image}
                    preload="none"
                    muted
                    loop
                    playsInline
                    aria-label="Growth Lab reel"
                />
                <span className="pfx-video__play" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" /></svg>
                </span>
                <span className="pfx-video__bar"><i ref={barRef} /></span>
            </figure>
        </div>
    );
}

function Heart() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
    );
}

function ContentScene({ scene }) {
    const [storyA, storyB, postA, postB] = scene.media;
    return (
        <div className="pfx-content">
            <figure className="pfx-content__card pfx-content__card--post is-extra" style={{ left: '2%', top: '24%' }} data-content-side="-1">
                <img src={postA[0]} alt={postA[1]} loading="lazy" decoding="async" />
            </figure>
            <figure className="pfx-content__card pfx-content__card--story" style={{ left: '17%', top: '10%' }} data-content-side="-1">
                <img src={storyA[0]} alt={storyA[1]} loading="lazy" decoding="async" />
            </figure>
            <figure className="pfx-content__card pfx-content__card--story" style={{ right: '17%', top: '10%' }} data-content-side="1">
                <img src={storyB[0]} alt={storyB[1]} loading="lazy" decoding="async" />
            </figure>
            <figure className="pfx-content__card pfx-content__card--post is-extra" style={{ right: '2%', top: '24%' }} data-content-side="1">
                <img src={postB[0]} alt={postB[1]} loading="lazy" decoding="async" />
            </figure>

            <article className="pfx-ig" data-content-main>
                <header className="pfx-ig__head">
                    <span className="pfx-ig__avatar">5P</span>
                    <span className="pfx-ig__who">
                        <b>FivePS</b>
                        <small>Created by the agency</small>
                    </span>
                    <span className="pfx-ig__dots" aria-hidden="true">•••</span>
                </header>
                <img src={scene.image} alt="Shyam Event identity" loading="lazy" decoding="async" />
                <footer className="pfx-ig__foot">
                    <span className="pfx-ig__actions" aria-hidden="true">
                        <Heart />
                        <svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
                        <svg viewBox="0 0 24 24"><path d="M21 4 3 11l7 2.5L12.5 21z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
                        <svg className="pfx-ig__save" viewBox="0 0 24 24"><path d="M6 3.5h12v17l-6-4-6 4z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
                    </span>
                    <span className="pfx-ig__line" />
                    <span className="pfx-ig__line pfx-ig__line--short" />
                </footer>
            </article>
        </div>
    );
}

function ResultsScene() {
    return (
        <div className="pfx-res">
            <header className="pfx-res__top" data-res-item>
                <span className="pfx-res__src">Meta Insights</span>
                <b>Account overview</b>
                <span className="pfx-res__range">Per project</span>
            </header>
            <div className="pfx-res__metrics">
                {META_METRICS.map((m, i) => (
                    <div key={m} className={`pfx-res__metric ${i > 1 ? 'is-extra' : ''}`} data-res-item>
                        <span>{m}</span>
                        <strong>Performance data</strong>
                        <svg viewBox="0 0 120 24" preserveAspectRatio="none" aria-hidden="true">
                            <path d="M2 12h116" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 5" />
                        </svg>
                        <small>Campaign results shared with each client</small>
                    </div>
                ))}
            </div>
            <div className="pfx-res__studio">
                {STUDIO_STATS.map(([n, l]) => (
                    <div key={l} className="pfx-res__stat" data-res-item>
                        <strong>{n}</strong>
                        <span>{l}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function CollageScene({ scene }) {
    return (
        <div className="pfx-collage">
            <div className="pfx-collage__grid" data-collage-grid>
                {scene.media.map(([src, kind, alt]) => (
                    <figure key={src + kind} className={`pfx-collage__tile ${kind ? `pfx-collage__tile--${kind}` : ''}`} data-collage-tile>
                        <img src={src} alt={alt} loading="lazy" decoding="async" />
                    </figure>
                ))}
            </div>
        </div>
    );
}

export default function PortfolioShowcase() {
    const track = useRef(null);
    const root = useRef(null);
    const videoRef = useRef(null);
    const barRef = useRef(null);
    const activeRef = useRef(0);
    const [active, setActive] = useState(0);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const video = videoRef.current;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const onTime = () => {
            if (barRef.current && video.duration) {
                barRef.current.style.transform = `scaleX(${video.currentTime / video.duration})`;
            }
        };
        video.addEventListener('timeupdate', onTime);

        const setVideo = (on) => {
            if (on) {
                if (video.paused) {
                    video.preload = 'auto';
                    video.play().catch(() => {});
                }
            } else if (!video.paused) {
                video.pause();
            }
            root.current.classList.toggle('is-playing', on);
        };

        const ctx = gsap.context(() => {
            const q = gsap.utils.selector(root);
            const scenes = q('[data-scene]');
            const caps = q('[data-cap]');
            const paths = q('[data-path]');
            const floats = q('[data-float]');

            gsap.set(scenes.slice(1), { clipPath: 'inset(100% 0% 0% 0%)' });
            gsap.set([...caps.slice(1), ...paths.slice(1)], { autoAlpha: 0, yPercent: 40 });

            const tl = gsap.timeline({
                defaults: { ease: 'power2.out' },
                scrollTrigger: {
                    trigger: track.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: reduce ? true : 0.8,
                    onUpdate: (self) => {
                        const t = tl.time();
                        let idx = 0;
                        while (t >= SPANS[idx + 1]) idx += 1;
                        if (idx !== activeRef.current) {
                            activeRef.current = idx;
                            setActive(idx);
                        }
                        setVideo(idx === 2 && self.isActive);
                    },
                    onLeave: () => setVideo(false),
                    onLeaveBack: () => setVideo(false),
                },
            });

            const swap = (from, to, at) => {
                tl.to(scenes[to], { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.8, ease: 'power2.inOut' }, at)
                    .to(scenes[from], { yPercent: -8, duration: 0.8, ease: 'power2.inOut' }, at)
                    .to([caps[from], paths[from]], { autoAlpha: 0, yPercent: -40, duration: 0.4, ease: 'power2.in' }, at)
                    .to([caps[to], paths[to]], { autoAlpha: 1, yPercent: 0, duration: 0.45 }, at + 0.4);
                if (floats[from]) {
                    tl.to(floats[from].children, { autoAlpha: 0, yPercent: -30, duration: 0.45, stagger: 0.05, ease: 'power2.in' }, at);
                }
            };

            // Web
            tl.fromTo(q('[data-frame]'), { scale: 0.93 }, { scale: 1, duration: 1.1 }, 0)
                .to(q('[data-web-page]'), { yPercent: -50, duration: 2.2, ease: 'power1.inOut' }, 0.7)
                .from(q('[data-float-web]'), { xPercent: 70, rotation: 6, autoAlpha: 0, duration: 1 }, 0.5)
                .from(q('[data-float-note]'), { autoAlpha: 0, x: -24, duration: 0.7 }, 1.1);
            swap(0, 1, 3.2);

            // Design
            q('[data-design-item]').forEach((el, i) => {
                const l = DESIGN_LAYOUT[i];
                tl.fromTo(el, { ...l.from, rotation: l.r * 2.4, autoAlpha: 0 }, { xPercent: 0, yPercent: 0, rotation: l.r, autoAlpha: 1, duration: 1.1 }, 3.7 + i * 0.12);
            });
            tl.fromTo(q('[data-design-hero]'), { scale: 0.62, autoAlpha: 0, rotation: -3 }, { scale: 1, autoAlpha: 1, rotation: 0, duration: 1.3 }, 4.3)
                .to(q('[data-design-item]'), { yPercent: -6, duration: 1.2, ease: 'none' }, 5.2);
            swap(1, 2, 6.4);

            // Video
            tl.fromTo(q('[data-video-main]'), { scale: 0.78 }, { scale: 1, duration: 1.6 }, 6.9);
            q('[data-video-mini]').forEach((el, i) => {
                tl.fromTo(el, { xPercent: 0, scale: 0.8, autoAlpha: 0 }, { xPercent: VIDEO_OUT[i], scale: 1, autoAlpha: 1, duration: 1.4 }, 7.2 + (i > 1 ? 0.25 : 0));
            });
            swap(2, 3, 9.6);

            // Content
            tl.fromTo(q('[data-content-main]'), { yPercent: 18, scale: 0.9 }, { yPercent: 0, scale: 1, duration: 1.2 }, 10);
            q('[data-content-side]').forEach((el, i) => {
                const side = Number(el.dataset.contentSide);
                tl.fromTo(el, { xPercent: side * 120, scale: 0.85, autoAlpha: 0, rotation: side * 5 }, { xPercent: 0, scale: 1, autoAlpha: 1, rotation: side * 2, duration: 1.2 }, 10.3 + (i % 2) * 0.2);
            });
            swap(3, 4, 12.8);

            // Results
            tl.from(q('[data-res-item]'), { y: 36, autoAlpha: 0, duration: 0.8, stagger: 0.12 }, 13.3);
            swap(4, 5, 16);

            // Collage
            tl.fromTo(q('[data-collage-grid]'), { scale: 1.1 }, { scale: 1, duration: 2, ease: 'power1.out' }, 16.2)
                .fromTo(q('[data-collage-tile]'), { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.8, stagger: 0.12, ease: 'power2.inOut' }, 16.5)
                .to(q('[data-frame]'), { scale: 0.97, duration: 1.4 }, 18)
                .to({}, { duration: 0.6 }, 19.4);
        }, root);

        return () => {
            video.removeEventListener('timeupdate', onTime);
            video.pause();
            ctx.revert();
        };
    }, []);

    const jumpTo = (i) => {
        const el = track.current;
        const st = ScrollTrigger.getAll().find((s) => s.trigger === el);
        if (!st) return;
        const total = 20;
        const at = i === 0 ? 0 : SPANS[i] + 0.9;
        window.scrollTo({ top: st.start + (st.end - st.start) * (at / total), behavior: 'smooth' });
    };

    const exploreAll = (e) => {
        e.preventDefault();
        document.getElementById('all-work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const [web, design, video, content, , all] = portfolioScenes;

    return (
        <section className="pfx" ref={root} aria-label="Portfolio showcase">
            <header className="pfx-intro">
                <span className="pfx-intro__chip">Portfolio</span>
                <h1>
                    Work that <em>speaks</em>
                    <br />
                    for itself.
                </h1>
                <p>Websites, identities, content, campaigns and digital experiences — built to make brands move.</p>
                <span className="pfx-intro__doodle" aria-hidden="true">
                    <span>Scroll, it moves</span>
                    <svg viewBox="0 0 120 110">
                        <path d="M14 10c30 4 58 18 66 44 5 17-2 32-14 34-11 2-16-12-6-20 12-10 34 0 42 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                        <path d="M95 76l8 14 12-9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
                <svg className="pfx-intro__star" viewBox="0 0 40 40" aria-hidden="true">
                    <path d="M20 4c1.5 9 5 13.5 15 16-10 2.5-13.5 7-15 16-1.5-9-5-13.5-15-16 10-2.5 13.5-7 15-16z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            </header>

            <div className="pfx-track" ref={track}>
                <div className="pfx-stage">
                    <div className="pfx-caps">
                        {portfolioScenes.map((s, i) => (
                            <div key={s.id} className={`pfx-cap ${s.id === 'all' ? 'pfx-cap--end' : ''}`} data-cap aria-hidden={active !== i}>
                                <div className="pfx-cap__main">
                                    <span className="pfx-cap__chip">
                                        <i>{String(i + 1).padStart(2, '0')}</i>
                                        {s.category}
                                    </span>
                                    <h2>{s.title}</h2>
                                </div>
                                <div className="pfx-cap__side">
                                    <p>{s.description}</p>
                                    {s.id === 'all' && (
                                        <a href="#all-work" className="pfx-cta" onClick={exploreAll} tabIndex={active === i ? 0 : -1}>
                                            Explore all work <Arrow />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pfx-frame-wrap">
                        <div className="pfx-frame" data-frame>
                            <div className="pfx-frame__bar">
                                <span className="pfx-frame__dots" aria-hidden="true"><i /><i /><i /></span>
                                <span className="pfx-frame__url">
                                    <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3.5 5.5V4a2.5 2.5 0 0 1 5 0v1.5M2.5 5.5h7v5h-7z" fill="none" stroke="currentColor" strokeWidth="1.2" /></svg>
                                    <span className="pfx-frame__paths">
                                        {portfolioScenes.map((s) => (
                                            <span key={s.id} data-path>fiveps / {s.path}</span>
                                        ))}
                                    </span>
                                </span>
                                <span className="pfx-frame__count" aria-hidden="true">
                                    {String(active + 1).padStart(2, '0')} / {String(portfolioScenes.length).padStart(2, '0')}
                                </span>
                            </div>

                            <div className="pfx-screen">
                                <div className="pfx-scene pfx-scene--web" data-scene><WebScene scene={web} /></div>
                                <div className="pfx-scene pfx-scene--design" data-scene><DesignScene scene={design} /></div>
                                <div className="pfx-scene pfx-scene--video" data-scene><VideoScene scene={video} videoRef={videoRef} barRef={barRef} /></div>
                                <div className="pfx-scene pfx-scene--content" data-scene><ContentScene scene={content} /></div>
                                <div className="pfx-scene pfx-scene--results" data-scene><ResultsScene /></div>
                                <div className="pfx-scene pfx-scene--all" data-scene><CollageScene scene={all} /></div>
                            </div>

                            <div className="pfx-floats" data-float>
                                <figure className="pfx-float-web" data-float-web>
                                    <span className="pfx-float-web__bar" aria-hidden="true"><i /><i /><i /></span>
                                    <img src={web.media[1]} alt="fiveps.in website" loading="lazy" decoding="async" />
                                </figure>
                                <span className="pfx-float-note" data-float-note aria-hidden="true">
                                    every pixel, on purpose
                                    <svg viewBox="0 0 60 30"><path d="M4 6c14 0 30 4 44 16m0 0-2-9m2 9-9 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </span>
                            </div>
                        </div>
                    </div>

                    <nav className="pfx-rail" aria-label="Showcase chapters">
                        {portfolioScenes.map((s, i) => (
                            <button key={s.id} type="button" className={i === active ? 'is-on' : i < active ? 'is-past' : ''} onClick={() => jumpTo(i)}>
                                <i />
                                <span>{s.id === 'all' ? 'All' : s.category.split(' ')[0]}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            <AllWork />
        </section>
    );
}

const ALL_WORK = [
    ['Websites', 'wide', [['site-home', 'FivePS website'], ['site-services', 'FivePS services page'], ['site-fiveps-in', 'fiveps.in website']]],
    ['Brand identities', 'post', [['brand-adis-farm', "Adi's Farm"], ['brand-param', 'Param Automobiles'], ['brand-yaduvanshi', 'Yaduvanshi Pearls'], ['brand-shree-shyam', 'Shree Shyam Pest Control'], ['brand-bmr6', 'BMR6'], ['brand-nu-look', 'Nu Look'], ['brand-anand-dental', 'Anand Dental Clinic'], ['brand-call-of-the-blue', 'The Call of the Blue'], ['brand-growth-lab', 'Growth Lab'], ['brand-shyam-event', 'Shyam Event'], ['brand-belle-ame', 'Belle Ame'], ['brand-retro-insurance', 'Retro Insurance'], ['brand-retro-tvs', 'Retro TVS'], ['brand-euler-retro', 'Retro Automobiles'], ['brand-solartouch', 'SolarTouch'], ['brand-nihaal', 'Nihaal Properties'], ['brand-rr', 'RR']]],
    ['End screens', 'story', [['end-anand', 'Anand Dental'], ['end-adis-farm', "Adi's Farm"], ['end-solartouch', 'SolarTouch'], ['end-solar', 'SolarTouch'], ['end-rao', 'Rao'], ['end-euler', 'Euler'], ['end-nu-look', 'Nu Look'], ['end-yashika', 'Yashika Group']]],
];

const ALL_VIDEOS = [
    ['video-growth-lab.mp4', 'poster-growth-lab.jpg', 'Growth Lab reel'],
    ['video-digital-logo.mp4', 'poster-digital-logo.jpg', 'FivePS logo motion'],
];

function AllWork() {
    return (
        <div className="pfx-all" id="all-work">
            <header className="pfx-all__head">
                <h2>All <em>work</em></h2>
                <p>Every piece below was made by the FivePS team.</p>
            </header>
            {ALL_WORK.map(([label, kind, items]) => (
                <section key={label} className="pfx-all__group" aria-label={label}>
                    <h3>{label}<sup>{items.length}</sup></h3>
                    <div className={`pfx-all__grid pfx-all__grid--${kind}`}>
                        {items.map(([file, name]) => (
                            <figure key={file}>
                                <img src={`${W}${file}.jpg`} alt={`${name} — ${label.toLowerCase()}`} loading="lazy" decoding="async" />
                                <figcaption>{name}</figcaption>
                            </figure>
                        ))}
                    </div>
                </section>
            ))}
            <section className="pfx-all__group" aria-label="Motion">
                <h3>Motion<sup>{ALL_VIDEOS.length}</sup></h3>
                <div className="pfx-all__grid pfx-all__grid--story">
                    {ALL_VIDEOS.map(([file, poster, name]) => (
                        <figure key={file}>
                            <video src={W + file} poster={W + poster} preload="none" controls muted playsInline />
                            <figcaption>{name}</figcaption>
                        </figure>
                    ))}
                </div>
            </section>
        </div>
    );
}
