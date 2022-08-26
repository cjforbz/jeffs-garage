import { ChangeEvent, useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';

const FuelForm = ({ vehicleId, oldMileage }) => {
  const { data: session, status } = useSession();
  const user = session?.user;

  const [formData, setFormData] = useState({
    grade: '',
    gallons: '',
    currentMileage: oldMileage,
    date: '',
    vehicleId: vehicleId,
  });
  const { grade, gallons, currentMileage, date } = formData;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const name = e.target.name,
      val = e.target.value;

    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = async () => {
    console.log('clicked');
    const fuelData = {
      ...formData,
      date: Date.now(),
    };
    const newFueling = await axios.post(
      '/api/vehicles/maintenance/fuel',
      fuelData
    );
    console.log(newFueling);
  };

  return (
    <div>
      <form id="fuelForm" onSubmit={handleSubmit}>
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
          name="currentMileage"
          type="number"
          value={currentMileage}
          maxLength={6}
          min={oldMileage}
          max="999999"
          step="1"
          onChange={handleChange}
          placeholder="Current Mileage"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FuelForm;
