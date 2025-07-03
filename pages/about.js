import Head from 'next/head';
import Link from 'next/link';

function About() {
  return (
    <div className="container">
      <Head>
        <title>About | Next.js App</title>
      </Head>
      <div className="content">
        <h1>About</h1>
        <p>This is the about page.</p>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </div>
    </div>
  );
}

export default About;