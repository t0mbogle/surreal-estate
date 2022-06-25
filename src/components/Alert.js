import React from "react";
import PropTypes from "prop-types";

const Alert = ({ message, success }) => {
  // conditional class naming based on true or false success
  return (
    <div className={`alert alert-${success ? "success" : "error"}`}>
      {message}
    </div>
  );
};

export default Alert;

Alert.defaultProps = {
  success: false,
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};
