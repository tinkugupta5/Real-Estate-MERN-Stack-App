import jwt from 'jsonwebtoken'

export const shouldBeLoggedIn = async (req, res) => {
    const token = req.cookies.token

    if (!token) return res.status(401).json({
        message: 'not Authenticated'
    })

    jwt.verify(token,process.env.JWT_SECRET_KEY,async (err,payload)=>{
        if(err) return res.status(401).json({message:"Not Authenticated!"})
    })

}
export const shouldBeAdmin = async (req, res) => {

}