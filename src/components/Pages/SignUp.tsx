import React from "react";
import { CardContent, CardFooter } from "../ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

interface SignUpProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export default function SignUp({ setActiveTab }: SignUpProps) {
  return (
    <div>
      <CardContent>
        <form className="grid gap-12">
          <div className="flex flex-col gap-12">
            <div className="grid gap-3">
              <Label htmlFor="name">Your full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border-[#E6E6E6] rounded-[8px] input-field-text"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border-[#E6E6E6] rounded-[8px] input-field-text"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border-[#E6E6E6] rounded-[8px] input-field-text"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Enter confirm password"
                className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border-[#E6E6E6] rounded-[8px] input-field-text"
                required
              />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full h-14 cursor-pointer text-lg bg-[#FFDE59] text-[#262626] hover:bg-[#FFD700] active:bg-[#FFC700] disabled:bg-[#E6E6E6] disabled:text-[#999999] disabled:cursor-not-allowed"
          >
            Sign Up
          </Button>
        </form>
      </CardContent>
      <CardFooter className="mt-5 flex flex-col items-center gap-5">
        <div className="flex gap-3 w-fit mx-auto">
          <p>Have an account?</p>
          <button
            onClick={() => setActiveTab("signIn")}
            type="button"
            className="text-[#FFDE59] underline cursor-pointer"
          >
            Sign Up
          </button>
        </div>

        <div className="w-full flex items-center gap-3">
          <hr className="w-full bg-[#B5B5B5]" />
          <span className="text-[#B5B5B5] text-nowrap">Or, Log in with</span>
          <hr className="w-full bg-[#B5B5B5]" />
        </div>

        <div className="flex gap-4">
          <FcGoogle className="text-[32px]" />
          <FaApple className="text-[32px]" />
        </div>
      </CardFooter>
    </div>
  );
}
