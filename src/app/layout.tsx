import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import BackgroundGlobs from '@/components/BackgroundGlobs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Cyberpunk Tech',
  description: 'Cyberpunk inspired tech portfolio layout with an eye-tracking robot companion.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <BackgroundGlobs />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
