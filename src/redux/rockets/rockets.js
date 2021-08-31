import getRockets from '../../services/rocketsApiResources';

const GET_ROCKETS = 'SpaceTravelerHub/rockets/GET_ROCKETS';

const getRocketsAction = () => async (dispatch) => {
  const rockets = await getRockets();

  dispatch({
    type: GET_ROCKETS,
    payload: rockets,
  });
};

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export { getRocketsAction, rocketsReducer };
