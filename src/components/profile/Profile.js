import React from 'react';
import DisplayMissionsLists from './missionsProfile/DisplayMissionsLists';
import DisplayRocketsLists from './rocketsProfile/DisplayRocketsLists';
import '../../styles/profile.css';

function Profile() {
  return (
    <div className="row my-5">
      <div className="col-md-6">
        <h1 className="mb-4"> My Missions </h1>
        <ul className="list-unstyled border border-secondary border-2 rounded shadow-sm">
          <DisplayMissionsLists />
        </ul>
      </div>
      <div className="col-md-6">
        <h1 className="mb-4"> My Rockets </h1>
        <ul className="list-unstyled border border-secondary border-2 rounded shadow-sm">
          <DisplayRocketsLists />
        </ul>
      </div>
    </div>
  );
}

export default Profile;
