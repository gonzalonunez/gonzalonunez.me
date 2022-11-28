import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <meta
          name='viewport'
          content='initial-scale=1.0, maximum-scale=1, width=device-width'
        />
      </Head>
      <Sidebar />
    </div>
  );
}
