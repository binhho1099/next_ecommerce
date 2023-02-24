import Image from 'next/image';
import React from 'react';
import { useAppSelector } from 'store/hooks';

function ProfileUser() {
  const user = useAppSelector(state => state.app.user);

  return (
    <div className="profile">
      <div className="profile-avatar">
        <div className="profile-image">
          <Image
            src={user.photoURL}
            alt="avatar"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <h2 className="profile-name">{user.displayName || ''}</h2>
      </div>
      <div className="profile-info">
        <h3 className="profile-email">{user.email || ''}</h3>
      </div>
    </div>
  );
}

export default ProfileUser;
