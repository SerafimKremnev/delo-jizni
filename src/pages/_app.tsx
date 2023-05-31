import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import Head from "next/head";
import {useRemResize} from "@/hooks/useRemResize";
import Header from "@/components/other/Header/Header";
import Footer from "@/components/other/Footer/Footer";

function App({ Component, pageProps }: AppProps) {

  useRemResize()
  return (
    <>
      <Head>
        <title>Дело Жизни</title>
      </Head>
      <div className={'page-layout'}>
        <script async type="text/javascript" dangerouslySetInnerHTML={{
          __html: `const vh = window.innerHeight * 0.01;
  
          document.documentElement.style.setProperty('--vh', vh + 'px');
          
          window.addEventListener('resize', () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', vh + 'px');
          });`}}/>
        <Header/>
        <main>
          <Component {...pageProps} />
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App