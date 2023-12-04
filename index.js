const express = require('express')
const router = require('./router')
const cors = require('cors')
const app = express()
const port = 3849

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(router)

app.listen(port, function () {
    console.log(`http://localhost:${port}`)
})