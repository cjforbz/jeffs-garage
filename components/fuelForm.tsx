import { ChangeEvent, useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';

const FuelForm = ({ vehicleId, oldMileage }) => {
  const { data: session, status } = useSession();
  const user = session?.user;

  const [formData, setFormData] = useState({
    grade: '',
    gallons: '',
    newMileage: '',
    date: '',
    vehicleId: vehicleId,
  });
  const { grade, gallons, newMileage, date } = formData;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name,
      val = e.target.value;

    setFormData({ ...formData, [name]: val });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="grade">Fuel Grade</label>
        <select name="grade" value={grade} onChange={handleChange}>
          <option value="REGULAR">Regular</option>
          <option value="MID">Mid</option>
          <option value="PREMIUM">Premium</option>
        </select>

        <label htmlFor="gallons">Gallons</label>
        <input
          name="gallons"
          type="number"
          value={gallons}
          maxLength={3}
          onChange={handleChange}
          min=".1"
          max="99.9"
          step=".1"
          placeholder="Gallons"
        />

        <label htmlFor="mileage">Vehicle Mileage</label>
        <input
          name="mileage"
          type="number"
          value={newMileage}
          maxLength={6}
          min={oldMileage}
          max="999999"
          step="1"
          onChange={handleChange}
          placeHolder="Current Mileage"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
