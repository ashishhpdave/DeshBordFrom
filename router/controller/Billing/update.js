const { BilingModel } = require("../../../module.js");

async function BillingUpdateData(req,res){
    try {
        const isUpdate = await BilingModel.updateOne({email:req.body.email},{f_name:req.body.f_name,l_name:req.body.l_name,email:req.body.email,message:req.body.message,Country:req.body.Country,Company_Name:req.body.Company_Name,Address:req.body.Address,Apartment:req.body.Apartment,State_Country:req.body.State_Country,Posta:req.body.Posta,Email_Address:req.body.Email_Address,Phone:req.body.Phone})
        if(!isUpdate){
            throw new Error("Data was not updated.....")
        }
        res.status(200).json({
             msg : "Data successfully Updated....",
             status : true
        })
    } catch (error) {
        res.status(409).json({
            status : false,
            message : error.message
        })
    }
}

module.exports = BillingUpdateData

