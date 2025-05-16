"use client"
import Image from "next/image";
export function Card ({title, url, src}: {title: string, url: string, src: string}) {
{
    return (
    <div className="relative glare-card overflow-hidden h-60 md:h-96 w-full transition-all duration-100 ease-out m-24 max-w-[294px] md:max-w-[290px] cursor-pointer hover:scale-[1.02] rounded-lg shadow"
      onClick={() => {
        window.open(url, "_blank");
      }}>
      <img
        alt={title}
        src={src}
        className="object-cover absolute inset-0 h-full w-full rounded-sm"
      />
      <div className="absolute inset-x-0 bottom-4 bg-white/40 backdrop-blur-md mx-auto w-[80%] h-[35px] rounded-md flex items-center justify-center cursor-default !border-none z-10 text-black font-bold ">
        {title}
      </div>
    </div>
  );
}


    
