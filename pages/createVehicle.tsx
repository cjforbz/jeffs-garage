import VehicleForm from '../components/vehicleForm';
import type { NextPage } from 'next';

const CreateVehicle: NextPage = () => {
  return <VehicleForm action="create" />;
};

export default CreateVehicle;
