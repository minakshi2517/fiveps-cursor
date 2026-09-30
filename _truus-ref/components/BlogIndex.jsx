'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

function Arrow() {
    return (
        <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function Card({ post, featured = false }) {
    const copy = (
        <div className={featured ? 'note-feature__copy' : 'note-card__copy'}>
            <span>Agency note{post.time ? ` — ${post.time}` : ''}</span>
            <h2>{post.title}</h2>
            {featured && <p>{post.excerpt}</p>}
            <em>
                Read more
                <Arrow />
            </em>
        </div>
    );
    const media = <img src={post.cover} alt="" />;
    return (
        <Link href={`/blog/${post.slug}`} className={featured ? 'note-feature' : 'note-card'}>
            {featured ? <>{copy}{media}</> : <>{media}{copy}</>}
        </Link>
    );
}

export default function BlogIndex({ posts }) {
    const PAGE = 10;
    const [query, setQuery] = useState('');
    const [topic, setTopic] = useState('All');
    const [page, setPage] = useState(1);
    const topics = ['All', ...[...new Set(posts.map((p) => p.category))]];

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return posts.filter((post) => {
            const inTopic = topic === 'All' || post.category === topic;
            const inQuery = !q
                || post.title.toLowerCase().includes(q)
                || post.excerpt.toLowerCase().includes(q)
                || post.category.toLowerCase().includes(q);
            return inTopic && inQuery;
        });
    }, [posts, query, topic]);

    useEffect(() => {
        setPage(1);
    }, [query, topic]);

    const pages = Math.max(1, Math.ceil(filtered.length / PAGE));
    const current = Math.min(page, pages);
    const slice = filtered.slice((current - 1) * PAGE, current * PAGE);
    const feature = current === 1 ? (slice.find((p) => p.featured) || slice[0]) : null;
    const rest = feature ? slice.filter((p) => p !== feature) : slice;

    const go = (next) => {
        setPage(next);
        document.querySelector('.note-main')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="note-shell">
            <aside className="note-side">
                <h1>Blog</h1>
                <p>
                    Notes on marketing, ads, content, design and the work in between.
                </p>
                <label className="note-search">
                    Search
                    <input
                        type="search"
                        placeholder="Search…"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </label>
                <div className="note-topics">
                    <span>Topic</span>
                    <div>
                        {topics.map((t) => (
                            <button
                                key={t}
                                type="button"
                                className={topic === t ? 'is-on' : ''}
                                onClick={() => setTopic(t)}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>
                <p className="note-side__mail">
                    Direct
                    <a href="mailto:hello@fiveps.com">hello@fiveps.com</a>
                </p>
            </aside>

            <div className="note-main">
                {feature ? <Card post={feature} featured /> : (
                    slice.length === 0 ? <p className="note-empty">Nothing in the notes matches that.</p> : null
                )}
                {rest.length > 0 && (
                    <section className="note-latest" aria-label="Latest notes">
                        {current === 1 ? <h2>Latest notes</h2> : null}
                        <div className="note-grid">
                            {rest.map((post) => <Card key={post.slug} post={post} />)}
                        </div>
                    </section>
                )}
                {pages > 1 && (
                    <nav className="note-pages" aria-label="Blog pages">
                        <button type="button" disabled={current === 1} onClick={() => go(current - 1)}>
                            Prev
                        </button>
                        {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                            <button
                                key={n}
                                type="button"
                                className={n === current ? 'is-on' : ''}
                                onClick={() => go(n)}
                                aria-current={n === current ? 'page' : undefined}
                            >
                                {n}
                            </button>
                        ))}
                        <button type="button" disabled={current === pages} onClick={() => go(current + 1)}>
                            Next
                        </button>
                    </nav>
                )}
            </div>
        </div>
    );
}
