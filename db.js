const mongoose = require("mongoose");

function connectDB(){

    try{
        mongoose.connect('mongodb+srv://tanvir:tanvir@user.8hirx51.mongodb.net/car-rent' , {useUnifiedTopology: true,useNewUrlParser: true});
        console.log("MongoDB Connected");
    }
    catch(err){
        console.log(err);
    }
    // const connection = mongoose.connect

    // connection.on('connected', () => {  mongodb+srv://tanvir:tanvir@cluster0.hy5ioh7.mongodb.net/car-rent
    //     console.log('Mongo DB connected ok')
    // }) mongodb+srv://tanvir:<password>@user.8hirx51.mongodb.net/test

    // connection.on('error', (err) => {
    //         console.log('Can not connect to MongoDB')
    // })
}

connectDB()
module.exports = mongoose
