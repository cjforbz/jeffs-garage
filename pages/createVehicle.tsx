import VehicleForm from '../components/VehicleForm';
import type { NextPage } from 'next';

const CreateVehicle: NextPage = () => {
  return <VehicleForm action="create" />;
};

export default CreateVehicle;
