import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import { FaPlay } from "react-icons/fa";
import kidsClass from "../../assets/Image/kid-learn-about.jpg";
import squareUp from "../../assets/Image/up.svg";
import { TiTick } from "react-icons/ti";
import SubHeading from "../../components/Heading/SubHeading";
import LargeSubHeading from "../../components/Heading/LargeSubHeading";
import LinkButton from "../../components/Button/LinkButton";
import "../../css/index.css";

const LearnAboutCarousel = () => {
  const playIcon = () => {
    return (
      <div className="bg-lightPurple p-4 rounded-full text-light hover:bg-red transition duration-300 cursor-pointer">
        <FaPlay />
      </div>
    );
  };
  const tickIcon = () => {
    return (
      <div className="bg-lightPurple text-light rounded-full mr-2">
        <TiTick />
      </div>
    );
  };
  return (
    <div className="relative before:content-dotsSquare before:absolute before:left-0 before:-top-8">
      <div className="grid md:grid-cols-2 gap-8 mx-auto mt-24 px-4">
        {/* LEFT SIDE */}
        <div className="relative w-full ">
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={false}
            interval={5000}
            renderIndicator={(onClickHandler, isSelected, index) => {
              const indicatorStyle = {
                display: "inline-block",
                margin: "0 12px",
                cursor: "pointer",
              };
              if (isSelected) {
                return (
                  <li
                    key={index}
                    style={indicatorStyle}
                    onClick={onClickHandler}
                    aria-label={`Slide ${index + 1}`}
                    title={`Slide ${index + 1}`}
                  >
                    <button className="border-none bg-light px-2 py-1 rounded absolute -bottom-1"></button>
                  </li>
                );
              } else {
                return (
                  <li
                    key={index}
                    style={indicatorStyle}
                    onClick={onClickHandler}
                    aria-label={`Slide ${index + 1}`}
                    title={`Slide ${index + 1}`}
                  >
                    <button className="border-none bg-light p-1 rounded-full absolute -bottom-1"></button>
                  </li>
                );
              }
            
            }}
          >
            {/* Carousel slides */}
            <div className="relative">
              <div className="absolute top-1/2 left-1/2">{playIcon()}</div>
              <div className="">
                <img
                  src={kidsClass}
                  alt="carousel-Image"
                  className="w-full h-full bg-[#33415C] p-[20px] pb-[26px] rounded-[30px] object-cover"
                />
              </div>
            </div>
            <div className="relative">
              <div className="">
                <img
                  src={kidsClass}
                  alt="carousel-Image"
                  className="w-full h-full bg-[#33415C] p-[20px] pb-[26px]  rounded-[30px] object-cover"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-1/2 left-1/2">{playIcon()}</div>
              <div className="">
                <img
                  src={kidsClass}
                  alt="carousel-Image"
                  className="w-full h-full bg-[#33415C] p-[20px] pb-[26px] rounded-[30px] object-cover"
                />
              </div>
            </div>
            <div className="relative">
              <div className="">
                <img
                  src={kidsClass}
                  alt="carousel-Image"
                  className="w-full h-full bg-[#33415C] p-[20px] pb-[26px] rounded-[30px] object-cover"
                />
              </div>
            </div>
          </Carousel>
        </div>
        {/* RIGHT SIDE */}
        <div className="relative">
          <div>
            <SubHeading title="Education For Everyone" color="lightPurple"/>
            <div className="relative w-5/6 after:content-bgCircleColor after:absolute after:top-0 after:right-14 after:-z-40">
              <LargeSubHeading title="Learn About Our Work Culture At Devschool" color="dark"/>
            </div>
            <p className="py-4 pr-16">
              As a word from our heart, we love to dedicate for Kids the
              valuable things in Life. A great education is a must for a solid
              developments in both soul and mind for kids. We go with kids to
              play, learn, and grow better.
            </p>
            <div className="relative flex gap-8 md:after:content-bgCircle after:absolute after:-right-5 after:-top-16 ">
              <ul>
                <li className="flex items-center">
                  {tickIcon()} Transportation
                </li>
                <li className="flex items-center">
                  {tickIcon()} Nutritious Food
                </li>
              </ul>
              <ul>
                <li className="flex items-center">
                  {" "}
                  {tickIcon()} Outdoor Games
                </li>
                <li className="flex items-center">{tickIcon()} Best Care</li>
              </ul>
            </div>
            <p className=" pr-16 py-4">
              As a word from our heart, we love to dedicate for Kids the
              valuable things in Life . We go with kids to play, learn, and grow
              better.
            </p>
            <div className="relative flex gap-2">
              <span className="text-[1.25rem] font-[500] leading-7">
                Have a question?
              </span>
              <LinkButton linkText="Get Started Free"/>
              <div className="absolute right-4 -top-6">
                <img src={squareUp} alt="side-image-up-square" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnAboutCarousel;
