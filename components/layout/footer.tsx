import {
  IconBrandMeta,
  IconBrandX,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="py-10 max-w-full flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="flex items-center gap-3 cursor-pointer mb-5">
        <img
          src="/favicon.ico"
          alt="logo"
          width={50}
          height={50}
          className="p-2 bg-white rounded-full shadow-lg"
        />
        <p className="text-3xl font-bold">BStories</p>
      </div>

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
          <IconBrandX className="hover:scale-110 cursor-pointer transition-transform duration-200" />
          <IconBrandMeta className="hover:scale-110 cursor-pointer transition-transform duration-200" />
          <IconBrandGithub className="hover:scale-110 cursor-pointer transition-transform duration-200" />
          <IconBrandInstagram className="hover:scale-110 cursor-pointer transition-transform duration-200" />
          <IconBrandLinkedin className="hover:scale-110 cursor-pointer transition-transform duration-200" />
        </div>
      </div>
    </footer>
  );
}
