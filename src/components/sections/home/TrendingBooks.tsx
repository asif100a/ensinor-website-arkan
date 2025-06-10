import Image from "next/image";
import React from "react";
import { booksData } from "../../../../public/data/booksData";
import { BookTypes } from "@/types";
import BookCard from "@/components/custom-ui/cards/BookCard";

export default function TrendingBooks() {
  return (
    <section className="custom-container space-y-10">
      <div className="w-full space-y-8 flex justify-between items-end">
        <div className="w-full max-w-[544px] space-y-6">
          <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-black-primary leading-tight max-w-[610px] w-full z-10">
            Trending Books
          </h1>
          <p className="text-black-secondary text-lg">
            A new addition to the Hunger Games universe, this novel has quickly
            become a favorite among fans.
          </p>
        </div>

        <div className="flex items-center gap-5 pb-4">
          <button className="bg-yellow-primary text-[#262626] text-lg font-medium px-6 py-3 rounded-[8px] hover:bg-yellow-500 transition-colors flex items-center">
            <span className="text-lg">Category</span>
            <Image
              src="/icons/down-arrow.svg"
              alt="Down Arrow"
              width={15}
              height={8}
              className="w-[15px] h-[8px] object-contain ml-2"
            />
          </button>
        </div>
      </div>

      {/* Most Popular Courses Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {booksData.map((book: BookTypes, index: number) => (
          <div key={index}>
            <BookCard
              thumbnail={book.thumbnail}
              title={book.title}
              description={book.description}
              price={book.price}
              rating={book.rating}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
