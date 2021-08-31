import getMissions from '../../services/missionsApiResources';

const GET_MISSIONS = 'SpaceTravelerHub/missions/GET_MISSIONS';

const getMissionsAction = () => async (dispatch) => {
  const missions = await getMissions();

  dispatch({
    type: GET_MISSIONS,
    payload: missions,
  });
};

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export { getMissionsAction, missionsReducer };
