import PropTypes from "prop-types";
import { GoTriangleRight } from "react-icons/go";
import "../../css/index.css";

function PageButton({ btnText, padding}) {
  const paddingValue = `${padding}px`;

  return (
    <div>
      <button
        id="centerBtn"
        className={`flex justify-center border-2 border-[#33415c] py-2 px-${padding} capitalize text-[17px] text-[#33415c] font-semibold hover:text-white`}
        style={{ paddingLeft: paddingValue, paddingRight: paddingValue }}
      >
        <div className="z-10 flex items-center gap-4">
          {btnText}
          <GoTriangleRight />
        </div>
      </button>
    </div>
  );
}

PageButton.propTypes = {
  btnText: PropTypes.string.isRequired,
  padding: PropTypes.number.isRequired,
};

export default PageButton;
