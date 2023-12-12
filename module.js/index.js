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
// Subscribe
const SubscribeSchema = new mongoose.Schema({



    name: {
      type: String,
      required: true
    },
  
    email: {
      type: String,
      required: true,
      unique: true
    },
  
    date: {
      type: Date,
      default: Date.now()
    }
  })
  
// ContactAPI
const ContactSchema = new mongoose.Schema({

    f_name: {
      type: String,
      required: true
    },
  
    l_name: {
      type: String,
      required: true
    },
  
    email: {
      type: String,
      required: true,
      unique: true
    },
    message: {
      type: String,
      required: true
    },
  
    date: {
      type: Date,
      default: Date.now()
    }
  })

// Billing API

const BilingSchema = new mongoose.Schema({

  f_name: {
    type: String,
    required: true
  },

  l_name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },
  message: {
    type: String,
    required: true
  },
  Country: {
    type: String,
    required: true
  },
  Company_Name: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  Apartment: {
    type: String,
    required: true
  },
  State_Country: {
    type: String,
    required: true
  },

  Posta: {
    type: String,
    required: true
  },
  Email_Address: {
    type: String,
    required: true
  },
  Phone: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

const contactModel = new mongoose.model('contactsub',ContactSchema)
const subscribeModel = new mongoose.model('subscribe',SubscribeSchema)
const BilingModel  = new mongoose.model('biling',BilingSchema)

const dbmodel = new mongoose.model('adminAuth', schema)


module.exports = { dbmodel,subscribeModel,contactModel,BilingModel}