import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
     // db operation 
     const { username, email, password } = req.body;
     console.log("register working")
     // Hash the password
     const hashedPassword = bcrypt.hash(password, 10)
     console.log("hashpassword", hashedPassword);

     // Create a new user and save to DB
     const newUser = await prisma.user.create({
          data: {
               username,
               email,
               password: hashedPassword,
          }
     })
     console.log(newUser);
}
export const login = (req, res) => {
     // db operation
}
export const logout = (req, res) => {
     // db operation 
}

// https://youtu.be/eJ3YysWaP_A?t=1944