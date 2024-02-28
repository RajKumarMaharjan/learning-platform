import Banner from "../../components/SecBanner/SecBanner";
import SubHeading from "../../components/Heading/SubHeading";
import LargeHeading from "../../components/Heading/LargeSubHeading";
import EventActivity from "../../Layout/Event/EventActivity";
import StudentImg from "../../assets/Image/studentGroup.png";
import EventArticle from "../../data/eventArticle.json";
import { Link } from "react-router-dom";
import AboutSection from "../../Layout/About/LearnAbout";
import EventData from "../../data/eventData.json";

function Event() {
  return (
    <div>
      <Banner title="Events" link1="Home" link2="events" />
      {/* Event Activity */}
      <EventActivity />
      <div>
        <img src={StudentImg} alt="tracking" className="w-full mb-24" />
      </div>
      {/* Event Article */}
      <div className="bg-[#FEFBF6] py-24 px-4">
        <div>
          <div className="text-center">
            <SubHeading title="Together We Can Create" color="lightPurple" />
            <LargeHeading title="Interesting Articles Updated Daily" />
          </div>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 pt-12">
            {EventArticle.map((article, index) => (
              <div
                key={index}
                id="bounce"
                className="shadow-lg bg-white hover:border-b-2 hover:border-red"
              >
                <div className="relative">
                  <img
                    src={article.imgUrl}
                    alt="article.title"
                    className="w-full"
                  />
                  <div className="absolute top-[5%] left-[5%]">
                    <div className="text-center text-white bg-[#F9A749] px-[12px] py-[0px]">
                      <p className="text-[14px] font-medium">{article.date}</p>
                      <p className="text-[14px] font-medium mt-[-14px]">
                        {article.month}
                      </p>
                    </div>
                  </div>
                  <div className="px-[20px] pt-[18px] pb-[25px]">
                    <Link
                      to="#"
                      className="cursor-pointer text-[14px] font-[500] leading-3"
                    >
                      {article.address}
                    </Link>
                    <h4 className="text-[20px] font-[400]">{article.title}</h4>
                    <p className="text-[14px] font-[400]">{article.time}</p>
                    <p className="text-[22px] font-[600] text-lightPurple">
                      {article.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* About */}
      <AboutSection />
      {/* Data */}
      <div className="my-24 px-4">
        <div className="flex flex-wrap justify-around items-center text-center text-white bg-bgColor rounded-lg">
          {EventData.map((data, index) => (
            <div key={index} className="py-[50px]">
              <h2 className="text-[48px] font-[700] pb-2">{data.number}</h2>
              <p>{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;
