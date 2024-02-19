import '../globals.css';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import BackButton from '@/components/buttons/BackButton';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin-ext'],
});

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <main
          className={`relative flex flex-col items-center bg-white lg:min-h-screen ${poppins.className} scroll-smooth`}
        >
          <BackButton />
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
