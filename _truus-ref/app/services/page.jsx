import ServicesExperience from '@/components/ServicesExperience';
import Footer from '@/components/Footer';

export const metadata = { title: 'Services — FivePS' };

export default function ServicesPage() {
    return (
        <main className="svpage">
            <ServicesExperience />
            <Footer />
        </main>
    );
}
