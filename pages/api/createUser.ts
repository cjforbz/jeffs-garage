import prisma from '../../lib/prisma';
import bcrypt from 'bcrypt';

const createUser = async (req, res) => {
  const data = req.body;
  data.password = await bcrypt.hash(data.password, 10);
  console.log(data);
  try {
    const result = await prisma.user.create({
      data: {
        ...data,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(403).json({ err: 'Error occurred while creating a new user' });
  }
};

export default createUser;
