"use client";
import React, { useState } from "react";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { SendSuggestion } from "@/lib/send-suggestion";

export function Suggestion() {
  const [ref, setRef] = useState("");
  const [cat, setCat] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const[formerror,setFormerror]=useState<string|null>(null);
  const Reference = [
    "Matthew 14:13-21",
    "Luke 15:11-32",
    "Matthew 28:1-15",
    "1 Samuel 17:1-58",
    "Genesis 1:1-21; Genesis 2:1-4",
  ];
  const category = [
    "Faithfullness, Divine intervention",
    "Forgiveness, Redemption",
    "Resurrection, Hope",
    "Courage, Faith",
  ];

  const refChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCat(e.target.value);
  };
  const catChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRef(e.target.value);
  };
  const onSubmit = async () => {
    if (cat.trim() === "" || ref.trim() === "") {
      setFormerror("Both fields are required.");
      return;
    }
    setFormerror(null);
    setLoading(true);
    const response = await SendSuggestion({ category: cat, reference: ref });
    console.log("Response:", response);
    setLoading(false);
    if (response.status === "success") {
      setStatus("success");
      setCat("");
      setRef("");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="h-full w-full rounded-md flex md:items-center md:justify-center antialiased relative overflow-hidden flex-col my-10">
      {status != null && (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/50 z-60 backdrop-blur-sm"
          onClick={() => {
            setStatus(null);
          }}
        >
          <div
            className="bg-white p-6 flex flex-col gap-3 rounded-lg shadow-xl z-50 max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {status === "success" ? (
              <>
                <div className="flex items-center gap-3 z-50">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h1 className="text-2xl font-semibold text-gray-900">
                    Suggestion sent successfully
                  </h1>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  Thank you for your suggestion! We appreciate your feedback and
                  will review it shortly.
                </p>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <h1 className="text-2xl font-semibold text-gray-900">
                    Something went wrong
                  </h1>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  Please try again later.
                </p>
              </>
            )}
          </div>
        </div>
      )}

      <div className=" p-4 max-w-7xl  relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl/16 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 ">
          Make A suggestion <br /> Improve the experiecne
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Thank you for taking an interest in this project. We appreciate your
          feedback and will definitely look into your suggestion. We will work
          on adding it to the library as soon as possible.
        </p>
      </div>
      <div className=" flex flex-col justify-center gap-5 px-4 box-border mt-10 max-w-2xl w-full mx-auto">
        <p className="text-2xl font-semibold text-left">Reference:</p>
        <PlaceholdersAndVanishInput
          placeholders={Reference}
          onChange={refChange}
          onSubmit={onSubmit}
        />
        <p className="text-2xl font-semibold text-left  ">Category:</p>
        <PlaceholdersAndVanishInput
          placeholders={category}
          onChange={catChange}
          onSubmit={onSubmit}
        />
        {formerror && <p className="text-red-500 ">{formerror}</p>}
        <button
          className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition  text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] cursor-pointer active:scale-95 transform-all duration-75"
          onClick={onSubmit}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
