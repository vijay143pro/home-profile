const mangoose=require('mongoose');
const verifyScheme=mangoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true
    },
    pass:{
        type:String,
        required:true,
        trim:true
    }
})
module.exports=mangoose.model("login",verifyScheme)





