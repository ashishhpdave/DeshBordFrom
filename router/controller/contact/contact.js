const { contactModel } = require("../../../module.js")

async function ContactData(req,res) {
 const data = req.body
 
 try {
    const DataModel = await contactModel.find({},'f_name l_name email message date')

    // const DataModel = new contactModel({
    //     f_name : data.f_name,
    //     l_name : data.l_name,
    //     email : data.email,
    //     message : data.message,
    //     date : data.message
    // })
    // const isDataSave = await DataModel.save()

    if(!DataModel){
        throw new Error("Data Not find")
    }
    res.status(200).json({
        message: " Contact Data find Successfully",
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