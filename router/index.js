const express = require('express')

const signup = require('./controller/signup')
const login = require('./controller/login')
const subscribeData = require ('./controller/subscribe/subscribe')
const router = express.Router()
router.get('/', (req, res) => {
    res.send('hello')
    
})


router.post('/signup', signup)
router.post('/login', login)
router.get('/subscribe',subscribeData)

module.exports = router