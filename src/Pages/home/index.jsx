import Kids from "../../assets/Image/kids.svg";
import BannerCarousel from "../../carousel/bannerCarousel";
import AboutSection from "../../Layout/About/LearnAbout";
import AboutWhyToRegister from "../../Layout/About/WhyToRegister";
import ClassesSection from "../../Layout/Classes/ClassesLearnAbout";
import TeacherSection from "../../Layout/Teacher/TeacherData";
import CustomerCare from "../../Layout/CustomerCare/CustomerCare";
import ArticleDaily from "../../Layout/Article/ArticleData"
import Subscribe from "../../Layout/Subscribe/Newsletter"

function home() {
  return (
    <div>
      {/* home banner section */}
      <div className="bg-[#33415C] rounded-3xl md:py-20 pt-20 pb-32">
        <div className="md:grid md:grid-cols-2 gap-4 justify-center place-items-center w-[97%] flex flex-col-reverse">
          {/* RIGHT SIDE  */}
          <div className="relative w-full">
            <div className="text-light before:content-kidsStar before:absolute before:top-28 before:-left-7 md:after:content-triangle after:absolute after:-right-8 after:top-60">
              <BannerCarousel />
            </div>
          </div>
          {/* LEFT SIDE */}
          <div id="right" className="static">
            <img src={Kids} alt="Kids" className="w-full " />
          </div>
        </div>
      </div>
      {/* about section */}
      <div>
        <AboutSection />
      </div>
      {/* classes section */}
      <div>
        <ClassesSection />
        <AboutWhyToRegister />
      </div>
      {/* Teacher Details */}
      <div className="mt-24">
        <TeacherSection />
      </div>
      {/* Customer Care */}
      <div>
        <CustomerCare/>
      </div>
      {/* Article Daily */}
      <div>
        <ArticleDaily/>
      </div>
      {/* Sunscribe Newsletter */}
      <div>
        <Subscribe/>
      </div>
    </div>
  );
}

export default home;
