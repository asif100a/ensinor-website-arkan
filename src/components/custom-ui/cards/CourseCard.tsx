import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CourseCardProps {
  _id: string;
  thumbnail: string;
  title: string;
  description: string;
  level: string;
  rating: string;
  students: string;
  duration: string;
  lectures: string;
}

export default function CourseCard({
  _id,
  thumbnail,
  title,
  description,
  level,
  rating,
  students,
  duration,
  lectures,
}: CourseCardProps) {
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
        {/* Badge Section */}
        <div className="flex items-center justify-between">
          <span
            className={`${
              level === "All levels"
                ? "bg-[#D9FFE2] text-[#027D1F]"
                : "bg-[#FFFAE6] text-[#CCB247]"
            } text-sm font-semibold px-2.5 py-1 rounded`}
          >
            {level}
          </span>
          <div className="">
            <Image
              src="/icons/favorite.svg"
              alt="favorite"
              width={20}
              height={20}
              className="w-[20px] h-[20px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-4">
        {/* Title */}
        <Link
          href={`/courses/details/${_id}`}
          className="text-xl font-semibold text-black hover:text-yellow-primary transition-colors"
        >
          {title || "Course Title"}
        </Link>
        {/* Description */}
        <p className="text-lg text-black-secondary">
          {description || "Course Description"}
        </p>
        {/* Rating and Students */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <svg
              className="w-7 h-7 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>

            <span className="ml-1 font-semibold text-gray-700">
              {rating || "4.7 (7k)"}
            </span>
          </div>
          <span className="ml-2 text-gray-600">
            {students || "13k Students"}
          </span>
        </div>
        {/* Duration and Lectures */}
        <div className="flex justify-between items-center text-gray-600">
          <p className="flex items-center gap-1.5">
            <svg
              className="w-6 h-6 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>{duration || "35h 07m"}</span>
          </p>
          <p className="flex items-center gap-1.5">
            <Image
              src="/icons/sheets.svg"
              alt="sheets"
              width={20}
              height={20}
              className="w-[20px] h-[20px] object-contain"
            />
            <span>{lectures || "48 lectures"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
