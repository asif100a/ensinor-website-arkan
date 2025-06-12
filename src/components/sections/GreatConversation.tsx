"use client";

import Image from "next/image";
import React from "react";
import "@/custom_style/style.css";

export default function GreatConversation() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed!");
  };

  return (
      <section className="custom-container bg-yellow-secondary rounded-4xl relative overflow-hidden">
        <div className="flex flex-row items-center justify-between h-[326px] px-20">
          <div className="max-w-[642px] w-full space-y-8 z-10">
            <div className="space-y-6">
              <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-[#404040] leading-tight max-w-[610px] w-full z-10">
                Are you ready for a <br /> more great Conversation?
              </h1>
            </div>
            {/* Subscription */}
            <form onSubmit={handleSubscribe} className="w-full">
              <div className="w-full max-w-[550px] h-fit flex justify-center items-center">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full h-[60px] px-4 py-2 bg-white text-[#262626] text-lg rounded-l-lg border border-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button
                  type="submit"
                  className="w-[145px] h-[60px] bg-yellow-primary text-[#262626] text-lg font-medium px-6 py-2 rounded-r-lg hover:bg-yellow-hover transition-colors cursor-pointer"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <>
            <div className="absolute right-20 bottom-0 w-full max-w-[484px] h-auto z-10">
              <Image
                src="/images/courses/great-conversation.png"
                alt="improve skills"
                width={484}
                height={424}
                className="max-w-[484px] w-full h-auto object-contain"
              />
            </div>

            {/* Left Moon */}
            <div className="absolute -right-6 top-0 bottom-0 w-full max-w-[836px] h-auto z-0">
              <Image
                src="/images/courses/left-moon.png"
                alt="improve skills"
                width={836}
                height={424}
                className="max-w-[836px] w-full h-auto object-contain"
              />
            </div>
            {/* Right Moon */}
            <div className="absolute -right-6 bottom-24 w-full max-w-[448px] h-auto z-0">
              <Image
                src="/images/courses/right-moon.png"
                alt="improve skills"
                width={448}
                height={424}
                className="max-w-[448px] w-full h-auto object-contain"
              />
            </div>
            {/* Tick Mark */}
            <div className="absolute right-0 top-0 w-full max-w-[448px] h-auto z-0">
              <Image
                src="/images/courses/tick-mark.png"
                alt="improve skills"
                width={448}
                height={424}
                className="max-w-[448px] w-full h-auto object-contain"
              />
            </div>
          </>
        </div>
      </section>
  );
}
