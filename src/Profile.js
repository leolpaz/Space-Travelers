import React from 'react';
import { Container } from 'react-bootstrap';
import RocketsProfileList from './ProfileRockets';
import ProfileMissions from './ProfileMissions';

const Profile = () => (
  <Container className="d-flex">
    <ProfileMissions />
    <RocketsProfileList />
  </Container>
);

export default Profile;
