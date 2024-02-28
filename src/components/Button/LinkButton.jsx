import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../css/index.css";

function LinkButton({ linkText }) {
  return (
    <div>
      <Link
        to="#"
        id="get-link"
        className="text-red text-[1.25rem] font-[500] ml-2 cursor-pointer hover:tracking-wider"
      >
        {linkText}
      </Link>
    </div>
  );
}

LinkButton.propTypes = {
  linkText: PropTypes.string,
};

export default LinkButton;
