import React from 'react';
import PropTypes from 'prop-types';
import {
  Alert, Button,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from './redux/mission/missions';

const SingleMission = (props) => {
  const {
    name, description, id, reserved,
  } = props;

  const dispatch = useDispatch();

  const joinHandle = () => {
    dispatch(joinMission(id));
  };

  const leaveHandle = () => {
    dispatch(leaveMission(id));
  };

  return (
    <tr className="">
      <td>{name}</td>
      <td className="w-50">{description}</td>

      {!reserved && (
        <>
          <td className="text-center align-middle">
            <Alert className="p-0 m-0 bg-extra-dark text-white" variant="dark">
              NOT A MEMBER
            </Alert>
          </td>
          <td className="text-center align-middle"><Button onClick={joinHandle} variant="outline-dark">Join Mission</Button></td>
        </>
      )}
      {reserved && (
        <>
          <td className="text-center align-middle">
            <Alert className="p-0 m-0 bg-dark-blue text-white" variant="info">
              Active Member
            </Alert>
          </td>
          <td className="text-center align-middle"><Button onClick={leaveHandle} variant="outline-danger">Leave Mission</Button></td>
        </>
      )}
    </tr>
  );
};

SingleMission.defaultProps = {
  reserved: false,
};

SingleMission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

export default SingleMission;
