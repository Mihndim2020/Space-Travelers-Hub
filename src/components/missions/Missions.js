import React from 'react';
import { useSelector } from 'react-redux';
import hooks from '../../hooks/hooks';
import Mission from './Mission';

function Missions() {
  const missions = useSelector((state) => state.missions);

  hooks();

  return (
    <table className="table table-bordered table-striped table-responsive border-secondary my-5">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th style={{ opacity: 0 }}>SomeLoremLpsumHere.</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <Mission
            key={mission.id}
            id={mission.id}
            name={mission.name}
            description={mission.description}
            joined={mission.joined}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Missions;
