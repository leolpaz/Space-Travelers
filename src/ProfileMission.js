import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

const SingleProfileMission = (props) => {
  const { name } = props;
  return (
    <ListGroupItem>
      {name}
    </ListGroupItem>
  );
};

SingleProfileMission.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SingleProfileMission;
