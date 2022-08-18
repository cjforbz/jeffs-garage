import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import type { NextPage } from 'next';
import Link from 'next/link';
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
        const { data: allVehicles } = await axios.get('/api/vehicles');
        if (allVehicles) {
          setVehicles(allVehicles);
          setLoading(false);
        }
      }
    };
    getVehicles();
  }, [user]);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div>
      {vehicles.map((vehicle: VehicleObj, idx: number) => {
        return (
          <Link href={`/myVehicles/${vehicle.id}`} key={idx}>
            <ul>
              <li>{vehicle.make}</li>
              <li>{vehicle.model}</li>
              <li>{vehicle.year}</li>
              <li>{vehicle.mileage}</li>
            </ul>
          </Link>
        );
      })}
    </div>
  );
};

export default MyVehicles;
