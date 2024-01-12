const mongoose = require("mongoose")
const { options } = require("../routes/products")


const connectDB = (uri) =>{
    console.log("connect db")
    return mongoose.connect(uri , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;