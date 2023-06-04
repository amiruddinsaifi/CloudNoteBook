const express =require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    notes={
        Name:"Geometry",
        subject:"math",
        nop:32
    }
    res.json(notes);
});

module.exports=router