"use client";

import BottomCards from "@/components/custom-ui/hero/BottomCards";
import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";
import "@/custom_style/style.css";

interface BannerLongProps {
  bannerFor: string;
  title: string;
  description: string;
  bannerImage: string;
}

export default function BannerLong({
  bannerFor,
  title,
  description,
  bannerImage,
}: BannerLongProps) {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative w-full h-full bg-[#1B263B] text-white flex justify-center items-center">
      {/* Left Images */}
      <div className="hidden lg:block">
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
      </div>

      {/* Centered Contents */}
      <div className="custom-container w-full mx-auto z-10">
        <div className="flex items-start lg:items-center justify-between">
          <div className="lg:max-w-[679px] w-full space-y-8 relative">
            <div className="w-full flex flex-col-reverse md:flex-row gap-6 justify-between items-center">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[150%] font-bold max-w-[700px] z-10 relative">
                {title || "Banner title"}
                <Image
                  src="/images/banner/curve-line.png"
                  alt="curve-line"
                  width={244}
                  height={16}
                  className="hidden lg:block max-w-[243px] w-full h-auto absolute top-20 left-50"
                />
              </h1>

              <Image
                src={bannerImage}
                alt="Hero Image"
                width={600}
                height={520}
                className="block lg:hidden max-w-[600px] w-full max-h-[520px] h-auto object-contain"
              />
            </div>
            <p>{description || "Banner description"}</p>

            <div className="w-full flex flex-col md:flex-row justify-between items-center lg:flex-col lg:items-start gap-8">
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

              {/* Enrolled Students (images) */}
              <div className="w-full">
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
            {/* Curve-Arrow */}
            <Image
              src="/images/banner/curve-arrow.png"
              alt="Curve-Arrow"
              width={218}
              height={78}
              className="hidden lg:block absolute right-0 bottom-0 max-w-[218px] w-full max-h-[78px] h-auto object-contain"
            />
          </div>
          <div className="hidden lg:flex justify-end w-full">
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
        {bannerFor === "home" && (
          <div className="hidden lg:block">
            <BottomCards />
          </div>
        )}
      </div>

      {/* Right Images */}
      <div className="hidden lg:block">
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
      </div>
    </section>
  );
}
