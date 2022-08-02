import { useState, ChangeEvent, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';

const VehicleForm = () => {
  const { data: session, status } = useSession();
  const user = session?.user;

  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    ownerId: '',
  });
  const { make, model, year, mileage } = formData;

  useEffect(() => {
    if (user) {
      setFormData({ ...formData, ownerId: user.userId });
    }
  }, [user]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const val = e.target.value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = async () => {
    console.log(formData);
    await axios.post('/api/vechicle', formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="make"
          placeholder="eg. Ford/Honda"
          value={make}
          onChange={handleChange}
        />

        <input
          name="model"
          placeholder="eg. F-150, Civic"
          value={model}
          onChange={handleChange}
        />

        <input
          name="year"
          type="number"
          min={1886}
          max={2100}
          step={1}
          placeholder="YYYY"
          value={year}
          onChange={handleChange}
        />

        <input
          name="mileage"
          type="number"
          min={0}
          step={1}
          placeholder="Mileage"
          value={mileage}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VehicleForm;
