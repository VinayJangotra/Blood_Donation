const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    require: [true, "role is required"],
    enum: ["admin", "organization", "user", "hospital"],
  },
  name:{
   type:String,
   required: function(){
    if(this.role==='user' || this.role === 'admin'){
        return true;
    }
    return false;
   }
  },
  organisationName:{
    type:String,
    required: function(){
     if(this.role==='organization' || this.role === 'hospital'){
         return true;
     }
     return false;
    }
  },
 hospitalName:{
    type:String,
    required: function(){
     if(this.role==='hospital'){
         return true;
     }
     return false;
    }
 },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    trim: true,
    maxLength: [100, "Your email cannot exceed 100 characters"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [6, "Your password must be longer than 6 characters"],
  },
  website: {
    type: String,
    unique: true,
    trim: true,
    maxLength: [100, "Your website cannot exceed 100 characters"],
  },

  address: {
    type: String,
    required: [true, "Please enter your address"],
    unique: true,
    trim: true,
    maxLength: [100, "Your address cannot exceed 100 characters"],
  },
  phone: {
    type: String,
    required: [true, "Please enter your phone"],
    unique: true,
    trim: true,
    minLength: [10, "Your phone cannot be less than the 10 characters"],
    maxLength: [100, "Your phone cannot exceed 100 characters"],
  },
},{timestamps:true});

module.exports = mongoose.model('users', userSchema);