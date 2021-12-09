import Head from "next/head";
import Image from "next/image";

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
    </Head>

    <main>
      <h1 className="flex justify-center items-center h-screen text-indigo text-4xl">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </main>
  </div>
);

export default Home;
