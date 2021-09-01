import React from 'react';
import { useSelector } from 'react-redux';
import MissionProfile from './MissionProfile';

const DisplayMissionsLists = () => {
  const missions = useSelector((state) => state.missions);
  const missionsFiltered = missions.filter((mission) => mission.joined === true);

  if (missionsFiltered.length >= 1) {
    return (
      missionsFiltered.map((mission) => (
        mission.joined
        && <MissionProfile name={mission.name} key={mission.id} />
      ))
    );
  } return (
    <p className="text-center h4 text-secondary p-3 mt-3">No Missions has been listed yet.</p>
  );
};

export default DisplayMissionsLists;
