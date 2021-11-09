import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ListGroup, Button } from 'react-bootstrap';
import { reserveRocket } from './redux/rockets/rockets';
import './Rocket.css';

const Rocket = (props) => {
  const {
    id, rocketName, description, flickrImages, reserved,
  } = props;

  const dispatch = useDispatch();

  const reserveNewRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  const itsReserved = () => {
    if (reserved) {
      return <Button variant="secondary">Reserved</Button>;
    }
    return <Button variant="primary" onClick={() => reserveNewRocket(id)}>Reserve Rocket</Button>;
  };

  useEffect(() => {
    itsReserved();
  });

  return (
    <ListGroup.Item>
      <div className="img-container">
        <img src={flickrImages} alt="Rocket" />
      </div>
      <div className="data-container">
        <h3>{rocketName}</h3>
        <span>{description}</span>
        {itsReserved()}
      </div>
    </ListGroup.Item>
  );
};

Rocket.defaultProps = {
  reserved: false,
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

export default Rocket;
