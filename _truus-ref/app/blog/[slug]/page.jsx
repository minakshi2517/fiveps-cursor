import Link from 'next/link';
import { notFound } from 'next/navigation';
import { POSTS } from '@/lib/pages';

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
    const post = POSTS.find((item) => item.slug === slug);
    if (!post) notFound();
    return (
        <article className="article">
            <p className="page__kicker">{post.category}</p>
            <h1>{post.title}</h1>
            <p>{post.date} · {post.time}</p>
            <p>{post.excerpt}</p>
            <p>This page is the article layout. The body is empty on purpose until a real note is written.</p>
            <p><Link href="/blog">Back to the notes</Link></p>
        </article>
    );
}
