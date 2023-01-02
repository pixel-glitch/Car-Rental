const mongoose = require("mongoose");

function connectDB(){
    mongoose.connect('mongodb+srv://me:me@cluster0.hy5ioh7.mongodb.net/project-0' , {useUnifiedTopology: true,useNewUrlParser: true});

    const connection = mongoose.connect

    connection.on('connected', () => {
        console.log('Mongo DB connected ok')
    })

    connection.on('error', (err) => {
            console.log('Can not connect to MongoDB')
    })
}

connectDB()
module.exports = mongoose