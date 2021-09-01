import React from 'react';
import PropTypes from 'prop-types';

function RocketProfile({ name }) {
  return (
    <li className="text-dark p-3 border-bottom border-dark profileList fw-bold">
      {name}
    </li>
  );
}

RocketProfile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default RocketProfile;
