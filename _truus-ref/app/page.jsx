'use client';

import SvgSymbols from '@/components/SvgSymbols';
import VimeoHero from '@/components/VimeoHero';
import MotionCards from '@/components/MotionCards';
import Services from '@/components/Services';
import Work from '@/components/Work';
import QA from '@/components/QA';
import Testimonials from '@/components/Testimonials';
import ServiceCards from '@/components/ServiceCards';
import DoubleMarquee from '@/components/DoubleMarquee';
import Footer from '@/components/Footer';
import CursorBubble from '@/components/CursorBubble';
import SmoothScroll from '@/components/SmoothScroll';

import HorizontalWords from '@/components/HorizontalWords';
import ClickWords from '@/components/ClickWords';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        const nodes = document.querySelectorAll(
            '.motion-card__heading, .agency-stats, .client-band__title, .work__intro, .qa__title, .stories__head'
        );
        nodes.forEach((node) => node.classList.add('craft-in'));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-shown');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        nodes.forEach((node) => observer.observe(node));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <SvgSymbols />
            <ClickWords />
            <SmoothScroll />
            <CursorBubble />
            <header className="main-header">
                <VimeoHero />
            </header>
            <HorizontalWords />
            <main>
                <div className="content-section motion-cards-wrapper">
                    <MotionCards />
                </div>
            </main>
            <section id="clients" className="client-band-section">
                <DoubleMarquee />
            </section>
            <Services />
            <Work />
            <QA />
            <Testimonials />
            <section className="service-cards-wrapper">
                <ServiceCards />
            </section>
            <Footer />
        </>
    );
}
