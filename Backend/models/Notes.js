const mongoose=require("mongoose")

const NotesSchema= new schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:"General"
    },
    date:{
        type:Date,
        Default:Date.now
    }

});
module.exports=mongoose.model('notes',NotesSchema);