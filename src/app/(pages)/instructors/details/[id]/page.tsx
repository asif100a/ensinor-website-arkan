"use client";

import BannerPrimary from "@/components/Layout/Banners/BannerPrimary";
import React, { useState } from "react";
import "@/custom_style/style.css";
import Image from "next/image";
import { useParams } from "next/navigation";
import CourseCard from "@/components/custom-ui/cards/CourseCard";
import { coursesData } from "../../../../../../public/data/demo";
import States from "@/components/sections/instructors/instructorDetails/States";

export default function InstructorDetails() {
  const params = useParams();
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const newCoursesData = [
    ...coursesData.slice(0, 3),
    ...coursesData.slice(0, 3),
    ...coursesData.slice(0, 3),
  ];

  return (
    <div>
      <BannerPrimary
        title="Shop Details"
        link={{ name: "Shop Details", url: `/shop/details/${params.id}` }}
      />

      <main className="custom-container flex gap-6">
        <section className="w-fit h-fit p-6 bg-gray-background rounded-[20px]">
          {/* Left Section */}
          <Image
            src="/images/shop/details/shop-details.png"
            alt="For Businesses"
            width={280}
            height={300}
            className="w-[280px] h-[300px] rounded-[20px]"
          />
        </section>

        <section className="w-full flex-1 space-y-6">
          {/* Right Section */}
          <div className="space-y-6">
            <div className="space-y-3.5">
              <h4 className="text-2xl font-semibold text-black-primary">
                UX/UI Responsive Web Design
              </h4>

              <h4 className="text-2xl font-semibold text-black-secondary space-x-1">
                Price : <span className="text-black-normal">$120</span>
              </h4>

              <h5 className="text-xl font-normal text-black-normal">
                Categories:{" "}
                <span className="text-yellow-primary">Painting</span>
              </h5>
            </div>

            <div className="text-base font-normal text-black-secondary space-y-2.5">
              <h5 className="text-xl font-semibold">Book description</h5>

              <p>
                We are a creative platform dedicated to showcasing original
                artwork from talented artists around the world. From hand-drawn
                sketches and digital illustrations to paintings, animations, and
                mixed media, our goal is to connect art lovers with meaningful
                visual experiences.
              </p>
              <p>
                Whether {"you're"} here to discover new artists, purchase
                one-of-a-kind pieces, or share your own creations, our space is
                built to celebrate creativity in all its forms. We believe in
                the power of art to inspire, communicate, and bring people
                together.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-6">
              <button className="w-full bg-white text-[#262626] text-[22px] border-2 border-yellow-primary py-3 rounded-lg font-medium hover:bg-yellow-500 cursor-pointer">
                Add to Card
              </button>

              <button
                onClick={() => setIsPopupOpen(true)}
                className="w-full bg-yellow-primary py-3 text-[#262626] text-[22px] rounded-lg font-medium hover:bg-yellow-500 cursor-pointer"
              >
                Buy Now
              </button>
            </div>
          </div>
          {/* States */}
          <States />

          {/* Courses Cards */}
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold text-black-normal">
              Courses List
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
          </div>
        </section>
      </main>
    </div>
  );
}
