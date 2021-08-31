import React from 'react';
import { useSelector } from 'react-redux';
import rocketHooks from '../../hooks/rocketHooks';
import Rocket from './Rocket';

function Rockets() {
  const rocketComponent = [];
  const rockets = useSelector((state) => state.rockets);

  rocketHooks();

  rockets.map((rocket) => rocketComponent.push(
    <Rocket
      key={rocket.id}
      id={rocket.id}
      name={rocket.name}
      description={rocket.description}
      imageURL={rocket.imageURL}
    />,
  ));

  return (
    <div>
      { rocketComponent }
    </div>
  );
}

export default Rockets;
