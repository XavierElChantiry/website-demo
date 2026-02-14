import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/style.css';
import '@/styles/home.css';
import '@/styles/faq.css';
import '@/styles/nextsteps.css';
import '@/styles/supervision.css';
import '@/styles/resources.css';

export const metadata: Metadata = {
  title: 'Seasons Within - Nature-Based Therapy',
  description: 'Nature-based therapy with space for reflection, growth, and meaningful connection.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
