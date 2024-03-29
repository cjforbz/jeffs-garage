import { useState, ChangeEvent, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';

const VehicleForm = ({ action }: { action: string }) => {
  const { data: session, status } = useSession();
  const user = session?.user;

  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: 0,
    mileage: 0,
    ownerId: '',
  });
  const { make, model, year, mileage } = formData;

  useEffect(() => {
    if (user) {
      setFormData({ ...formData, ownerId: user.userId });
      if (action === 'edit') {
        setFormData({ ...formData });
      }
    }
  }, [user]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const val = e.target.value;
    setFormData({ ...formData, [name]: val });
    console.log(formData);
  };

  const handleSubmit = () => {
    const vehicleData = {
      ...formData,
      year: Number(formData.year),
      mileage: Number(formData.mileage),
    };
    if (action === 'create') {
      axios.post('/api/vehicles/createVehicle', vehicleData);
    } else if (action === 'edit') {
      axios.put('/api/vehicle/editVehicle', vehicleData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="make"
          placeholder="eg. Ford, Honda"
          value={make}
          onChange={handleChange}
          required={true}
        />

        <input
          name="model"
          placeholder="eg. F-150, Civic"
          value={model}
          onChange={handleChange}
          required={true}
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
          required={true}
        />

        <input
          name="mileage"
          type="number"
          min={0}
          step={1}
          placeholder="Mileage"
          value={mileage}
          onChange={handleChange}
          required={true}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VehicleForm;
