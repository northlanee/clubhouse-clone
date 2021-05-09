import { FC } from 'react';
import { useRouter } from 'next/router';

import { Profile, Header } from 'components';

const User: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return (
    <>
      <Header />
      <div className="container mt-30">
        <Profile
          fullName="Name Surname"
          userName="nickname"
          avatarUrl="https://sun2-3.userapi.com/s/v1/if1/CAR1Aao3yIica7xq77xIIMMTn29CME-cE5JSJBc8OTNVt29JQjnhR0ZsX_9IO-AzgwVbfgB6.jpg?size=200x0&quality=96&crop=138,44,1048,1048&ava=1"
          description="Info about user"
        />
      </div>
    </>
  );
};

export default User;
