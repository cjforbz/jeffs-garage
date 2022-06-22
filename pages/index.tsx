import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import UserForm from '../components/UserForm';

const Home: NextPage = () => {
  return (
    <div>
      <UserForm />
    </div>
  );
};

export default Home;
