const User = require("../models/userRegisterModel");
const userRegisterGet = (req,res)=>{
    res.send("Register get")
}
const userRegisterPost = (req,res)=>{
    const user = new User({
        name : req.body.name
    })
    user.save().then(result =>{
        res.json(result);
    })
    .catch(err=>{
        res.send(`err : ${err}`);
    })
}

module.exports={
    userRegisterGet:userRegisterGet,
    userRegisterPost:userRegisterPost,
}