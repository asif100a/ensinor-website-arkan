"use client";

import BottomCards from "@/components/custom-ui/hero/BottomCards";
import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";

interface BannerHomeProps {
  bannerFor: string;
  title: string;
  description: string;
  bannerImage: string;
}

export default function BannerHome({ bannerFor, title, description, bannerImage }: BannerHomeProps) {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative w-full h-full bg-[#1B263B] text-white flex justify-center items-center pt-6">
      {/* Left Images */}
      <>
        {/* Decorative Circle */}
        <Image
          src="/images/header/circle.png"
          alt="Decorative Circle"
          width={300}
          height={300}
          className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] object-contain z-0"
        />
        {/* Bulb */}
        <Image
          src="/images/header/bulb.png"
          alt="Bulb Icon"
          width={50}
          height={50}
          className="absolute top-[60px] left-[300px] w-[90px] h-[92px] z-0"
        />
        {/* Globe */}
        <Image
          src="/images/header/globe.png"
          alt="Globe Icon"
          width={50}
          height={50}
          className="absolute bottom-[40px] left-[380px] w-[94px] h-[116px] z-0"
        />
      </>

      {/* Centered Contents */}
      <div className="max-w-[1322px] w-full mx-auto z-10">
        <div className="flex items-center justify-between">
          <div className="max-w-[679px] w-full space-y-8">
            <h1 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold leading-tight max-w-[700px] z-10">
             {title || "Banner title"}
            </h1>
            <p>
              {description || "Banner description"}
            </p>
            <form
              onSubmit={handleSearch}
              className="w-full max-w-[550px] h-fit flex justify-center items-center relative"
            >
              <IoSearch className="text-xl text-[#262626] absolute left-4" />
              <input
                type="text"
                placeholder="Search arts or artists"
                className="w-full h-[60px] px-4 py-2 pl-12 bg-white text-[#262626] placeholder:text-[#909090] rounded-l-full border border-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="w-[145px] h-[60px] bg-yellow-500 text-[#262626] font-semibold px-6 py-2 rounded-r-full hover:bg-yellow-600 transition-colors"
              >
                Search
              </button>
            </form>

            <div>
              <p className="font-semibold">Our Enrolled Students</p>
              <div className="h-fit w-fit flex items-center -space-x-3">
                <Image
                  src="/images/banner/students/student-1.png"
                  alt="Student 1"
                  width={48}
                  height={48}
                  className="w-[48px] h-[48px] object-contain"
                />
                <Image
                  src="/images/banner/students/student-2.png"
                  alt="Student 2"
                  width={48}
                  height={48}
                  className="w-[48px] h-[48px] object-contain"
                />
                <Image
                  src="/images/banner/students/student-3.png"
                  alt="Student 3"
                  width={48}
                  height={48}
                  className="w-[48px] h-[48px] object-contain"
                />
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src={bannerImage}
              alt="Hero Image"
              width={600}
              height={520}
              className="max-w-[600px] w-full max-h-[520px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Bottom Cards */}
        {bannerFor === "home" && <BottomCards />}
      </div>

      {/* Right Images */}
      <>
        {/* Decorative Circle */}
        <Image
          src="/images/header/dotted-group.png"
          alt="Decorative Circle"
          width={300}
          height={300}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[154px] h-[154px] object-contain z-0"
        />
        {/* Bulb */}
        <Image
          src="/images/header/react.png"
          alt="Bulb Icon"
          width={50}
          height={50}
          className="absolute top-[60px] right-[300px] w-[78px] h-[86px] z-0"
        />
        {/* Globe */}
        <Image
          src="/images/header/desktop.png"
          alt="Globe Icon"
          width={50}
          height={50}
          className="absolute bottom-[40px] right-[380px] w-[102px] h-[90px] z-0"
        />
      </>
    </section>
  );
}
