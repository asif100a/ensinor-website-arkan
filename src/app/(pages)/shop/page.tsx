"use client";

import BannerPrimary from "@/components/Layout/Banners/BannerPrimary";
import React from "react";
import "@/custom_style/style.css";
import ShopCard from "@/components/custom-ui/cards/ShopCard";
import { ShopTypes } from "@/types";
import { PaginationBar } from "@/components/custom-ui/PaginationBar";
import SidebarCommon from "@/components/custom-ui/sidebar/SidebarCommon";
import TopBarCommon from "@/components/custom-ui/topBars/TopBarCommon";

export const shopData: ShopTypes = {
    _id: '1',
    thumbnail: '/images/shop/shop-card.png',
    title: "Responsive Web Design",
    description: "Preference any astonished unreserved Mrs. Prosperous understoodMiddleton's in conviction an uncommonly do.",
    productManager: "Shahid Hasan",
    price: 120,
  };


export default function Shop() {
  return (
    <div>
      <BannerPrimary title="Shop" link={{ name: "Shop", url: "/shop" }} />

      <main className="custom-container">
        <section className="flex flex-col-reverse md:flex-row gap-6">
          <SidebarCommon />
          <div className="w-full space-y-8">
            <TopBarCommon />

            {/* Courses Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {Array(9).fill(9).map((_, index: number) => (
                <ShopCard
                  key={index}
                  _id={index + ''}
                  thumbnail={shopData.thumbnail}
                  title={shopData.title}
                  description={shopData.description}
                  productManager={shopData.productManager}
                  price={shopData.price}
                />
              ))}
            </div>
            <PaginationBar />
          </div>
        </section>
      </main>
    </div>
  );
}
