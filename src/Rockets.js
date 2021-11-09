import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, ListGroup } from 'react-bootstrap';
import Rocket from './Rocket';
import { fetchRockets } from './redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length > 0) {
      dispatch(fetchRockets());
    }
  }, []);
  return (
    <Container>
      <ListGroup data-testid="list-container">
        {rockets.map((element) => (
          <Rocket
            key={element.id}
            id={element.id}
            rocketName={element.rocketName}
            description={element.description}
            flickrImages={element.flickrImages[0]}
            reserved={element.reserved}
          />
        ))}
      </ListGroup>
    </Container>
  );
};

export default Rockets;
