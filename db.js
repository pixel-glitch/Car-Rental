const mongoose = require("mongoose");

function connectDB(){

    try{
        mongoose.connect('mongodb+srv://tanvir:tanvir@cluster0.hy5ioh7.mongodb.net/car-rent' , {useUnifiedTopology: true,useNewUrlParser: true});
        console.log("MongoDB Connected");
    }
    catch(err){
        console.log(err);
    }
    // const connection = mongoose.connect

    // connection.on('connected', () => {
    //     console.log('Mongo DB connected ok')
    // })

    // connection.on('error', (err) => {
    //         console.log('Can not connect to MongoDB')
    // })
}

connectDB()
module.exports = mongoose
