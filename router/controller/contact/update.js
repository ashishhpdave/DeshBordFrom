const { contactModel } = require("../../../module.js");

async function updateData(req,res){
    try {
        const isUpdate = await contactModel.updateOne({email : req.body.email},{f_name:req.body.f_name,l_name:req.body.l_name,email:req.body.email,message:req.body.message})
        if(!isUpdate){
            throw new Error("Data not Update...!!")
        }
        res.status(200).json({
            msg : "Data Successfully Updated..",
            status : true
        })
    } catch (error) {
        res.status(409).json({
            status : false,
            msg : error.message
        })
    }
}

module.exports = updateData