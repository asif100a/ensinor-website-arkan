import CourseCard from "@/components/custom-ui/cards/CourseCard";
import { Course } from "@/types";
import Image from "next/image";
import React from "react";
import { coursesData } from "../../../../public/data/demo";

export default function MostPopularCourses() {
  return (
    <section className="custom-container space-y-10">
      <div className="w-full space-y-8 flex flex-col md:flex-row justify-between items-end">
        <div className="w-full space-y-6">
          <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-[#404040] leading-tight max-w-[610px] w-full z-10">
            Most Popular Courses
          </h1>
          <p className="text-[#505050] text-lg">
            Join Thousands of Successful Learners
          </p>
        </div>

        <div className="flex items-center gap-5 pb-4">
          <button className="bg-yellow-primary text-[#262626] text-lg font-medium px-6 py-2.5 rounded-[8px] hover:bg-yellow-500 transition-colors flex items-center">
            <span className="text-lg">Category</span>
            <Image
              src="/icons/down-arrow.svg"
              alt="Down Arrow"
              width={15}
              height={8}
              className="w-[15px] h-[8px] object-contain ml-2"
            />
          </button>

          <button className="text-nowrap text-[#262626] border-2 border-[#000000] text-lg font-medium px-6 py-2 rounded-[8px] hover:bg-yellow-500 transition-colors flex items-center">
            View all
          </button>
        </div>
      </div>

      {/* Most Popular Courses Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {coursesData.map((course: Course, index: number) => (
          <div key={index}>
            <CourseCard
              _id={index + ''}
              thumbnail={course.thumbnail}
              title={course.title}
              description={course.description}
              level={course.level}
              rating={course.rating}
              students={course.students}
              duration={course.duration}
              lectures={course.lectures}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
