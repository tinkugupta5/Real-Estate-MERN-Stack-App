import express from "express";
// import router from './routes/post.route.js'

const router = express.Router()

router.get("/test",(req,res)=>{
    console.log("Response Router Works")
})

router.delete("/test",(req,res)=>{
    console.log("Response Router Works")
})

export default router;