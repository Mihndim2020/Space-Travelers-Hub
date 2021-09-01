import React from 'react';
import PropTypes from 'prop-types';
import { reserveRocketAction } from '../../redux/rockets/rockets';
import Button from './Button';
import Badge from './Badge';

const Rocket = ({
  id, name, description, imageURL, reserved,
}) => (
  <div className="row mb-5">
    <div className="col-md-12">
      <div className="d-flex align-items-start">
        <div>
          <img src={imageURL} alt="RocketImage" width="250" height="250" />
        </div>
        <div className="ms-3">
          <h4 className="text-dark">{name}</h4>
          <p className="text-secondary text-start text-wrap">
            {reserved && (
              <Badge text="Reserved" />
            )}
            {description}
          </p>
          {!reserved && (
            <Button text="Reserve Rocket" click={() => reserveRocketAction(id)} id={id} buttonClass="btn btn-primary" />
          )}
          {reserved && (
            <Button text="Cancel Rerservation" click={() => reserveRocketAction(id)} id={id} buttonClass="btn btn-outline-secondary" />
          )}
        </div>
      </div>
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
