"use client";
import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import axios from "axios";
import "@/custom_style/style.css";
import { usePathname } from "next/navigation";
import { pages } from "../../../public/data";
import { Page } from "@/types";

interface Link {
  name: string;
  url: string;
}

const Header = () => {
  const pathname = usePathname();
  const [countryCodes, setCountryCodes] = React.useState<string[]>(["EN"]);
  const [language, setLanguage] = React.useState<string>("EN");
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);

  const fetchCountryCodes = async () => {
    try {
      const { data } = await axios.get("data/countries.json");
      const codes = data.map((country: { code: string }) => country.code);
      setCountryCodes(codes);
    } catch (error) {
      console.error("Error fetching country codes:", error);
    }
  };

  React.useEffect(() => {
    fetchCountryCodes();
  }, []);
  console.log("Country Codes:", countryCodes);
  console.log("Selected Language:", language);

  const handleLanguageChange = async (lang: string) => {
    setLanguage(lang);
  };

  const links: Link[] = [
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Instructors", url: "/instructors" },
    { name: "Business", url: "/business" },
    { name: "Events", url: "/events" },
    { name: "Shop", url: "/shop" },
  ];

  return (
    <header className="bg-[#1B263B] text-white text-lg w-full h-fit py-4 px-3 sm:px-6 lg:px-0 relative">
      <div className="max-w-[1322px] w-full mx-auto flex justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={38}
              height={38}
              className="w-[38px] h-[38px] cursor-pointer"
            />
            <Image
              src="/images/logo-text.png"
              alt="logo"
              width={300}
              height={150}
              className="w-[168px] h-[26px] cursor-pointer"
            />
          </div>
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        <NavigationMenu
          viewport={false}
          className="mx-auto space-x-6 hidden lg:flex"
        >
          <NavigationMenuList className="w-full flex gap-6 border-r border-white shadow-none px-6">
            <ul className="w-full flex items-center gap-6">
              {links.slice(0, 4).map((link: Link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className={
                      link.url === pathname ? "text-white" : "text-[#BFBFBF]"
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Pages Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-inherit hover:bg-inherit text-[#BFBFBF] hover:text-white text-lg font-normal focus:bg-inherit px-0 py-0">
                Pages
              </NavigationMenuTrigger>
              <NavigationMenuContent className="z-20 bg-white text-black-primary w-fit rounded-[8px] shadow-lg p-2">
                <ul className="flex flex-col">
                  {pages.map((page: Page) => (
                    <li key={page.title}>
                      <Link
                        href={page.href}
                        className="block w-[250px] px-5 py-3 text-nowrap text-black-primary hover:text-yellow-500 hover:bg-gray-100 rounded-md transition-colors"
                      >
                        {page.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <ul className="flex items-center gap-6">
              {links.slice(4).map((link: Link, index: number) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className={
                      link.url === pathname ? "text-white" : "text-[#BFBFBF]"
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-[#BFBFBF] hover:text-white text-lg font-normal focus:bg-transparent flex items-center gap-2 px-0 py-0 h-fit hover:bg-none">
                <Image
                  src="/images/header/flag-us.png"
                  width={24}
                  height={16}
                  alt="English flag"
                  className="w-6 h-4 cursor-pointer"
                />
                <span>EN</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="z-20 absolute bg-white text-black-primary w-full mx-auto rounded-lg shadow-lg p-4 language-dropdown">
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {countryCodes.map((code) => (
                    <li key={code} className="flex items-center justify-center">
                      <button
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors w-full"
                        onClick={() => handleLanguageChange(code)} // Add language change handler
                        aria-label={`Select ${code} language`}
                      >
                        <Image
                          src={`https://flagsapi.com/${code}/flat/64.png`}
                          width={24}
                          height={24}
                          alt={`${code} flag`}
                          className="w-6 h-6"
                        />
                        <span className="text-base">{code}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Cart Icon */}
            <ul>
              <li>
                <Link href="/docs">
                  <AiOutlineShoppingCart className="w-[24px] h-[24px]" />
                </Link>
              </li>
            </ul>
          </NavigationMenuList>
          {/* Login Button */}
          <Link href="/login">
            <Button className="bg-[#FFDE59] hover:bg-[#fee88f] text-[#262626] cursor-pointer px-6 py-4">
              Login
            </Button>
          </Link>
        </NavigationMenu>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute z-20 top-18 left-0 right-0 px-3 md:px-6">
          <div className="block lg:hidden bg-[#1B263B] px-6 py-4 border border-black-secondary rounded-xl">
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className={`block ${
                      link.url === pathname ? "text-white" : "text-[#BFBFBF]"
                    } hover:text-white transition`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <details className="group">
                  <summary className="flex justify-between items-center text-[#BFBFBF] hover:text-white cursor-pointer">
                    Pages
                  </summary>
                  <ul className="pl-4 mt-2 flex flex-col gap-2">
                    {pages.map((page) => (
                      <li key={page.title}>
                        <Link
                          href={page.href}
                          className={`${
                            page.href === pathname
                              ? "text-white"
                              : "text-[#BFBFBF]"
                          } hover:text-yellow-500 transition`}
                        >
                          {page.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
              <li>
                <details className="group">
                  <summary className="flex justify-between items-center text-[#BFBFBF] hover:text-white cursor-pointer">
                    Language
                  </summary>
                  <ul className="pl-4 mt-2 grid grid-cols-2 gap-2">
                    {countryCodes.map((code) => (
                      <li key={code}>
                        <button
                          className="flex items-center gap-2 hover:text-yellow-400"
                          onClick={() => handleLanguageChange(code)}
                        >
                          <Image
                            src={`https://flagsapi.com/${code}/flat/64.png`}
                            width={24}
                            height={24}
                            alt={`${code} flag`}
                          />
                          {code}
                        </button>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/cart">
                  <AiOutlineShoppingCart className="w-6 h-6 text-white" />
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <Button className="bg-[#FFDE59] hover:bg-[#fee88f] text-[#262626] w-fit !px-6">
                    Login
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
