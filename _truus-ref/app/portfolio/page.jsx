import { PORTFOLIO } from '@/lib/pages';

export const metadata = { title: 'Portfolio — FivePS' };

export default function PortfolioPage() {
    return (
        <main className="page">
            <header className="page__intro">
                <p className="page__kicker">Selected work</p>
                <h1>Work we’ve brought to life.</h1>
                <p className="page__lead">
                    Films, graphics, pages, and sites from the home page. These are the reels already on the site, not named case studies.
                </p>
            </header>
            <div className="folio">
                {PORTFOLIO.map((piece) => (
                    <article key={piece.num} className={`folio__piece${piece.wide ? ' folio__piece--wide' : ''}`}>
                        <div className="folio__media">
                            {piece.kind === 'video' ? (
                                <video src={piece.src} muted playsInline autoPlay loop />
                            ) : (
                                <img src={piece.src} alt="" />
                            )}
                        </div>
                        <div className="folio__meta">
                            <div>
                                <span className="stamp">{piece.category}</span>
                                <h2>{piece.title}</h2>
                                <p>{piece.text}</p>
                            </div>
                            <span className="folio__num">{piece.num}</span>
                            <span className="folio__arrow" aria-hidden="true">→</span>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}
