const Admin = require('../models/user.model');
const Service = require('../user/service');
exports.getUsers = async (req, res) => {
   try {
      console.log("hrre")
      let admindata = await Service.getUsers();
      if (admindata) {
         res.status(202).send({
            admindata
         });
      }
      }catch (error) {
         console.log("error...",error)
      }
   };