const mongoose = require('mongoose')
const url = 'mongodb://0.0.0.0:27017/deshbordFrom'

function connectDB() {
    try {

        mongoose.connect(url)
        console.log("DataBase Conncet")

    } catch (error) {
        console.log(error)
    }

} connectDB()

const schema = new mongoose.Schema({

    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: String
})

const dbmodel = new mongoose.model('user', schema)

module.exports = { dbmodel }