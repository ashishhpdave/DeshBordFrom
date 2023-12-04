const { dbmodel } = require('../../module.js/index')

async function login(req, res) {
    try {
        const isExist = await dbmodel.findOne({ email: req.body.email, password: req.body.password })
        if (!isExist) {
            throw new Error("Data not Exist")
        }
        res.status(200).json({
            msg : "Login Successfully",
            status : true,
            data : isExist
        }) 
    } catch (err) {
        res.status(409).json({
            status: false,
            msg: err.message
        })
    }
}

module.exports = login 