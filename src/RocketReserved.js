import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

const RocketReserved = (props) => {
  const { name } = props;
  return <ListGroup.Item>{name}</ListGroup.Item>;
};

RocketReserved.propTypes = {
  name: PropTypes.string.isRequired,
};

export default RocketReserved;
