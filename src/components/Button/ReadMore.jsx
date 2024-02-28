import PropTypes from 'prop-types';
import { FaAngleRight } from "react-icons/fa6";
import '../../css/index.css'

function ReadMore({text}) {
  return (
    <div className="py-6">
      <button id="read-more" className="relative flex gap-6 items-center  text-[#ff564f] font-[400]  cursor-pointer hover:gap-4 transition duration-300">
        <span className="text-[1rem]"> {text} </span>
        <FaAngleRight className='text-[.8rem]'/>
      </button>
    </div>
  );
}

ReadMore.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ReadMore;
