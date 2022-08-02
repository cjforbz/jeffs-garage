import prisma from '../../prisma/client';
import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { authOptions } from './auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    const vehicles = await prisma.vehicle.findMany({
      where: {
        ownerId: session.user.userId,
      },
    });
    res.status(200).json(vehicles);
  } else throw new Error('something went wrong');
};

export default handler;
