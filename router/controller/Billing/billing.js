const { BilingModel } = require("../../../module.js")

async function BillingData(req,res){
    const data = req.body
    try {
        const DataModel = await BilingModel.find({},'f_name l_name email message Country Company_Name Address Apartment State_Country Posta Email_Address Phone date')
       
        if(!DataModel){
            throw new Error("Data Not Found.....")
        }
        res.status(200).json({
            message : "Connect Data Succfully",
            status : true,
            Data : DataModel
        })
    } catch (error) {
        res.status(500).json({
            status : false,
            message : error.message
        })
    }
}

module.exports = BillingData