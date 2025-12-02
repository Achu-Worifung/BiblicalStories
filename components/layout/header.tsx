"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
    console.log("location", pathname);
  }, [pathname]);

  return (
    <div className="flex flex-row w-full h-16 justify-between items-center px-4">
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
      
      <span className="hidden md:flex justify-center items-center gap-24 font-semibold text-lg [&>a]:px-4 [&>a]:py-2 [&>a]:cursor-pointer [&>a]:hover:border-b-4 [&>a]:hover:border-neutral-600 [&>a]:box-border">
        <Link
          href="/"
          className={pathname === "/" ? "border-b-4 border-neutral-600" : ""}
        >
          Home
        </Link>
        <Link
          href="/suggestions"
          className={
            pathname === "/suggestions" ? "border-b-4 border-neutral-600" : ""
          }
        >
          Suggestions
        </Link>
        <Link
          href="/about"
          className={
            pathname === "/about" ? "border-b-4 border-neutral-600" : ""
          }
        >
          About
        </Link>
      </span>

      <div
        className="flex flex-col gap-1.5 cursor-pointer md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>

        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            menuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
        ></span>

        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </div>

      {menuOpen && (
        <div className="absolute top-16 right-4 bg-gray-900 shadow-lg rounded-md p-4 flex flex-col gap-2 md:hidden z-50 min-w-[200px]">
          <Link
            href="/"
            className={`px-3 py-2 rounded hover:bg-gray-800 transition-colors ${
              pathname === "/" ? "font-bold text-white border-l-4 border-neutral-600" : "text-gray-300"
            }`}
          >
            Home
          </Link>
          <Link
            href="/suggestions"
            className={`px-3 py-2 rounded hover:bg-gray-800 transition-colors ${
              pathname === "/suggestions" ? "font-bold text-white border-l-4 border-neutral-600" : "text-gray-300"
            }`}
          >
            Suggestions
          </Link>
          <Link
            href="/about"
            className={`px-3 py-2 rounded hover:bg-gray-800 transition-colors ${
              pathname === "/about" ? "font-bold text-white border-l-4 border-neutral-600" : "text-gray-300"
            }`}
          >
            About
          </Link>
        </div>
      )}
    </div>
  );
}