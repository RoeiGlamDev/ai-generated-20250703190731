import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Next.js App</title>
      </Head>
      {loaded ? (
        <div className="content">
          <h1>Welcome to Next.js App</h1>
          <p>This is a well-structured Next.js application.</p>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
      ) : (
        <div className="loading">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default Home;