import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ListGroup, Button } from 'react-bootstrap';
import { reserveRocket, rocketCancelation } from './redux/rockets/rockets';
import './Rocket.css';

const Rocket = (props) => {
  const {
    id, rocketName, description, flickrImages, reserved,
  } = props;

  const dispatch = useDispatch();

  const reserveNewRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  const cancelRocketReserv = (id) => {
    dispatch(rocketCancelation(id));
  };

  return (
    <ListGroup.Item className="rocket-item-container">
      <div className="img-container">
        <img src={flickrImages} alt="Rocket" />
      </div>
      <div className="data-container">
        <h3>{rocketName}</h3>
        <span>
          {reserved && (
            <span className="p-1 m-0 bg-dark-blue text-white rounded-2">
              Reserved
            </span>
          )}
          {' '}
          {description}
        </span>
        {reserved ? (
          <Button
            className="reserve-btn"
            variant="outline-secondary"
            onClick={() => cancelRocketReserv(id)}
          >
            Cancel Reservation
          </Button>
        ) : (
          <Button
            className="reserve-btn"
            variant="primary"
            onClick={() => reserveNewRocket(id)}
          >
            Reserve Rocket
          </Button>
        )}
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
