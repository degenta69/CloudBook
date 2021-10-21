const path = require("path")
const multer = require('multer')

var storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, 'uploads/')

    },
    filename: (req,file,cb)=>{
     let ext = path.extname(file.originalname)
     cb(null, Date.now() +'-CloudBook-'+ ext)   
    }
})

var upload = multer({
    storage: storage,
    fileFilter: (req, file, callback)=>{
        if(
            file.mimetype == "pfp/png" || file.mimetype == "pfp/jpg" || file.mimetype == "pfp/gif" || file.mimetype == "pfp/jpeg"
        ){
            callback(null, true)
        }else{
            console.log("invalid file format. only 'png ,jpg ,jpeg ,gif' supported")
            callback(null, false)
        }
    },
    limits:{
        fileSize: 1024 * 1024 * 3
    }
})

module.exports = upload;