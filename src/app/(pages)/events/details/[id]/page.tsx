"use client";

import EventRightSection from "@/components/sections/events/details/EventRightSection";
import EventSchedule from "@/components/sections/events/details/EventSchedule";
import Image from "next/image";
import React from "react";

export default function EventDetails() {
  return (
    <main className="custom-container flex flex-col lg:flex-row gap-6">
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
          <EventSchedule />
        </div>
      </section>

      <div className="w-full">
        <EventRightSection
          title="Behind Every Smile: The People Who Make It Happen"
          description="This event is designed to help you explore academic opportunity, connect with current students and faculty,

"
          bgImage="/images/events/details/event-details.jpg"
        />
      </div>
    </main>
  );
}
