import ContactExperience from '@/components/ContactExperience';
import Footer from '@/components/Footer';

export const metadata = { title: 'Contact — FivePS' };

export default function ContactPage() {
    return (
        <>
            <main className="ask">
                <ContactExperience />
            </main>
            <Footer />
        </>
    );
}
