import Head from "next/head";
import Link from "next/link";
import Footer from "@homepage/Footer";
export default function notFound() {
  return (
    <div>

    <div className="hero bg-base-200 min-h-screen">
      <Head>
        <title>Not Found</title>
      </Head>
      
      <div className="hero-content text-center">
        <div className="max-w-md ">
          <h1 className="text-7xl font-bold">404</h1>
          <p className="py-6">Oops! The page you're looking for is not here.</p>
          <div>
            <Link href="/" className="btn btn-primary btn-outline mx-3">
              Home
            </Link>
            <Link href="/suggestion" className="btn btn-primary btn-outline mx-3">
              Make a suggestion
            </Link>
            <Link href="/about" className="btn btn-primary btn-outline mx-3">
              About
            </Link>
          </div>
        </div>
      </div>

      
    </div>

    <Footer />
    </div>
  );
}
