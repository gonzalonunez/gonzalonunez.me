import Head from 'next/head';
import { useContext, useState } from 'react';

export default function Home() {
  return (
    <div className='overflow-hidden	h-screen w-screen'>
      <Head>
        <meta
          name='viewport'
          content='initial-scale=1.0, maximum-scale=1, width=device-width'
        />
      </Head>
      <div className='h-full w-full p-lg'>Home</div>
    </div>
  );
}
