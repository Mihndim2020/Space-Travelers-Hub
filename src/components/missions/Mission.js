import React from 'react';
import PropTypes from 'prop-types';
import { joinButtonAction } from '../../redux/missions/missions';
import Button from './Button';
import Badge from './Badge';

const Mission = ({
  id, name, description, joined,
}) => (
  <tr id={id} className="align-middle">
    <td className="fw-bold text-dark ">{name}</td>
    <td className="text-dark fs-6">{description}</td>
    <td>
      {!joined && (
        <Badge text="NOT A MEMBER" badge="badge bg-secondary p-2 fs-6" />
      )}
      {joined && (
        <Badge text="Active Member" badge="badge bg-success p-2 fs-6" />
      )}
    </td>
    <td className="text-center">
      {!joined && (
        <Button text="Join Mission" buttonClass="btn btn-outline-secondary" click={() => joinButtonAction(id)} id={id} />
      )}
      {joined && (
        <Button text="Leave Mission" buttonClass="btn btn-outline-danger" click={() => joinButtonAction(id)} id={id} />
      )}
    </td>
  </tr>
);

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
};

export default Mission;
