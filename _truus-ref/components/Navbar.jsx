'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Work' },
    { href: '/case-study', label: 'Cases' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
];

function isActive(pathname, href) {
    if (href === '/') return pathname === '/';
    if (href === '/portfolio') return pathname === '/portfolio' || pathname.startsWith('/portfolio/');
    if (href === '/case-study') return pathname === '/case-study' || pathname.startsWith('/case-study/');
    return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <nav className={`site-nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
            {open ? (
                <button
                    type="button"
                    className="site-nav__veil"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                />
            ) : null}

            <div className="site-nav__bar">
                <Link href="/" className="site-nav__logo" aria-label="FivePS home">
                    <img src="/fiveps-mark.png" alt="FivePS" />
                </Link>

                <div className="site-nav__links" id="site-nav-links">
                    {LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={isActive(pathname, link.href) ? 'is-active' : ''}
                            aria-current={isActive(pathname, link.href) ? 'page' : undefined}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="site-nav__end">
                    <a
                        className="site-nav__wa"
                        href="https://wa.me/919350612825"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Chat on WhatsApp"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.33 4.94L2 22l5.38-1.4a10 10 0 0 0 4.66 1.18h.04c5.46 0 9.89-4.4 9.89-9.83C21.97 6.4 17.5 2 12.04 2zm5.76 14.04c-.24.68-1.18 1.24-1.93 1.4-.52.12-1.2.21-3.49-.75-2.93-1.22-4.83-4.2-4.97-4.4-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.24-.27.64-.4.86-.4h.62c.2 0 .46-.04.72.55.27.61.92 2.24 1 2.4.08.16.13.35.03.56-.1.22-.16.35-.31.54-.16.19-.33.42-.47.56-.16.16-.32.33-.14.64.19.32.83 1.37 1.78 2.22 1.23 1.1 2.26 1.44 2.58 1.6.32.16.5.13.69-.08.19-.22.8-.93 1.01-1.25.22-.32.43-.27.72-.16.3.1 1.88.89 2.2 1.05.32.16.54.24.62.38.08.13.08.76-.16 1.44z" />
                        </svg>
                    </a>
                    <Link href="/contact" className="site-nav__cta">Let’s talk</Link>
                    <button
                        type="button"
                        className="site-nav__menu"
                        aria-expanded={open}
                        aria-controls="site-nav-links"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        onClick={() => setOpen((v) => !v)}
                    >
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        </nav>
    );
}
