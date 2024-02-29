import Banner from "../../components/SecBanner/SecBanner";
import EventActivity from "../../Layout/Event/EventActivity";
import StudentImg from "../../../public/Image/studentGroup.png";
import AboutSection from "../../Layout/About/LearnAbout";
import EventData from "../../data/eventData.json";
import EventArticleLayout from "../../Layout/Article/EventArticle";

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
      <EventArticleLayout />
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
