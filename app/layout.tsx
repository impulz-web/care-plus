import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CarePlus Medical Center | Leading Private Hospital in Kenya',
  description: 'CarePlus Medical Center is Kenya\'s premium private hospital offering 24/7 emergency care, specialized pediatrics, advanced cardiology, dental care, maternity, and diagnostics in Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Ruiru, Thika, and major cities.',
  keywords: 'hospital in Nairobi, private clinic Mombasa, medical center Kisumu, book doctor Kenya, emergency ambulance Nairobi, pediatrician Nakuru, cardiology Eldoret, maternity hospital Kenya, CarePlus Medical Center, health clinic Thika, clinics in Ruiru, affordable healthcare Kenya',
  authors: [{ name: 'CarePlus Medical Center' }],
  metadataBase: new URL('https://careplus.co.ke'),
  openGraph: {
    title: 'CarePlus Medical Center | Leading Private Hospital in Kenya',
    description: 'Access premium, affordable, and compassionate medical care 24/7 across Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and all major Kenyan towns.',
    url: 'https://careplus.co.ke',
    siteName: 'CarePlus Medical Center',
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CarePlus Medical Center | Healthcare Kenya',
    description: 'Your health and wellness is our priority. 24/7 Emergency response, world-class specialists, and advanced clinical services across Kenya.',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-slate-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

