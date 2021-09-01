import React from 'react';
import PropTypes from 'prop-types';

function Badge({ text }) {
  return (
    <span className="badge bg-success p-2 me-2 fs-6 fw-normal">
      {text}
    </span>
  );
}

Badge.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Badge;
