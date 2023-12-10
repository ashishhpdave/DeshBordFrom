const { dbmodel } = require('../../module.js/index')
const jwt = require('jsonwebtoken')
const PRIVATEKEY = process.env.PRIVATEKEY

async function login(req, res) {
    const data = req.body
    try {
        const token = jwt.sign({ email: data.email }, PRIVATEKEY)
        const isExist = await dbmodel.updateOne({ email: req.body.email, password: req.body.password }, { token })
        // console.log(isExist)
        if (!isExist.modifiedCount) {
            throw new Error("Data not Exist")
        }
        res.status(200).json({
            message: "Login Successfully",
            status: true,
            token
        })
    } catch (error) {
        res.status(409).json({
            status: false,
            message: error.message
        })
    }
}
module.exports = login 