import ImproveSkills from "@/components/sections/home/ImproveSkills";
import BannerLong from "@/components/Layout/Banners/BannerLong";
import MostPopularCourses from "@/components/sections/home/MostPopularCourses";
import AboutUs from "@/components/sections/home/AboutUs";
import PartnerCompanies from "@/components/sections/PartnerCompanies";
import TrendingCourses from "@/components/sections/home/TrendingCourses";
import TrendingEvents from "@/components/sections/home/TrendingEvents";
import TrendingBooks from "@/components/sections/home/TrendingBooks";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <BannerLong
        bannerFor={"home"}
        title="Learn a New Skill Every day, Anytime, & your Suitable Schedule."
        description="It’s important to note that online education also comes with it’s
              own set of challenges, such as potential feeling of isolation, the
              need for strong self-discipline."
        bannerImage="/images/banner/home-hero-image.png"
      />
      <ImproveSkills />
      <MostPopularCourses />
      <AboutUs />
      <PartnerCompanies
      title="Work with Us"
      description="Our platform gives you the freedom to grow your skills at your own pace."
      />
      <TrendingCourses />
      <TrendingEvents />
      <TrendingBooks />
    </div>
  );
}
