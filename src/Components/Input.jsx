import React from "react";
import PropTypes from "prop-types";

export const Input = (props) => {
  Input.propTypes = {
    length: PropTypes.number.isRequired,
    handleNumber: PropTypes.func,
  };

  return (
    <input
      placeholder="Max 27 characters"
      type="number"
      value={props.length}
      onChange={(e) => props.handleNumber(e)}
    />
  );
};
