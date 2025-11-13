'use client'
import { Suggestion } from "@/components/ui/suggestion";
import { Footer } from "@/components/layout/footer";


export default function Page()
{

    return (
        <div className="gap-4 min-w-screen m-0 p-0 flex flex-col items-center justify-center ">
            <Suggestion />
            <Footer />
        </div>


    )
}