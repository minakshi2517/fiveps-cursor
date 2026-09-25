'use client';

import { useEffect } from 'react';

const WORDS = ['ideas', 'content', 'growth', 'impact'];

export default function ClickWords() {
    useEffect(() => {
        let index = 0;
        const onClick = (event) => {
            const target = event.target;
            if (target.closest('a, button, input, textarea, select, label, video')) return;
            const word = document.createElement('span');
            word.className = `click-word click-word--${index % WORDS.length}`;
            word.textContent = WORDS[index % WORDS.length];
            index += 1;
            word.style.left = `${event.clientX}px`;
            word.style.top = `${event.clientY}px`;
            document.body.appendChild(word);
            word.addEventListener('animationend', () => word.remove());
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    return null;
}
