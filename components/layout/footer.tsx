import {
  IconBrandMeta,
  IconBrandX,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
export function Footer() {
  return (
    <footer className="py-20 max-w-2xl flex flex-col items-center justify-center min-w-screen px-8 bg-neutral-800/20">
      <span className="flex items-center  gap-2 cursor-pointer ">
        <img
          src="/favicon.ico"
          alt="logo"
          width={40}
          height={40}
          className="p-2 bg-white rounded-md"
        />

        <p className="text-2xl font-semibold">BStories</p>
      </span>
      <span className="flex gap-5 py-5 w-full items-center justify-center [&>p]:hover:underline [&>p]:cursor-pointer [&>p]:text-neutral-600 dark:[&>p]:text-white">
        <p>Home</p>
        <p>Make a suggestion</p>
        <p>About</p>
      </span>

      <span className="flex flex-col justify-center  w-full py-2 items-center sm:justify-between sm:flex-row gap-5 sm:gap-0">
        <p>© 2023 BStories</p>
        <span className="flex gap-2 [&>*]:hover:scale-110 [&>svg]:cursor-pointer [&>svg]:transition-all [&>svg]:duration-200 [&>svg]:ease-in-out">
          <IconBrandX />
          <IconBrandMeta />
          <IconBrandGithub />
          <IconBrandInstagram />
          <IconBrandLinkedin />
        </span>
      </span>
    </footer>
  );
}
