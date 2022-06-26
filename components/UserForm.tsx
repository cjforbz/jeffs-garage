import { useState, KeyboardEvent, ChangeEvent } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
  });

  const [pWConfirm, setPWConfirm] = useState({
    confirmPassword: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name: string = e.target.name;
    const val: string = e.target.value;
    if (name === 'confirmPassword') setPWConfirm({ confirmPassword: val });
    else setFormData({ ...formData, [name]: val });
    console.log(formData, confirmPassword);
  };

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return null;
    }
    await axios.post('/api/createUser', formData);
  };

  const { firstName, lastName, userName, email, password } = formData;

  const { confirmPassword } = pWConfirm;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={handleChange}
        />

        <input
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={handleChange}
        />

        <input
          name="userName"
          placeholder="User Name"
          value={userName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=[A-Z]).{8,}"
          placeholder="Password"
          value={password}
          required
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          pattern="(?=.*\d)(?=.*[a-z])(?=[A-Z]).{8,}"
          placeholder="Confirm Password"
          value={confirmPassword}
          required
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
