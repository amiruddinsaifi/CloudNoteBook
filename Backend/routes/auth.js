const express=require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    obj={
        name:"Aamir",
        age:25
    }
    res.json(obj);
});

module.exports=router