const mongoose = require('mongoose')
const url = 'mongodb+srv://sutharpankaj723:pankaj123123@pankaj.dlszltz.mongodb.net/furniture'

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