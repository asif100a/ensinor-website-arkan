import React from "react";
import { FaAngleDown } from "react-icons/fa";

export default function SidebarCommon() {
  return (
    <aside className="w-full md:w-3/5 lg:w-[312px] text-[#262626] text-lg">
      {/* Category Section */}
      <div className="mb-6 w-full bg-gray-background p-4 rounded-xl">
        <h3 className="text-2xl font-semibold mb-3 border-b border-[#BFBFBF] pb-3">
          Category
        </h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              className="form-radio text-yellow-500"
              defaultChecked
            />
            <span className="">All Courses (2520)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              className="form-radio text-yellow-500"
            />
            <span className="">Development (379)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              className="form-radio text-yellow-500"
            />
            <span className="">Design (720)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              className="form-radio text-yellow-500"
            />
            <span className="">Marketing (456)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              className="form-radio text-yellow-500"
            />
            <span className="">Finance (379)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              className="form-radio text-yellow-500"
            />
            <span className="">Illustrations (657)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              className="form-radio text-yellow-500"
            />
            <span className="">Writing (850)</span>
          </label>
          <a
            href="#"
            className="text-yellow-500 hover:underline flex items-center"
          >
            See more <FaAngleDown />
          </a>
        </div>
      </div>

      {/* Language Section */}
      <div className="mb-6 w-full bg-gray-background p-4 rounded-xl">
        <h3 className="text-2xl font-semibold border-b border-[#BFBFBF] pb-3 mb-3">
          Language
        </h3>
        <div className="flex flex-wrap gap-3">
          <button className="w-fit bg-white py-2 px-4 rounded-md hover:bg-gray-100">
            English
          </button>
          <button className="w-fit bg-white py-2 px-4 rounded-md hover:bg-gray-100">
            Frances
          </button>
          <button className="w-fit bg-white py-2 px-4 rounded-md hover:bg-gray-100">
            Hindi
          </button>
          <button className="w-fit bg-white py-2 px-4 rounded-md hover:bg-gray-100">
            Russian
          </button>
          <button className="w-fit bg-white py-2 px-4 rounded-md hover:bg-gray-100">
            Spanish
          </button>
          <button className="w-fit bg-white py-2 px-4 rounded-md hover:bg-gray-100">
            Bengali
          </button>
          <button className="w-fit bg-white py-2 px-4 rounded-md hover:bg-gray-100">
            Portuguese
          </button>
        </div>
      </div>

      {/* Filter Results Button */}
      <button className="w-full bg-yellow-400 text-[#262626] py-2 rounded hover:bg-yellow-500">
        Filter Results
      </button>
    </aside>
  );
}
