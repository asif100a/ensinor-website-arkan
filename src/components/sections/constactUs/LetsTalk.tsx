import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React from "react";

export default function LetsTalk() {
  return (
    <section className="custom-container text-[#2D2D2D] text-xl flex flex-col lg:flex-row gap-12">
      {/* Support Image */}
      <Image
        src="/images/contact-us/support.png"
        alt="Support"
        width={500}
        height={540}
        className="max-w-[500px] w-full max-h-[540px] h-full rounded-xl"
      />

      <Card className="w-full max-w-[872px] border-none shadow-none bg-[#F3F6F7] px-[24px] py-[28px]">
        <CardTitle className="text-[40px] font-semibold text-black-primary">{"Let's"} talk</CardTitle>
        <CardDescription className="text-lg font-normal text-black-secondary">
          To request a quote or want to meet up for coffee, contact us directly
          or fill out the form and we will get back to you promptly
        </CardDescription>
        <CardContent className="px-0 md:px-6">
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
              {/* Message */}
              <div className="grid gap-3">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="w-full h-[144px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full h-14 cursor-pointer text-lg bg-[#FFDE59] text-[#262626] hover:bg-[#FFD700] active:bg-[#FFC700] disabled:bg-[#E6E6E6] disabled:text-[#999999] disabled:cursor-not-allowed"
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
