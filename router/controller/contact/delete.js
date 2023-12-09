const { contactModel } = require("../../../module.js")

async function deleteData(req,res) {
try {
    const isdelete = await contactModel.deleteOne({email : req.body.email})
    if(!isdelete){
        throw new Error("Data not Delete")
    }
    res.status(200).json({
        msg: "data Delete successful",
        status : true
    })   
} catch (error) {
    res.status(409).json({
        status : false,
        msg : error.message
    })
}
}
module.exports = deleteData