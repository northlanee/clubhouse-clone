import { FC } from 'react';
import clsx from 'clsx';

import { Avatar, Button, BackButton } from 'components';

import styles from './Profile.module.scss';

interface ProfileProps {
  fullName: string;
  userName: string;
  avatarUrl: string;
  description: string;
}

export const Profile: FC<ProfileProps> = ({ fullName, userName, avatarUrl, description }) => {
  return (
    <>
      <BackButton title="Back" href="/rooms" />

      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <Avatar src={avatarUrl} width="100px" height="100px" />
          <div className="d-flex flex-column ml-30 mr-30">
            <h2 className="mt-0 mb-0">{fullName}</h2>
            <h3 className={clsx('mt-0 mb-0', styles.username)}>@{userName}</h3>
          </div>
        </div>
        <Button color="blue" className={styles.followButton}>
          Follow
        </Button>
      </div>
      <p className={styles.about}>{description}</p>
    </>
  );
};
