import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
    title: 'FivePS — We make marketing for the new mainstream',
    description: 'FivePS is a digital marketing agency across strategy, ads, content, design, and websites.',
    icons: {
        icon: 'https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/68381362603d6402ee03c00e_favicon.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet" />
            </head>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
