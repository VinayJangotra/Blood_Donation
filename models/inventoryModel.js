const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    inventoryType:{
        type: String,
        required: [true, 'inventory type require'],
        enum:['in','out']
    },
    bloodGroup:{
        type: String,
        required: [true, 'blood group require'],
        enum:['A+','A-','B+','B-','AB+','AB-','O+','O-']
    },
    
    quantity:{
        type: Number,
        required: [true, 'quantity require'],
    },
    organisation:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'organisation require'],
    },
    hospital:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: function(){
            if(this.inventoryType === 'out'){
                return true;
            }
            return false;
        }
    },
    donar:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: function(){
            if(this.inventoryType === 'in'){
                return true;
            }
            return false;
        }
    }, 
},{timestamps:true});

module.exports = mongoose.model('inventory', inventorySchema);