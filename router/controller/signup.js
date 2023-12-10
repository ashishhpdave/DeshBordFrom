const { dbmodel } = require("../../module.js")
const jwt = require('jsonwebtoken')
const PRIVATEKEY = process.env.PRIVATEKEY

async function signup(req, res) {
    const data = req.body
    const token = jwt.sign({ email: data.email }, PRIVATEKEY)

    try {
        const dataModel = new dbmodel({
            fname: data.fname,
            lname: data.lname,
            email: data.email,
            password: data.password,
            token: token
        })

        const isVase = await dataModel.save()
        if (!isVase) {
            throw new Error("something was worng")
        }
        res.status(200).json({
            message: "wellcome",
            data: token
        })
    }
    catch (error) {
        if (error.message) {
            res.status(500).json({
                message: "user Already exists"
            })
            console.log(error)
        }
        else {
            res.status(501).json({
                message: error.message
            })
        }

    }
}
module.exports = signup