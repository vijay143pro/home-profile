const express=require('express')
const app=express()
const port=4000
app.listen(port,()=>{
    console.log(`port running in http://localhost:${port}`);
})
const router =require('./Routes/route')
app.use('./info',router)