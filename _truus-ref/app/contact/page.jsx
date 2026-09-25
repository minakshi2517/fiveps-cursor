import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Contact — FivePS' };

export default function ContactPage() {
    return (
        <main className="page">
            <header className="page__intro">
                <p className="page__kicker">Say hello</p>
                <h1>Call us if you need.</h1>
                <p className="page__lead">Send the brief. We reply with how we would approach it, what it includes, and when it can start.</p>
            </header>
            <div className="contact-wrap">
                <div>
                    <p><a href="mailto:hello@fiveps.com">hello@fiveps.com</a></p>
                    <p>No public social profiles are listed on the site yet.</p>
                </div>
                <ContactForm />
            </div>
        </main>
    );
}
