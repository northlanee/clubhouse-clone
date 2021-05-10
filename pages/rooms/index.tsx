import { FC } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

import Axios from 'core/axios';

import { Header, Button, ConversationCard } from 'components';
import { ConversationCardProps } from 'types';

interface RoomPageProps {
  rooms: ConversationCardProps[];
}

const RoomsPage: FC<RoomPageProps> = ({ rooms }) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="mt-30 d-flex align-items-center justify-content-between">
          <h1>All Conversations</h1>
          <Button color="green">+ Start room</Button>
        </div>
        <div className="grid mt-30 mb-30">
          {rooms.map((room) => (
            <Link href={`/rooms/${room.id}`} key={room.id}>
              <a>
                <ConversationCard
                  id={room.id}
                  title={room.title}
                  avatars={room.avatars}
                  guests={room.guests}
                  guestsCount={room.guestsCount}
                  speakersCount={room.speakersCount}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default RoomsPage;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await Axios.get('/rooms.json');
    return {
      props: {
        rooms: data,
      },
    };
  } catch (err) {
    return {
      props: { rooms: [] },
    };
  }
};
