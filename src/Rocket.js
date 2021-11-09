import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Button } from 'react-bootstrap';
import './Rocket.css';

const Rocket = (props) => {
  const {
    id, rocketName, description, flickrImages,
  } = props;
  return (
    <ListGroup.Item>
      <div className="img-container">
        <img src={flickrImages} alt="Rocket" />
      </div>
      <div className="data-container">
        <h3>{rocketName}</h3>
        <span>{description}</span>
        <Button variant="primary" id={id}>Reserve Rocket</Button>
      </div>
    </ListGroup.Item>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};

export default Rocket;
