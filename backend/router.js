const express=require("express");

const userDetailsController=require('./controller');

const router=express.Router();

router.post("/addUserDetails",userDetailsController.addUser);

module.exports=router;
