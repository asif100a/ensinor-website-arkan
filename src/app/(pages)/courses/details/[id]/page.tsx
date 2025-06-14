"use client";

import DetailsSidebar from "@/components/sections/courses/details/DetailsSidebar";
import Image from "next/image";
import React from "react";
import { IoIosArrowDown, IoMdPlay } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";
import { courseCurriculums, learningContents } from "../../../../../../public/data/courseDetails";

export default function CourseDetails() {

  return (
    <main className="custom-container flex gap-6">
      <section className="space-y-8">
        {/* Title & Description */}
        <div className="w-full space-y-8 flex justify-between items-end">
          <div className="w-full space-y-6">
            <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-[#404040] leading-tight max-w-[610px] w-full z-10">
              The Complete UX/UI Design Course
            </h1>
            <p className="text-[#505050] text-lg">
              This course helps you learn everything from basic to advanced
              topics in UX and UI design. It provides complete knowledge about
              User Experience (UX) and User Interface (UI) design.
            </p>
          </div>
        </div>
        {/* Course Video */}
        <div>
          <video
            controls
            className="w-full h-[500px] rounded-lg shadow-lg"
            src="/videos/course-intro.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Course Details */}
        <div className="space-y-6 bg-gray-background p-6 rounded-xl">
          <div className="space-y-3">
            <h2 className="text-[30px] font-semibold text-black-primary">
              Course description
            </h2>
            <div>
              <p className="text-black-secondary text-lg">
                This course provides an in-depth journey through the principles
                and practices of UX (User Experience) and UI (User Interface)
                design. Whether {"you're"} a complete beginner or a creative
                professional looking to transition into product design, this
                course will guide you through each step of the design
                process—from research and ideation to prototyping and usability
                testing.
              </p>
              <p>
                By the end of this course, learners will be able to
                conceptualize, design, and prototype digital products that are
                not only visually appealing but also intuitive and
                user-centered.
              </p>
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h5 className="text-2xl font-semibold text-black-primary">
                What {"You'll"} Learn
              </h5>
              <ul className="text-[#404040] text-lg pl-6 space-y-5">
                {learningContents.map((content, index) => (
                  <li key={index}>
                    <p className="flex items-center gap-2">
                      <Image
                        src="/icons/tick-mark.svg"
                        alt="Tick Mark"
                        width={20}
                        height={20}
                        className="w-[20px] h-[20px] object-contain"
                      />
                      <span>{content}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              From understanding user behavior and creating user flows to
              designing high-fidelity interfaces and interactive prototypes,
              this course covers the entire UX/UI process using
              industry-standard tools like Figma and Adobe XD.
            </p>
          </div>
        </div>

        {/* Course Curriculum */}
        <div className="bg-gray-background py-6 rounded-xl space-y-4">
          <h3 className="text-3xl font-semibold text-black-primary px-6">
            Course Curriculum
          </h3>

          <hr className="text-[#BCBCBC] h-[1px] w-full" />

          <ul className="grid gap-6 px-6 pt-2">
            {courseCurriculums.map((curriculum, index: number) => (
              <li key={index}>
                <div className="flex gap-4">
                  {curriculum.category === "private" ? (
                    <div className="w-10 h-10 p-1 rounded-full flex justify-center items-center bg-[#D7D7D7]">
                      <MdLockOutline className="text-2xl text-[#595959]" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 p-1 rounded-full flex justify-center items-center bg-yellow-primary">
                      <IoMdPlay className="text-2xl" />
                    </div>
                  )}
                  <div>
                    <h6 className="text-xl font-medium">
                      {curriculum.content}
                    </h6>
                    <p>
                      <small className="text-sm">{curriculum.duration}</small>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="w-full flex justify-center items-center">
            <button className="flex items-center gap-1 text-lg text-[#1B263B] hover:text-yellow-500 cursor-pointer">
              <span>See more video</span>
              <IoIosArrowDown className="text-xl" />
            </button>
          </div>
        </div>
      </section>

      <div>
        <DetailsSidebar />
      </div>
    </main>
  );
}
