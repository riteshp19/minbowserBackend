const mongoose=require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const managerSchema = mongoose.Schema({
    firstName : {type : String,required : true},
    lastName : {type : String,required : true},
    email : {type : String, unique : true, required : true},
    address : {type : String,required : true},
    company : {type : String,required : true},
    dob : {type : Date,required : true},
    password : {type : String,required : true},
    createdAt:{type:Date , default : new Date()},
    updatedAt:{type:Date , default : new Date()},
})

managerSchema.plugin(uniqueValidator,{ message: '{VALUE} already exists' })

module.exports = {
    managerSchema: mongoose.model("manager", managerSchema, "manager"),
  };
  