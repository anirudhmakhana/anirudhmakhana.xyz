import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={inter.className}>
      <Head>
        <title> Anirudh Makhana | Welcome</title>
        <meta
          name="description"
          content="Welcome to Anirudh's Portfolio page!"
        />
      </Head>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
