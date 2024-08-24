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
export const login = async(req, res) => {

     const {username,password} = req.body;
     
     try {

     // check if the user exists
     const user = await prisma.user.findUnique({
          where:{username}
     })

     if(!user) return res.status(401).json({
          message:"Invalid Credentials!"
     })

     // check if the password is correct
     const isPasswordValid = await bcrypt.compare(password,user.password);

     if(!isPasswordValid) return res.status(401).json({
          message:"Invalid Credentials"
     });


     // genrate cookie token and send to the user

     // res.setHeader("Set-Cookie","test=" + "myValue").json("success")
     const age = 1000 * 60 * 60 * 24 * 7
     res.cookie("test2","myValue2",{
          httpOnly:true,
          // secure:true
          maxAge:age,
     }).status(200).json({message:"Login Successfully"})       
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


// https://youtu.be/eJ3YysWaP_A?t=2816