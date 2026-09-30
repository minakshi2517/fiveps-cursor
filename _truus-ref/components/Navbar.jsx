'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/case-study', label: 'Case Study' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
];

function isActive(pathname, href) {
    if (href === '/') return pathname === '/';
    if (href === '/case-study') {
        return pathname === '/case-study' || pathname.startsWith('/case-study/') || pathname.startsWith('/portfolio/');
    }
    if (href === '/portfolio') return pathname === '/portfolio';
    return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
    const pathname = usePathname();
    const [onDark, setOnDark] = useState(pathname === '/');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const hero = document.querySelector('.vimeo-hero');
        const update = () => {
            if (!hero || pathname !== '/') {
                setOnDark(false);
                return;
            }
            setOnDark(hero.getBoundingClientRect().bottom > 72);
        };
        update();
        window.addEventListener('scroll', update, { passive: true });
        return () => window.removeEventListener('scroll', update);
    }, [pathname]);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    if (pathname === '/services') return null;

    return (
        <nav className={`site-nav${onDark ? ' is-dark' : ''}${open ? ' is-open' : ''}`}>
            <button
                type="button"
                className="site-nav__menu"
                aria-expanded={open}
                aria-label={open ? 'Close menu' : 'Open menu'}
                onClick={() => setOpen((v) => !v)}
            >
                <span />
                <span />
            </button>
            <div className="site-nav__links">
                {LINKS.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`${link.href === '/contact' ? 'site-nav__contact' : ''}${isActive(pathname, link.href) ? ' is-active' : ''}`}
                        aria-current={isActive(pathname, link.href) ? 'page' : undefined}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            <Link href="/" className="site-nav__logo">FivePS</Link>
        </nav>
    );
}
