import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import Button from "../components/Button/ApplyButton";
import { FaPlay, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ItemsCarousel from '../CarouselSlidesItems/homeCarouselItems'

const BannerCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrevClick = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setSlideIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative xs:px-0 sm:px-24 md:px-0">
      <Carousel
        showIndicators={false}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={false}
        autoPlay={false}
        interval={5000}
        onChange={(index) => setSlideIndex(index)} // Update slideIndex on change
        selectedItem={slideIndex} // Set the selected item based on slideIndex
      >
        {/* carousel content */}
{ItemsCarousel.map((item, index) => (
    <div key={index}>
      <div className="ml-7 mt-7 text-start">
        {item.playIcon && (
          <div className="text-[#FFAB4A] border w-16 h-16 rounded-full p-4 mb-4 hover:text-light hover:border-dashed hover:border transition duration-300">
            <FaPlay className="text-[2rem]" />
          </div>
        )}
        <h1 className="text-[48px] font-[500] flex flex-col leading-[70px]">
          {item.title}
          <span className="text-[70px]">{item.subtitle}</span>
        </h1>
        <p className="pt-[20px] pb-[38px]">{item.description}</p>
        <div className="flex gap-8">
          <Button text={"Apply Now"}/>
          <Button text={"Learn More"}/>
        </div>
      </div>
    </div>
  ))}
      </Carousel>
      <div className="absolute -bottom-28 xs:left-36 md:left-36 sm:left-48 transform -translate-x-1/2 flex gap-5">
        <button
          className="text-[16px] text-gray-500 flex justify-center items-center focus:outline-none bg-[#242D3E] h-12 w-12 rounded-full hover:bg-red transition duration-300 "
          onClick={handlePrevClick}
        >
          <FaArrowLeft />
        </button>
        <button
          className="text-xl text-gray-500 flex justify-center items-center focus:outline-none  bg-[#242D3E] h-12 w-12 rounded-full hover:bg-red transition duration-300"
          onClick={handleNextClick}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BannerCarousel;
