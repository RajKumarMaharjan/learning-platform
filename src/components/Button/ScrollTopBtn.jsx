import { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';
import { FaAngleUp } from "react-icons/fa";

const ScrollButton = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`fixed right-4 bottom-20 bg-[#FFAB4A] p-2 rounded-full z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300`}
      onClick={scrollToTop}
    >
      <FaAngleUp className="text-[28px] text-white" />
    </button>
  );
};

export default ScrollButton;
