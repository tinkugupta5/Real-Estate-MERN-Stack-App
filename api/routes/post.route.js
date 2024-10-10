import express from "express";
// import router from './routes/post.route.js'

const router = express.Router()

router.get("/test-get-data",(req,res)=>{   
    console.log("Response Router Works");
})

router.delete("/test-delete-data",(req,res)=>{
    console.log("Response Router Works");
})

export default router;