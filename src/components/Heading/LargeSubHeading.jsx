import PropTypes from "prop-types";

function LargeSubHeading({ title, color }) {
  return (
    <div>
      <h2
        className={`capitalize xs:text-[32px] sm:text-[48px] text-${color} font-[700] leading-[56px]`}
        style={{ color: color }}
      >
        {title}
      </h2>
    </div>
  );
}

LargeSubHeading.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
};

export default LargeSubHeading;
