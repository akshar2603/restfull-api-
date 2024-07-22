// here model folder specifys name of the collection inside your data base and data basses are created in db folder

const mongoose  = require('mongoose');
const validator = require('validator') ;

const studentschema = new mongoose.Schema(
    {
        name : {
            type : String ,
            require : true, 
            minlength: 3
        },
        email : {
            type : String, 
            require: true,
            unique: [true , "Email is already present "],
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("invalid mail") ;
                }
            }
        }, 
        phone:{
            type:Number,
            min:10,
            require:true,
            unique:true
        },
        address :{
            type : String,
            require: true
        }
    }
)

 // we will create a new connection 
 const student = new mongoose.model('Student', studentschema) ;
 // stundet represents document for specific collection name in our case its Student
 module.exports = student ; 