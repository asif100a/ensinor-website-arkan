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
    title: string;
    url: string;
}