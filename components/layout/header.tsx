'use client';
import Image from "next/image";
import Link from 'next/link'
import { useEffect } from "react";
import { usePathname } from 'next/navigation';
export function Header() {
  const pathname = usePathname();
  useEffect(() =>
  {
    console.log("location", pathname);
  }, [pathname]);

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
      <span className="flex justify-center items-center gap-24 font-semibold text-lg [&>a]:px-4 [&>a]:py-2 [&>a]:cursor-pointer [&>a]:hover:border-b-4 [&>a]:hover:border-neutral-600  [&>a]:box-border" >
        <Link href="/" className={pathname === "/" ? "border-b-4 border-neutral-600" : ""}>Home</Link>
        <Link href="/suggestions" className={pathname === "/suggestions" ? "border-b-4 border-neutral-600" : ""}>Suggestions</Link>
        <Link href="/about" className={pathname === "/about" ? "border-b-4 border-neutral-600" : ""}>About</Link>
      </span>
      <span>
        
      </span>
      
    </div>
  );
}
