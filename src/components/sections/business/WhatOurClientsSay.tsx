import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function WhatOurClientsSay() {
  return (
    <section className="custom-container space-y-12">
      {/* Title & Description */}
      <div className="w-full max-w-[605px] mx-auto space-y-4 text-center">
        <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-black-primary leading-tight w-full z-10">
          What Our Clients Say
        </h1>
        <p className="text-black-secondary text-lg">
          Hear from companies that have transformed their training programs with
          Train Flow Academy.
        </p>

        <div className="flex justify-center items-center gap-2.5">
          {/* Client (images) */}
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
          {/* Rate */}
          <span className="border-l border-[#B2B2B2] pl-2.5 flex items-center gap-1.5">
            <FaStar className="text-3xl text-yellow-500" /> <span className="text-[32px] font-semibold text-black-primary">5.0</span>
          </span>
          <span className="text-sm font-semibold text-black-secondary">Rated by 19 people on google</span>
        </div>
      </div>

      {/* Facilities */}
    </section>
  );
}
