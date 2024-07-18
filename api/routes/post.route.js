import express from "express";
import router from './routes/post.route.js'

const router = express.Router()

router.get("/test",(req,res)=>{
    console.log("Response router works")
})
router.delete("/test",(req,res)=>{
    console.log("Response router works")
})

export default router;