'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const W = '/work/';
const CALCULATOR = 'https://livecalculator.fivepsdigital.com/';

const CLIENTS = [
    { name: "Adi's Farm", src: '/clients/adis-farm.png' },
    { name: 'Anand Dental Clinic', src: '/clients/anand-dental.png' },
    { name: 'Belle Ame', src: '/clients/belle-ame.png' },
    { name: 'BMR6', src: '/clients/bmr6.png' },
    { name: 'The Call of the Blue', src: '/clients/call-of-the-blue.png' },
    { name: 'Growth Lab', src: '/clients/growth-lab.png' },
    { name: 'Nihaal Properties', src: '/clients/nihaal.png' },
    { name: 'Nu Look', src: '/clients/nu-look.png' },
    { name: 'Rao Restaurant & Rooms', src: '/clients/rao.png' },
    { name: 'Retro Insurance', src: '/clients/retro-insurance.png' },
    { name: 'Retro TVS', src: '/clients/retro-tvs.png' },
    { name: 'Shree Shyam Pest Control', src: '/clients/shree-shyam.png' },
    { name: 'Shyam Event Rewari', src: '/clients/shyam-event.png' },
    { name: 'Solartouch Power Solution', src: '/clients/solartouch.png' },
    { name: 'TVS', src: '/clients/tvs.png' },
    { name: 'Waaree', src: '/clients/waaree.png' },
    { name: 'Yaduvanshi Pearls', src: '/clients/yaduvanshi.png' },
    { name: 'Yamaha Racing', src: '/clients/yamaha.png' },
    { name: 'Yashika Group', src: '/clients/yashika.png' },
];

const SHOW_CARDS = ['end-solar', 'site-home', 'poster-growth-lab', 'end-yashika', 'site-services'];

const HERO_CLIPS = [
    { src: 'video-growth-lab.mp4', poster: 'poster-growth-lab.jpg', label: 'VIDEO', start: 0.2 },
    { src: 'video-digital-logo.mp4', poster: 'poster-digital-logo.jpg', label: 'GRAPHICS', start: 0.6 },
    { src: 'video-growth-lab.mp4', poster: 'poster-growth-lab.jpg', label: 'VIDEO', start: 2.4 },
    { src: 'video-digital-logo.mp4', poster: 'poster-digital-logo.jpg', label: 'GRAPHICS', start: 1.3 },
    { src: 'video-growth-lab.mp4', poster: 'poster-growth-lab.jpg', label: 'VIDEO', start: 4.1 },
    { src: 'video-digital-logo.mp4', poster: 'poster-digital-logo.jpg', label: 'GRAPHICS', start: 2.2 },
    { src: 'video-growth-lab.mp4', poster: 'poster-growth-lab.jpg', label: 'VIDEO', start: 1.8 },
    { src: 'video-digital-logo.mp4', poster: 'poster-digital-logo.jpg', label: 'GRAPHICS', start: 0.4 },
];

const HERO_REEL = [...HERO_CLIPS, ...HERO_CLIPS];

const GATE_SLIDES = [
    { type: 'image', src: W + 'site-home.jpg', label: 'FivePS website' },
    { type: 'video', src: W + 'video-digital-logo.mp4', poster: W + 'poster-digital-logo.jpg', label: 'FivePS logo motion' },
    { type: 'video', src: W + 'video-growth-lab.mp4', poster: W + 'poster-growth-lab.jpg', label: 'Growth Lab reel' },
];

