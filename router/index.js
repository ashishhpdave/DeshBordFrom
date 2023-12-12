const express = require('express')

const signup = require('./controller/signup')
const login = require('./controller/login')
const subscribeData = require ('./controller/subscribe/subscribe')
const ContactData = require('./controller/contact/contact')
const deleteData = require('./controller/contact/delete')
const updateData = require('./controller/contact/update')
const BillingData = require('./controller/Billing/billing')
const BillingDataDelete = require('./controller/Billing/delete')

const router = express.Router()
router.get('/', (req, res) => {
    res.send('hello')
    
})

router.post('/signup', signup)
router.post('/login', login)
router.get('/subscribe',subscribeData)
router.get('/contact',ContactData)
router.get('/billing',BillingData)
router.get('/billingdeleteData',BillingDataDelete)
router.get('/delete',deleteData)
router.get('/update',updateData)


module.exports = router