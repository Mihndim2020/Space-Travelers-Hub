import React from 'react';
import { useSelector } from 'react-redux';
import RocketProfile from './RocketProfile';

const DisplayRocketsLists = () => {
  const rockets = useSelector((state) => state.rockets);
  const rocketsFiltered = rockets.filter((rockets) => rockets.reserved === true);

  if (rocketsFiltered.length >= 1) {
    return (
      rocketsFiltered.map((rocket) => (
        rocket.reserved
        && <RocketProfile name={rocket.name} key={rocket.id} />
      ))
    );
  } return (
    <p className="text-center h4 text-secondary p-3 mt-3">No Rockets have been reserved yet.</p>
  );
};

export default DisplayRocketsLists;
