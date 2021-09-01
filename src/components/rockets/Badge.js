import React from 'react';
import PropTypes from 'prop-types';

function Badge({ text }) {
  return (
    <button type="button">
      {text}
    </button>
  );
}

Badge.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Badge;
