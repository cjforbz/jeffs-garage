import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: session } = useSession();
  console.log(session);

  return <div>Hello</div>;
};

export default Home;
