const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://tiya:post24@cluster0.qh8z9se.mongodb.net/TrainerManagementSystem',{
   useNewUrlParser:true,
  useUnifiedTopology:true
});
//mongoose.connect("mongodb://localhost:27017/librarycase")
const Schema=mongoose.Schema;
const UserSchema= new Schema({
    
    password:String,
    email:String,
    userCategory:String
});
var Userdata=mongoose.model("userdata",UserSchema);
module.exports=Userdata;