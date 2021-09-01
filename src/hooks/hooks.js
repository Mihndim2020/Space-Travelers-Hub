import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionsAction } from '../redux/missions/missions';

const hooks = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (!missions.length) {
      dispatch(getMissionsAction());
    }
  }, []);
};

export default hooks;
