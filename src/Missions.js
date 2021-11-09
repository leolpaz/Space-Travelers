import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Table, Container,
} from 'react-bootstrap';
import { fetchData } from './redux/mission/missions';
import SingleMission from './Mission';

const Missions = () => {
  const missionList = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missionList.length === 0) {
      dispatch(fetchData());
    }
  }, []);
  return (
    <Container>
      <Table className="mx-auto" striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="">
          {missionList.map((mission) => (
            <SingleMission
              key={mission.missionId}
              name={mission.missionName}
              description={mission.description}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Missions;
