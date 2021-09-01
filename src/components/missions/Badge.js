import React from 'react';
import PropTypes from 'prop-types';

function Badge({ text, badge }) {
  return (
    <span className={badge}>
      {text}
    </span>
  );
}

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired,
};

export default Badge;
