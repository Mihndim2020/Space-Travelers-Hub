import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({
  id, name, description, imageURL,
}) => (
  <div className="rocket-info" id={id}>
    <p>{name}</p>
    <p>{description}</p>
    <img src={imageURL} alt="RocketImage" />
    <button type="button">Reserve Rocket</button>
  </div>
);

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
};

export default Rocket;
