import prisma from '../../../prisma/client';
import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  switch (req.method) {
    case 'POST':
      const { make, model, year, mileage, ownerId } = req.body;
      const newVehicle = await prisma.vehicle.create({
        data: {
          make: make,
          model: model,
          year: year,
          mileage: mileage,
          ownerId: ownerId,
        },
      });
      res.status(200).json(newVehicle);
      break;
    default:
      const { vehicleId } = req.query;
      const singleVehicle = await prisma.vehicle.findUnique({
        where: {
          id: parseInt(vehicleId, 10),
        },
      });
      res.status(200).json(singleVehicle);
  }
};

export default handler;
