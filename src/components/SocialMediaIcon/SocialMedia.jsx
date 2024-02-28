import PropTypes from "prop-types";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function SocialMedia({ hoverTextColor }) {
  return (
    <ul className="flex gap-2 justify-center text-1rem">
      <li
        className={`hover:text-${hoverTextColor} hover:bg-lightPurple cursor-pointer p-1 rounded transition duration-300`}
      >
        <FaFacebookF />
      </li>
      <li
        className={`hover:text-${hoverTextColor} hover:bg-lightPurple cursor-pointer p-1 rounded transition duration-300`}
      >
        <FaTwitter />
      </li>
      <li
        className={`hover:text-${hoverTextColor} hover:bg-lightPurple cursor-pointer p-1 rounded transition duration-300`}
      >
        <FaLinkedinIn />
      </li>
      <li
        className={`hover:text-${hoverTextColor} hover:bg-lightPurple cursor-pointer p-1 rounded transition duration-300`}
      >
        <FaInstagram />
      </li>
    </ul>
  );
}

SocialMedia.propTypes = {
  hoverTextColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
};

export default SocialMedia;
