import Link from "next/link";
import Footer from "@homepage/Footer";
export default function about() {
  return (
    <div>
      <div className="hero bg-base-300 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold ">About Us</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              suscipit nostrum sunt, dolorem delectus id quia, quo explicabo
              distinctio, magnam quod? Officiis odio voluptate illum corrupti.
              Voluptatem tempora dolore mollitia!
            </p>
            <Link href="/" className="btn btn-primary">
              Return Home
            </Link>
            <h1 className="text-3xl font-bold py-4">Are we missing a story?</h1>
            <Link href="/suggestion" className="btn btn-primary ">
              suggest a new passage
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
