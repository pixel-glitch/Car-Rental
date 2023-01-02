import { default as mongoose } from "mongoose";

function connectDB(){
    mongoose.connect('mongodb+srv://tanvir:tanvir@user.8hirx51.mongodb.net/car-rent', {useUnifiedTopology: true,useNewUrlParser: true});

    const connection = mongoose.connect

    connection.on('connected', () => {
        console.log('MongoDB connected ok')
    })

    connection.on('error', (err) => {
            console.log('Can not connect to MongoDB')
    })
}

connectDB()
module.exports = mongoose