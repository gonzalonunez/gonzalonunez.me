import { Inter, Lora } from '@next/font/google';
import NavigationBar from './NavigationBar';
import Sidebar from './Sidebar';

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
    <main className={`${lora.variable} ${inter.variable}`}>
      <nav className='fixed top-0 w-full z-10'>
        <div className='fixed z-50'>
          <Sidebar />
        </div>
        <NavigationBar />
      </nav>
      <div className='container h-screen mt-14'>{props.children}</div>
    </main>
  );
}

export default SiteLayout;
