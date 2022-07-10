import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
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
        <Component {...pageProps} key={router.asPath} />
      </main>
      <div className='mt-10 w-full'>
        <Footer />
      </div>
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
