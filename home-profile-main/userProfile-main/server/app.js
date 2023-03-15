const express=require('express')
const app=express()
const port=4000;
const mongoose=require('mongoose')
const morgan=require('morgan')

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(morgan('dev'));
app.use(cors(corsOptions));

app.listen(port,()=>{
    console.log(`port running in http://localhost:${port}`);
})
app.use(express.json())


mongoose.connect("mongodb+srv://vijayaragavan:suryajabro@cluster0.tl9mitk.mongodb.net/?retryWrites=true&w=majority").
then(console.log("db connected")).catch((err)=>{console.log("err message",err);})

const info=require("./Routes/route")
app.use("/info",info)



    
