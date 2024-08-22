import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
     
          // db operation 
          const { username, email, password } = req.body;
          try {
          console.log("register working")
          // Hash the password
          const hashedPassword = await bcrypt.hash(password, 10);
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
          res.status(201).json({
               message: "User created successfully"
          })

     } catch (error) {
          console.log(error);

          res.status(500).json({
               message:'Failed to created user!'
          })

     }
}
export const login = (req, res) => {

     const {username,password} = req.body;
     
     try {

     // check if the user exists

     // check if the password is correct

     // genrate cookie token and send to the user

          
     } catch (error) {

          console.log(error)
          res.status(500).json({
               message:"Failed to login"

          })
          
     }

     
}
export const logout = (req, res) => {
     // db operation 
}



// https://youtu.be/eJ3YysWaP_A?t=1944