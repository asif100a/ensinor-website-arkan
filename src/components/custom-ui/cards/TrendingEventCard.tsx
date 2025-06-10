import { TrendingEventTypes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TrendingEventCard({
  thumbnail,
  title,
  description,
  date,
  time,
}: TrendingEventTypes) {
  return (
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
        {/* Badge Section */}
        <div className="flex items-center justify-between">
          {/* Date */}
          <p className="flex items-center gap-2">
            <Image
              src="/icons/calendar.svg"
              alt="date"
              width={18}
              height={18}
              className="w-[18px] h-[18px] object-contain"
            />
            <span className={`text-black-secondary font-semibold px-2.5 py-1 rounded`}>
              {date || "Event Date"}
            </span>
          </p>
          {/* Time */}
          <p className="flex items-center gap-2">
            <Image
              src="/icons/clock.svg"
              alt="time"
              width={20}
              height={20}
              className="w-[20px] h-[20px] object-contain"
            />
            <span className={`text-black-secondary font-semibold px-2.5 py-1 rounded`}>
              {time || "Event Time"}
            </span>
          </p>
        </div>
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
        <Link href="#" className="flex items-center gap-1.5 text-black-primary text-lg font-medium">
          <span>Learn more</span>
          <Image
            src="/icons/curve-arrow.svg"
            alt="curve-arrow"
            width={18}
            height={18}
            className="w-[18px] h-[18px] object-contain"
          />
        </Link>
      </div>
    </div>
  );
}
