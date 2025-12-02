'use client';
import {
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Image from "next/image";

export function Footer() {
  const navigate = (url: string) => {
    window.open(url, "_blank");
  }
  return (
    <footer className="py-10 min-w-full flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
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

      <nav className="flex gap-8 py-4 w-full items-center justify-center text-lg">
        <a href="#" className="hover:underline hover:text-gray-300">
          Home
        </a>
        <a href="#" className="hover:underline hover:text-gray-300">
          Make a Suggestion
        </a>
        <a href="#" className="hover:underline hover:text-gray-300">
          About
        </a>
      </nav>

      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-4xl py-4 border-t border-gray-700 mt-5">
        <p className="text-sm">© 2023 BStories. All rights reserved.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">

          <IconBrandGithub onClick={() => navigate("https://github.com/Achu-Worifung")} className="hover:scale-110 cursor-pointer transition-transform duration-200" />

          <IconBrandLinkedin onClick={() => navigate("https://www.linkedin.com/in/worifung-achu-bab3b423a/")} className="hover:scale-110 cursor-pointer transition-transform duration-200" />
        </div>
      </div>
    </footer>
  );
}
