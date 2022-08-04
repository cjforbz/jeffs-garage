import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';

const SingleVehicle: NextPage = () => {
  const { data: session, status } = useSession();
  const user = session?.user;
  const [vehicle, setVehicle] = useState({});
  const router = useRouter();
  const { vehicleId } = router.query;

  return <div>Vehicle Id : {vehicleId}</div>;
};

export default SingleVehicle;
