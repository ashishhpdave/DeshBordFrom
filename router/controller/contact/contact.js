const { contactModel } = require("../../../module.js")

async function ContactData(req,res) {
 const data = req.body
 
 try {
    const DataModel = await contactModel.find({},'f_name l_name email message date')

    if(!DataModel){
        throw new Error("Data Not find")
    }
    res.status(200).json({
        message: "Contact Data find Successfully",
        status : true,
        data : DataModel
    })
 } catch (error) {
    res.status(500).json({
        status : false,
        message: error.message
    })
 }
}

module.exports = ContactData