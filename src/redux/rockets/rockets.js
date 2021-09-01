import getRockets from '../../services/rocketsApiResources';

const GET_ROCKETS = 'SpaceTravelerHub/rockets/GET_ROCKETS';
const RESERVE_ROCKET = 'SpaceTravelerHub/rockets/RESERVE_ROCKET';

const getRocketsAction = () => async (dispatch) => {
  const rockets = await getRockets();

  dispatch({
    type: GET_ROCKETS,
    payload: rockets,
  });
};

const reserveRocketAction = (id) => ({

  type: RESERVE_ROCKET,
  payload: id,
});

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...state, ...action.payload];
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id === action.payload) return { ...rocket, reserved: !rocket.reserved };
        return rocket;
      });

    default:
      return state;
  }
};

export { getRocketsAction, reserveRocketAction, rocketsReducer };
