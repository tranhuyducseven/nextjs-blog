import Head from "next/head";
import { Navbar } from "../components/Navbar";

export default function Layout({children}) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Blog</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="h-screen overflow-hidden bg-black">{children}</div>
      </main>
    </div>
  );
}
