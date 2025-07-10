import BannerPrimary from "@/components/Layout/Banners/BannerPrimary";
import React from "react";
import "@/custom_style/style.css";
import TopBar from "@/components/sections/instructors/TopBar";
import InstructorCard from "@/components/custom-ui/cards/InstructorCard";
import { Instructor } from "@/types";
import { instructorData } from "../../../../public/data/instructorData";

export default function Instructors() {
  
  return (
    <div>
      <BannerPrimary
        title="Instructors"
        link={{ name: "Instructors", url: "/instructors" }}
      />

      <section className="custom-container space-y-8">
        <TopBar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...instructorData, ...instructorData, ...instructorData].map((instructor: Instructor, key: number) => (
            <InstructorCard
              key={key}
              id={key}
              name={instructor.name}
              thumbnail={instructor.thumbnail}
              designation={instructor.designation}
              description={instructor.description}
              experience={instructor.experience}
              ratings={instructor.ratings}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
