import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

const getMissions = async () => {
  const response = await axios.get(url);
  const { data } = response;
  const missions = [];
  data.map((mission) => missions.push(
    {
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      joined: false,
    },
  ));
  return missions;
};

export default getMissions;
