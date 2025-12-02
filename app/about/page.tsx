"use client";

import React from "react";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-gray-50 dark:bg-neutral-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg leading-relaxed max-w-3xl text-center">
        Welcome to <span className="font-semibold">BStories</span>! We are passionate about sharing inspiring and meaningful stories from the Bible. Our mission is to make these stories accessible and engaging for everyone, providing a platform to explore, learn, and grow spiritually.
      </p>
      <p className="text-lg leading-relaxed max-w-3xl text-center mt-4">
        Whether you are looking for inspiration, guidance, or simply a good story, we hope that BStories becomes your go-to resource. Thank you for being a part of our community!
      </p>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg leading-relaxed max-w-3xl text-center">
          To create a world where the timeless wisdom of the Bible is shared and celebrated, inspiring people to live with purpose and faith.
        </p>
      </div>
    </div>
  );
}