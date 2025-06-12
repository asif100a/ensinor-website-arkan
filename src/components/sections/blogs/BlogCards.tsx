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
    <section>
      <div className="flex items-center gap-8">
        {tabs.map((tab: string) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-black-normal text-lg font-medium ${
              tab === activeTab && "bg-[#281E12] text-white px-4 py-1"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      {blogs.map((blog: Blog) => (
        <BlogCard
          key={blog.title}
          thumbnail={blog.thumbnail}
          title={blog.title}
          description={blog.description}
          blogger={blog.blogger}
          views={blog.views}
          postDate={blog.postDate}
        />
      ))}
    </section>
  );
}
