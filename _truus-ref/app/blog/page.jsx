import Link from 'next/link';
import { POSTS } from '@/lib/pages';

export const metadata = { title: 'Blog — FivePS' };

export default function BlogPage() {
    const featured = POSTS.find((post) => post.featured);
    const rest = POSTS.filter((post) => !post.featured);
    return (
        <main className="page">
            <header className="page__intro">
                <p className="page__kicker">Notes</p>
                <h1>The FivePS note.</h1>
                <p className="page__lead">The shelf is built. The articles below are placeholders, marked so they are not read as published work.</p>
            </header>
            <section className="blog-feature">
                <Link href={`/blog/${featured.slug}`}>
                    <div className="blog-feature__copy">
                        <span className="stamp">{featured.category}</span>
                        <h2>{featured.title}</h2>
                        <p>{featured.excerpt}</p>
                        <p>{featured.date} · {featured.time}</p>
                    </div>
                    <div />
                </Link>
            </section>
            <section className="blog-list">
                {rest.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                        <span className="stamp">{post.category}</span>
                        <h2>{post.title}</h2>
                        <p>{post.excerpt}</p>
                        <p>{post.date} · {post.time}</p>
                    </Link>
                ))}
            </section>
        </main>
    );
}
