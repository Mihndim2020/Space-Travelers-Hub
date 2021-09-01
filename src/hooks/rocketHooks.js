import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsAction } from '../redux/rockets/rockets';

const rocketHooks = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRocketsAction());
    }
  }, []);
};

export default rocketHooks;
