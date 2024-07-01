import express from 'express';
import postRoute from './routes/post.route.js';
const app = express();

app.use("/api/posts",postRoute)

app.listen(8800,()=>{
    console.log("Server is running")
})

// 12:56
// https://youtu.be/eJ3YysWaP_A?t=776