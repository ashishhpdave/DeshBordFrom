const { subscribeModel } = require("../../../module.js")


async function subscribeData(req, res) {
    const data = req.body

    try {
        const AllData = await subscribeModel.find({},'name email data')

        if (!AllData) {
            throw new Error("Data Not Find")
        }

        res.status(200).json({
            msg: "Data Find Successfully",
            status: true,
            data : AllData

        })

    } catch (error) {

        res.status(500).json({

            status: false,
            msg: error.message

        })


    }
}

module.exports = subscribeData