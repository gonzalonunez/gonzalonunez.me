import Head from 'next/head';
import { useState } from 'react';
import { NavigationContext } from '../components/providers/Navigation';
import SiteLayout from '../components/SiteLayout';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavigationContext.Provider value={{ isOpen, setIsOpen }}>
      <Head></Head>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </NavigationContext.Provider>
  );
}
