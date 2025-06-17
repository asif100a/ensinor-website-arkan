import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard({
  _id,
  title,
  description,
  thumbnail,
  blogger,
  views,
  postDate,
}: Blog) {
  return (
    <div className="w-full bg-[#F9F9F9] hover:bg-white hover:drop-shadow-md text-lg rounded-[12px] overflow-hidden p-5 space-y-4">
      {/* Image Section */}
      <div className="relative space-y-4">
        <Image
          src={thumbnail}
          alt="Blog Thumbnail"
          width={284}
          height={230}
          className="w-full h-[230px] rounded-[8px] object-cover"
        />
        <Link href={`/blogs/details/${_id}`}>
          {/* Title */}
          <h2 className="text-xl font-semibold text-black-primary hover:text-yellow-500">
            {title || "Course Title"}
          </h2>
        </Link>
        {/* Blogger */}
        <p className="flex items-center gap-2.5">
          <Image
            src={blogger.thumbnail}
            alt={blogger.name}
            width={40}
            height={40}
            className="w-[40px] h-[40px] rounded-full object-contain"
          />
          <span className={`text-black-secondary font-semibold text-lg`}>
            {blogger.name || "Blogger name"}
          </span>
        </p>
        {/* Description */}
        <p className="text-base text-black-secondary">
          {description || "Course Description"}
        </p>

        {/* Views & Post Date */}
        <div className="flex flex-row items-center justify-between">
          {/* Views */}
          <p className="flex items-center gap-1">
            <Image
              src="/icons/eye.svg"
              alt="Views"
              width={24}
              height={24}
              className="w-[24px] h-[24px] object-contain"
            />
            <span
              className={`text-black-secondary font-semibold px-2.5 py-1 rounded`}
            >
              {views || "0 People"}
            </span>
          </p>
          {/* Post Date */}
          <p className="flex items-center gap-1">
            <Image
              src="/icons/calendar.svg"
              alt="Date"
              width={20}
              height={20}
              className="w-[20px] h-[20px] object-contain"
            />
            <span
              className={`text-black-secondary font-semibold px-2.5 py-1 rounded`}
            >
              {postDate || "Date of post"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
