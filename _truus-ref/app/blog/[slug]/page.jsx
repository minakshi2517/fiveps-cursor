import Link from 'next/link';
import { notFound } from 'next/navigation';
import { POSTS } from '@/lib/pages';
import Footer from '@/components/Footer';

export function generateStaticParams() {
    return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = POSTS.find((item) => item.slug === slug);
    return { title: post ? `${post.title} — FivePS` : 'Blog — FivePS' };
}

export default async function ArticlePage({ params }) {
    const { slug } = await params;
    const index = POSTS.findIndex((item) => item.slug === slug);
    const post = POSTS[index];
    if (!post) notFound();
    const next = POSTS[(index + 1) % POSTS.length];
    return (
        <>
            <article className="note-piece">
                <Link href="/blog" className="note-piece__back">← Blog</Link>
                <p className="note-kicker">{post.category} · {post.time}</p>
                <h1>{post.title}</h1>
                <p className="note-piece__lead">{post.excerpt}</p>
                {post.cover && (
                    <figure className="note-piece__cover">
                        <img src={post.cover} alt="" />
                    </figure>
                )}
                <div className="note-piece__body">
                    {post.body.map((p) => <p key={p}>{p}</p>)}
                </div>
                <nav>
                    <Link href="/blog">All notes</Link>
                    <Link href={`/blog/${next.slug}`}>{next.title} →</Link>
                </nav>
            </article>
            <Footer />
        </>
    );
}
