import React from 'react';
import PropTypes from 'prop-types';
import { joinButtonAction } from '../../redux/missions/missions';
import Button from './Button';
import Badge from './Badge';

const Mission = ({
  id, name, description, joined,
}) => (
  <tr id={id}>
    <td>{name}</td>
    <td>{description}</td>
    <td>
      {!joined && (
        <Badge text="NOT A MEMBER" />
      )}
      ;
      {joined && (
        <Badge text="Active Member" />
      )}
      ;
    </td>
    <td>
      {!joined && (
        <Button text="Join Mission" click={() => joinButtonAction(id)} id={id} />
      )}
      ;
      {joined && (
        <Button text="Leave Mission" click={() => joinButtonAction(id)} id={id} />
      )}
      ;
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
