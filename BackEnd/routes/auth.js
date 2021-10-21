const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET='@st$Fj*%je$8IJNR$57i$%iK$<YT^$$&I$O^%#2#@*%z06538528';
const fetchuser = require('../middleware/fetchUser');
const upload = require('../middleware/upload');

let success = false;

//Route:1 create a user using POST "/api/auth/createuser". no login required
router.post('/createuser',upload.single('pfp'),[
    body('name', 'enter a valid name').isLength({ min: 3 }),
    body('email', 'enter a valid Email').isEmail(),
    body('password', 'password must be atleast 5 characters long').isLength({ min: 5 }),
    body('pfp', 'you must select a file').isEmpty(),
] , async(req, res)=>{
 // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    success= false
    if (!errors.isEmpty()) {
     
     return res.status(400).json({success,success , errors: errors.array() });
    }
   // check weather the user with this email already exist
    try {
        
    let user = await User.findOne({email: req.body.email})
    success=false;
    if(user){
       
     return res.status(400).json({ success, error:'sorry this email is already in use'})
    }
    success=false;
    if(req.file===null){return res.status(400).json({ success, error:'pfp not uploaded'})}
    //secure password
    const salt= await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password, salt);
    // create a new user
    let pfp = `http://localhost:5000/uploads/${req.file.filename}`
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
        pfp: pfp
    })
    //generate a user auth token
    const data={
        user : {
            id: user.id
        }
    }
    const authToken = jwt.sign(data, JWT_SECRET);
    //res.json(user)
    success=true
    res.json({success,authToken})
    } catch (error) {
            console.error(error.message);
            res.status(500).send("sorry some error occured");
    
    }
})

//route:2 Authenticate user using POST
router.post('/login',[
    body('email', 'enter a valid Email').isEmail(),
    body('password', 'password cannot be empty').exists()
],
async(req,res)=>{
    const errors = validationResult(req);
    success=false;
    if (!errors.isEmpty()) {
     
     return res.status(400).json({success , errors: errors.array() });
    }
    const {email, password}= req.body;
    try {
        let user = await User.findOne({ email: req.body.email});
        success= false;
        if(!user){
           
     return res.status(400).json({success , error:'please try to login with the correct credentials'})
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        success=false;
        if(!passwordCompare){
           
     return res.status(400).json({success , error:'please try to login with the correct credentials'})
        }
        const data={
            user : {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        //res.json(user)
        success=true
        res.json({success,authToken})
    } catch (error) { 
        console.error(error.message);
        res.status(500).send("internal server error");
    }
})

//Route: 3 get loggedinUser details using: POST . login required
router.post('/getuser', fetchuser, async(req,res)=>{

    try {
        let userId= req.user.id;
        const user= await User.findById(userId).select("-password")
        success= true
        res.send({success,user});

    } catch (error) {
        success=false;
        console.error(error.message);
        res.status(500).send({success,message:"internal server error"});
    }
})

//route: 4 get all users
router.get('/getallusers',async(req,res)=>{

    try {
        const user = await User.find({});
        
        success= true
        res.json({success,user});
        // const user= await User.findById(userId).select("-password")
    } catch (error) {  
        success=false;
        console.error(error.message);
        res.status(500).send({success,message:"internal server error"});
    }
})
module.exports= router;