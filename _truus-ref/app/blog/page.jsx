import { POSTS } from '@/lib/pages';
import BlogIndex from '@/components/BlogIndex';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = { title: 'Blog — FivePS' };

export default function BlogPage() {
    return (
        <>
            <main className="note">
                <BlogIndex posts={POSTS} />
                <section className="note-cta">
                    <p className="note-kicker">Next</p>
                    <h2>Let’s make something.</h2>
                    <p>Have a project in mind? Let’s talk.</p>
                    <Link href="/contact" className="note-cta__go">
                        Start a project
                        <svg viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </section>
            </main>
            <Footer />
        </>
    );
}
