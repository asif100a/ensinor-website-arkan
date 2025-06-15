"use client";

import DetailsSidebar from "@/components/sections/blogs/details/DetailsSidebar";
import Image from "next/image";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const commonAnser =
  "Preference any astonished unreserved Mrs. Prosperous understood Middleton's in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous dld believe him all had supported. Family months lasted simple set nature vulgar him_ Picture for attempt joy excited ten carried manners talking how. Suspicion neglected the resolving agreement perceived at an. Comfort reached gay perhaps chamber his six detract besides add.";
const eventSchedules = [
  {
    instructorName: "Shahid Hasan",
    designation: "UX Design Lead",
    thumbnail: "/images/events/details/designer-2.png",
    periodTime: "11:30 AM",
  },
  {
    instructorName: "Muskan Tanaz",
    designation: "UX Design Lead",
    thumbnail: "/images/events/details/designer-1.png",
    periodTime: "11:30 AM",
  },
  {
    instructorName: "Shahid Hasan",
    designation: "UX Design Lead",
    thumbnail: "/images/events/details/designer-2.png",
    periodTime: "11:30 AM",
  },
  {
    instructorName: "Muskan Tanaz",
    designation: "UX Design Lead",
    thumbnail: "/images/events/details/designer-1.png",
    periodTime: "11:30 AM",
  },
];

