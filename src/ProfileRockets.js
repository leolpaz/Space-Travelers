import React from 'react';
import { useSelector } from 'react-redux';
import { Container, ListGroup } from 'react-bootstrap';
import RocketReserved from './RocketReserved';

const RocketsProfileList = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const rocketsReserved = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <Container>
      <ListGroup>
        <h2>My Rockets</h2>
        {rocketsReserved.map((rocket) => (
          <RocketReserved key={rocket.id} name={rocket.rocketName} />
        ))}
      </ListGroup>
    </Container>
  );
};

export default RocketsProfileList;
