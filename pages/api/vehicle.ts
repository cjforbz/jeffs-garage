import prisma from '../../prisma/client';
import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { make, model, year, mileage, ownerId } = req.body;
  const vehicle = await prisma.vehicle.create({
    data: {
      make: make,
      model: model,
      year: year,
      mileage: mileage,
      ownerId: ownerId,
    },
  });
  res.status(200).json(vehicle);
};

export default handler;
