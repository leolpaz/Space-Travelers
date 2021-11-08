import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/mission/missions';

const Missions = () => {
  const missionList = useSelector(state => state.missionsReducer)
  const dispatch = useDispatch();
  useEffect(() => {
    if (missionList.length === 0){
      dispatch(fetchData())
      console.log('called')
    }
  }, [])
  console.log(missionList.length)
  return (
    <h1>Missions Page</h1>
  )
 }

export default Missions;
