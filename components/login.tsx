import type { NextPage } from 'next';
import { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { getCsrfToken } from 'next-auth/react';
import { signIn } from 'next-auth/react';

const Login: NextPage = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    csrfToken: csrfToken,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name: string = e.target.name;
    const val: string = e.target.value;
    setLoginData({ ...loginData, [name]: val });
  };

  const handleLogin = async () => {
    await signIn('credentials', {
      email: loginData.email,
      password: loginData.password,
    });
  };

  const { email, password } = loginData;

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={email}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

export default Login;
