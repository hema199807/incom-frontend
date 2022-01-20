const mongoose=require("mongoose");

const userDetailsSchema=new mongoose.Schema({
    UserName:String,
    Salary:Number,
    Tax:Number
},{strict:false})

const UserDetailsForTax=mongoose.model("userDetailsForTax",userDetailsSchema);

module.exports={UserDetailsForTax}
