import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className=' md:max-w-6xl mx-auto flex flex-col justify-center items-center'>
      <Head>
        <title>IPL Metaverse</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='text-center mt-16 flex-1 justify-center items-center flex-col'>
        <h1 className='text-3xl md:text-5xl font-semibold mb-5'>
          Welcome to the metaverse of IPL
        </h1>
        <Header />
        <Component {...pageProps} />
      </main>
      {/* <footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by{" "}
          <img src='/vercel.svg' alt='Vercel Logo' className='logo' />
        </a>
      </footer> */}
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          width: 100%;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
