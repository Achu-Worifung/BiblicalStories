import Image from "next/image";
import Link from 'next/link'
export function Header() {
  return (
    <div className="flex flex-row w-full h-16 justify-between items-center px-4 ">
      <span className="flex justify-center items-center gap-2">
        <Image
          src="/favicon.ico"
          alt="logo"
          width={40}
          height={40}
          className="p-2 bg-white rounded-md"
        />
        <p className="text-2xl font-semibold">BStories</p>
      </span>
      <span className="flex justify-center items-center gap-24 font-semibold text-lg">
        <Link href="/">Home</Link>
        <Link href="/suggestions">Suggestions</Link>
        <Link href="/about">About</Link>
      </span>
      <span>
        
      </span>
      
    </div>
  );
}
