import bcrypt from 'bcrypt';

export const register = async(req,res) => {
    // db operation 
    const {username,email,password} = req.body;
    console.log("register working")
   // HASH THE PASSWORD
   const hashedPassword = bcrypt.hash(password,10)
   console.log(hashedPassword);

// Create a new user and save to DB
const newUser
}
export const login = (req,res) => {
 // db operation

}
export const logout = (req,res) => {
     // db operation 
}
