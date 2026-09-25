'use client';

const CLIENTS = [
    { name: "Adi's Farm", src: '/clients/adis-farm.png' },
    { name: 'Anand Dental Clinic', src: '/clients/anand-dental.png' },
    { name: 'Belle Ame', src: '/clients/belle-ame.png' },
    { name: 'BMR6', src: '/clients/bmr6.png' },
    { name: 'The Call of the Blue', src: '/clients/call-of-the-blue.png' },
    { name: 'Growth Lab', src: '/clients/growth-lab.png' },
    { name: 'Nihaal Properties', src: '/clients/nihaal.png' },
    { name: 'Nu Look', src: '/clients/nu-look.png' },
    { name: 'Rao Restaurant & Rooms', src: '/clients/rao.png' },
    { name: 'Retro Insurance', src: '/clients/retro-insurance.png' },
    { name: 'Retro TVS', src: '/clients/retro-tvs.png' },
    { name: 'Shree Shyam Pest Control', src: '/clients/shree-shyam.png' },
    { name: 'Shyam Event Rewari', src: '/clients/shyam-event.png' },
    { name: 'Solartouch Power Solution', src: '/clients/solartouch.png' },
    { name: 'TVS', src: '/clients/tvs.png' },
    { name: 'Waaree', src: '/clients/waaree.png' },
    { name: 'Yaduvanshi Pearls', src: '/clients/yaduvanshi.png' },
    { name: 'Yamaha Racing', src: '/clients/yamaha.png' },
    { name: 'Yashika Group', src: '/clients/yashika.png' },
];

function loop(row) {
    return [...row, ...row];
}

function Marks({ items, direction }) {
    return (
        <div className={`client-band__rail client-band__rail--${direction}`}>
            <div className={`client-band__track client-band__track--${direction}`}>
                {items.map((brand, i) => (
                    <span
                        key={`${brand.src}-${i}`}
                        className={`client-band__logo${brand.src.includes('rao') ? ' client-band__logo--light' : ''}`}
                    >
                        <img src={brand.src} alt={brand.name} />
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function DoubleMarquee() {
    return (
        <div className="client-band">
            <h2 className="client-band__title">Proud To Work With</h2>
            <div aria-label="Clients">
                <Marks items={loop(CLIENTS)} direction="left" />
            </div>
        </div>
    );
}
