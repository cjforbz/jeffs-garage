import { useSession } from 'next-auth/react';
import type { NextPage } from 'next';
const Home: NextPage = () => {
  const { data: session } = useSession();
  console.log(session);

  return <div>Hello</div>;
};

export default Home;
