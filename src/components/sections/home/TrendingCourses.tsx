import TrendingCourseCard from "@/components/custom-ui/cards/TrendingCourseCard";
import { TrendingCourseTypes } from "@/types";
import React from "react";
import { trendingCoursesData } from "../../../../public/data/demo";
import Image from "next/image";
import "@/custom_style/style.css";

export default function TrendingCourses() {
  const teachingAndEarningSteps = [
    "Apply to become instructor",
    "Build & edit your profile",
    "Create your new course",
    "Start teaching & earning",
  ];
  return (
    <div className="custom-container space-y-10">
      <section>
        <div className="w-full space-y-8 flex justify-between items-end">
          <div className="w-full space-y-6">
            <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-[#404040] leading-tight max-w-[610px] w-full z-10">
              Our Trending Courses
            </h1>
            <p className="text-[#505050] text-lg">
              Check out most 🔥 courses in the market
            </p>
          </div>

          <div className="pb-4">
            <button className="text-nowrap text-[#262626] border-2 border-[#000000] text-lg font-medium px-6 py-2 rounded-[8px] hover:bg-yellow-500 transition-colors flex items-center">
              View all
            </button>
          </div>
        </div>

        {/* Trending Courses Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {trendingCoursesData.map(
            (course: TrendingCourseTypes, index: number) => (
              <div key={index}>
                <TrendingCourseCard
                  thumbnail={course.thumbnail}
                  title={course.title}
                  role={course.role}
                  level={course.level}
                  rating={course.rating}
                  students={course.students}
                  duration={course.duration}
                  lectures={course.lectures}
                  instructorImage={course.instructorImage}
                  instructorName={course.instructorName}
                  coursePrice={course.coursePrice}
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* Become an Instructor! */}
      <section className="w-full flex bg-[#FFF5CC] rounded-[12px] px-15 mt-24">
        {/* Left */}
        <div className="flex">
          <div className="flex flex-col justify-between min-h-[184px] space-y-5 py-6">
            <h1 className="text-[40px] sm:text-[42px] md:text-[40px] font-bold text-[#404040] leading-tight max-w-[610px] w-full z-10">
              Become an Instructor!
            </h1>
            <p className="text-[#505050] text-lg">
              Speedily say has suitable disposal add boy. On forth doubt miles
              of child. Exercise joy man children rejoiced. Yet uncommonly his
              ten who diminution astonished.
            </p>
            {/* Button */}
            <div>
              <button className="text-[#303030] text-lg font-medium px-[30px] py-3.5 rounded-[8px] border-2 border-[#303030] hover:bg-yellow-500 transition-colors">
                Start Teaching
              </button>
            </div>
          </div>
          <div className="w-full h-full flex items-end">
            <Image
              src="/images/home/trending-courses/become-instructor.png"
              alt="Become an Instructor"
              width={154}
              height={220}
              className="min-w-[154px] min-h-[220px] object-contain"
            />
          </div>
        </div>
        {/* Right */}
        <div className="py-6">
          <div className="space-y-6">
            <h1 className="text-[32px] sm:text-[40px] md:text-[32px] font-bold text-[#404040] leading-tight max-w-[610px] w-full z-10">
              Your teaching & earning steps
            </h1>
            <p className="text-[#505050] text-lg">
              Rapidiously iterate enabled meta-services vis-a-vis world-class
              quality vectors. Collaboratively recaptiualize proof relationships
              via ubiquitous leadership skills.
            </p>
            <ul className="text-[#404040] text-lg grid grid-cols-1 md:grid-cols-2 gap-4">
              {teachingAndEarningSteps.map((step, index) => (
                <li key={index}>
                  <p className="flex items-center gap-2">
                    <Image
                      src="/icons/tick-mark.svg"
                      alt="Tick Mark"
                      width={32}
                      height={32}
                      className="w-[32px] h-[32px] object-contain"
                    />
                    <span>{step}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
