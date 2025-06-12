import Image from "next/image";
import React from "react";

interface PartnerCompaniesProps {
  title: string;
  description: string;
}

export default function PartnerCompanies({title, description}: PartnerCompaniesProps) {
  const companyImages = [
    "/images/home/work-with-us/microsoft.png",
    "/images/home/work-with-us/outlook.png",
    "/images/home/work-with-us/envato.png",
    "/images/home/work-with-us/skype.png",
    "/images/home/work-with-us/amazon.png",
    "/images/home/work-with-us/vs-studio.png",
  ];
  return (
    <section className="w-full h-fit bg-gray-primary relative overflow-hidden my-16">
      <div className="custom-container space-y-12">
        <div className="w-full space-y-2 text-center">
          <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-black-primary leading-tight w-full z-10">
            {title}
          </h1>
          <p className="text-black-secondary text-lg">
           {description}
          </p>
        </div>

        {/* Images */}
        <div className="flex justify-between items-center">
          {companyImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`work with us ${index + 1}`}
              width={300}
              height={48}
              className="w-auto h-[48px] object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
