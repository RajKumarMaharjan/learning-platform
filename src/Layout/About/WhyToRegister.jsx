import { FaPlay } from "react-icons/fa";
import RightImg from "../../../public/Image/whyRegister.jpg";
import Heading from "../../components/Heading/SubHeading";
import LargeSubHeading from "../../components/Heading/LargeSubHeading";
import { FaSchool, FaChalkboardTeacher, FaBook } from "react-icons/fa";

function AboutChoice() {
  const items = [
    {
        "id": 1,
        "title": "Well Trained Professionals",
        "detail": "Enabling humanoid robot movement with imitation learning and mimicking of animal behaviors",
        "icon": (
          <div className="text-[#235C50] text-[44px] bg-[#fff] rounded-full p-3">
            <FaSchool/>
          </div>
        )
    },
    {
        "id": 2,
        "title": "International Lesson Patterns",
        "detail": "Summer of the SPAC, Adam Neumann returns and the Nissan Ariya debuts",
        "icon": (
          <div className="text-[#235C50] text-[44px] bg-[#fff] rounded-full p-3">
            <FaChalkboardTeacher/>
          </div>
        )
    },
    {
        "id": 3,
        "title": "Awesome Infra-Structure",
        "detail": "Ready, set, network! CrunchMatch is now open for Early Stage 2020",
        "icon": (
          <div className="text-[#235C50] text-[44px] bg-[#fff] rounded-full p-3">
            <FaBook/>
          </div>
        )
    }
]

  return (
    <div className="bg-[#235C51]">
      <div className="grid md:grid-cols-2">
        {/* left side */}
        <div className="relative">
          <img
            src={RightImg}
            alt="whyRegister-Img"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-[46%] left-[46%] bg-[#fff] rounded-full p-6 text-[19px] hover:bg-danger hover:text-[#fff] transition duration-300 cursor-pointer">
            <FaPlay />
          </div>
        </div>
        {/* right side */}
        <div className="py-[80px] px-[62px]">
          {/* heading */}
          <div>
            <Heading title="Why Hesitate To Register?" color="#ffffff" />
            <LargeSubHeading
              title="We Are The Best Choice For Your Child"
              color="#ffffff"
            />
            <p className="text-[#ffffff] py-4">
              As a word from our heart, we love to dedicate for Kids the
              valuable things in Life. A great education is a must for a solid
              developments in both soul and mind for kids. We go with kids to
              play, learn, and grow better.
            </p>
          </div>
          {/* list */}
          {items.map((item) => (
            <ul key={item.id}>
              <li className="flex gap-6 py-4">
                <div className="">
                {item.icon}
                </div>
                <div className="text-[#fff]">
                  <h2 className="text-[18px] font-[500] leading-[20px] mb-2">
                    {item.title}
                  </h2>
                  <p className="leading-[26px]">{item.detail}</p>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutChoice;
