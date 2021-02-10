import Head from "next/head";
import Link from "next/link";

export default function Layout({ title, children }) {
  return (
    <div className="bg-indigo-50">
      <Head>
        <title>{title} | Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="pt-4">
        <Link href="/">
          <a className="text-4xl text-center">
            <h1>Pokedex</h1>
          </a>
        </Link>
      </header>

      <main className="container mx-auto max-w-xl pt-8 min-h-screen">
        {children}
      </main>
    </div>
  );
}
