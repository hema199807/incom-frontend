const {UserDetailsForTax}=require("./model");


exports.addUser=async (req,res,next)=>{
    let calTax;
    if(Number(req.body.Salary)<=250000){
        calTax=0
    }
    if(Number(req.body.Salary)>250000 && Number(req.body.Salary)<=500000 ){
        calTax=((250000 * 5)/100)
    }
    if(Number(req.body.Salary)>500000 && Number(req.body.Salary)<=750000 ){
        calTax=((250000 * 15)/100)
    }
    if(Number(req.body.Salary)>750000 && Number(req.body.Salary)<=1000000 ){
        calTax=((250000 * 30)/100)
    }
    if(Number(req.body.Salary)>1000000 && Number(req.body.Salary)<=1250000 ){
        calTax=((250000 * 50)/100)
    }
    if(Number(req.body.Salary)>1250000 && Number(req.body.Salary)<=1500000 ){
        calTax=((250000 * 75)/100)
    }if(Number(req.body.Salary)>1500000){
        calTax=((250000 * 75)/105)
    }
    new UserDetailsForTax({
        UserName:req.body.UserName,
        Salary:req.body.Salary,
        Tax:calTax
    }).save().then(result=>{
        res.status(200).json({userList:result})
    }).catch((err)=>{
        console.log(err);
    })
}







