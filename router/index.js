const express = require('express')

const signup = require('./controller/signup')
const login = require('./controller/login')
const subscribeData = require ('./controller/subscribe/subscribe')
const ContactData = require('./controller/contact/contact')
const deleteData = require('./controller/contact/delete')

const router = express.Router()
router.get('/', (req, res) => {
    res.send('hello')
    
})


router.post('/signup', signup)
router.post('/login', login)
router.get('/subscribe',subscribeData)
router.get('/contact',ContactData)
router.post('/delete',deleteData)

module.exports = router