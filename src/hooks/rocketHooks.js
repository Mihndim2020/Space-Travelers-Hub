import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRocketsAction } from '../redux/rockets/rockets';

const rocketHooks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRocketsAction());
  }, []);
};

export default rocketHooks;
