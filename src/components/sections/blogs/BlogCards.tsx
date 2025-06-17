"use client";

import BlogCard from "@/components/custom-ui/cards/BlogCard";
import React, { useState } from "react";
import { blogs } from "../../../../public/data/blogData";
import { Blog } from "@/types";

const tabs = [
  "All",
  "Donor Stories",
  "Campaigns",
  "Achievements",
  "Volunteer Highlights",
];

export default function BlogCards() {
  const [activeTab, setActiveTab] = useState<string>("All");

  return (
    <section className="space-y-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border p-3 md:p-6 rounded-xl lg:border-none lg:p-0 lg:rounded-none">
        {tabs.map((tab: string) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-black-normal text-lg font-medium cursor-pointer ${
              tab === activeTab &&
              "bg-[#281E12] text-white px-4 py-1 rounded-[70px]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {blogs.map((blog: Blog) => (
          <BlogCard
            _id={'1'}
            key={blog.title}
            thumbnail={blog.thumbnail}
            title={blog.title}
            description={blog.description}
            blogger={blog.blogger}
            views={blog.views}
            postDate={blog.postDate}
          />
        ))}
      </div>
    </section>
  );
}
