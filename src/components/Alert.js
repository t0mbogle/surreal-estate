import React from "react";
import PropTypes from "prop-types";

const Alert = ({ message, success }) => {
  if (!message) return null; // Conditional rendering to only show message if truthy

  return (
    // conditional class naming based on success result (.alert-success/.alert-error)
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
