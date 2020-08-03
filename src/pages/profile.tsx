import React, { ReactElement } from 'react';
import Layout from '../components/shared/Layout';
import { useProfilePageStyles } from '../styles';

function ProfilePage(): ReactElement {
  useProfilePageStyles();

  return <Layout title="Profile">ProfilePage</Layout>;
}

export default ProfilePage;
