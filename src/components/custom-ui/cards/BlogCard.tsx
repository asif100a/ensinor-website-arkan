import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard({
  title,
  description,
  thumbnail,
  blogger,
  views,
  postDate,
}: Blog) {
  return (
    <Link href={"#"}>
      <div className="max-w-xs bg-[#F3F6F7] text-lg rounded-[12px] overflow-hidden p-5 space-y-4">
        {/* Image Section */}
        <div className="relative space-y-4">
          <Image
            src={thumbnail}
            alt="Event Thumbnail"
            width={284}
            height={230}
            className="w-full h-[230px] rounded-[8px] object-cover"
          />
          {/* Title */}
          <h2 className="text-xl font-semibold text-black-primary">
            {title || "Course Title"}
          </h2>
          {/* Blogger */}
          <p className="flex items-center gap-2.5">
            <Image
              src="/icons/calendar.svg"
              alt="date"
              width={40}
              height={40}
              className="w-[40px] h-[40px] rounded-full object-contain"
            />
            <span className={`text-black-secondary font-semibold text-lg`}>
              {blogger.thumbnail || "Event Date"}
            </span>
          </p>
          {/* Description */}
          <p className="text-base text-black-secondary">
            {description || "Course Description"}
          </p>

          {/* Views & Post Date */}
          <div className="flex items-center justify-between">
            {/* Views */}
            <p className="flex items-center gap-2">
              <Image
                src="/icons/clock.svg"
                alt="time"
                width={20}
                height={20}
                className="w-[20px] h-[20px] object-contain"
              />
              <span
                className={`text-black-secondary font-semibold px-2.5 py-1 rounded`}
              >
                {views || "Views"}
              </span>
            </p>
            {/* Post Date */}
            <p className="flex items-center gap-2">
              <Image
                src="/icons/clock.svg"
                alt="time"
                width={20}
                height={20}
                className="w-[20px] h-[20px] object-contain"
              />
              <span
                className={`text-black-secondary font-semibold px-2.5 py-1 rounded`}
              >
                {postDate || "Post Date"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
