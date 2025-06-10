import React, { SetStateAction } from "react";
import { CardContent, CardFooter } from "../ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import "@/custom_style/style.css";
import Link from "next/link";

interface SignInProps {
  setActiveTab: React.Dispatch<SetStateAction<string>>;
}

export default function SignIn({ setActiveTab }: SignInProps) {
  return (
    <div>
      <CardContent>
        <form className="grid gap-12">
          <div className="flex flex-col gap-12">
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

            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  className="w-5 h-5"
                  required
                />
                <Label htmlFor="rememberMe">Remember me</Label>
              </div>
              <Link
                href="/forgot-password"
                className="cursor-pointer hover:text-[#FFDE59]"
              >
                Forget password?
              </Link>
            </div>
          </div>
          <Button type="submit" className="w-full h-14 cursor-pointer text-lg bg-[#FFDE59] text-[#262626] hover:bg-[#FFD700] active:bg-[#FFC700] disabled:bg-[#E6E6E6] disabled:text-[#999999] disabled:cursor-not-allowed">
            Sign In
          </Button>
        </form>
      </CardContent>
      <CardFooter className="mt-5 flex flex-col items-center gap-4">
        <div className="flex gap-2">
          <p>Don’t have an account?</p>
          <button
            onClick={() => setActiveTab("signUp")}
            type="button"
            className="text-[#FFDE59] underline cursor-pointer"
          >
            Sign Up
          </button>
        </div>
        <div className="w-full flex items-center gap-2">
          <hr className="w-full bg-[#B5B5B5]" />
          <span className="text-[#B5B5B5] text-nowrap">Or, Sign in with</span>
          <hr className="w-full bg-[#B5B5B5]" />
        </div>

        <div className="flex gap-4">
          <FcGoogle className="text-[32px]" />
          <FaFacebook className="text-[32px] text-[#1877F2]" />
          <span className="w-[32px] h-[32px] bg-[#007AB9] rounded-full flex items-center justify-center">
            <FaLinkedinIn className="text-white text-[18px]" />
          </span>
        </div>
      </CardFooter>
    </div>
  );
}
