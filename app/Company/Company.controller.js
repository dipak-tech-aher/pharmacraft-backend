
const Service = require('../Company/service');

exports.getCompany = async (req, res) => {
   try {
      let companyDetails = await Service.getCompany();
      if (companyDetails) {
         res.status(202).send({
            companyDetails
         });
      }
   } catch (error) {
      console.log("error...", error)
   }
};
