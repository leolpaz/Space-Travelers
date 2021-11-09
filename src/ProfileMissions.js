import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SingleProfileMission from './ProfileMission';

const ProfileMissions = () => {
  const missionList = useSelector((state) => state.missionsReducer);
  const reservedMissions = missionList.filter((mission) => mission.reserved === true);

  return (
    <Container>
      <ListGroup>
        <h1>My missions</h1>
        {reservedMissions.map((mission) => (
          <SingleProfileMission
            key={mission.missionId}
            name={mission.missionName}
          />
        ))}
      </ListGroup>
    </Container>
  );
};

export default ProfileMissions;