const LOGO_SLIDES = [
    { src: 'brand-adis-farm', alt: "Adi's Farm", fit: 'contain' },
    { src: 'brand-anand-dental', alt: 'Anand Dental Clinic', fit: 'contain' },
    { src: 'brand-belle-ame', alt: 'Belle Ame', fit: 'contain' },
    { src: 'brand-bmr6', alt: 'BMR6', fit: 'contain' },
    { src: 'brand-call-of-the-blue', alt: 'The Call of the Blue', fit: 'contain' },
    { src: 'brand-euler-retro', alt: 'Euler Retro', fit: 'contain' },
    { src: 'brand-fiveps', alt: 'FivePS', fit: 'contain' },
    { src: 'brand-growth-lab', alt: 'Growth Lab', fit: 'contain' },
    { src: 'brand-nihaal', alt: 'Nihaal Properties', fit: 'contain' },
    { src: 'brand-nu-look', alt: 'Nu Look', fit: 'contain' },
    { src: 'brand-param', alt: 'Param Automobiles', fit: 'contain' },
    { src: 'brand-retro-insurance', alt: 'Retro Insurance', fit: 'contain' },
    { src: 'brand-retro-tvs', alt: 'Retro TVS', fit: 'contain' },
    { src: 'brand-rr', alt: 'RR', fit: 'contain' },
    { src: 'brand-shree-shyam', alt: 'Shree Shyam Pest Control', fit: 'contain' },
    { src: 'brand-shyam-event', alt: 'Shyam Event Rewari', fit: 'contain' },
    { src: 'brand-solartouch', alt: 'Solartouch', fit: 'contain' },
    { src: 'brand-waaree', alt: 'Waaree', fit: 'contain' },
    { src: 'brand-yaduvanshi', alt: 'Yaduvanshi Pearls', fit: 'contain' },
];

const LANES = [
    { name: 'Logo Designing', page: 'logoDesigining', slides: LOGO_SLIDES },
    {
        name: 'Social Media Marketing',
        page: 'socialMedia',
        slides: [
            { src: 'end-solar', alt: 'Solar campaign' },
            { src: 'end-adis-farm', alt: "Adi's Farm campaign" },
            { src: 'end-anand', alt: 'Anand Dental campaign' },
            { src: 'end-nu-look', alt: 'Nu Look campaign' },
            { src: 'end-euler', alt: 'Euler campaign' },
            { src: 'end-solartouch', alt: 'Solartouch campaign' },
            { src: 'end-yashika', alt: 'Yashika campaign' },
            { src: 'end-rao', alt: 'Rao campaign' },
        ],
    },
    {
        name: 'Video Editing',
        page: 'videoediting',
        slides: [
            { src: 'video-growth-lab.mp4', poster: 'poster-growth-lab.jpg', type: 'video', alt: 'Growth Lab reel' },
            { src: 'video-digital-logo.mp4', poster: 'poster-digital-logo.jpg', type: 'video', alt: 'Logo motion' },
            { src: 'end-yashika', alt: 'Yashika end frame' },
            { src: 'end-euler', alt: 'Euler end frame' },
        ],
    },
    {
        name: 'Web Development',
        page: 'webDesigining',
        slides: [
            { src: 'site-services', alt: 'FivePS services site' },
            { src: 'site-home', alt: 'FivePS home site' },
            { src: 'site-fiveps-in', alt: 'fiveps.in' },
        ],
    },
    {
        name: 'Personal Branding',
        page: 'graphicDesigning',
        slides: [
            { src: 'end-nu-look', alt: 'Nu Look brand' },
            { src: 'brand-nu-look', alt: 'Nu Look identity', fit: 'contain' },
            { src: 'brand-fiveps', alt: 'FivePS identity', fit: 'contain' },
            { src: 'brand-call-of-the-blue', alt: 'The Call of the Blue', fit: 'contain' },
            { src: 'brand-belle-ame', alt: 'Belle Ame', fit: 'contain' },
        ],
    },
    {
        name: 'Content Marketing',
        page: 'contentMarketing',
        slides: [
            { src: 'end-yashika', alt: 'Yashika content' },
            { src: 'end-solar', alt: 'Solar content' },
            { src: 'end-solartouch', alt: 'Solartouch content' },
            { src: 'brand-growth-lab', alt: 'Growth Lab', fit: 'contain' },
            { src: 'end-anand', alt: 'Anand content' },
        ],
    },
    {
        name: 'Instagram / Facebook Ads',
        page: 'instagramAds',
        slides: [
            { src: 'site-fiveps-in', alt: 'Ads landing' },
            { src: 'end-solar', alt: 'Solar ads' },
            { src: 'end-euler', alt: 'Euler ads' },
            { src: 'end-rao', alt: 'Rao ads' },
            { src: 'brand-waaree', alt: 'Waaree', fit: 'contain' },
        ],
    },
];

