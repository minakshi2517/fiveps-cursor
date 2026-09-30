import { notFound } from 'next/navigation';
import CaseStudy from '@/components/CaseStudy';
import { CASES } from '@/lib/pages';

export function generateStaticParams() {
    return CASES.map((piece) => ({ slug: piece.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const piece = CASES.find((item) => item.slug === slug);
    return { title: piece ? `${piece.title} — FivePS` : 'Case study — FivePS' };
}

export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const index = CASES.findIndex((item) => item.slug === slug);
    const piece = CASES[index];
    if (!piece) notFound();
    const next = CASES[(index + 1) % CASES.length];
    return <CaseStudy piece={piece} next={next} />;
}
