const { dbmodel } = require('../../module.js/index')
const jwt = require('jsonwebtoken')
const prifvatekay = "jasbkfghaihkaifasdbBHDBfjaglidsfjaksjd"

async function login(req, res) {
    const data = req.body
    try {
        const token = jwt.sign({ email: data.email }, prifvatekay)
        const isExist = await dbmodel.updateOne({ email: req.body.email, password: req.body.password }, { token })

        if (!isExist.modifiedCount) {
            throw new Error("Data not Exist")
        }
        res.status(200).json({
            msg: "Login Successfully",
            status: true,
            data: isExist
        })
    } catch (err) {
        res.status(409).json({
            status: false,
            msg: err.message
        })
    }
}
module.exports = login 