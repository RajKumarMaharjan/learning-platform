import PropTypes from "prop-types";

function SubHeading({ title, color }) {
  return (
    <div
      className={`capitalize text-${color} text-[1.25rem] font-[700]`}
      style={{ color: color }}
    >
      <h2>{title}</h2>
    </div>
  );
}

SubHeading.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default SubHeading;
