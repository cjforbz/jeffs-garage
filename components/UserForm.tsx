import { useState, KeyboardEvent, ChangeEvent } from 'react';

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

  return (
    <div>
      <form>
        <input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <input
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          name="userName"
          placeholder="First Name"
          value={formData.userName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default UserForm;
