import { Blog } from "@/types";

const commonTitle = "How to choose the right customer for your photo business?";
const commonDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...";
const commonInstructor = "Flores Juanita";
const commonIntrImg = "/images/blogs/blogger.png";
const commonViews = "2967 People";
const commonDate = "February 28, 2018";

export const blogs: Blog[] = [
  {_id: '1', title: commonTitle, description: commonDescription, thumbnail: "/images/blogs/blog-1.png", blogger: {name: commonInstructor, thumbnail: commonIntrImg}, views: commonViews, postDate: commonDate},
  {
    title: commonTitle, description: commonDescription, thumbnail: "/images/blogs/blog-2.png", blogger: { name: commonInstructor, thumbnail: commonIntrImg }, views: commonViews, postDate: commonDate,
    _id: ""
  },
  {
    title: commonTitle, description: commonDescription, thumbnail: "/images/blogs/blog-3.png", blogger: { name: commonInstructor, thumbnail: commonIntrImg }, views: commonViews, postDate: commonDate,
    _id: ""
  },
  {
    title: commonTitle, description: commonDescription, thumbnail: "/images/blogs/blog-4.png", blogger: { name: commonInstructor, thumbnail: commonIntrImg }, views: commonViews, postDate: commonDate,
    _id: ""
  },
  {
    title: commonTitle, description: commonDescription, thumbnail: "/images/blogs/blog-5.png", blogger: { name: commonInstructor, thumbnail: commonIntrImg }, views: commonViews, postDate: commonDate,
    _id: ""
  },
  {
    title: commonTitle, description: commonDescription, thumbnail: "/images/blogs/blog-6.png", blogger: { name: commonInstructor, thumbnail: commonIntrImg }, views: commonViews, postDate: commonDate,
    _id: ""
  },
  {
    title: commonTitle, description: commonDescription, thumbnail: "/images/blogs/blog-7.png", blogger: { name: commonInstructor, thumbnail: commonIntrImg }, views: commonViews, postDate: commonDate,
    _id: ""
  },
  {
    title: commonTitle, description: commonDescription, thumbnail: "/images/blogs/blog-8.png", blogger: { name: commonInstructor, thumbnail: commonIntrImg }, views: commonViews, postDate: commonDate,
    _id: ""
  },
  {
    title: commonTitle, description: commonDescription, thumbnail: "/images/blogs/blog-9.png", blogger: { name: commonInstructor, thumbnail: commonIntrImg }, views: commonViews, postDate: commonDate,
    _id: ""
  },
];