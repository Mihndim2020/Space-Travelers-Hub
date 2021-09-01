import React from 'react';
import PropTypes from 'prop-types';
import { reserveRocketAction } from '../../redux/rockets/rockets';
import Button from './Button';
import Badge from './Badge';

const Rocket = ({
  id, name, description, imageURL, reserved,
}) => (

  <div className="rocket-info" id={id}>
    <p>{name}</p>
    <p>{description}</p>
    <img src={imageURL} alt="RocketImage" />
    <div>
      {reserved && (
      <Badge text="RESERVED" />
      )}
    </div>
    <div>
      {!reserved && (
        <Button text="RESERVE" click={() => reserveRocketAction(id)} id={id} />
      )}
      {reserved && (
        <Button text="CANCEL RESERVATION" click={() => reserveRocketAction(id)} id={id} />
      )}
    </div>
  </div>

);

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
