"use client";

import Image from "next/image";
import React from "react";

const suggestedBlogs = {
  title:
    "It is a long established fact that reader will distracted by the readable content of a page.",
  blogger: { name: "Flores Juanita", thumbnail: "/images/blogs/blogger.png" },
  views: 2967,
  date: "February 28, 2018",
};

export default function DetailsSidebar() {
  return (
    <aside className="w-[380px] text-[#262626] text-lg space-y-8">
      {/* Course details */}
      <div className="w-full bg-gray-secondary p-4 rounded-xl space-y-5">
        <h4 className="text-2xl font-semibold text-black-normal">
          Suggested Blog
        </h4>

        <div className="space-y-5">
          {[
            Array(3)
              .fill(3)
              .map((num, index: number) => (
                <div key={index} className={`space-y-5 ${(num !== index + 1) && 'border-b border-[#B2B2B2] pb-5'}`}>
                  <p className="text-base font-normal text-black-secondary">
                    {suggestedBlogs.title}
                  </p>
                  {/* Blogger */}
                  <p className="flex items-center gap-2.5">
                    <Image
                      src={suggestedBlogs.blogger.thumbnail}
                      alt="Blogger"
                      width={40}
                      height={40}
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <span>{suggestedBlogs.blogger.name}</span>
                  </p>
                  <div className="flex items-center justify-between gap-5">
                    {/* Views */}
                    <p className="flex items-center gap-[5px]">
                      <Image
                        src="/icons/eye.svg"
                        alt="Views"
                        width={24}
                        height={24}
                        className="w-[24px] h-[24px]"
                      />
                      <span>{suggestedBlogs.views} People</span>
                    </p>
                    {/* Date */}
                    <p className="flex items-center gap-[5px]">
                      <Image
                        src="/icons/calendar-2.svg"
                        alt="Date"
                        width={20}
                        height={20}
                        className="w-[20px] h-[20px]"
                      />
                      <span>{suggestedBlogs.date}</span>
                    </p>
                  </div>
                </div>
              )),
          ]}
        </div>
      </div>
    </aside>
  );
}
