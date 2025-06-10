import { BookTypes } from "@/types";
import Image from "next/image";
import React from "react";

export default function BookCard({
  thumbnail,
  title,
  description,
  price,
  rating,
}: BookTypes) {
  return (
    <div className="max-w-xs bg-[#F3F6F7] text-lg rounded-[12px] overflow-hidden p-5 space-y-4">
      {/* Image Section */}
      <div className="relative space-y-4">
        <Image
          src={thumbnail}
          alt="Course Thumbnail"
          width={284}
          height={230}
          className="w-full h-[230px] rounded-[8px] object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="space-y-4">
        {/* Title */}
        <h2 className="text-xl font-medium text-black-primary">
          {title || "Course Title"}
        </h2>
        {/* Description */}
        <p className="text-lg text-black-secondary">
          {description || "Course Description"}
        </p>
        {/* Price and Rating */}
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-700">
            {price || "$0"}
          </span>

          <div className="flex items-center gap-1.5">
            <svg
              className="w-7 h-7 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>

            <span className="text-gray-600 font-medium">{rating || "4.7 (7k)"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
