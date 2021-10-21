const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchUser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

router.get('/fetchallnotes', fetchuser,async (req, res)=>{
    try {
        const notes= await Note.find({user: req.user.id});  
         
        res.json({notes});
    } catch (error) {
        console.error(error.message);
        ;
        res.status(500).send("sorry some error occured");
    }
}) 

router.post('/addnote', fetchuser,[
    body('title', 'enter a valid title').isLength({ min: 3 }),
    body('description', 'description must be atleast 5 characters long').isLength({ min: 5 }),
],async (req, res)=>{
    try {
    const {title, description,img,tag}= req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
         ;
      return res.status(400).json({ errors: errors.array() });
    }
    
        const note= new Note({
            title, description,img,tag, user: req.user.id,
        })
        const savedNote = await note.save();
         
        res.json({savedNote});
    } catch (error) {
        console.error(error.message);
         ;
        ;
        res.status(500).send({   message:"sorry some error occured"});
    } 
}) 

router.put('/updatenote/:id',fetchuser, async (req, res)=>{
    const {title, description,img,tag}= req.body;

    try {
        
    let newNote = {};
    if(title){newNote.title=title};
    if(description){newNote.description=description};
    if(img){newNote.img=img};
    if(tag){newNote.tag=tag};

    let note = await Note.findById(req.params.id);
    ;
    if(!note){return res.status(404).send({   message:'not found'})}

    if(note.user.toString() !== req.user.id){return res.status(401).send({   message:'unautharized'})}
    note = await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
      
    res.json({note});
    } catch (error) {
        console.error(error.message);
        ;
        res.status(500).send("sorry some error occured");
    }

})

router.delete('/deletenote/:id',fetchuser, async (req,res)=>{
    try {
        
    let note = await Note.findById(req.params.id);
     ;
    if(!note){return res.status(404).send({   message:'not found'})}

    if(note.user.toString() !== req.user.id){return res.status(401).send({   message:'unautharized'})}
    note = await Note.findByIdAndDelete(req.params.id)
      
    res.json({   note:note});
   } catch (error) {
    console.error(error.message);
    ;
        res.status(500).send("sorry some error occured");
}
})

module.exports= router;