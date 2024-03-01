import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import DotLeft from "../../../public/Image/sideColorDot.svg";
import StarRight from "../../../public/Image/kid2.star.svg"

function SecBanner({ title, link1, link2 }) {
  return (
    <div>
      <div className="relative bg-bgColor text-white text-center py-[75px] before:content-triangle before:absolute before:right-36 before:top-8">
        <h1 className="text-[48px] font-[700] leading-[56px]">{title}</h1>
        <div className="flex gap-2 items-center justify-center">
          <Link to="/">{link1}</Link>
          <div className="border-b-2 border-warning w-4"></div>
          <Link to="/{link2}">{link2}</Link>
        </div>
        <div className="absolute -bottom-3 -left-10">
          <img src={DotLeft} alt="side-dot" />
        </div>
        <div className="absolute right-0 top-[30%]">
            <img src={StarRight} alt="" />
        </div>
      </div>
    </div>
  );
}

SecBanner.propTypes = {
  title: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
};

export default SecBanner;
