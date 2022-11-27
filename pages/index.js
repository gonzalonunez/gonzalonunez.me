import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name='viewport'
          content='initial-scale=1.0, maximum-scale=1, width=device-width'
        />
      </Head>
      <div className='container p-lg'>
        <h1 className='font-sans font-bold text-2xl'>Gonzalo Nuñez</h1>
        <p className='font-sans'>
          I think about engineering, art, startups, and philosophy.
        </p>
      </div>
    </div>
  );
}
