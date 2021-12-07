const mongoose=require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const employeeSchema = mongoose.Schema({
    empId : {type : Number ,unique : true},
    firstName : {type : String},
    lastName : {type : String},
    address : {type : String},
    dob : {type : Date},
    mobile : {type : String,unique : true},
    city : {type : String},
    createdAt:{type:Date , default : new Date()},
    updatedAt:{type:Date , default : new Date()},
})

employeeSchema.plugin(uniqueValidator,{ message: '{VALUE} already exists' })

module.exports = {
    employeeSchema: mongoose.model("employee", employeeSchema, "employee"),
  };
  