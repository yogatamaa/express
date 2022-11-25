const User = require('../models/User')

module.exports = {
    // gett all user
    index : async (req, res) => { 
        try {
            const user = await User.find()
            if(user.length > 0 ){
                res.status(200).json({
                    status : true,
                    data : user,
                    method : req.method,
                    url : req.url
                })

            }else{
                res.json({
                    status : false,
                    message : "Data Masih Kosong"
                })
            }   
        } catch (error) {
            res.status(400).json({success: false})
        } 
    },
    show : async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            res.json({
                status : true,
                data : user,
                method : req.method,
                url : req.url,
                message : "Data Berhasil Didapat"
                
            })
        } catch (error) {
            res.status(400).json({success: false})
        }},
    //  get a user
    store : async (req, res) => {
        try {
            const user = await User.create(req.body)
            res.status(200).json({
                status : true,
                data : user,
                method : req.method,
                url : req.url,
                message : "Data Berhasil Ditambah"
                
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
        
        
      },
    //   put a user
      update : async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body,{
                new : true,
                runValidators : true
            });
            res.json({
                status : true,
                data : user,
                method : req.method,
                url : req.url,
                message : "Data Berhasil Diubah"
                
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
      },
      
      delete : async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.json({
                status : true,
                
                message : "Data Berhasil Dihapus"
                
            })

        } catch (error) {
            res.status(400).json({success: false})
        }
      }
}

