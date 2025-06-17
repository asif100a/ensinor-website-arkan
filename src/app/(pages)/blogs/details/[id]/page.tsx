"use client";

import Image from "next/image";
import React from "react";
import BannerPrimary from "@/components/Layout/Banners/BannerPrimary";
import { useParams } from "next/navigation";
import DetailsSidebar from "@/components/sections/blogs/details/DetailsSidebar";

export default function BlogDetails() {
  const params = useParams();
  console.log({ params });

  return (
    <>
      <BannerPrimary
        title="Blogs Details"
        link={{ name: "Blog Details", url: `/blogs/details/${params._id}` }}
      />

      <main className="custom-container flex flex-col lg:flex-row gap-6">
        <section className="space-y-8">
          {/* Top Bar */}
          <div className="text-base font-medium text-[#595959] grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-[60px]">
            {/* Volunteer */}
           <p className="flex items-center gap-[5px]">
              <Image
                src="/icons/flag.svg"
                alt="Volunteer Highlights"
                width={20}
                height={20}
                className="w-[20px] h-[20px]"
              />
              <span>Volunteer Highlights</span>
            </p>
            {/* Views */}
           <p className="flex items-center gap-[5px]">
              <Image
                src="/icons/eye.svg"
                alt="Volunteer Highlights"
                width={20}
                height={20}
                className="w-[20px] h-[20px]"
              />
              <span>2967 People</span>
            </p>
            {/* Share */}
            <button className="bg-[#F8CFBF] p-2 rounded-full w-fit">
              <Image
                src="/icons/share.svg"
                alt="Volunteer Highlights"
                width={20}
                height={20}
                className="w-[20px] h-[20px]"
              />
            </button>
          </div>
          {/* Title */}
          <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-[#404040] leading-tight max-w-[610px] w-full z-10">
            Behind Every Smile: The People Who Make It Happen
          </h1>
          {/* Details image */}
          <Image
            src="/images/blogs/details/details-image.png"
            alt="Details"
            width={944}
            height={478}
            className="max-w-[944px] w-full max-h-[478px] h-auto rounded-[20px]"
          />

          {/* Blog Post Details */}
          <div className="space-y-5 pb-5 border-b border-[#E6E6E6]">
            <h4 className="text-2xl font-semibold text-black-secondary">
              Blog Post Details
            </h4>
            <div className="text-base font-medium text-black-normal flex items-center gap-10">
              {/* Blogger */}
              <p className="flex items-center gap-2.5">
                <Image
                  src="/images/blogs/blogger.png"
                  alt="Blogger"
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px] rounded-full"
                />
                <span>Flores Juanita</span>
              </p>
              {/* Date */}
              <p className="flex items-center gap-[5px]">
                <Image
                  src="/icons/calendar-2.svg"
                  alt="Date"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px]"
                />
                <span>February 28, 2018</span>
              </p>
              {/* Views */}
              <p className="flex items-center gap-[5px]">
                <Image
                  src="/icons/eye.svg"
                  alt="Views"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px]"
                />
                <span>Flores Juanita</span>
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6 text-lg font-normal text-black-secondary">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              sem sed nibh ultrices bibendum. In ac dolor luctus ipsum venenatis
              vulputate. Phasellus nec iaculis justo. Ut consequat purus quis
              condimentum euismod. Nunc vitae massa sollicitudin, fringilla
              magna et, ullamcorper nulla. Curabitur scelerisque at metus ut
              efficitur. Phasellus eleifend purus in lectus tincidunt, id
              pharetra lorem eleifend. Maecenas eget velit risus. Nunc sed
              ultrices velit. Mauris pulvinar est enim, at placerat augue
              posuere vitae. Nunc arcu orci, luctus in purus imperdiet, blandit
              ultrices metus. Integer efficitur odio et turpis faucibus rhoncus.
            </p>
            <p>
              Quisque id placerat tortor. Phasellus eros ipsum, sagittis a
              vehicula eget, pulvinar eget tortor. Donec aliquet magna a
              eleifend lobortis. Aenean a purus at magna mollis vulputate vitae
              at est. Quisque diam turpis, tincidunt et mi vitae, consectetur
              suscipit orci. Aenean dapibus scelerisque justo. Nullam velit est,
              placerat eget elit vitae, faucibus condimentum felis. Integer in
              felis sit amet elit elementum pretium. Nunc accumsan fermentum
              semper.
            </p>
            <p>
              Praesent imperdiet sem at blandit maximus. Quisque lacinia
              faucibus ipsum, et rutrum est lacinia a. Donec nisl arcu, mattis
              non ligula ut, imperdiet tempus leo. Nunc dictum, ipsum in semper
              mattis, ante erat sollicitudin libero, ac rutrum nunc massa vitae
              magna. Donec pretium varius libero. Proin ullamcorper odio vel
              massa hendrerit fermentum. Donec eleifend interdum dui vitae
              scelerisque. Mauris dapibus dui dui, ac imperdiet urna imperdiet
              a. Pellentesque elementum lorem non metus sodales tempor.
            </p>
          </div>
        </section>

        <div className="w-full">
          <DetailsSidebar />
        </div>
      </main>
    </>
  );
}
