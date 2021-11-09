import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ProfileMissions = () => {
  const missionList = useSelector((state) => state.missionsReducer);

  return (
    <ListGroup>
      <ListGroupItem>
        test
      </ListGroupItem>
    </ListGroup>

  )
}

export default ProfileMissions