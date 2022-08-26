import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';
import FuelForm from '../../components/fuelForm';

const SingleVehicle: NextPage = () => {
  const { data: session, status } = useSession();
  const user = session?.user;
  const [loading, setLoading] = useState(true);
  const [currentVehicle, setCurrentVehicle] = useState();
  const router = useRouter();
  const { vehicleId } = router.query;

  useEffect(() => {
    const getVehicle = async () => {
      const { data: vehicle } = await axios.get(`/api/vehicles/${vehicleId}`);
      if (vehicle) {
        setCurrentVehicle(vehicle);
        setLoading(false);
      }
    };
    if (vehicleId) {
      getVehicle();
    }
  }, [vehicleId, loading, user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        <li>{currentVehicle.make}</li>
        <li>{currentVehicle.model}</li>
        <li>{currentVehicle.year}</li>
        <li>{currentVehicle.mileage}</li>
      </ul>
      <FuelForm vehicleId={vehicleId} oldMileage={currentVehicle.mileage} />
    </div>
  );
};

export default SingleVehicle;
