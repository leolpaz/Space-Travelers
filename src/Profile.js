import React from 'react';
import { Container } from 'react-bootstrap';
import RocketsProfileList from './ProfileRockets';

const Profile = () => (
  <Container className="d-flex">
    {/* Mission Container */}
    <RocketsProfileList />
  </Container>
);

export default Profile;
