import BannerPrimary from '@/components/Layout/Banners/BannerPrimary'
import BlogCards from '@/components/sections/blogs/BlogCards'
import React from 'react'

export default function Blogs() {
  return (
    <div>
        <BannerPrimary title='Blogs' link={{name: "Blogs", url: "/blogs"}} />

        <main>
            <BlogCards />
        </main>
    </div>
  )
}
