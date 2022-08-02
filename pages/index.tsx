import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import UserForm from '../components/UserForm';

const Home: NextPage = () => {
  const { data: session } = useSession();
  console.log(session);

  return <div>Hello</div>;
};

export default Home;
