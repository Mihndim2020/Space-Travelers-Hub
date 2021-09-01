import getMissions from '../../services/missionsApiResources';

const GET_MISSIONS = 'SpaceTravelerHub/missions/GET_MISSIONS';
const JOIN_BUTTON = 'SpaceTravelerHub/missions/JOIN_BUTTON';

const getMissionsAction = () => async (dispatch) => {
  const missions = await getMissions();

  dispatch({
    type: GET_MISSIONS,
    payload: missions,
  });
};

const joinButtonAction = (id) => ({
  type: JOIN_BUTTON,
  payload: id,
});

const missionsReducer = (state = [], act) => {
  switch (act.type) {
    case GET_MISSIONS:
      return [...state, ...act.payload];
    case JOIN_BUTTON:
      return state.map((mission) => {
        if (mission.id === act.payload) return { ...mission, joined: !mission.joined };
        return mission;
      });
    default:
      return state;
  }
};

export { getMissionsAction, joinButtonAction, missionsReducer };
