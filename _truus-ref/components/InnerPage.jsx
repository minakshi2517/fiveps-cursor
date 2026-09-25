import Footer from '@/components/Footer';

export default function InnerPage({ kicker, title, children }) {
    return (
        <>
            <main className="inner-page">
                <p className="inner-page__kicker">{kicker}</p>
                <h1>{title}</h1>
                <div className="inner-page__body">{children}</div>
            </main>
            <Footer />
        </>
    );
}
