import PropTypes from 'prop-types';
import { FaAngleRight } from "react-icons/fa6";
import '../../css/index.css'

function EnrollBtn({text}) {
  return (
    <div className="py-6">
      <button id="enroll" className="relative flex gap-8 items-center  text-[#ff564f] font-[700]  cursor-pointer hover:gap-4 transition duration-300">
        <span className="text-[1rem]"> {text}</span>
        <FaAngleRight />
      </button>
    </div>
  );
}

EnrollBtn.propTypes = {
  text: PropTypes.string.isRequired,
};

export default EnrollBtn;
