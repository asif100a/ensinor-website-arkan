"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import BannerPrimary from "@/components/Layout/Banners/BannerPrimary";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import "@/custom_style/style.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function BuyCourse() {
  const link = { name: "Buy Course", url: "/courses/buy-course" };
  const paymentMethods = [
    "PayPul",
    "AliPay",
    "GrabPay",
    "UnionPay",
    "Twint",
    "Trustly",
    "Boleto",
  ];
  return (
    <div>
      {/* Banner Section */}
      <BannerPrimary title="Buy Course" link={link} />

      <section className="custom-container text-[#2D2D2D] text-xl flex flex-col lg:flex-row gap-8">
        <Card className="w-full max-w-[872px] border-none shadow-none bg-[#F3F6F7] md:px-[24px] py-[28px]">
          <div>
            <CardContent>
              <form className="grid gap-12">
                <div className="flex flex-col gap-12">
                  {/* Name */}
                  <div className="grid gap-3">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                      required
                    />
                  </div>
                  {/* Email */}
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                      required
                    />
                  </div>
                  {/* Select Payment Method */}
                  <div className="grid gap-3">
                    <Label htmlFor="email">Select Payment method</Label>
                    <select className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text">
                      {paymentMethods.map((method: string, index: number) => (
                        <option key={index} value={method.toLowerCase()}>
                          {method}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full h-14 cursor-pointer text-lg bg-[#FFDE59] text-[#262626] hover:bg-[#FFD700] active:bg-[#FFC700] disabled:bg-[#E6E6E6] disabled:text-[#999999] disabled:cursor-not-allowed"
                >
                  Payment Now
                </Button>
              </form>
            </CardContent>
          </div>
        </Card>

        <aside className="max-w-[500px] w-full text-[#262626] text-lg space-y-8 mx-auto">
          {/* Order Summary */}
          <div className="mb-6 w-full bg-gray-background p-6 rounded-xl space-y-4">
            <h4 className="text-2xl font-semibold border-b border-dotted border-[#BFBFBF] pb-3">
              Order Summary
            </h4>
            <ul className="space-y-6 border-b border-dotted border-[#BFBFBF] pb-3">
              <li>UX/UI Design</li>
              <li>Discount</li>
            </ul>
            <p className="flex items-center justify-between font-semibold text-xl">
              <span>Total</span>
              <span>$105</span>
            </p>
          </div>
          {/* UX/UI Design */}
          <div className="flex flex-col md:flex-row gap-4.5 w-full bg-gray-background p-6 rounded-xl">
            <Image
              src="/images/courses/buy-course/course-image.png"
              alt="Course image"
              width={156}
              height={116}
              className="w-[156px] h-[116px] rounded-xl"
            />
            <div>
              <div className="text-black text-lg font-semibold space-y-1.5">
                <h4 className="text-2xl">UX/UI Design</h4>
                <p>$120.00</p>
              </div>
              <div className="text-base space-y-2.5">
                <p className="text-xl">Instructor : Shahid Hasan</p>
                <p className="flex items-center gap-2 font-medium">
                  <FaStar className="text-[#FDBA25]" />
                  <span>4.9 (1.5k Rating)</span>
                </p>
                <p className="font-semibold">Published date: Jan 17 2025</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
