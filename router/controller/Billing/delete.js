const { BilingModel } = require("../../../module.js");

async function BillingDataDelete(req,res){
    try {
        const isdelete = await BilingModel.deleteOne({f_name: req.body.f_name, email : req.body.email})
        if(!isdelete){
            throw new Error("Data Not Deleted....")
        }
        res.status(200).json({
            msg : "Data Was Deleted Succfully...",
            status : true
        })
    } catch (error) {
        res.status(409).json({
            status : false,
            msg : error.msg
        })
    }
}

module.exports = BillingDataDelete