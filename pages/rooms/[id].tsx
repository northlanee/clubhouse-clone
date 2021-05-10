import { FC } from 'react';
import { GetServerSideProps } from 'next';

import Axios from 'core/axios';

import { Header, BackButton, Room } from 'components';
import { ConversationCardProps } from 'types';

interface RoomPageProps {
  room: ConversationCardProps;
}

const RoomPage: FC<RoomPageProps> = ({ room }) => {
  const { title } = room;

  return (
    <>
      <Header />
      <div className="container mt-30">
        <BackButton title="All Rooms" href="/rooms" />
        <Room title={title} />
      </div>
    </>
  );
};
export default RoomPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { data } = await Axios.get('/rooms.json');
    const room = data.find((room: ConversationCardProps) => room.id === ctx.query.id);
    return {
      props: {
        room,
      },
    };
  } catch (err) {
    return {
      props: { room: {} },
    };
  }
};
