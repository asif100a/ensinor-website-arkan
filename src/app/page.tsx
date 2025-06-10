import ImproveSkills from "@/components/sections/home/ImproveSkills";
import BannerHome from "@/components/Layout/Banners/BannerHome";
import MostPopularCourses from "@/components/sections/home/MostPopularCourses";
import AboutUs from "@/components/sections/home/AboutUs";
import WorkWithUs from "@/components/sections/home/WorkWithUs";
import TrendingCourses from "@/components/sections/home/TrendingCourses";
import TrendingEvents from "@/components/sections/home/TrendingEvents";
import TrendingBooks from "@/components/sections/home/TrendingBooks";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <BannerHome />
      <ImproveSkills />
      <MostPopularCourses />
      <AboutUs />
      <WorkWithUs />
      <TrendingCourses />
      <TrendingEvents />
      <TrendingBooks />
    </div>
  );
}
