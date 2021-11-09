import React from 'react';
import { Container } from 'react-bootstrap';
import ProfileMissions from './ProfileMissions';

const Profile = () => (
  <Container className="d-flex">
    <ProfileMissions />
    <ProfileMissions />
  </Container>
);

export default Profile;
