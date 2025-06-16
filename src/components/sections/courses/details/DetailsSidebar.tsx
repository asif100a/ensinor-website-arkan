"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { overviews, popularTags } from "../../../../../public/data/courseDetails";
import { Overview } from "@/types";

export default function DetailsSidebar() {
  
  return (
    <aside className="md:w-[424px] w-full text-[#262626] text-lg space-y-8">
      {/* Course details */}
      <div className="w-full bg-gray-background p-4 rounded-xl space-y-5">
        {/* Instructor */}
        <div className="flex items-center gap-5">
          <Image
            src="/images/courses/instructor.png"
            alt="Instructor"
            width={100}
            height={100}
            className="w-[100px] h-[100px] object-contain rounded-full"
          />
          <div className="text-black-primary text-lg">
            <h2 className="text-[32px] font-medium">Shahid Hasan</h2>
            <p className="font-medium">UX/UI Instructor</p>
            <p className="flex items-center gap-2 pt-1.5">
              <FaStar className="text-xl text-[#FDBA25]" />
              <span className="text-base text-black-secondary">
                4.9 (1.5k Rating)
              </span>
            </p>
          </div>
        </div>
        <h5 className="text-[22px] font-semibold text-black-primary">
          This course includes
        </h5>
        <div className="grid gap-4">
          {overviews.map((overview: Overview, index: number) => (
            <div key={index} className="flex items-center justify-between">
              <h6 className="flex gap-2">
                <Image
                  src={overview.icon}
                  alt={overview.name}
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px] object-contain"
                />
                <span>{overview.name}</span>
              </h6>
              <p>{overview.details}</p>
            </div>
          ))}
        </div>
        <p className="text-black-primary flex items-center justify-between">
          <span className="text-lg font-medium">Price</span>{" "}
          <span className="text-[22px] font-semibold">$120</span>
        </p>
        {/* Buttons */}
        <div className="flex items-center gap-6">
          <Link href="#" className="w-full">
            <button className="w-full bg-white text-black-primary border-2 border-yellow-primary py-2 rounded-lg font-medium hover:bg-yellow-500 cursor-pointer">
              Add to Card
            </button>
          </Link>
          <Link href="/courses/buy-course" className="w-full">
            <button className="w-full bg-yellow-400 text-white py-2 rounded-lg font-medium hover:bg-yellow-500 cursor-pointer">
              Buy Now
            </button>
          </Link>
        </div>
      </div>

      {/* Popular Tags */}
      <div className="mb-6 w-full bg-gray-background p-4 rounded-xl">
        <h4 className="text-2xl font-semibold border-b border-[#BFBFBF] pb-3 mb-3">
          Popular Tags
        </h4>
        <div className="flex flex-wrap gap-3">
          {popularTags.map((tag: string, index: number) => (
            <button
              key={index}
              className="w-fit bg-white py-2 px-4 rounded-md hover:bg-gray-100"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
