export interface Course {
  thumbnail: string;
  title: string;
  description: string;
  level: string;
  rating: string;
  students: string;
  duration: string;
  lectures: string;
}
export interface TrendingCourseTypes {
  thumbnail: string;
  title: string;
  role: string;
  level: string;
  rating: string;
  students: string;
  duration: string;
  lectures: string;
  instructorImage: string;
  instructorName: string;
  coursePrice: string;
}

export interface TrendingEventTypes {
  thumbnail: string;
  title: string;
  description: string;
  date: string;
  time: string;
  href: string;
}

export interface BookTypes {
  thumbnail: string;
  title: string;
  description: string;
  price: string;
  rating: string;
}

export interface BannerLink {
  name: string;
  url: string;
}

export interface Overview {
  name: string;
  icon: string;
  details: string;
}

export interface Page {
  title: string;
  href: string;
}

export interface Instructor {
  name: string;
  thumbnail: string;
  designation: string;
  description: string;
  experience: string;
  ratings: string;
}

export interface Blog {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  blogger: {
    name: string;
    thumbnail: string;
  };
  views: string;
  postDate: string;
}

export interface ShopTypes {
  _id: string
  thumbnail: string
  title: string
  description: string
  productManager: string
  price: number
}