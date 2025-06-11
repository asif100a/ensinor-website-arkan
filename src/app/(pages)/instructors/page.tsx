import BannerPrimary from "@/components/Layout/Banners/BannerPrimary";
import React from "react";
import "@/custom_style/style.css";
import TopBar from "@/components/sections/instructors/TopBar";
import InstructorCard from "@/components/custom-ui/cards/InstructorCard";
import { Instructor } from "@/types";

export default function Instructors() {
  const instructorData: Instructor[] = [
    {
      name: "Muskan Tanaz",
      thumbnail: "/images/instructors/instructor-1.png",
      designation: "UX Design Lead",
      description:
        "As it so contrasted oh estimating instrument. Size like body some one had. Are conduct and viewing boy minutes some one had.",
      experience: "5 years",
      ratings: "4.7",
    },
    {
      name: "Muskan Tanaz",
      thumbnail: "/images/instructors/instructor-2.png",
      designation: "UX Design Lead",
      description:
        "As it so contrasted oh estimating instrument. Size like body some one had. Are conduct and viewing boy minutes some one had.",
      experience: "5 years",
      ratings: "4.7",
    },
    {
      name: "Muskan Tanaz",
      thumbnail: "/images/instructors/instructor-3.png",
      designation: "UX Design Lead",
      description:
        "As it so contrasted oh estimating instrument. Size like body some one had. Are conduct and viewing boy minutes some one had.",
      experience: "5 years",
      ratings: "4.7",
    },
  ];
  return (
    <div>
      <BannerPrimary
        title="Instructors"
        link={{ name: "Instructors", url: "/instructors" }}
      />

      <section className="custom-container space-y-8">
        <TopBar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...instructorData, ...instructorData, ...instructorData].map((instructor: Instructor) => (
            <InstructorCard
              key={instructor.name}
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
