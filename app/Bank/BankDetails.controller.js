
const Service = require('../Bank/service');
exports.getData = async (req, res) => {
   try {
      console.log("hrre")
      let bankDetails = await Service.getData();
      if (bankDetails) {
         res.status(202).send({
            bankDetails
         });
      }
      }catch (error) {
         console.log("error...",error)
      }
   };
