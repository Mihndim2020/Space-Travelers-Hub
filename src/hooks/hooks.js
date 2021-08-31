import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMissionsAction } from '../redux/missions/missions';

const hooks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissionsAction());
  }, []);
};

export default hooks;