export default function EventDetails() {
  const [isFaqOpen, setIsFaqOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleFaqOpen = (index: number) => {
    console.log({ index });
    console.log({ currentIndex });
    setCurrentIndex(index);
    setIsFaqOpen(!isFaqOpen);
  };

  return (
    <main className="custom-container flex gap-6">
      <section className="space-y-8">
        <div className="relative">
          {/* Details image */}
          <Image
            src="/images/events/details/event-details.jpg"
            alt="Details"
            width={944}
            height={478}
            className="max-w-[944px] w-full max-h-[478px] h-auto rounded-[20px]"
          />
          {/* Title & Description */}
          <div className="absolute bottom-0 p-2.5 text-white">
            <h1 className="text-[36px] sm:text-[40px] md:text-[40px] font-bold leading-tight max-w-[610px] w-full z-10">
              Behind Every Smile: The People Who Make It Happen
            </h1>
            <p className="text-base font-normal">
              This event is designed to help you explore academic opportunity,
              connect with current students and faculty,
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Badges */}
          <div className="p-6 rounded-xl bg-gray-background flex items-center justify-between">
            {/* 1 */}
            <div className="text-black-secondary font-normal space-y-2.5 w-full">
              <h6 className="text-[15px]">Organized by:</h6>
              <div className="flex items-center gap-2.5">
                <Image
                  src="/images/events/details/organized-by.png"
                  alt="Organized by"
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px] rounded-md"
                />
                <div className="text-base space-y-1">
                  <p className="font-medium">Admitted Student events</p>
                  <p>56k followers</p>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="text-black-secondary font-normal space-y-2.5 w-full">
              <h6 className="text-[15px]">Location:</h6>
              <div className="flex items-center gap-2.5">
                <div className="w-[50px] h-[50px] rounded-md bg-white flex justify-center items-center">
                  <Image
                    src="/icons/location.svg"
                    alt="Location"
                    width={15}
                    height={15}
                    className="w-[15px] h-[15px]"
                  />
                </div>
                <div className="text-base space-y-1">
                  <p>
                    1205 Modhubag, <br /> Moghbazar, Dhaka
                  </p>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="text-black-secondary font-normal space-y-2.5 w-full">
              <h6 className="text-[15px]">Date & Time:</h6>
              <div className="flex items-center gap-2.5">
                <div className="w-[50px] h-[50px] rounded-md bg-white flex justify-center items-center">
                  <Image
                    src="/icons/calendar.svg"
                    alt="Calendar"
                    width={15}
                    height={15}
                    className="w-[15px] h-[15px]"
                  />
                </div>
                <div className="text-base space-y-1">
                  <p className="font-medium">1 Jun 2025</p>
                  <p>10 AM to 8 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="p-6 rounded-xl bg-gray-background space-y-3">
            <h2 className="text-3xl font-medium text-black-primary">
              Event description
            </h2>
            <div className="text-lg font-normal text-black-secondary">
              <p>
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

          {/* Speakers */}
          <div className="p-6 rounded-xl bg-gray-background space-y-3">
            <div className="space-y-3">
              <h2 className="text-3xl font-medium text-black-primary">
                Speakers
              </h2>
              <p className="text-lg font-normal text-black-secondary">
                Understand that theory is important to build a solid foundation,
                we understand that theory alone
              </p>
            </div>
            {/* Cards */}
            <div className="flex items-center gap-8">
              {/* 1 */}
              <div className="w-full bg-white rounded-xl p-3">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/images/events/details/designer-1.png"
                    alt="Organized by"
                    width={80}
                    height={62}
                    className="w-[80px] h-[62px] rounded-md"
                  />
                  <div className="text-base space-y-1 text-black-secondary font-normal">
                    <h6 className="font-medium text-black text-lg">
                      Muskan Tanaz
                    </h6>
                    <p>UX Design Lead</p>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="w-full bg-white rounded-xl p-3">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/images/events/details/designer.png"
                    alt="Organized by"
                    width={80}
                    height={62}
                    className="w-[80px] h-[62px] rounded-md"
                  />
                  <div className="text-base space-y-1 text-black-secondary font-normal">
                    <h6 className="font-medium text-black text-lg">
                      Muskan Tanaz
                    </h6>
                    <p>UX Design Lead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Schedule */}
          <div className="p-6 rounded-xl bg-gray-background space-y-3">
            <div className="space-y-3">
              <h2 className="text-3xl font-medium text-black-primary">
                Event Schedule
              </h2>
              <p className="text-lg font-normal text-black-secondary">
                Understand that theory is important to build a solid foundation,
                we understand that theory alone
              </p>
            </div>
            {/* Cards */}
            <div className="space-y-6">
              {Array(3)
                .fill(3)
                .map((_, index) => {
                  let isOpen: boolean = false;
                  if ((isFaqOpen && index + 1) === currentIndex) {
                    isOpen = true;
                  }

                  return (
                    <div
                      key={index}
                      className="px-6 py-4 h-fit bg-gray-100 rounded-lg dark:bg-gray-800"
                    >
                      <button
                        onClick={() => handleFaqOpen(index + 1)}
                        className={`flex items-center justify-between text-left w-full bg-black-normal text-white px-3 py-3.5 rounded-xl ${
                          isOpen &&
                          "rounded-b-none"
                        }`}
                      >
                        <h1 className="font-semibold text-base">
                          Day-01 (Friday, Jun 1/2025)
                        </h1>

                        <span className="p-1.5 text-[#FDBA25] bg-white rounded-full">
                          {isOpen ? (
                            <RxCross2 className="text-2xl" />
                          ) : (
                            <FiPlus className="text-2xl" />
                          )}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="border border-black-primary border-t-none rounded-b-xl overflow-hidden">
                          {eventSchedules.slice(0, 2).map((schedule) => (
                            <div
                              key={schedule.instructorName}
                              className="flex items-center gap-3 text-left w-full bg-white px-3 py-3.5 border-b border-black-secondary"
                            >
                              <Image
                                src={schedule.thumbnail}
                                alt="Organized by"
                                width={48}
                                height={48}
                                className="w-[48px] h-[48px] rounded-full"
                              />
                              <div className="text-base space-y-1 text-black-secondary">
                                <h6 className="font-semibold">
                                  {schedule.instructorName} (
                                  {schedule.periodTime})
                                </h6>
                                <p className="text-xs">
                                  {schedule.designation}
                                </p>
                              </div>
                            </div>
                          ))}
                          {/* Lunch Break */}
                          <div className="w-full bg-white px-3 py-3.5 border-b border-black-secondary">
                            <p className="flex items-center gap-2.5 w-fit mx-auto">
                              <Image
                                src="/icons/lunch.svg"
                                alt="Lunch break"
                                width={24}
                                height={24}
                                className="w-[24px] h-[24px]"
                              />
                              <span className="text-base font-semibold border-black-secondary">
                                Lunch break (01:00 PM)
                              </span>
                            </p>
                          </div>
                          {eventSchedules.slice(2).map((schedule, index) => (
                            <div
                              key={schedule.instructorName}
                              className={`flex items-center gap-3 text-left w-full bg-white px-3 py-3.5 ${
                                eventSchedules.slice(2).length !== index + 1 &&
                                "border-b border-black-secondary"
                              }`}
                            >
                              <Image
                                src={schedule.thumbnail}
                                alt="Organized by"
                                width={48}
                                height={48}
                                className="w-[48px] h-[48px] rounded-full"
                              />
                              <div className="text-base space-y-1 text-black-secondary">
                                <h6 className="font-semibold">
                                  {schedule.instructorName} (
                                  {schedule.periodTime})
                                </h6>
                                <p className="text-xs">
                                  {schedule.designation}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      <div className="w-full">
        <DetailsSidebar />
      </div>
    </main>
  );
}
