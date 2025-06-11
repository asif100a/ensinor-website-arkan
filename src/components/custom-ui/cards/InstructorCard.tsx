import { Instructor } from "@/types";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function InstructorCard({
  name,
  thumbnail,
  designation,
  description,
  experience,
  ratings,
}: Instructor) {
  return (
    <div className="w-full bg-[#F3F6F7] text-lg rounded-[12px] overflow-hidden p-5 space-y-4">
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
        <div className="">
          <div className="w-full flex items-center justify-between gap-2 text-black">
            {/* Instructor Name */}
            <p className="text-[22px] font-semibold">
              {name || "Instructor name"}
            </p>

            {/* Ratings */}
            <p className="flex items-center gap-2">
              <FaStar className="text-yellow-star text-2xl" />
              <span className="text-base font-medium">{ratings || "0.0"}</span>
            </p>
          </div>
          <p className="text-base font-medium text-black-secondary">{designation}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-4 text-base font-normal text-black-secondary">
        {/* Experience */}
        <p className="flex items-center justify-between">
          <span>Experience</span>
          <span className="font-medium">{experience || "0"}</span>
        </p>
        {/* Description */}
        <p>
          {description || "Course Description"}
        </p>
      </div>
    </div>
  );
}
