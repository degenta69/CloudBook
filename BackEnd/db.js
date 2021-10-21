const mongoose = require("mongoose");
const mongooURI = "mongodb://localhost:27017/cloudBook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo= ()=>{
    mongoose.connect(mongooURI, ()=>{
        console.log('connected to mongoDB');
    })
}

module.exports = connectToMongo;

