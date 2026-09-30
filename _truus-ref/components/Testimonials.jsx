'use client';

const NOTES = [
    {
        role: 'Marketing lead',
        context: 'A product launch',
        quote: 'They treated the brand and the feed as one job. The work finally looked like it belonged on the internet.',
        color: '#e36a2f',
        tilt: '-7deg',
        image: 'https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/686b8e614494dac669a4099c_c310914b5a1a573b4c7499e9531f8d52_DE.avif',
    },
    {
        role: 'Founder',
        context: 'A brand rebuild',
        quote: 'Strategy first, then the content, the site, and the ads. Nothing felt bolted on at the end.',
        color: '#7a4eab',
        tilt: '6deg',
        image: 'https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/686b8e607142a7a25157d9dd_1875b9852ca289170917f9060c95b6a4_BolpuntJapie.avif',
    },
    {
        role: 'Brand manager',
        context: 'A live campaign',
        quote: 'Clear, fast, and the design held up once the campaign was actually in market.',
        color: '#e2a22b',
        tilt: '-4deg',
        image: 'https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/686b8e60ba19eb1109d3daa5_b1280272f47b3cd3ea25b91391935efa_RonaldoMassage.avif',
    },
    {
        role: 'Creative director',
        context: 'A content series',
        quote: 'The photos, the edit, and the posts felt like one idea. People actually sent the reel around.',
        color: '#6d7344',
        tilt: '8deg',
        image: 'https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/686b8e607d351d1335f06e04_f1aafb2150d81c3990c906d901d2e7e4_Esprix.avif',
    },
    {
        role: 'Product lead',
        context: 'A site and app',
        quote: 'We got the campaign and the product from the same team. It finally felt finished.',
        color: '#1d3f86',
        tilt: '-5deg',
        image: 'https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/686b8e614494dac669a4099c_c310914b5a1a573b4c7499e9531f8d52_DE.avif',
    },
];

function Card({ note }) {
    return (
        <article className="stories__card">
            <div className="stories__photo" style={{ transform: `rotate(${note.tilt})` }}>
                <img src={note.image} alt="" />
            </div>
            <h3 className="stories__name">{note.role}</h3>
            <p className="stories__context">{note.context}</p>
            <p className="stories__quote">“{note.quote}”</p>
        </article>
    );
}

export default function Testimonials() {
    const loop = [...NOTES, ...NOTES];

    return (
        <section className="stories" id="testimonials" aria-labelledby="stories-title">
            <div className="stories__head">
                <div>
                    <p className="stories__kicker">Client notes</p>
                    <h2 id="stories-title" className="stories__title">What they said</h2>
                </div>
                <p className="stories__aside">
                    Straight from the people who shipped the work with us.
                </p>
            </div>
            <div className="stories__rail" aria-label="Testimonials">
                <div className="stories__track">
                    {loop.map((note, i) => (
                        <Card key={`${note.role}-${i}`} note={note} />
                    ))}
                </div>
            </div>
        </section>
    );
}
