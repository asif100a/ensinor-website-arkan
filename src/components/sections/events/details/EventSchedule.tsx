"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

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

export default function EventSchedule() {
  const [isFaqOpen, setIsFaqOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleFaqOpen = (index: number) => {
    // console.log({ index });
    // console.log({ currentIndex });
    setCurrentIndex(index);
    setIsFaqOpen(!isFaqOpen);
  };

  return (
    <div className="p-6 rounded-xl bg-gray-background space-y-3">
      <div className="space-y-3">
        <h2 className="text-3xl font-medium text-black-primary">
          Event Schedule
        </h2>
        <p className="text-lg font-normal text-black-secondary">
          Understand that theory is important to build a solid foundation, we
          understand that theory alone
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
                className="md:px-6 md:py-4 h-fit bg-gray-100 rounded-lg dark:bg-gray-800"
              >
                <button
                  onClick={() => handleFaqOpen(index + 1)}
                  className={`flex items-center justify-between text-left w-full bg-black-normal text-white px-3 py-3.5 rounded-xl ${
                    isOpen && "rounded-b-none"
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
                            {schedule.instructorName} ({schedule.periodTime})
                          </h6>
                          <p className="text-xs">{schedule.designation}</p>
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
                            {schedule.instructorName} ({schedule.periodTime})
                          </h6>
                          <p className="text-xs">{schedule.designation}</p>
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
  );
}
