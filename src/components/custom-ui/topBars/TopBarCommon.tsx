import React from "react";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";

export default function TopBarCommon() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center gap-6">
      <div className="text-lg w-full lg:w-fit h-fit relative">
        <input
          type="email"
          placeholder="Email"
          className="lg:min-w-[424px] w-full px-5 py-[12.5px] bg-gray-background rounded-[8px] border border-black-secondary pl-10"
        />
        <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-placeholder-text w-[24px] h-[24px]" />
      </div>

      <div className="w-full flex flex-col md:flex-row gap-6">
        <div className="w-full">
          <button className="flex justify-center items-center gap-1 bg-gray-background w-full px-5 py-[12.5px] rounded-[8px] border border-black-secondary  text-placeholder-text text-center text-lg">
            <span>All Viewed</span> <IoIosArrowDown />
          </button>
        </div>

        <div className="w-full text-lg text-center text-placeholder-text">
          <p>Showing 1-20 of 120 Results</p>
        </div>
      </div>
    </section>
  );
}
