import BannerPrimary from "@/components/Layout/Banners/BannerPrimary";
import Sidebar from "@/components/sections/courses/Sidebar";
import { BannerLink } from "@/types";
import React from "react";
import "@/custom_style/style.css";
import CourseCard from "@/components/custom-ui/cards/CourseCard";
import { coursesData } from "../../../../public/data/demo";
import { PaginationBar } from "@/components/custom-ui/PaginationBar";
import GreatConversation from "@/components/sections/GreatConversation";
import TopBarCommon from "@/components/custom-ui/topBars/TopBarCommon";

export default function Courses() {
  const link: BannerLink = { name: "Courses", url: "/courses" };

  const newCoursesData = [
    ...coursesData.slice(0, 3),
    ...coursesData.slice(0, 3),
    ...coursesData.slice(0, 3),
  ];

  return (
    <div>
      <BannerPrimary title="Courses" link={link} />
      <section className="custom-container flex gap-6">
        <Sidebar />
        <div className="w-full space-y-8">
          <TopBarCommon />

          {/* Courses Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newCoursesData.map((course, index) => (
              <CourseCard
                key={index}
                _id={index + ""}
                thumbnail={course.thumbnail}
                title={course.title}
                description={course.description}
                level={course.level}
                rating={course.rating}
                students={course.students}
                duration={course.duration}
                lectures={course.lectures}
              />
            ))}
          </div>
          <PaginationBar />
        </div>
      </section>
      <GreatConversation />
    </div>
  );
}
