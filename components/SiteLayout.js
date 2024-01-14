import { clsx } from 'clsx';
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
    <main
      className={clsx(
        'flex h-screen flex-col overflow-hidden',
        lora.variable,
        inter.variable
      )}
    >
      <div className='absolute inset-y-0 left-0 z-50 flex grow flex-col md:relative'>
        <Sidebar />
      </div>
      <div className='relative flex h-screen grow flex-col overflow-y-auto'>
        <SidebarOverlay />
        <NavigationBar />
        {props.children}
      </div>
    </main>
  );
}

export default SiteLayout;
