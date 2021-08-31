import React from 'react';
import { useSelector } from 'react-redux';
import hooks from '../../hooks/hooks';
import Mission from './Mission';

function Missions() {
  const missions = useSelector((state) => state.missions);

  hooks();

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <Mission
            key={mission.id}
            id={mission.id}
            name={mission.name}
            description={mission.description}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Missions;
