import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';

const SingleVehicle: NextPage = () => {
  const { data: session, status } = useSession();
  const user = session?.user;
  const [currentVehicle, setCurrentVehicle] = useState({});
  const router = useRouter();
  const vehicleId = parseInt(router.query?.vehicleId);

  useEffect(() => {
    console.log(router.query);
    const getVehicle = async () => {
      const vehicle = await axios.get(`/api/vehicles/${vehicleId}`);
      if (vehicle) {
        setCurrentVehicle(vehicle);
      }
    };
    getVehicle();
    console.log(currentVehicle);
  });

  return <div>Vehicle Id : {'vehicleId'}</div>;
};

export default SingleVehicle;
