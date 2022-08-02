import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { NextPage } from 'next';
import axios from 'axios';

type VehicleObj = {
  id: number;
  make: string;
  model: string;
  year: number;
  mileage: number;
  ownerId: string;
};

const MyVehicles: NextPage = () => {
  const { data: session, status } = useSession();
  const user = session?.user;
  const [loading, setLoading] = useState(true);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const getVehicles = async () => {
      if (user) {
        const { data: allVehicles } = await axios.get('/api/allVehicles');
        if (allVehicles) {
          setVehicles(allVehicles);
          setLoading(false);
        }
      }
    };
    getVehicles();
  }, [user]);

  return loading ? (
    <div>loading</div>
  ) : (
    <div>
      {vehicles.map((vehicle: VehicleObj, idx: number) => {
        return (
          <ul key={idx}>
            <li>{vehicle.make}</li>
            <li>{vehicle.model}</li>
            <li>{vehicle.year}</li>
            <li>{vehicle.mileage}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default MyVehicles;

{
  /* <ul>
<li>{vehicle.make}</li>
<li>{vehicle.model}</li>
<li>{vehicle.year}</li>
<li>{vehicle.mileage}</li>
<ul />
   */
}
