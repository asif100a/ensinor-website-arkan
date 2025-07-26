"use client";

import BannerPrimary from "@/components/Layout/Banners/BannerPrimary";
import React from "react";
import "@/custom_style/style.css";
import Image from "next/image";
import { useParams } from "next/navigation";
import CourseCard from "@/components/custom-ui/cards/CourseCard";
import { coursesData } from "../../../../../../public/data/demo";
import States from "@/components/sections/instructors/instructorDetails/States";
import { FaStar } from "react-icons/fa";

export default function InstructorDetails() {
  const params = useParams();

  const newCoursesData = [
    ...coursesData.slice(0, 3),
    ...coursesData.slice(0, 3),
    ...coursesData.slice(0, 3),
  ];

  const socialMediaIcons = ["facebook", "linkedIn", "twitter", "instagram"];

  const educations = [
    {
      icon: "/icons/graduation.svg",
      title: "University of Dhaka",
      degree: "Bachelor in UX/UI Design",
    },
    {
      icon: "/icons/graduation.svg",
      title: "University of Dhaka",
      degree: "Bachelor in UX/UI Design",
    },
    {
      icon: "/icons/graduation.svg",
      title: "University of Dhaka",
      degree: "Bachelor in UX/UI Design",
    },
  ];

  const skillsData: string[] = [
    "Graphic design",
    "Web design",
    "UX/UI design",
    "Graphic design",
    "Web design",
    "UX/UI design",
    "Graphic design",
    "Web design",
    "UX/UI design",
  ];

  const contacts = [
    {
      contactName: "Address",
      text: "Modhubag, Moghbazar, Dhaka",
      icon: "location",
    },
    {
      contactName: "Email",
      text: "muskantanaz@gmail.com",
      icon: "mail",
    },
    {
      contactName: "Phone",
      text: "+8801256-5264",
      icon: "call",
    },
    {
      contactName: "Website",
      text: "www.website.com",
      icon: "globe",
    },
  ];

  return (
    <div>
      <BannerPrimary
        title="Instructors Details"
        link={{
          name: "Instructor Details",
          url: `/instructors/details/${params.id}`,
        }}
      />

      <main className="custom-container flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <section className="w-fit h-fit space-y-6">
          {/* Instructor Image & Rating & Follow */}
          <div className="p-6 bg-gray-background rounded-[20px] space-y-6">
            {/* Instructor Image */}
            <Image
              src="/images/instructors/details/instructor.png"
              alt="Instructor"
              width={480}
              height={500}
              className="w-full h-auto rounded-lg"
            />

            {/* Rating & Follow */}
            <div className="space-y-2.5">
              {/* Rating */}
              <p className="flex items-center justify-center gap-4">
                <span className="text-base font-normal text-black-secondary">
                  Rating
                </span>

                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-star text-2xl" />
                  <span>4.7 / 5.0</span>
                </span>
              </p>
              {/* Follow */}
              <p className="flex items-center justify-center gap-4">
                <span className="text-base font-normal text-black-secondary">
                  Follow
                </span>

                <span className="flex items-center gap-2">
                  {socialMediaIcons.map((icon: string) => (
                    <span key={icon}>
                      <Image
                        src={`/icons/${icon}.svg`}
                        alt={icon}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </span>
                  ))}
                </span>
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="p-6 bg-gray-background rounded-[20px] space-y-6">
            <h4 className="text-xl font-semibold text-black-secondary">
              Education
            </h4>
            {/* Education data */}
            {educations?.map((edu) => (
              <div key={edu.title} className="flex items-center gap-2.5">
                <div className="w-fit h-fit p-2 rounded-md bg-white flex justify-center items-center">
                  <Image
                    src={edu.icon}
                    alt="Location"
                    width={25}
                    height={25}
                    className="w-[25px] h-[25px]"
                  />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-black-secondary">
                    {edu.title}
                  </h5>
                  <p className="text-black-secondary text-base">{edu.degree}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="p-6 bg-gray-background rounded-[20px] space-y-6">
            <h4 className="text-xl font-semibold text-black-secondary">
              Education
            </h4>
            {/* Skills data */}
            <div className="grid grid-cols-3 gap-3">
              {skillsData.map((skill: string) => (
                <button
                  key={skill}
                  type="button"
                  className="w-fit text-nowrap px-2 py-1 rounded bg-white cursor-pointer"
                >
                  <span>{skill}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full flex-1 space-y-6">
          {/* Right Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-semibold text-black-primary">
                Muskan Tanaz
              </h2>
              <p className="text-base font-medium text-black-secondary">
                UX/UI Designer
              </p>
            </div>

            <div className="text-base font-normal text-black-secondary space-y-6">
              <p>
                Get to know our instructors better. This page provides detailed
                information about each instructor&apos;s background, expertise,
                courses offered, and experience. Discover their qualifications,
                professional journey, certifications, and read feedback from
                students who have learned under their guidance. Whether you&apos;re
                choosing a course or exploring learning paths, understanding
                your instructor helps build trust and ensures a better learning
                experience.
              </p>
              <p>
                Get to know our instructors better. This page provides detailed
                information about each instructor&apos;s background, expertise,
                courses offered, and experience. Discover their qualifications,
                professional journey, certifications, and read feedback from
                students who have learned under their guidance.
              </p>
            </div>

            {/* Contacts */}
            <div className="space-y-4">
              {contacts.map((contact) => (
                <div
                  key={contact.contactName}
                  className="flex items-center gap-3"
                >
                  {/* Address */}
                  <Image
                    src={`/icons/${contact?.icon}.svg`}
                    alt="Location"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <p className="text-black-secondary">
                    <span className="font-semibold">
                      {contact?.contactName}:
                    </span>{" "}
                    {contact.text}
                  </p>
                </div>
              ))}
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