const WALL = [
    'end-solar', 'end-yashika', 'site-home', 'end-euler', 'end-rao',
    'poster-digital-logo', 'end-anand', null, 'end-nu-look', 'site-services',
    'end-adis-farm', 'end-solartouch', 'poster-growth-lab', 'site-fiveps-in', 'end-solar',
];

const WORDS = [
    ['Whether'], ["you're"], ['a'], ['founder'], ['looking'], ['to'], ['be'], ['seen'],
    ['/', 'slash'], ['or'], ['a'], ['brand'], ['seeking'], ['real', 'accent'], ['growth'],
    ['FivePS'], ['connects'], ['you'], ['to'], ['design'], ['&'], ['results.'],
];

const ICONS = {
    pen: 'M4 20l4-1 11-11-3-3L5 16l-1 4zM14 6l3 3',
    play: 'M8 5v14l11-7z',
    chart: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
    heart: 'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z',
    code: 'M8 7l-5 5 5 5M16 7l5 5-5 5',
    star: 'M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z',
    chat: 'M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12z',
    send: 'M21 4 3 11l7 2.5L12.5 21z',
    camera: 'M4 8h3l2-3h6l2 3h3v11H4zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
    bolt: 'M13 2 4 14h7l-1 8 9-12h-7z',
};

function Icon({ name }) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d={ICONS[name]} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function Arrow() {
    return (
        <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function Tag({ children, tone = 'blue', className = '', ...rest }) {
    return <span className={`pl-tag pl-tag--${tone} ${className}`} {...rest}>{children}</span>;
}

const img = (name) => (name.startsWith('/') ? name : name.includes('.') ? `${W}${name}` : `${W}${name}.jpg`);

function Hero() {
    const stage = useRef(null);
    const cells = useRef([]);
    const vids = useRef([]);

    useEffect(() => {
        const root = stage.current;
        if (!root) return undefined;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let raf = 0;
        let last = performance.now();
        let offset = 0;
        let pointer = 0;
        let pointerTarget = 0;

        const onMove = (e) => {
            const x = e.touches ? e.touches[0].clientX : e.clientX;
            pointerTarget = (x / window.innerWidth - 0.5) * 48;
        };
        window.addEventListener('pointermove', onMove, { passive: true });

        const layout = () => {
            const vw = window.innerWidth;
            const compact = vw < 801;
            const cardW = compact ? 104 : 148;
            const cardH = compact ? 152 : 214;
            const gap = compact ? 10 : 14;
            const slot = cardW + gap;
            const setW = HERO_CLIPS.length * slot;
            if (offset >= setW) offset -= setW;
            if (offset < 0) offset += setW;

            const mid = vw / 2 + pointer;
            const radius = compact ? 360 : 1180;
            cells.current.forEach((el, i) => {
                if (!el) return;
                const x = i * slot - offset - setW * 0.18;
                const center = x + cardW / 2;
                const theta = Math.max(-0.95, Math.min(0.95, (center - mid) / radius));
                const abs = Math.abs(theta);
                const y = -radius * (1 - Math.cos(theta)) * (compact ? 0.7 : 0.42);
                const z = Math.cos(theta) * (compact ? 22 : 40);
                const s = Math.max(0.74, (compact ? 1.08 : 1.16) * Math.cos(theta * 0.7));
                const ry = -theta * 26;
                const rz = theta * 10;
                el.style.width = `${cardW}px`;
                el.style.height = `${cardH}px`;
                el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${s})`;
                el.style.zIndex = String(Math.round((1 - abs) * 80));
                const video = vids.current[i];
                if (!video) return;
                const on = x > -cardW * 1.4 && x < vw + cardW * 0.5 && abs < 0.95;
                if (on) {
                    if (video.paused) video.play().catch(() => {});
                } else if (!video.paused) {
                    video.pause();
                }
            });
        };

        const tick = (now) => {
            const dt = Math.min(0.05, (now - last) / 1000);
            last = now;
            const compact = window.innerWidth < 801;
            if (!reduce) offset += dt * (compact ? 26 : 34);
            pointer += (pointerTarget - pointer) * 0.06;
            layout();
            raf = requestAnimationFrame(tick);
        };

        layout();
        raf = requestAnimationFrame(tick);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('pointermove', onMove);
        };
    }, []);

    return (
        <section className="pl-hero" data-hero>
            <div className="pl-hero__top">
                <span className="pl-hero__badge" data-hero-fade>Selected work · FivePS</span>
                <h1 className="pl-hero__title">
                    <span className="pl-hero__line">
                        {'Experience a world where'.split(' ').map((w, i) => (
                            <span key={i} className="pl-w"><span>{w}</span></span>
                        ))}
                    </span>
                    <span className="pl-hero__line">
                        <span className="pl-w pl-w--script"><span>creativity</span></span>
                        <span className="pl-w"><span>knows</span></span>
                        <span className="pl-w"><span>no</span></span>
                        <span className="pl-w"><span>bounds</span></span>
                    </span>
                </h1>
                <p className="pl-hero__sub" data-hero-fade>
                    Strategy, design, websites, video and marketing —
                    <br />
                    here’s a look at what we’ve created for real brands.
                </p>
                <em className="pl-hero__note" data-hero-fade>elevate your brand ↗</em>
            </div>

            <div className="pl-hero__stage" ref={stage} data-hero-reel>
                {HERO_REEL.map((clip, i) => (
                    <figure
                        key={`${clip.src}-${clip.start}-${i}`}
                        className="pl-hero__card"
                        ref={(el) => { cells.current[i] = el; }}
                    >
                        <video
                            ref={(el) => { vids.current[i] = el; }}
                            src={W + clip.src}
                            poster={W + clip.poster}
                            muted
                            loop
                            playsInline
                            autoPlay
                            preload="metadata"
                            onLoadedMetadata={(e) => {
                                if (clip.start) e.currentTarget.currentTime = clip.start;
                            }}
                        />
                        <figcaption>{clip.label}</figcaption>
                    </figure>
                ))}
            </div>

            <div className="pl-hero__foot">
                <Link href="/contact" className="pl-hero__go" data-hero-fade>
                    Let’s make something
                    <Arrow />
                </Link>
                <p className="pl-hero__talk" data-hero-fade>
                    Have a project in mind?
                    <br />
                    Let’s talk.
                </p>
                <a className="pl-hero__cue" href="#pl-show" data-hero-fade>
                    The receipts <span>↓</span>
                </a>
            </div>
        </section>
    );
}

function Showcase() {
    return (
        <section className="pl-show" id="pl-show">
            <div className="pl-show__copy" data-rise>
                <span className="pl-kicker">Portfolio</span>
                <h2>
                    Brands, reels,
                    <br />
                    <span className="pl-accent">&amp; websites that</span>
                    <br />
                    people remember.
                </h2>
                <p>One studio for the identity, the feed and the site — so everything a customer sees feels like the same brand.</p>
                <div className="pl-row">
                    <Link href="/contact" className="pl-btn pl-btn--dark">Start a project</Link>
                    <a href="#pl-lanes" className="pl-btn pl-btn--ghost">Browse work</a>
                </div>
            </div>
            <div className="pl-show__cascade" data-cascade>
                {SHOW_CARDS.map((c, i) => (
                    <figure key={c} className="pl-show__card" style={{ '--i': i }} data-cascade-card>
                        <img src={img(c)} alt="" loading="lazy" decoding="async" />
                    </figure>
                ))}
                <Tag tone="orange" className="pl-show__tag pl-show__tag--a">@branding</Tag>
                <Tag tone="dark" className="pl-show__tag pl-show__tag--b">@social</Tag>
            </div>
        </section>
    );
}

function Gateway() {
    const [slide, setSlide] = useState(0);
    const videos = useRef([]);

    useEffect(() => {
        videos.current.forEach((v, i) => {
            if (!v) return;
            if (i === slide) {
                v.preload = 'auto';
                v.play().catch(() => {});
            } else {
                v.pause();
            }
        });
    }, [slide]);

    const go = (d) => setSlide((s) => (s + d + GATE_SLIDES.length) % GATE_SLIDES.length);

    return (
        <section className="pl-gate">
            <div className="pl-gate__head" data-rise>
                <span className="pl-kicker">Showreel · made at FivePS</span>
                <h2>
                    Gateway to brands
                    <br />
                    people remember.
                </h2>
                <Tag tone="dark" className="pl-gate__tag">@fiveps</Tag>
            </div>
            <div className="pl-gate__banner" data-gate>
                {GATE_SLIDES.map((s, i) => (
                    <div key={s.src} className={`pl-gate__slide ${i === slide ? 'is-on' : ''}`} aria-hidden={i !== slide}>
                        {s.type === 'image' ? (
                            <img src={s.src} alt={s.label} loading="lazy" decoding="async" />
                        ) : (
                            <video ref={(el) => { videos.current[i] = el; }} src={s.src} poster={s.poster} muted loop playsInline preload="none" />
                        )}
                    </div>
                ))}
                <span className="pl-gate__dots" aria-hidden="true"><i /><i /></span>
                <span className="pl-gate__label">{GATE_SLIDES[slide].label}</span>
                <button type="button" className="pl-gate__watch" onClick={() => setSlide(slide === 0 ? 1 : slide)}>
                    <Icon name="play" /> Watch
                </button>
                <div className="pl-gate__nav">
                    <button type="button" aria-label="Previous" onClick={() => go(-1)}><Arrow /></button>
                    <button type="button" aria-label="Next" onClick={() => go(1)}><Arrow /></button>
                </div>
            </div>
        </section>
    );
}

function Words() {
    return (
        <section className="pl-words" data-words>
            <div className="pl-words__stage">
                <p className="pl-words__text" data-words-text>
                    {WORDS.map(([w, kind], i) => (
                        <span key={i} className={`pl-words__w ${kind ? `pl-words__w--${kind}` : ''}`} data-word>{w}</span>
                    ))}
                </p>
                <div className="pl-words__icons" data-words-text>
                    <span><Icon name="pen" /></span>
                    <span><Icon name="camera" /></span>
                    <span><Icon name="chart" /></span>
                </div>
            </div>
        </section>
    );
}

function Among() {
    const mid = Math.ceil(CLIENTS.length / 2);
    const top = CLIENTS.slice(0, mid);
    const bottom = CLIENTS.slice(mid);
    const row = (list, dir) => (
        <div className="pl-among__row" data-among-row={dir}>
            {[...list, ...list].map((c, i) => (
                <span
                    key={`${c.src}${i}`}
                    className={`pl-among__tile${c.src.includes('rao') ? ' pl-among__tile--light' : ''}`}
                    style={{ '--y': `${((i * 37) % 5) * 14 - 28}px` }}
                >
                    <img src={c.src} alt={i < list.length ? c.name : ''} loading="lazy" decoding="async" />
                </span>
            ))}
        </div>
    );
    return (
        <section className="pl-among" data-among>
            {row(top, 1)}
            <div className="pl-among__copy" data-rise>
                <span className="pl-among__icon"><Icon name="heart" /></span>
                <h2>
                    You will find yourself
                    <br />
                    among us.
                </h2>
                <p>Clinics, farms, dealerships, event studios and founders — brands that grow with FivePS.</p>
            </div>
            {row(bottom, -1)}
        </section>
    );
}

function Story() {
    return (
        <section className="pl-story">
            <header className="pl-story__head" data-rise>
                <span className="pl-kicker">Every brand, <b>told well</b></span>
                <h2>
                    Every piece of work
                    <br />
                    tells a story.
                </h2>
            </header>
            <div className="pl-bento">
                <article className="pl-bento__card pl-bento__card--stack" data-rise>
                    <span className="pl-chip"><Icon name="play" /> Content</span>
                    <div className="pl-bento__stack">
                        {['end-anand', 'end-rao', 'end-yashika'].map((c, i) => (
                            <img key={c} src={img(c)} alt="" loading="lazy" decoding="async" style={{ '--i': i }} />
                        ))}
                        <Tag tone="blue" className="pl-bento__tag">@stories</Tag>
                    </div>
                    <h3>Plan, create, grow.</h3>
                    <p>Posts and stories planned as one feed — not a pile of one-offs.</p>
                    <Link href="/services" className="pl-btn pl-btn--ghost pl-btn--sm">How it works</Link>
                </article>

                <article className="pl-bento__card pl-bento__card--blue" data-rise>
                    <div className="pl-bento__media">
                        <img src={img('poster-growth-lab')} alt="Growth Lab reel" loading="lazy" decoding="async" />
                    </div>
                    <h3>Where brands meet the feed.</h3>
                    <p>Reels and logo motion cut for attention — made to be watched to the end.</p>
                    <Link href="/services" className="pl-btn pl-btn--ghost pl-btn--sm">See video editing</Link>
                </article>

                <article className="pl-bento__card pl-bento__card--site" data-rise>
                    <div className="pl-bento__media">
                        <img src={img('site-fiveps-in')} alt="fiveps.in website" loading="lazy" decoding="async" />
                    </div>
                    <h3>Turn your brand into a website.</h3>
                    <p>Fast, clear sites that look like the brand and work like a salesperson.</p>
                    <Link href="/contact" className="pl-btn pl-btn--ghost pl-btn--sm">Start now</Link>
                </article>

                <article className="pl-bento__card pl-bento__card--dark" data-rise>
                    <span className="pl-bento__pin"><Icon name="star" /></span>
                    <div className="pl-bento__phone">
                        <small>FivePS studio</small>
                        <strong>Personal Branding</strong>
                        <em>Your face. Your voice.</em>
                        <span>Built into a brand people follow.</span>
                    </div>
                    <Link href="/services" className="pl-bento__link">Explore <Arrow /></Link>
                </article>
            </div>
        </section>
    );
}

function LaneCard({ lane, index }) {
    const [slide, setSlide] = useState(0);
    const [paused, setPaused] = useState(false);
    const count = lane.slides.length;
    const tones = ['ice', 'blush', 'lilac', 'sky', 'mint', 'peach', 'mist'];
    const tone = tones[index % tones.length];
    const num = String(index + 1).padStart(2, '0');

    useEffect(() => {
        if (count < 2 || paused) return undefined;
        const timer = setInterval(() => setSlide((current) => (current + 1) % count), 2800);
        return () => clearInterval(timer);
    }, [count, paused]);

    const go = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setSlide((current) => (current + 1) % count);
    };

    return (
        <article
            className={`pl-lanes__card pl-lanes__card--${tone}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="pl-lanes__stage">
                <div className="pl-lanes__slides" style={{ transform: `translateX(-${slide * 100}%)` }}>
                    {lane.slides.map((item) => (
                        <span
                            key={item.src}
                            className={`pl-lanes__slide${item.fit === 'contain' ? ' pl-lanes__slide--contain' : ''}`}
                        >
                            {item.type === 'video' ? (
                                <video
                                    src={img(item.src)}
                                    poster={item.poster ? img(item.poster) : undefined}
                                    muted
                                    loop
                                    playsInline
                                    autoPlay
                                    preload="metadata"
                                />
                            ) : (
                                <img src={img(item.src)} alt={item.alt || ''} decoding="async" />
                            )}
                        </span>
                    ))}
                </div>
            </div>
            <div className="pl-lanes__foot">
                <p>
                    <small>{num}</small>
                    <b>{lane.name}</b>
                </p>
                {count > 1 && (
                    <button
                        type="button"
                        className="pl-lanes__peek"
                        aria-label={`Next ${lane.name} work`}
                        onClick={go}
                    >
                        <Arrow />
                    </button>
                )}
            </div>
        </article>
    );
}

function Lanes() {
    const track = useRef(null);
    const [pos, setPos] = useState(0);

    const updatePos = () => {
        const el = track.current;
        if (!el) return;
        setPos(el.scrollLeft / Math.max(1, el.scrollWidth - el.clientWidth));
    };

    const scroll = (d) => {
        const el = track.current;
        if (!el) return;
        const card = el.querySelector('.pl-lanes__card');
        const step = card ? card.offsetWidth + 14 : el.clientWidth * 0.55;
        el.scrollBy({ left: d * step, behavior: 'smooth' });
    };

    const atStart = pos <= 0.02;
    const atEnd = pos >= 0.98;

    return (
        <section className="pl-lanes" id="pl-lanes">
            <div className="pl-lanes__copy" data-rise>
                <span className="pl-kicker">Pick a <b>lane</b></span>
                <h2>
                    Services
                    <br />
                    for <span className="pl-lanes__mark">every</span>
                    <br />
                    stage.
                </h2>
                <p>From the first logo to the ads that scale it — every service, one studio.</p>
                <em className="pl-lanes__note">Your Growth Partner ♡</em>
            </div>
            <div className="pl-lanes__side">
                <Link href="/services" className="pl-lanes__all">View all <Arrow /></Link>
                <div className="pl-lanes__track" ref={track} onScroll={updatePos}>
                    {LANES.map((lane, i) => (
                        <LaneCard key={lane.name} lane={lane} index={i} />
                    ))}
                </div>
                <div className="pl-lanes__controls">
                    <button
                        type="button"
                        className="pl-lanes__nav pl-lanes__nav--prev"
                        aria-label="Previous services"
                        disabled={atStart}
                        onClick={() => scroll(-1)}
                    >
                        <Arrow />
                    </button>
                    <span className="pl-lanes__bar"><i style={{ transform: `translateX(${pos * 300}%)` }} /></span>
                    <button
                        type="button"
                        className="pl-lanes__nav pl-lanes__nav--next"
                        aria-label="Next services"
                        disabled={atEnd}
                        onClick={() => scroll(1)}
                    >
                        <Arrow />
                    </button>
                </div>
            </div>
        </section>
    );
}

function Wall() {
    return (
        <section className="pl-wall" data-wall>
            <div className="pl-wall__stage">
                <div className="pl-wall__grid" data-wall-grid>
                    {WALL.map((c, i) =>
                        c ? (
                            <figure key={c + i} className="pl-wall__tile" data-wall-tile>
                                <img src={img(c)} alt="" loading="lazy" decoding="async" />
                            </figure>
                        ) : (
                            <figure key="center" className="pl-wall__tile pl-wall__tile--hero" data-wall-hero>
                                <video src={W + 'video-growth-lab.mp4'} poster={W + 'poster-growth-lab.jpg'} muted loop playsInline preload="none" data-autoplay />
                                <span className="pl-wall__like"><Icon name="heart" /> Like</span>
                                <Tag tone="orange" className="pl-wall__tag">@reels</Tag>
                                <span className="pl-wall__cap">
                                    <b>Growth Lab</b>
                                    <small>Reel by FivePS</small>
                                </span>
                            </figure>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}

function Budget() {
    const cards = [
        ['01', 'Pick', 'Choose the services your brand needs.'],
        ['02', 'Estimate', 'See your price update live.', true],
        ['03', 'Start', 'Send it over and we take it from there.'],
    ];
    return (
        <section className="pl-budget">
            <div className="pl-budget__copy" data-rise>
                <span className="pl-vision__badge"><Icon name="bolt" /></span>
                <h2>Know your budget.</h2>
                <p>No guesswork. Pick your services and see what your business needs, live, in under a minute.</p>
                <a href={CALCULATOR} target="_blank" rel="noreferrer" className="pl-btn pl-btn--dark">Calculate now <Arrow /></a>
            </div>
            <a href={CALCULATOR} target="_blank" rel="noreferrer" className="pl-budget__cards" aria-label="Open the live price calculator">
                {cards.map(([n, t, d, hot]) => (
                    <span key={n} className={`pl-budget__card ${hot ? 'is-hot' : ''}`} data-rise>
                        <small>{t}</small>
                        <strong>{n}</strong>
                        <em>{d}</em>
                        {hot && <b className="pl-budget__badge">Live</b>}
                    </span>
                ))}
            </a>
        </section>
    );
}

function Footer() {
    return (
        <footer className="pl-foot">
            <div className="pl-foot__brand">
                <b>Our studio, your brand.</b>
                <p>Identities, content, reels, websites and ads — from one team that treats your brand like its own.</p>
            </div>
            <nav aria-label="Pages">
                <Link href="/services">Services</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/case-study">Case Study</Link>
                <Link href="/about">About</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
            </nav>
            <nav aria-label="Reach">
                <a href="mailto:hello@fiveps.com">hello@fiveps.com</a>
                <a href={CALCULATOR} target="_blank" rel="noreferrer">Estimate your price <i>Live</i></a>
            </nav>
            <small className="pl-foot__copy">© 2026 FivePS. All rights reserved.</small>
        </footer>
    );
}

export default function PortfolioLanding() {
    const root = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const mm = gsap.matchMedia();

        const ctx = gsap.context(() => {
            const q = gsap.utils.selector(root);

            // Hero intro
            const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
            intro
                .fromTo(q('.pl-w > span'), { yPercent: 110 }, { yPercent: 0, duration: 0.7, stagger: 0.04 })
                .fromTo(q('[data-hero-fade]'), { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.07 }, 0.32)
                .fromTo(q('[data-hero-reel]'), { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, 0.18);

            // Generic reveals
            gsap.set(q('[data-rise]'), { opacity: 0, y: 32 });
            ScrollTrigger.batch(q('[data-rise]'), {
                start: 'top 86%',
                once: true,
                onEnter: (els) => gsap.to(els, { y: 0, opacity: 1, duration: 0.65, stagger: 0.08, ease: 'power2.out', overwrite: true }),
            });

            // Showcase cascade
            gsap.fromTo(q('[data-cascade-card]'), { x: 220, y: -120, rotation: 8, opacity: 0 }, {
                x: 0,
                y: 0,
                rotation: 0,
                opacity: 1,
                stagger: 0.08,
                ease: 'power2.out',
                scrollTrigger: { trigger: q('[data-cascade]')[0], start: 'top 85%', end: 'center 55%', scrub: reduce ? true : 0.8 },
            });

            // Gateway banner growth
            gsap.fromTo(q('[data-gate]'), { scale: 0.86, borderRadius: 40 }, {
                scale: 1,
                borderRadius: 24,
                ease: 'none',
                scrollTrigger: { trigger: q('[data-gate]')[0], start: 'top 95%', end: 'top 30%', scrub: true },
            });

            gsap.fromTo(q('[data-word]'), { opacity: 0.18 }, {
                opacity: 1,
                stagger: 0.05,
                ease: 'none',
                scrollTrigger: { trigger: q('[data-words]')[0], start: 'top 75%', end: 'center 55%', scrub: reduce ? true : 0.6 },
            });

            // Among rows drift
            q('[data-among-row]').forEach((row) => {
                const dir = Number(row.dataset.amongRow);
                gsap.fromTo(row, { xPercent: dir > 0 ? 0 : -25 }, {
                    xPercent: dir > 0 ? -25 : 0,
                    ease: 'none',
                    scrollTrigger: { trigger: q('[data-among]')[0], start: 'top bottom', end: 'bottom top', scrub: true },
                });
            });

            // Wall: centre reel grows
            mm.add('(min-width: 801px)', () => {
                const tl = gsap.timeline({
                    scrollTrigger: { trigger: q('[data-wall]')[0], start: 'top top', end: 'bottom bottom', scrub: reduce ? true : 0.8 },
                });
                tl.fromTo(q('[data-wall-hero]'), { scale: 1 }, { scale: 1.9, duration: 1, ease: 'power2.inOut' }, 0.2)
                    .to(q('[data-wall-tile]'), { scale: 0.92, opacity: 0.45, duration: 1 }, 0.2)
                    .fromTo(q('[data-wall-grid]'), { yPercent: 6 }, { yPercent: -6, duration: 1.4, ease: 'none' }, 0);
            });
        }, root);

        const io = new IntersectionObserver((entries) => {
            entries.forEach(({ target, isIntersecting }) => {
                if (isIntersecting) {
                    target.preload = 'auto';
                    target.play().catch(() => {});
                } else {
                    target.pause();
                }
            });
        }, { threshold: 0.35 });
        root.current.querySelectorAll('[data-autoplay]').forEach((v) => io.observe(v));

        return () => {
            io.disconnect();
            mm.revert();
            ctx.revert();
        };
    }, []);

    return (
        <div className="pl" ref={root}>
            <Hero />
            <Showcase />
            <Gateway />
            <Words />
            <Among />
            <Story />
            <Lanes />
            <Wall />
            <Budget />
            <Footer />
        </div>
    );
}
