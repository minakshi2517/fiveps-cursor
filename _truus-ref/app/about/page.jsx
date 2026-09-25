export const metadata = { title: 'About — FivePS' };

export default function AboutPage() {
    return (
        <main className="page">
            <header className="page__intro">
                <p className="page__kicker">The studio</p>
                <h1>An agency built for the future.</h1>
                <p className="page__lead">
                    FivePS takes a brand from the first idea to the thing people actually see. Strategy, design, film, the site, and the follow-up sit with one team.
                </p>
            </header>
            <div className="about-grid">
                <article>
                    <h2>How the work is shaped</h2>
                    <p>The brief decides the shape of the work, not the size of the company. We work with startups finding a first audience and with brands that already have one.</p>
                    <p className="about-note">from strategy to standout.</p>
                </article>
                <article>
                    <h2>What sits with us</h2>
                    <p>Marketing, design, video production, web development, and automation. One team, so it does not feel like five vendors taped together.</p>
                    <p className="about-note">Studio story, team, and history — to be added.</p>
                </article>
            </div>
        </main>
    );
}
