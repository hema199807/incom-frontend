const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
var router=require("./router");

require('dotenv').config()
var password=process.env.Atlas_Password;
var port=8080;
var app=express();


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


const dbUri=`mongodb+srv://root:${password}@cluster0.29oaz.mongodb.net/playersDb?retryWrites=true&w=majority`;
const options={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

app.use("/",router);


mongoose.connect(dbUri,options).then(() =>{
    app.listen(port,()=> console.log("server running"));
}).catch((err)=>{
    console.log(err);
})