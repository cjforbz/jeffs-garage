import prisma from '../../lib/prisma';
import bcrypt from 'bcrypt';

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user: any = await prisma.user.findUnique({
      where: {
        email: `${email}`,
      },
    });
    if (!user) throw new Error('No account was found with that email address');
    const validPass = await bcrypt.compare(password, user.password);
    console.log(validPass);
  } catch (error) {
    console.error(error);
  }
};

export default login;
