"use client";

import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const commonAnser =
  "Preference any astonished unreserved Mrs. Prosperous understood Middleton's in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous dld believe him all had supported. Family months lasted simple set nature vulgar him_ Picture for attempt joy excited ten carried manners talking how. Suspicion neglected the resolving agreement perceived at an. Comfort reached gay perhaps chamber his six detract besides add.";
const faqs = [
  { question: "Do you provide customer support?", answer: commonAnser },
  { question: "What is your privacy policy?", answer: commonAnser },
  { question: "How can I buy your software?", answer: commonAnser },
  { question: "Is there a money-back guarantee?", answer: commonAnser },
  {
    question: "What's the difference between monthly and annual plans?",
    answer: commonAnser,
  },
  { question: "What happens after the trial ends?", answer: commonAnser },
];

export default function FAQSection() {
  const [isFaqOpen, setIsFaqOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleFaqOpen = (index: number) => {
    setCurrentIndex(index);
    setIsFaqOpen(!isFaqOpen);
  };

  return (
    <section className="custom-container space-y-12">
      {/* Title & Description */}
      <div className="w-full max-w-[605px] mx-auto space-y-3 text-center">
        <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-black-primary leading-tight w-full z-10">
          Frequently asked questions
        </h1>
        <p className="text-black-secondary text-lg">
          Perceived end knowledge certainly day sweetness why cordially
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq, index: number) => (
          <div
            key={faq.question}
            className="px-6 py-4 h-fit bg-gray-100 rounded-lg dark:bg-gray-800"
          >
            <button onClick={() => handleFaqOpen(index + 1)} className="flex items-center justify-between text-left w-full">
              <h1 className="font-semibold text-lg text-black-secondary">
                {faq.question}
              </h1>

              <span className="p-1.5 text-[#FDBA25] bg-white rounded-full">
                {(isFaqOpen && (index + 1) === currentIndex) ? (
                  <RxCross2 className="text-2xl" />
                ) : (
                  <FiPlus className="text-2xl" />
                )}
              </span>
            </button>

            {(isFaqOpen && (index + 1) === currentIndex) && (
              <p className="mt-6 text-base text-black-secondary">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
