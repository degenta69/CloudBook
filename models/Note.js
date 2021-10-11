const mongoose = require('mongoose');
const { Schema } = mongoose;


const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
     type: String,
     required: true   
    },
    description:{
     type: String,
     required: true   
    },
    img:{
      type: String,
        
    },
    tag:{
     type: String,
     default: 'general',
    },
    Date:{
     type: Date,
     default: Date.now   
    },
    
});

module.exports= mongoose.model('notes', NotesSchema);