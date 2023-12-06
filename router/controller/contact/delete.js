const { dbmodel } = require("../../../module.js")

async function deleteData(req,res) {
try {
    const isdelete = await dbmodel.deleteOne({email : req.body.email,password:req.body.password})
    if(!isdelete.deletedCount){
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