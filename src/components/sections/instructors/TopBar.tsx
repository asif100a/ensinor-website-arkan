import React from "react";
import { IoIosSearch } from "react-icons/io";

interface Category {
  name: string;
  value: string;
}

export default function TopBar() {
  const categories: Category[] = [{ name: "", value: "" }];
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <form className="text-lg w-full h-fit relative">
        <input
          type="email"
          placeholder="Search Here"
          className="w-full px-5 py-[10px] bg-gray-background rounded-[8px] border border-black-secondary pl-10"
        />
        <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-placeholder-text w-[24px] h-[24px]" />
      </form>

      <select
        defaultValue="Category"
        className="w-full h-[50px] px-5 py-[12.5px] bg-gray-background rounded-[8px] border border-black-secondary input-field-text"
      >
        <option value="Category">Category</option>
        {categories.map((category: Category) => (
          <option key={category.name} value={category.value}>
            {category.name}
          </option>
        ))}
      </select>

      <select
        defaultValue="SortBy"
        className="w-full h-[50px] px-5 py-[12.5px] bg-gray-background rounded-[8px] border border-black-secondary input-field-text"
      >
        <option value="SortBy">Sort by</option>
        {categories.map((category: Category) => (
          <option key={category.name} value={category.value}>
            {category.name}
          </option>
        ))}
      </select>

      <button className="bg-yellow-primary lg:max-w-[264px] w-full px-5 py-[10px] rounded-[8px] border text-lg font-medium">
        Filter Results
      </button>
    </section>
  );
}
