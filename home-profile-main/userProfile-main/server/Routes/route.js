const express=require('express')
const route=express.Router();
const schema=require("../models/infoSchema")
const bcrypt=require('bcryptjs')
const jwt=require("jsonwebtoken")

route.post("/",async(req,res)=>{
    console.log(req.body);        
        try{
            var userExists = await schema.findOne({email:req.body.email})
        if (userExists) return res.status(400).json({ error: "Email already exit" });
            var hash=await bcrypt.hash(req.body.pass,10)
            var data=new schema({
                fname:req.body.fname,
                lname:req.body.lname,
                email:req.body.email,
                pass:hash,
                cpass:req.body.cpass,
                mobile:req.body.mobile,
                dob:req.body.dob,
                gender:req.body.gender,
                list:req.body.list,
                addrs:req.body.addrs
                
            });
            await data.save();
            res.json(data);
        } 
        catch(err){
            res.status(400).json(err)
        }
})

route.get("/",async (req,res)=>{
    var findDate= await schema.find()
    res.json(findDate)
})
route.post("/login",async(req,res)=>{
    try{
        var userData = await schema.findOne({email:req.body.email})
        if (!userData) return res.status(400).json({ error: "Email not exit" });
    
    var validPass=await bcrypt.compare(req.body.pass,userData.pass)
    if(!validPass){
        return res.status(400).json("password is not valid")
    }
    var userToken= await jwt.sign({email:userData.email},'secret')
    res.header('auth',userToken).send({"status":200,"message":"login successfully",
    "access-token":userToken,"userId":userData._id});
    }
    catch(err){

    }
})
route.get("/userId/:id",async (req,res)=>{
    const id = req.params.id
    var findDate= await schema.find({_id:id})
    res.json(findDate);
    
})


module.exports=route