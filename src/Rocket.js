import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Button } from 'react-bootstrap';
import './Rocket.css';

const Rocket = (props) => {
  const {
    rocketName, description, flickrImages,
  } = props;
  return (
    <ListGroup.Item>
      <div className="img-container">
        <img src={flickrImages} alt="Rocket" />
      </div>
      <div className="data-container">
        <h3>{rocketName}</h3>
        <span>{description}</span>
        <Button variant="primary">Reserve Rocket</Button>
      </div>
    </ListGroup.Item>
  );
};

Rocket.propTypes = {
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};

export default Rocket;
