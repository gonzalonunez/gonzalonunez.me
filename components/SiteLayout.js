import { clsx } from 'clsx';
import { useRef } from 'react';
import { Lora } from 'next/font/google';
import NavigationBar from './NavigationBar';
import Sidebar from './Sidebar';
import SidebarOverlay from './SidebarOverlay';

const lora = Lora({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-lora'
});

function SiteLayout(props) {
  return (
    <main className={clsx('bg-white', lora.variable)}>
      <Sidebar />
      <SidebarOverlay />
      <NavigationBar />
      {props.children}
    </main>
  );
}

export default SiteLayout;
