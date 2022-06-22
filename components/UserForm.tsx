import { useState, KeyboardEvent, ChangeEvent } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name: string = e.target.name;
    const val: string = e.target.value;

    setFormData({ ...formData, [name]: val });
    console.log(formData);
  };

  const handleSubmit = async () => {
    await axios.post('/api/createUser', formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required={true}
        />

        <input
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required={true}
        />

        <input
          name="userName"
          placeholder="First Name"
          value={formData.userName}
          onChange={handleChange}
          required={true}
        />

        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
          required={true}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
