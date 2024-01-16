import { clsx } from 'clsx';
import { useRef } from 'react';
import { Inter, Lora } from 'next/font/google';
import NavigationBar from './NavigationBar';
import Sidebar from './Sidebar';
import SidebarOverlay from './SidebarOverlay';

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter'
});

const lora = Lora({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-lora'
});

function SiteLayout(props) {
  return (
    <main className={clsx('bg-white', lora.variable, inter.variable)}>
      <Sidebar />
      <SidebarOverlay />
      <NavigationBar />
      {props.children}
    </main>
  );
}

export default SiteLayout;
