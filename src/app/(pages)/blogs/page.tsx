import BannerPrimary from '@/components/Layout/Banners/BannerPrimary'
import BlogCards from '@/components/sections/blogs/BlogCards'
import React from 'react'
import '@/custom_style/style.css';

export default function Blogs() {
  return (
    <div>
        <BannerPrimary title='Blogs' link={{name: "Blogs", url: "/blogs"}} />

        <main className='custom-container'>
            <BlogCards />
        </main>
    </div>
  )
}
