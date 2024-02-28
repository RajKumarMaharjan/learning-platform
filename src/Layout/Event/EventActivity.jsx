import { FaHome, FaCalculator, FaTree, FaShower } from "react-icons/fa";
import SubHeading from "../../components/Heading/SubHeading";
import LargeHeading from "../../components/Heading/LargeSubHeading";
import ReadMore from "../../components/Button/ReadMore";

const ExtraActivity = [
  {
    title: "Museum Visit",
    details:
      "Offering weekly activities as visit Museum in the City to broaden the little world of your kids.",
    icon: (
      <FaHome className="text-white bg-[#FFAB4A] w-[60px] h-[60px] rounded-full p-4" />
    ),
  },
  {
    title: "Math Club",
    details:
      "Offering weekly activities as visit Museum in the City to broaden the little world of your kids.",
    icon: (
      <FaCalculator className="text-white bg-[#235C50] w-[60px] h-[60px] rounded-full p-4" />
    ),
  },
  {
    title: "Summer Camp",
    details:
      "Offering weekly activities as visit Museum in the City to broaden the little world of your kids.",
    icon: (
      <FaTree className="text-white bg-[#FF554F] w-[60px] h-[60px] rounded-full p-4" />
    ),
  },
  {
    title: "Clean & clear",
    details:
      "Offering weekly activities as visit Museum in the City to broaden the little world of your kids.",
    icon: (
      <FaShower className="text-white bg-[#33415C] w-[60px] h-[60px] rounded-full p-4" />
    ),
  },
];

function EventActivity() {
  return (
    <div>
      {/* Extra Activity */}
      <div className="text-center">
        <div className="flex flex-col w-4/6 mx-auto py-[100px]">
          <SubHeading title="Education For Everyone" color="lightPurple" />
          <LargeHeading
            title="Learn About Our Work Culture At Devschool"
            color="black"
          />
          <p className="px-4 mb-[60px] pt-[12px] leading-[30px]">
            As a word from our heart, we love to dedicate for Kids the valuable
            things in Life. A great education is a must for a solid developments
            in both soul and mind for kids. We go with kids to play, learn, and
            grow better.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-8 px-4 pb-[100px]">
        {ExtraActivity.map((data, index) => (
          <div
            key={index}
            className="p-[35px] w-full rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white"
          >
            <div>{data.icon}</div>
            <h4 className="text-[1.25rem] font-[600] pt-[20px] pb-[8px]">
              {data.title}
            </h4>
            <p className="pb-[15px] leading-[28px]">{data.details}</p>
            <div>
              <ReadMore text="Read More" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventActivity;
