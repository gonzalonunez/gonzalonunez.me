import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import { useState } from 'react';
import { NavigationContext } from '../components/providers/Navigation';
import SiteLayout from '../components/SiteLayout';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavigationContext.Provider value={{ isOpen, setIsOpen }}>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <SiteLayout>
        <Component {...pageProps} />
        <Analytics />
      </SiteLayout>
    </NavigationContext.Provider>
  );
}
