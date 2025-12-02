"use client";
import { Suggestion } from "@/components/ui/suggestion";
import { Footer } from "@/components/layout/footer";

export default function Page() {
  return (
    <>
      <div className="gap-4 min-w-full m-0 p-2 flex flex-col items-center justify-center ">
        <Suggestion />
      </div>
      <Footer />
    </>
  );
}
