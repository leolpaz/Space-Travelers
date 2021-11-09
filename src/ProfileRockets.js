import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

const RocketsProfileList = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  console.log(rockets);
  return (
    <ListGroup>
      <ListGroup.Item>dsads</ListGroup.Item>
    </ListGroup>
  );
};

export default RocketsProfileList;
