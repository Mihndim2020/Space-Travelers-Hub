import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ id, name, description }) => (
  <tr id={id}>
    <td>{name}</td>
    <td>{description}</td>
    <td>
      <button type="button">
        NOT a MEMBER
      </button>
    </td>
    <td>
      <button type="button">
        JOIN MISSION
      </button>
    </td>
  </tr>
);

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
