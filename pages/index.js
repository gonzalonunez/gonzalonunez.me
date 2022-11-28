import Head from 'next/head';
import IconButton from '../components/IconButton.js';
import NavigationBar from '../components/NavigationBar.js';
import Sidebar from '../components/Sidebar.js';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='overflow-hidden	h-screen w-screen'>
      <Head>
        <meta
          name='viewport'
          content='initial-scale=1.0, maximum-scale=1, width=device-width'
        />
      </Head>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavigationBar>
        <IconButton
          name='window'
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </NavigationBar>
      <div className='h-full w-full p-lg'>Hello, world</div>
    </div>
  );
}
