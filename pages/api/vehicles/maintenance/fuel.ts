import prisma from '../../../../prisma/client';
import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { grade, gallons, currentMileage, date, vehicleId } = req.body;

  const newFueling = await prisma.fuel.create({
    data: {
      grade: grade,
      gallons: parseFloat(gallons),
      date: date,
      vehicleId: parseInt(vehicleId),
      mileage: parseInt(currentMileage),
    },
  });

  await prisma.vehicle.update({
    where: {
      id: parseInt(vehicleId),
    },
    data: {
      mileage: parseInt(currentMileage),
    },
  });

  res.status(200).send(newFueling);
};

export default handler;
