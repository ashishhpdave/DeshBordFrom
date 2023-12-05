const express = require('express')

const signup = require('./controller/signup')
const login = require('./controller/login')
const router = express.Router()
router.get('/', (req, res) => {
    res.send('hello')

})
router.post('/signup', signup)
router.post('/login', login)

module.exports = router