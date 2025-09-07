import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/constants';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Analytics from '@/components/analytics';
// import { DefaultSeo } from 'next-seo';
// import { defaultNextSeo } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.title}`,
    template: `%s | ${SITE.name}`
  },
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} — ${SITE.title}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [{ url: '/og.png', width: 1200, height: 630 }, { url: '/og.svg' }],
    locale: SITE.locale,
    type: 'website'
  },
  icons: { icon: '/favicon.svg' }
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'only light'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {/* <DefaultSeo {...defaultNextSeo} /> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
