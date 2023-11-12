import React from 'react';
import { styContainer, styLabel } from './styles';

interface ProfilePictProps {
  firstName: string;
}

const ProfilePict = (props: ProfilePictProps) => {
  return (
    <div className={styContainer}>
      <div className={styLabel} data-testid="profile-pict-container">
        <div data-testid="profile-pict">
          {props.firstName[0]?.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePict;
