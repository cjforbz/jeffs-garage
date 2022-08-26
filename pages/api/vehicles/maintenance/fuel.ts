import prisma from '../../../../prisma/client';
import type { Fuel } from '@prisma/client';
import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { grade, gallons, currentMileage, date, vehicleId } = req.body;

  const newFueling: Fuel = await prisma.fuel.create({
    data: {
      grade: grade,
      gallons: gallons,
      date: date,
      vehicleId: vehicleId,
    },
  });

  await prisma.vehicle.update({
    where: {
      id: vehicleId,
    },
    data: {
      mileage: currentMileage,
    },
  });

  res.status(200).send(newFueling);
};

export default handler;
